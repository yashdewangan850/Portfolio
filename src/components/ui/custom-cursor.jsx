"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(dot.current, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.05,
      });

      gsap.to(ring.current, {
        x: e.clientX - 18,
        y: e.clientY - 18,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}