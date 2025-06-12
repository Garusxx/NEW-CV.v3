import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffect({ text = "Typing Effect" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <p style={{ marginTop: "0.8rem" }} ref={ref}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.005 }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
}
