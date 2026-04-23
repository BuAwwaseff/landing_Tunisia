"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  createDraggable,
  createSeededRandom,
  createTimeline,
  remove,
  stagger,
  type Draggable,
  type JSAnimation,
} from "animejs";
import { prefersReducedMotion } from "@/motion/observers";

const motes = Array.from({ length: 16 }, (_, index) => {
  const random = createSeededRandom(1987 + index, 0, 100, 2);

  return {
    top: random(),
    left: random(),
    size: random(10, 28, 0),
    delay: index * 90,
    opacity: random(22, 68, 0) / 100,
  };
});

export default function InteractiveBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLSpanElement>(null);
  const dragOneRef = useRef<HTMLSpanElement>(null);
  const dragTwoRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const focus = focusRef.current;
    const dragOne = dragOneRef.current;
    const dragTwo = dragTwoRef.current;
    if (!root || !focus) return;

    const reducedMotion = prefersReducedMotion();
    const ribbons = Array.from(root.querySelectorAll<HTMLElement>("[data-backdrop-ribbon]"));
    const moteTargets = Array.from(root.querySelectorAll<HTMLElement>("[data-backdrop-mote]"));

    let pointerAnimation: JSAnimation | null = null;
    let motesAnimation: JSAnimation | null = null;
    let ribbonsAnimation: ReturnType<typeof createTimeline> | null = null;
    let dragOneInstance: Draggable | null = null;
    let dragTwoInstance: Draggable | null = null;

    if (!reducedMotion) {
      ribbonsAnimation = createTimeline({
        autoplay: true,
        loop: true,
        alternate: true,
        defaults: {
          duration: 12000,
          ease: "inOutSine",
        },
      })
        .add(
          ribbons,
          {
            x: (_target: unknown, index: number) => (index % 2 === 0 ? 42 : -36),
            y: (_target: unknown, index: number) => (index === 1 ? -28 : 22),
            rotate: (_target: unknown, index: number) => (index % 2 === 0 ? 7 : -9),
            delay: stagger(320),
          },
          0,
        )
        .add(
          moteTargets,
          {
            y: (_target: unknown, index: number) => (index % 3 === 0 ? -20 : 14),
            x: (_target: unknown, index: number) => (index % 2 === 0 ? 8 : -10),
            scale: [0.94, 1.08],
            opacity: (_target: unknown, index: number) => [motes[index]?.opacity ?? 0.3, 0.9],
            delay: stagger(90, { from: "center" }),
            duration: 3400,
            ease: "inOutSine",
          },
          0,
        );

      motesAnimation = animate(".ambient-backdrop__core", {
        scale: [0.98, 1.04],
        opacity: [0.32, 0.54],
        duration: 4400,
        ease: "inOutSine",
        loop: true,
        alternate: true,
      });

      const createBounds = () => [24, 24, window.innerWidth - 24, window.innerHeight - 24] as [number, number, number, number];

      if (dragOne) {
        dragOneInstance = createDraggable(dragOne, {
          container: createBounds,
          releaseMass: 1.4,
          releaseStiffness: 70,
          releaseDamping: 12,
        });
      }

      if (dragTwo) {
        dragTwoInstance = createDraggable(dragTwo, {
          container: createBounds,
          releaseMass: 1.3,
          releaseStiffness: 76,
          releaseDamping: 12,
        });
      }
    }

    const handleMove = (event: PointerEvent) => {
      if (reducedMotion) return;

      const x = event.clientX - window.innerWidth / 2;
      const y = event.clientY - window.innerHeight / 2;

      remove(focus);
      pointerAnimation = animate(focus, {
        x,
        y,
        duration: 760,
        ease: "out(3)",
      });

      ribbons.forEach((ribbon, index) => {
        remove(ribbon);
        animate(ribbon, {
          x: x * (0.015 + index * 0.004),
          y: y * (0.012 + index * 0.003),
          duration: 900,
          ease: "out(2)",
        });
      });
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      remove(focus);
      ribbons.forEach((ribbon) => remove(ribbon));
      moteTargets.forEach((mote) => remove(mote));
      pointerAnimation?.pause();
      motesAnimation?.pause();
      ribbonsAnimation?.pause();
      dragOneInstance?.revert();
      dragTwoInstance?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="ambient-backdrop" aria-hidden>
      <span className="ambient-backdrop__core ambient-backdrop__core--one" />
      <span className="ambient-backdrop__core ambient-backdrop__core--two" />
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
              top: `${mote.top}%`,
              left: `${mote.left}%`,
              width: `${mote.size}px`,
              height: `${mote.size}px`,
              opacity: mote.opacity,
              animationDelay: `${mote.delay}ms`,
            }}
          />
        ))}
      </div>

      <span ref={dragOneRef} className="ambient-backdrop__token ambient-backdrop__token--one" />
      <span ref={dragTwoRef} className="ambient-backdrop__token ambient-backdrop__token--two" />
    </div>
  );
}
