"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/motion/observers";

const motes = [
  { top: "12%", left: "8%", size: 14, opacity: 0.22, delay: 0 },
  { top: "20%", left: "26%", size: 18, opacity: 0.18, delay: 120 },
  { top: "16%", left: "74%", size: 12, opacity: 0.2, delay: 220 },
  { top: "34%", left: "14%", size: 16, opacity: 0.2, delay: 300 },
  { top: "42%", left: "82%", size: 10, opacity: 0.22, delay: 420 },
  { top: "58%", left: "10%", size: 20, opacity: 0.18, delay: 520 },
  { top: "68%", left: "40%", size: 14, opacity: 0.2, delay: 620 },
  { top: "74%", left: "76%", size: 18, opacity: 0.18, delay: 760 },
  { top: "84%", left: "22%", size: 12, opacity: 0.2, delay: 880 },
];

export default function InteractiveBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const focus = focusRef.current;
    if (!root || !focus || prefersReducedMotion()) return;

    const cores = Array.from(root.querySelectorAll<HTMLElement>("[data-backdrop-core]"));
    const ribbons = Array.from(root.querySelectorAll<HTMLElement>("[data-backdrop-ribbon]"));
    const moteTargets = Array.from(root.querySelectorAll<HTMLElement>("[data-backdrop-mote]"));

    const coreAnimations = cores.map((core, index) =>
      animate(core, {
        translateY: [0, index % 2 === 0 ? -18 : 16, 0],
        translateX: [0, index % 2 === 0 ? 14 : -12, 0],
        scale: [0.96, 1.04, 0.96],
        duration: 5200 + index * 600,
        ease: "inOutSine",
        loop: true,
      }),
    );

    const ribbonAnimations = ribbons.map((ribbon, index) =>
      animate(ribbon, {
        translateX: [0, index % 2 === 0 ? 28 : -24, 0],
        translateY: [0, index === 1 ? -14 : 16, 0],
        rotate: [0, index % 2 === 0 ? 4 : -5, 0],
        duration: 9000 + index * 1200,
        ease: "inOutSine",
        loop: true,
      }),
    );

    const moteAnimations = moteTargets.map((mote, index) =>
      animate(mote, {
        translateY: [0, index % 2 === 0 ? -12 : 10, 0],
        translateX: [0, index % 3 === 0 ? 8 : -6, 0],
        scale: [0.94, 1.08, 0.94],
        duration: 3600,
        delay: motes[index]?.delay ?? 0,
        ease: "inOutSine",
        loop: true,
      }),
    );

    const handleMove = (event: PointerEvent) => {
      animate(focus, {
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
        duration: 720,
        ease: "out(3)",
      });
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      coreAnimations.forEach((animation) => animation.pause());
      ribbonAnimations.forEach((animation) => animation.pause());
      moteAnimations.forEach((animation) => animation.pause());
    };
  }, []);

  return (
    <div ref={rootRef} className="ambient-backdrop" aria-hidden>
      <span data-backdrop-core className="ambient-backdrop__core ambient-backdrop__core--one" />
      <span data-backdrop-core className="ambient-backdrop__core ambient-backdrop__core--two" />
      <span ref={focusRef} className="ambient-backdrop__focus" />

      <div className="ambient-backdrop__ribbons">
        <span data-backdrop-ribbon className="ambient-backdrop__ribbon ambient-backdrop__ribbon--one" />
        <span data-backdrop-ribbon className="ambient-backdrop__ribbon ambient-backdrop__ribbon--two" />
        <span data-backdrop-ribbon className="ambient-backdrop__ribbon ambient-backdrop__ribbon--three" />
      </div>

      <div className="ambient-backdrop__motes">
        {motes.map((mote, index) => (
          <span
            key={`${mote.left}-${mote.top}-${index}`}
            data-backdrop-mote
            className="ambient-backdrop__mote"
            style={{
              top: mote.top,
              left: mote.left,
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              opacity: mote.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}
