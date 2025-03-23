"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import cryptohubImage from '../assets/crypto1.png';
import blogpenImage from '../assets/blogpen1.png';
import meditationappImge from '../assets/meditationapp1.png';

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "Cryptohub",
            description: "Crypto Hub is a dashboard that provides real-time cryptocurrency market insights, including price tracking, trend analysis, and interactive data visualization to help users stay updated with market movements. 🚀",
            image: cryptohubImage,
            tech: ["React.js", "Tailwind CSS", "ApexCharts.js", "CoinGecko API"],
            demoLink: "https://cryptoxhub.netlify.app/",
            codeLink: "https://github.com/jayvaliya/crypto-hub"
        },
        {
            title: "BlogPen",
            description: "BlogPen is a platform for writers to create, share, and explore blogs effortlessly. It offers a seamless writing experience with an intuitive interface, allowing users to engage with a wide range of content. 🚀",
            image: blogpenImage,
            tech: ["React", "Tailwind CSS", "PostgreSQL", "Prisma", "CloudFlare Workers"],
            demoLink: "https://blogpenn.netlify.app/",
            codeLink: "https://github.com/jayvaliya/medium"
        },
        {
            title: "Meditation App",
            description: "Meditation App is a calming companion designed to help users relax, focus, and practice mindfulness. It features guided sessions, a built-in timer, and daily affirmations to promote positivity and well-being. 🧘‍♂️✨",
            image: meditationappImge,
            tech: ["Expo", "React Native", "NativeWind"],
            demoLink: null,
            codeLink: "https://github.com/jayvaliya/meditation-app"
        }
    ];

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden" id="projects">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-1/3 left-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl"></div>
                <div className="absolute top-1/4 right-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}
                <div className="flex flex-col items-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent mb-4">My Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>

                {/* Projects grid */}
                <div ref={ref} className="flex flex-col space-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.7, delay: 0.1 + (index * 0.1) }}
                        >
                            {/* Image container */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className={`absolute -inset-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-500/20 to-indigo-500/20' : 'from-indigo-500/20 to-purple-500/20'} rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200`}></div>
                                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0F0F18] shadow-lg">
                                    <div className="aspect-[16/9] w-full relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/90 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Content container */}
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-3">{project.title}</h3>

                                <p className="text-gray-300 mb-5">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-white text-base bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-full border border-purple-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    {project.demoLink && <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-purple-500/20 rounded-md bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-white font-medium hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                                    >
                                        View Demo
                                        <FiExternalLink className="ml-2 w-5 h-5" />
                                    </a>}

                                    {project.codeLink && <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-white/10 rounded-md hover:bg-white/5 text-white font-medium transition-all duration-300"
                                    >
                                        Source Code
                                        <FaGithub className="ml-2 w-5 h-5" />
                                    </a>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-4 bottom-10 w-24 h-24 border border-purple-500/10 rounded-lg rotate-12 hidden lg:block"></div>
            <div className="absolute left-10 top-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden lg:block"></div>
        </section>
    );
}