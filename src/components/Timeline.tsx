"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaLightbulb } from 'react-icons/fa';

export default function Timeline() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const timelineItems = [
        {
            year: "2022",
            title: "Started Coding Journey",
            description: "Discovered my passion for programming and began learning the fundamentals of web development.",
            icon: <FaCode className="w-5 h-5" />,
            color: "from-blue-500 to-blue-600"
        },
        {
            year: "2023",
            title: "Computer Science Degree",
            description: "Enrolled in Computer Science program, focusing on algorithms, data structures, and software engineering principles.",
            icon: <FaGraduationCap className="w-5 h-5" />,
            color: "from-purple-500 to-purple-600"
        },
        {
            year: "2024",
            title: "Full Stack Development",
            description: "Expanded my skill set to include backend technologies, databases, and cloud services, becoming a full stack developer.",
            icon: <FaCode className="w-5 h-5" />,
            color: "from-cyan-500 to-cyan-600"
        },
        {
            year: "2024",
            title: "First Internship",
            description: "Secured a frontend development internship where I worked on React applications and improved my skills in modern JS frameworks.",
            icon: <FaBriefcase className="w-5 h-5" />,
            color: "from-indigo-500 to-indigo-600"
        },
        {
            year: "2025",
            title: "First Major Project",
            description: "Led the development of Noter, a collaborative note-sharing platform that strengthened my project management abilities.",
            icon: <FaLightbulb className="w-5 h-5" />,
            color: "from-green-500 to-green-600"
        }
    ];

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden" id="journey">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-1/3 right-[15%] w-64 h-64 rounded-full bg-indigo-700/5 blur-3xl"></div>
                <div className="absolute top-1/4 left-[5%] w-72 h-72 rounded-full bg-purple-600/5 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}
                <div className="flex flex-col items-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">My Journey</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
                    <p className="text-gray-300 text-center max-w-2xl mt-6 text-lg">
                        The path that brought me here and continues to shape my growth as a developer
                    </p>
                </div>

                {/* Timeline */}
                <div ref={ref} className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500/30 via-indigo-500/30 to-purple-500/30 rounded-full"></div>

                    <div className="space-y-16">
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                            >
                                {/* Content */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                    <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-6 rounded-xl border border-white/10 backdrop-blur-sm shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1 transition-all duration-300">
                                        <span className="text-sm md:text-lg font-mono bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-3">{item.title}</h3>
                                        <p className="text-gray-300">{item.description}</p>
                                    </div>
                                </div>

                                {/* Icon bubble */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center z-10 shadow-lg shadow-purple-500/20">
                                    {item.icon}
                                </div>

                                {/* Empty space for the other half */}
                                <div className="w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-4 bottom-10 w-24 h-24 border border-purple-500/10 rounded-lg rotate-12 hidden lg:block"></div>
            <div className="absolute left-10 top-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden lg:block"></div>
        </section>
    );
}
