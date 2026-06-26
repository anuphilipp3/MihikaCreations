"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// The wordmark's alpha as a mask, filled gold — gold finally reads on the dark curtain.
const MASK = {
  WebkitMaskImage: "url(/mahika-wordmark.png)",
  maskImage: "url(/mahika-wordmark.png)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskPosition: "center",
  maskPosition: "center",
} as const;

export function Preloader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const hold = reduce ? 500 : 2000;
    const timer = setTimeout(() => setShow(false), hold);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          key="preloader"
          className="preloader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest"
          initial={{ y: 0 }}
          exit={reduce ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: reduce ? 0.4 : 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            role="img"
            aria-label="Mahika"
            className="block bg-gold"
            style={{
              ...MASK,
              height: "clamp(44px, 9vw, 64px)",
              width: "clamp(152px, 31vw, 221px)",
            }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />

          <motion.p
            className="mt-6 text-[11px] uppercase tracking-[0.4em] text-gold/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Made-to-measure · Kerala
          </motion.p>

          {!reduce && (
            <motion.span
              aria-hidden="true"
              className="mt-9 block h-px bg-gold/45"
              initial={{ width: 0 }}
              animate={{ width: 132 }}
              transition={{ duration: 1.7, ease: "easeInOut", delay: 0.2 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
