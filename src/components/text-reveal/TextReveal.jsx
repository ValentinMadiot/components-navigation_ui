import { motion } from "framer-motion";
import regexString from "./regexString";
import "./textReveal.css";

function TextReveal() {
  const headingChars = regexString("Composants de Navigation");
  const textChars = regexString(
    "Découvrez différentes interfaces pour naviguer dans vos apps"
  );

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <div className="text-reveal">
      <motion.h1
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.04 }}>
        {headingChars.map((char, i) => (
          <motion.span
            key={`heading-${char}-${i}`}
            transition={{ duration: 0.5 }}
            variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.02 }}>
        {textChars.map((char, i) => (
          <motion.span
            key={`text-${char}-${i}`}
            transition={{ duration: 0.35 }}
            variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}

export default TextReveal;
