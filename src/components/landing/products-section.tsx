"use client"

<<<<<<< HEAD
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
    {
        name: "AI Learning Assistant",
        tag: "Personalised learning",
        desc: "A learning companion that makes curriculum-aligned support more accessible, including in low-connectivity settings.",
        href: "/solutions/ai-learning-assistant",
    },
    {
        name: "School Management",
        tag: "Simpler school operations",
        desc: "Bring everyday school administration into one clear, reliable system built around how schools work.",
        href: "/solutions/school-management-system",
    },
    {
        name: "Virtual Science Labs",
        tag: "Learning by doing",
        desc: "Give learners room to explore scientific ideas with interactive experiences and guided practice.",
        href: "/solutions/virtual-science-labs",
=======
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
>>>>>>> a380728c0ab4bb74460f68bccdb32e2c6f5b782c
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
            id="products"
            className="bg-white px-6 py-20 md:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
        >
            <div className="mx-auto max-w-7xl">
                <motion.span variants={itemVariants} className="text-xs font-semibold uppercase text-sea-green">
                    Learning that fits real classrooms
                </motion.span>
<<<<<<< HEAD
                <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <motion.h2 variants={itemVariants} className="max-w-2xl font-display text-3xl font-medium leading-tight text-black md:text-5xl">
                        Practical tools. More room to learn.
                    </motion.h2>
                    <motion.p variants={itemVariants} className="max-w-md text-base leading-7 text-black-700">
                        One connected suite for learners, educators and the people who keep schools moving.
                    </motion.p>
                </div>
                <div className="mt-12 grid border-t border-black-900 md:grid-cols-3">
                    {products.map((p)=> (
                        <motion.div
                            key={p.name}
                            className="group border-b border-black-900 py-7 md:border-b-0 md:px-7 md:py-8 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r"
                            variants={itemVariants}
=======
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
>>>>>>> a380728c0ab4bb74460f68bccdb32e2c6f5b782c
                        >
                            <span className="text-xs font-semibold uppercase text-jungle-green">{p.tag}</span>
                            <h3 className="mt-5 font-display text-2xl font-medium text-black">{p.name}</h3>
                            <p className="mt-3 min-h-20 max-w-sm text-sm leading-6 text-black-700">{p.desc}</p>
                            <Link href={p.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sea-green transition-colors group-hover:text-jungle-green">
                                Discover the solution <ArrowUpRight className="size-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
