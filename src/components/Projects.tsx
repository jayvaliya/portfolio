"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import cryptohubImage from '../assets/crypto1.png';
import blogpenImage from '../assets/blogpen1.png';
import meditationappImge from '../assets/meditationapp1.png';
import noter from "../assets/noter.png"

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null);
    // We'll use whileInView directly in the components instead of this variable
    // so we can remove the unused isInView reference

    const projects = [
        {
            title: "Noter",
            description: [
                "Centralized platform to share, explore, and organize study material",
                "Features nested folder structure and multi-level access controls",
                "Explore section for discovering published content",
                "Bookmark notes and collaborate easily",
                "Upcoming AI-powered tools for smart search, summaries, and recommendations",
                "Designed for students, educators, and lifelong learners"
            ],
            image: noter,
            tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "AI (coming soon)"],
            demoLink: "https://noter.jayvaliya.me",
            codeLink: "https://github.com/jayvaliya/noter"
        },
        {
            title: "Cryptohub",
            description: [
                "Real-time cryptocurrency market insights dashboard",
                "Price tracking and trend analysis",
                "Interactive data visualization",
                "Stay updated with market movements 🚀"
            ],
            image: cryptohubImage,
            tech: ["React.js", "Tailwind CSS", "ApexCharts.js", "CoinGecko API"],
            demoLink: "https://cryptohub.jayvaliya.me",
            codeLink: "https://github.com/jayvaliya/crypto-hub"
        },
        {
            title: "BlogPen",
            description: [
                "Platform for writers to create, share, and explore blogs effortlessly",
                "Seamless writing experience with intuitive interface",
                "Engage with a wide range of content 🚀"
            ],
            image: blogpenImage,
            tech: ["React", "Tailwind CSS", "PostgreSQL", "Prisma", "CloudFlare Workers"],
            demoLink: "https://blogpen.jayvaliya.me/",
            codeLink: "https://github.com/jayvaliya/medium"
        },
        {
            title: "Meditation App",
            description: [
                "Calming companion designed for relaxation, focus, and mindfulness",
                "Features guided sessions and built-in timer",
                "Daily affirmations to promote positivity and well-being 🧘‍♂️✨"
            ],
            image: meditationappImge,
            tech: ["Expo", "React Native", "NativeWind"],
            demoLink: null,
            codeLink: "https://github.com/jayvaliya/meditation-app"
        }
    ];

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden" id="projects">            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute bottom-1/3 left-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                ></motion.div>
                <motion.div
                    className="absolute top-1/4 right-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 2
                    }}
                ></motion.div>
            </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}
                <div className="flex flex-col items-center mb-20">
                    <motion.h2
                        className="text-4xl h-14 md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        My Work
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                </div>

                {/* Projects grid */}                <div ref={ref} className="flex flex-col space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2 * index,
                                type: "spring",
                                stiffness: 50
                            }}
                        >
                            {/* Image container - optimized for mobile */}
                            <motion.div
                                className="w-full lg:w-1/2 relative group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className={`absolute -inset-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-500/20 to-indigo-500/20' : 'from-indigo-500/20 to-purple-500/20'} rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                ></motion.div>

                                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0F0F18] shadow-lg">
                                    <div className="aspect-[16/9] w-full relative overflow-hidden">
                                        <motion.div
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.8 }}
                                            className="h-full w-full"
                                        >                                        <Image
                                                src={project.image}
                                                alt={`${project.title} - Project Screenshot`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority={index === 0} // Only prioritize first project
                                                loading={index === 0 ? "eager" : "lazy"}
                                                quality={85}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/90 via-transparent to-transparent"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Content container */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <motion.h3
                                    className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-3 pb-2"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.ul
                                    className="text-gray-300 mb-5 space-y-1 list-disc list-inside"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                >
                                    {project.description.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            className="md:text-lg font-normal"
                                            variants={{
                                                hidden: { opacity: 0, x: -10 },
                                                show: { opacity: 1, x: 0 }
                                            }}
                                        >
                                            {point}
                                        </motion.li>
                                    ))}
                                </motion.ul>                                <motion.div
                                    className="flex flex-wrap gap-2 mb-6"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.05,
                                                delayChildren: 0.2
                                            }
                                        }
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                >                                {project.tech.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className="px-3 py-1 text-white text-sm md:text-base bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-full border border-purple-500/20 mb-2 inline-block"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(139, 92, 246, 0.2)"
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                                </motion.div>

                                <motion.div
                                    className="flex space-x-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {project.demoLink && <motion.a href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-3 md:py-2 border border-purple-500/20 rounded-md bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-white font-medium hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/10 min-w-[120px] md:min-w-auto"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Visit Site
                                        <motion.span
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                ease: "easeInOut",
                                                repeatDelay: 0.5
                                            }}
                                        >
                                            <FiExternalLink className="ml-2 w-5 h-5" />
                                        </motion.span>
                                    </motion.a>}

                                    {project.codeLink && <motion.a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-white/10 rounded-md hover:bg-white/5 text-white font-medium transition-all duration-300"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Source Code
                                        <motion.span
                                            animate={{ rotate: [0, 15, 0] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                ease: "easeInOut",
                                                repeatDelay: 1
                                            }}
                                        >
                                            <FaGithub className="ml-2 w-5 h-5" />
                                        </motion.span>
                                    </motion.a>}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>            {/* Decorative elements */}
            <motion.div
                className="absolute right-4 bottom-10 w-24 h-24 border border-purple-500/10 rounded-lg rotate-12 hidden lg:block"
                animate={{ rotate: [12, 0, 12], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="absolute left-10 top-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden lg:block"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
            <motion.div
                className="absolute right-1/4 top-1/3 w-3 h-3 bg-purple-500/20 rounded-full hidden lg:block"
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="absolute left-1/3 bottom-1/4 w-2 h-2 bg-indigo-500/20 rounded-full hidden lg:block"
                animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
        </section>
    );
}