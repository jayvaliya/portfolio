"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaAward, FaCertificate, FaMedal, FaChevronDown } from 'react-icons/fa';

// Define achievements array
const achievements = [
    {
        title: "150+ LeetCode & GeeksforGeeks Problems",
        description: "Solved over 100 problems on platforms like LeetCode and GeeksforGeeks",
        icon: <FaTrophy className="w-6 h-6" />,
        year: "2025"
    },
    {
        title: "Freelance Frontend Development",
        description: "Worked with multiple clients to develop professional product websites",
        icon: <FaAward className="w-6 h-6" />,
        year: "2025"
    },
    {
        title: "100xDevs Cohort",
        description: "Successfully completed the 100xDevs cohort by Harkirat",
        icon: <FaCertificate className="w-6 h-6" />,
        year: "2024"
    },
    {
        title: "Full-Stack Projects",
        description: "Built and deployed multiple full-stack projects using modern technologies",
        icon: <FaMedal className="w-6 h-6" />,
        year: "2025"
    }
];

export default function Achievements() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [showAll, setShowAll] = useState(false);

    // Show only 3 achievements initially, show all when "View All" is clicked
    const visibleAchievements = showAll ? achievements : achievements.slice(0, 3);

    return (
        <section className="relative py-20 md:py-32 bg-[#0b0b14] overflow-hidden" id="achievements">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/4 left-[30%] w-48 h-48 rounded-full bg-blue-600/5 blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}
                <div className="flex flex-col items-center mb-20">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Achievements & Awards
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    ></motion.div>                    <motion.p
                        className="text-gray-300 text-center max-w-2xl mt-6 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Highlights from my development journey and technical accomplishments
                    </motion.p>
                </div>

                {/* Achievements grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleAchievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl border border-white/10 backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Background glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

                            <div className="relative flex items-center mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex items-center justify-center text-white mr-4 group-hover:from-purple-500/50 group-hover:to-indigo-500/50 transition-all duration-500">
                                    {achievement.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
                                        {achievement.title}
                                    </h3>
                                    <span className="text-sm text-gray-400">{achievement.year}</span>
                                </div>
                            </div>
                            <p className="relative text-gray-300 mt-3 pl-16">
                                {achievement.description}
                            </p>

                            {/* Shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent rounded-xl transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* View more button (only if there are more than 3 achievements) */}
                {achievements.length > 3 && (
                    <div className="flex justify-center mt-12">
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/30 hover:to-indigo-600/30 border border-purple-500/30 text-white font-medium transition-all duration-300"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {showAll ? "Show Less" : "View All Achievements"}
                            <FaChevronDown className={`transition-transform duration-300 ${showAll ? "rotate-180" : "rotate-0"}`} />
                        </motion.button>
                    </div>
                )}
            </div>

            {/* Decorative elements */}
            <div className="absolute left-8 top-40 w-24 h-24 border border-purple-500/10 rounded-lg rotate-12 hidden lg:block"></div>
            <div className="absolute right-20 bottom-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden lg:block"></div>
            <div className="absolute right-1/4 top-1/3 w-2 h-2 bg-purple-500/30 rounded-full hidden lg:block"></div>
            <div className="absolute left-1/3 bottom-1/4 w-3 h-3 bg-indigo-500/30 rounded-full hidden lg:block"></div>
        </section>
    );
}
