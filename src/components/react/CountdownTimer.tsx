import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  eventName: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate, eventName }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>
        Countdown to {eventName}
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        {blocks.map((block) => (
          <div
            key={block.label}
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
              minWidth: "90px",
              textAlign: "center",
            }}
          >
            <div style={{
              fontSize: "2.25rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #FFB81C, #FFF0A0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>
              {String(block.value).padStart(2, "0")}
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
