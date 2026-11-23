import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../../icons/SocialIcons";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import { Button } from "../../ui/Button/Button";
import { profile } from "../../../data/profile";
import styles from "./Contact.module.scss";

const github = profile.socials.find((s) => s.label === "GitHub")?.href ?? "#";
const linkedin = profile.socials.find((s) => s.label === "LinkedIn")?.href ?? "#";
const whatsappUrl = profile.whatsappUrl;

// Messages are delivered by FormSubmit (no backend needed). The first submission
// triggers an activation email to this address — click the link in it once.
const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message can't be empty";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || sending) return;
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false" || data.success === false) throw new Error("send failed");
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <SectionHeading
        eyebrow="Contact"
        title="Let's build"
        highlight="something"
        description="Have a project in mind, or just want to say hi? My inbox is always open."
      />

      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard glow>
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
              </div>

              <Button type="submit" icon={<Send size={16} />} disabled={sending}>
                {sending ? "Sending..." : sent ? "Message sent!" : "Send message"}
              </Button>
              {failed && (
                <span className={styles.error} role="alert">
                  Couldn't send your message. Please try again or email me directly.
                </span>
              )}
            </form>
          </GlassCard>
        </motion.div>

        <motion.div
          className={styles.side}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className={styles.sideCard}>
            <span className={styles.sideIcon}><Mail size={18} /></span>
            <div>
              <p className={styles.sideLabel}>Email</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </GlassCard>

          <GlassCard className={styles.sideCard}>
            <span className={styles.sideIcon}><WhatsappIcon size={18} /></span>
            <div>
              <p className={styles.sideLabel}>WhatsApp</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{profile.phone}</a>
            </div>
          </GlassCard>

          <div className={styles.socialRow}>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsappIcon size={18} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
