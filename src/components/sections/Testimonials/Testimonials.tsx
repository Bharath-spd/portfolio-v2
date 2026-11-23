import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { GlassCard } from "../../ui/GlassCard/GlassCard";
import { testimonials } from "../../../data/misc";
import styles from "./Testimonials.module.scss";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = testimonials[index];

  function go(next: number) {
    setDirection(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex(next);
  }

  function handlePrev() {
    go(index === 0 ? testimonials.length - 1 : index - 1);
  }

  function handleNext() {
    go(index === testimonials.length - 1 ? 0 : index + 1);
  }

  return (
    <section id="testimonials" className={styles.section}>
      <SectionHeading eyebrow="Kind words" title="What people" highlight="say" />

      <div className={styles.carousel}>
        <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous testimonial">
          <ChevronLeft size={20} />
        </button>

        <div className={styles.viewport}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard glow className={styles.card}>
                <Quote className={styles.quoteIcon} size={28} />
                <div className={styles.stars}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className={styles.quote}>{current.quote}</p>
                <div className={styles.author}>
                  <img src={current.avatar} alt={current.name} loading="lazy" />
                  <div>
                    <span className={styles.name}>{current.name}</span>
                    <span className={styles.role}>
                      {current.role}, {current.company}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <button className={styles.navBtn} onClick={handleNext} aria-label="Next testimonial">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            className={i === index ? styles.dotActive : styles.dot}
            onClick={() => go(i)}
            aria-label={`Show testimonial from ${t.name}`}
          />
        ))}
      </div>
    </section>
  );
}
