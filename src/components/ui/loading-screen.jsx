"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "@/components/styles/loading.css";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    let value = 0;

    const interval = setInterval(() => {
      value += 5;

      if (value >= 100) {
        value = 100;
        setProgress(100);

        clearInterval(interval);

        setTimeout(() => {
          setShow(false);
          document.body.style.overflow = "";
        }, 700);

        return;
      }

      setProgress(value);
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-page"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
        >
          <div className="loading-container">

            {/* Profile Photo */}
            <motion.div
              className="loading-profile"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/profile.png"
                alt="Yash Kumar Dewangan"
              />
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
            >
              Yash Kumar Dewangan
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
            >
              Full Stack Developer
            </motion.p>

            {/* Loading Bar */}
            <div className="loading-bar">
              <motion.div
                className="loading-progress"
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.15,
                  ease: "linear",
                }}
              />
            </div>

            {/* Percentage */}
            <span className="loading-percent">
              {progress}%
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}