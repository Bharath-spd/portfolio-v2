import { motion } from "framer-motion";
import { Code2, Layers, PenTool, Plug, Sparkles } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import { services } from "../../../data/misc";
import styles from "./Services.module.scss";

const iconMap = { Code2, Layers, PenTool, Plug, Sparkles };

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <SectionHeading eyebrow="Services" title="How I can" highlight="help" />

      <div className={styles.grid}>
        {services.map((service, i) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <GlassCard glow className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
