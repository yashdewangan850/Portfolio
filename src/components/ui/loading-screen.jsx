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
      value += Math.floor(Math.random() * 8) + 3;

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
    }, 90);

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
            scale: 1.05,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <div className="loading-container">

            <div className="loading-orb" />

            <motion.div
              className="loading-logo"
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              Y
            </motion.div>

            <motion.h2
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Yash Kumar Dewangan
            </motion.h2>

            <p>Crafting Premium Digital Experiences</p>

            <div className="loading-bar">
              <motion.div
                className="loading-progress"
                animate={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <span className="loading-percent">
              {progress}%
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}