"use client"

import Link from "next/link";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";

const quickLinks = [
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
];
const solutions = [
    { label: "AI Learning Assistant", href: "/solutions/ai-learning-assistant" },
    { label: "School Management", href: "/solutions/school-management-system" },
    { label: "Virtual Science Labs", href: "/solutions/virtual-science-labs" },
    { label: "Digital Library", href: "/solutions/digital-library" },
];
const company = [
    { label: "About us", href: "/about" },
    { label: "Careers", href: "/about/careers" },
    { label: "Sign in", href: "/login" },
];
=======
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const quickLinks = ["Home", "Solutions", "Products", "Projects", "About Us", "Resources"];
const solutions = ["AI Learning Assistant", "School Management", "Offline Learning Infrastructure", "SMS & USSD Access"];
const company = ["About Us", "Our Mission", "Careers", "Blog", "Contact Us"];
>>>>>>> a380728c0ab4bb74460f68bccdb32e2c6f5b782c

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
};

export function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
    return (
        <motion.div variants={itemVariants}>
            <h4 className="text-xs font-semibold uppercase text-white/55">{title}</h4>
            <ul className="mt-4 space-y-3 text-sm">
                {items.map((item)=>(
                    <li key={item.href}>
                        <Link href={item.href} className="text-white/75 transition hover:text-light-green-500">{item.label}</Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}
export function Footer() {
    return (
        <motion.footer
            className="bg-sea-green-100 px-6 pt-14 text-white md:pt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
        >
            <div className="mx-auto grid max-w-7xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.25fr_0.8fr]">
                <motion.div variants={itemVariants}>
                    <div className="flex items-center gap-2.5 text-lg font-semibold text-white">
                        <span className="flex size-9 items-center justify-center rounded-md bg-white/10 text-light-green-500"><GraduationCap className="size-5" /></span>
                        Afrovia<span className="-ml-2 text-light-green-500">Labs</span>
                    </div>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
                        Practical learning technology for the people shaping education across Africa.
                    </p>
<<<<<<< HEAD
                    <Link href="/about" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-light-green-500 hover:text-white">
                        Our mission <ArrowUpRight className="size-4" />
                    </Link>
=======
                    <div className="mt-5 flex gap-3">
                        {["Facebook", "Twitter", "LinkedIn", "Youtube"].map((label) => (
                            <Link key={label} href="#" className="flex h-8 w-8 items-center justify-center border border-paper/30 text-xs transition hover:border-leaf hover:text-leaf" aria-label={`Follow us on ${label}`}>
                                {label[0]}
                            </Link>
                        ))}
                    </div>
>>>>>>> a380728c0ab4bb74460f68bccdb32e2c6f5b782c
                </motion.div>
                <FooterColumn title="Quick Links" items={quickLinks}/>
                <FooterColumn title="Solutions" items={solutions}/>
                <FooterColumn title="Company" items={company}/>
<<<<<<< HEAD
=======
                <motion.div variants={itemVariants}>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-paper/70">Stay Connected</h4>
                    <p className="mt-4 text-sm text-paper/70">
                        Get updates on our latest solutions and impact stories.
                    </p>
                    <form action="" className="mt-4 flex overflow-hidden border border-paper/30">
                        <Input type="email" className="w-full bg-transparent px-4 py-2 text-sm text-paper placeholder:text-paper/60 focus:outline-none" placeholder="Enter your email" aria-label="Email address"/>
                        <Button type="submit" className="shrink-0 bg-ember px-4 py-2 text-sm font-medium text-forest transition hover:bg-ember-600">
                            Submit
                        </Button>
                    </form>
                </motion.div>
>>>>>>> a380728c0ab4bb74460f68bccdb32e2c6f5b782c
            </div>
            <motion.div variants={itemVariants} className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/20 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
                <p>&copy; {new Date().getFullYear()} AfroviaLabs. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Service</Link>
                </div>
            </motion.div>
        </motion.footer>
    );
}
