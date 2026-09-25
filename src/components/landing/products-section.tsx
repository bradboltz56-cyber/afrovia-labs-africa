"use client"

import { motion } from "motion/react";

const products = [
    {
        name: "AfroviaLearn",
        tag: "AI Tutor",
        desc: "A guided AI tutor with cached lessons, practice, and feedback for learners with limited connectivity."
    },
    {
        name: "SchoolOS",
        tag: "School Management System",
        desc: "One clear view of attendance, classes, people, and day-to-day operations."
    },
    {
        name: "Virtual Labs",
        tag: "Practical learning",
        desc: "Safe, visual spaces where students can test ideas and build confidence before the exam."
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  },
};

export function ProductSection() {
    return (
        <motion.section 
            className="bg-paper px-6 py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
        >
            <div  className="mx-auto max-w-6xl">
                <motion.span variants={itemVariants} className="font-mono text-xs uppercase tracking-widest text-forest/60">
                    The suite
                </motion.span>
                <motion.h2 variants={itemVariants} className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
                     Tools that turn limited access into more learning.
                </motion.h2>
                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {products.map((p)=> (
                        <motion.div 
                            key={p.name} 
                            className="border border-ink/20 bg-paper p-8"
                            variants={itemVariants}
                            whileHover={{ borderColor: "#16442D", transition: { duration: 0.2 } }}
                        >
                            <span className="font-mono text-xs uppercase tracking-widest text-ember">{p.tag}</span>
                            <h3 className="mt-3 font-display text-2xl font-semibold text-forest">{p.name}</h3>
                            <p className="mt-3 text-ink/85">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
