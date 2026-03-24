import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Milestone {
  year: number;
  title: string;
  description: string;
}

interface TimelineProps {
  milestones: Milestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

  return (
    <div ref={containerRef} style={{ overflow: "hidden", padding: "2rem 0" }}>
      <motion.div
        style={{
          x,
          display: "flex",
          gap: "2rem",
          paddingLeft: "2rem",
          paddingRight: "4rem",
        }}
      >
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              minWidth: "300px",
              maxWidth: "300px",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "2rem",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                background: "linear-gradient(135deg, #FFB81C, #FFF0A0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
                marginBottom: "1rem",
              }}
            >
              {m.year}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "0.75rem",
              }}
            >
              {m.title}
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.6,
              }}
            >
              {m.description}
            </p>
            {/* Teal accent dot */}
            <div
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#1A8B8D",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
