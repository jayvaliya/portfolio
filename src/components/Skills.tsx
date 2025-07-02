"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaMobile, FaDatabase, FaCloud, FaTools, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiExpo, SiRedis } from 'react-icons/si';

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            name: "Frontend",
            icon: <FaReact className="w-8 h-8" />,
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            ]
        },
        {
            name: "Backend",
            icon: <FaNodeJs className="w-8 h-8" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express", icon: <FaNodeJs /> },
                { name: "RESTful APIs", icon: <FaTools /> },
                { name: "GraphQL", icon: <FaTools /> },
            ]
        },
        {
            name: "Mobile",
            icon: <FaMobile className="w-8 h-8" />,
            skills: [
                { name: "React Native", icon: <FaReact /> },
                { name: "Expo", icon: <SiExpo /> },
                { name: "NativeWind", icon: <SiTailwindcss /> },
            ]
        },
        {
            name: "Database",
            icon: <FaDatabase className="w-8 h-8" />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "PostgreSQL", icon: <FaDatabase /> },
                { name: "Redis", icon: <SiRedis /> },
            ]
        },
        {
            name: "Cloud & DevOps",
            icon: <FaCloud className="w-8 h-8" />,
            skills: [
                { name: "CI/CD", icon: <FaTools /> },
                { name: "Docker", icon: <FaDocker /> },
            ]
        },
    ];

    return (<section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden" id="skills">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 left-[40%] w-48 h-48 rounded-full bg-blue-600/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section heading */}
            <div className="flex flex-col items-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent pb-2">My Skills</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
                <p className="text-gray-300 text-center max-w-2xl mt-6 text-lg">
                    Technologies I use to bring ideas to life
                </p>
            </div>            {/* Skills grid */}
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {skillCategories.map((category, index) => (<motion.div
                    key={index}
                    className="group bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl border border-white/10 backdrop-blur-sm p-4 md:p-6 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                >
                    <div className="flex items-center mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex items-center justify-center text-white mr-3 md:mr-4 group-hover:from-purple-500/50 group-hover:to-indigo-500/50 transition-all duration-500">
                            {category.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">{category.name}</h3></div>                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                        {category.skills.map((skill, skillIndex) => (
                            <motion.div
                                key={skillIndex}
                                className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-gray-800/40 hover:bg-purple-900/20 transition-all duration-300 group min-h-[80px]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: 0.2 + (skillIndex * 0.1) }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-2xl md:text-3xl text-gray-300 group-hover:text-white mb-2 md:mb-3 transition-all duration-300">{skill.icon}</div>
                                <span className="text-xs text-gray-400 group-hover:text-gray-200 text-center transition-all duration-300">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                ))}
            </div>
        </div>            {/* Decorative elements */}
        <div className="absolute left-4 bottom-10 w-24 h-24 border border-purple-500/10 rounded-lg -rotate-12 hidden lg:block"></div>
        <div className="absolute right-10 top-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden lg:block"></div>
        <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-purple-500/30 rounded-full hidden lg:block"></div>
        <div className="absolute right-1/3 bottom-1/4 w-3 h-3 bg-indigo-500/30 rounded-full hidden lg:block"></div>
    </section>
    );
}
