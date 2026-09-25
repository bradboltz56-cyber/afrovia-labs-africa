"use client"

import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
=======
import { Button } from "../ui/button";
import { motion } from "motion/react";
>>>>>>> a380728c0ab4bb74460f68bccdb32e2c6f5b782c

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  },
};

export function Hero() {
    return (
        <motion.section
            className="relative isolate flex min-h-[620px] h-[calc(100svh-76px)] max-h-[790px] items-end overflow-hidden bg-sea-green-100 text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
<<<<<<< HEAD
            <Image
                src="/images/students-learning-tablet.png"
                alt="Students learning together with a tablet in their classroom"
                fill
                priority
                sizes="100vw"
                className="-z-20 object-cover object-center"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-sea-green-100/95 via-sea-green-100/75 to-sea-green-100/10" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-sea-green-100/85 to-transparent" />
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 md:px-10 md:pb-20 lg:px-12">
                <motion.div className="max-w-3xl" variants={itemVariants}>
                    <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase text-light-green-500">
                        <span className="size-2 rounded-full bg-light-green-500" />
                        Learning technology, built for Africa
                    </p>
                    <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.04] md:text-6xl lg:text-7xl">
                        Every learner deserves a world of possibility.
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                        We create practical digital tools that help schools deliver better learning, even when the internet cannot keep up.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="#products" className={cn(buttonVariants(), "h-12 rounded-md bg-light-green-500 px-6 font-semibold text-sea-green-100 hover:bg-light-green-600")}>
                            Explore our solutions <ArrowRight className="ml-2 size-4" />
                        </Link>
                        <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-md border-white/60 bg-white/5 px-6 text-white hover:bg-white/15 hover:text-white")}>
                            Partner with us
                        </Link>
=======
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:px-8 md:py-28">
                <div>
                    <motion.span variants={itemVariants} className="inline-flex border border-leaf px-3 py-1 font-mono text-xs uppercase tracking-widest text-leaf">
                        Education infrastructure for real conditions
                    </motion.span>
                    <motion.h1 variants={itemVariants} className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                        Better learning, <br/><span className="text-ember">wherever school happens.</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 max-w-md text-lg text-paper/80">
                        AfroviaLabs gives schools practical digital tools that keep teaching moving, online or offline. One connected suite for learners, teachers, and school leaders.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
                        <Button className="bg-ember text-forest hover:bg-ember-600">
                            <Link href="#products">Explore the suite</Link>
                        </Button>
                        <Button variant="ghost" className="border border-paper/40 text-paper hover:bg-paper/10">
                            <Link href="/contact">Talk to our team</Link>
                        </Button>
                    </motion.div>
                    <motion.dl variants={itemVariants} className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-paper/20 pt-6 font-mono text-sm">
                        <div>
                            <dt className="text-paper/70">Works</dt>
                            <dd className="text-leaf">Offline</dd>
                        </div>
                        <div>
                            <dt className="text-paper/70">Reaches</dt>
                            <dd className="text-leaf">Any phone</dd>
                        </div>
                        <div>
                            <dt className="text-paper/70">Built for</dt>
                            <dd className="text-leaf">Real Schools</dd>
                        </div>
                    </motion.dl>
                </div>
                <motion.div 
                    className="relative mx-auto w-full max-w-md border border-leaf/40 bg-forest-700 p-5 md:p-8"
                    variants={itemVariants}
                >
                    <div className="border border-paper/20 p-6 md:p-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-leaf">A learning system that travels</p>
                        <div className="mt-8 grid grid-cols-2 border-t border-paper/20">
                            <div className="border-r border-paper/20 py-5 pr-5"><strong className="font-display text-4xl text-ember">01</strong><p className="mt-2 text-sm text-paper/70">Learn with cached lessons</p></div>
                            <div className="py-5 pl-5"><strong className="font-display text-4xl text-ember">02</strong><p className="mt-2 text-sm text-paper/70">Manage every classroom</p></div>
                            <div className="border-r border-t border-paper/20 py-5 pr-5"><strong className="font-display text-4xl text-ember">03</strong><p className="mt-2 text-sm text-paper/70">Practice with virtual labs</p></div>
                            <div className="border-t border-paper/20 py-5 pl-5"><strong className="font-display text-4xl text-ember">04</strong><p className="mt-2 text-sm text-paper/70">Connect when ready</p></div>
                        </div>
>>>>>>> a380728c0ab4bb74460f68bccdb32e2c6f5b782c
                    </div>
                </motion.div>
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/30 pt-5 text-sm text-white/85 md:mt-16">
                    <span>Offline-ready learning</span>
                    <span className="hidden size-1 rounded-full bg-light-green-500 sm:block" />
                    <span>Tools for educators</span>
                    <span className="hidden size-1 rounded-full bg-light-green-500 sm:block" />
                    <span>Designed for local realities</span>
                    <Link href="#products" className="ml-auto hidden items-center gap-2 font-medium text-light-green-500 md:flex">
                        Discover the platform <ArrowDown className="size-4" />
                    </Link>
                </div>
            </div>
        </motion.section >
    );
}