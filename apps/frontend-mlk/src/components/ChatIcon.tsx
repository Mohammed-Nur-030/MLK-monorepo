import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const rotationVariants: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: [10, -10],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    },
  },
};

const ChatIcon: React.FC = () => {
  return (
    <section className="bot fixed right-1 bottom-3 mr-4 z-30">
      <motion.div
        className="chat-icon"
        variants={rotationVariants}
        initial="initial"
        animate="animate"
      >
        <Link href="https://wa.me/919353627039?text=My!%20Query%20[%20Your%20Enquiry%20]">
            <div className="container whatsapp-icon w-12 h-12"></div>
        </Link>
      </motion.div>
    </section>
  );
};

export default ChatIcon;
