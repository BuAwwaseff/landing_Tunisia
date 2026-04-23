"use client";

import { animate, remove, type JSAnimation } from "animejs";

export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 5200,
    marquee: 30000,
  },
  easing: {
    standard: "easeOutCubic",
    entrance: "cubicBezier(0.22, 1, 0.36, 1)",
    emphasis: "easeOutExpo",
    linear: "linear",
  },
  distance: {
    xs: 8,
    sm: 14,
    md: 20,
    lg: 28,
  },
  scale: {
    hover: 1.02,
    lift: 1.01,
  },
} as const;

type MotionTarget = HTMLElement | SVGElement;
type MotionTargets = MotionTarget | ArrayLike<MotionTarget>;

function toArray(targets: MotionTargets) {
  if (typeof (targets as MotionTarget).style !== "undefined") {
    return [targets as MotionTarget];
  }

  return Array.from(targets as ArrayLike<MotionTarget>);
}

export function removeAnimations(targets: MotionTargets) {
  remove(targets);
}

export function prepareReveal(targets: MotionTargets, variant: "up" | "left" | "scale" = "up") {
  for (const target of toArray(targets)) {
    target.style.opacity = "0";

    if (variant === "left") {
      target.style.transform = `translate3d(-${motionTokens.distance.md}px, 0, 0)`;
      continue;
    }

    if (variant === "scale") {
      target.style.transform = "translate3d(0, 8px, 0) scale(0.985)";
      continue;
    }

    target.style.transform = `translate3d(0, ${motionTokens.distance.md}px, 0)`;
  }
}

export function setVisible(targets: MotionTargets) {
  for (const target of toArray(targets)) {
    target.style.opacity = "1";
    target.style.transform = "none";
    target.style.filter = "none";
  }
}

export function revealUp(targets: MotionTargets, delay = 0) {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [motionTokens.distance.md, 0],
    filter: ["blur(10px)", "blur(0px)"],
    duration: 560,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function revealLeft(targets: MotionTargets, delay = 0) {
  return animate(targets, {
    opacity: [0, 1],
    translateX: [-motionTokens.distance.md, 0],
    filter: ["blur(10px)", "blur(0px)"],
    duration: 560,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function revealScale(targets: MotionTargets, delay = 0) {
  return animate(targets, {
    opacity: [0, 1],
    translateY: [motionTokens.distance.xs, 0],
    scale: [0.985, 1],
    duration: 580,
    delay,
    ease: motionTokens.easing.entrance,
  });
}

export function floatLoop(
  targets: MotionTargets,
  amplitude: number = 10,
  duration: number = motionTokens.duration.loop,
) {
  return animate(targets, {
    translateY: [0, -amplitude, 0],
    duration,
    ease: "inOutSine",
    loop: true,
  });
}

export function pulseGlow(targets: MotionTargets, duration: number = 3600) {
  return animate(targets, {
    opacity: [0.42, 0.72, 0.42],
    scale: [1, 1.04, 1],
    duration,
    ease: "inOutSine",
    loop: true,
  });
}

export function countMetric(
  element: HTMLElement,
  from: number,
  to: number,
  duration: number = 1400,
  options: { prefix?: string; suffix?: string } = {},
) {
  const state = { value: from };

  return animate(state, {
    value: to,
    round: 1,
    duration,
    ease: motionTokens.easing.standard,
    onUpdate: () => {
      element.textContent = `${options.prefix ?? ""}${Math.round(state.value).toLocaleString("en-US")}${options.suffix ?? ""}`;
    },
  });
}

export function animateBar(element: HTMLElement, value: number, delay = 0) {
  return animate(element, {
    scaleY: [0, 1],
    opacity: [0.25, 1],
    duration: 460,
    delay,
    ease: motionTokens.easing.entrance,
    onBegin: () => {
      element.style.transformOrigin = "bottom";
      element.style.height = `${value}%`;
    },
  });
}

export function drawPath(element: SVGPathElement, duration = 800) {
  const length = element.getTotalLength();
  element.style.strokeDasharray = `${length}`;
  element.style.strokeDashoffset = `${length}`;

  return animate(element, {
    strokeDashoffset: [length, 0],
    opacity: [0.4, 1],
    duration,
    ease: motionTokens.easing.standard,
  });
}

export function marqueeTrack(
  element: HTMLElement,
  distance: string,
  duration: number = motionTokens.duration.marquee,
) {
  return animate(element, {
    translateX: ["0%", distance],
    duration,
    ease: motionTokens.easing.linear,
    loop: true,
  });
}

export function hoverLift(element: HTMLElement) {
  const enter = () =>
    animate(element, {
      translateY: -6,
      scale: motionTokens.scale.lift,
      duration: 240,
      ease: motionTokens.easing.standard,
    });

  const leave = () =>
    animate(element, {
      translateY: 0,
      scale: 1,
      duration: 240,
      ease: motionTokens.easing.standard,
    });

  element.addEventListener("mouseenter", enter);
  element.addEventListener("mouseleave", leave);

  return () => {
    element.removeEventListener("mouseenter", enter);
    element.removeEventListener("mouseleave", leave);
    removeAnimations(element);
  };
}

export function hoverTilt(
  element: HTMLElement,
  options: { maxX?: number; maxY?: number } = {},
) {
  const maxX = options.maxX ?? 4;
  const maxY = options.maxY ?? 6;

  const onMove = (event: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    animate(element, {
      rotateX: -y * maxX,
      rotateY: x * maxY,
      translateY: -4,
      duration: 180,
      ease: motionTokens.easing.standard,
    });
  };

  const onLeave = () => {
    animate(element, {
      rotateX: 0,
      rotateY: 0,
      translateY: 0,
      duration: 260,
      ease: motionTokens.easing.standard,
    });
  };

  element.addEventListener("mousemove", onMove);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mousemove", onMove);
    element.removeEventListener("mouseleave", onLeave);
    removeAnimations(element);
  };
}

export function stopAnimation(animation: JSAnimation | null | undefined) {
  animation?.pause();
}
