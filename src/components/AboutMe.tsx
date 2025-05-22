"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import awkwardHuman from '../assets/awahuman.png';
import fullstackImage from '../assets/fullstackdev.png';
// import mobileDevImage from '../assets/mobile.png';    // or use placeholder images
import mobileDevImage from '../assets/mobile2.png';    // or use placeholder images
import engineerImage from '../assets/engineer.png';
// import catImage from '../assets/cat.png';
import catImage from '../assets/cat.png';

export default function AboutMe() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse position for custom cursor
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Define array with both text and images
    const skillItems = [
        {
            label: "Full Stack Developer",
            icon: "💻",
            cursorImage: fullstackImage,
            description: "MERN, Next.js, SQL, AWS"
        },
        {
            label: "Software Engineer",
            icon: "⚙️",
            cursorImage: engineerImage,
            description: "Architecture, Testing, CI/CD"
        },
        {
            label: "Mobile App Developer",
            icon: "📱",
            cursorImage: mobileDevImage,
            description: "React Native, Expo"
        },
        {
            label: "Cat Lover",
            icon: "🐱",
            cursorImage: catImage,
            description: "Certified cat appreciator"
        },
        {
            label: "Awkward Human",
            icon: "🙃",
            cursorImage: awkwardHuman,
            description: "Professionally awkward"
        },
    ];

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden -mt-1" id="about">
            {/* Background elements remain the same */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
            </div>

            {/* Custom cursor */}
            <AnimatePresence>
                {hoveredItem !== null && (
                    <motion.div
                        className="fixed w-32 h-32 rounded-full pointer-events-none z-50"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            left: mousePosition.x - 70,
                            top: mousePosition.y - 70,
                            zIndex: 9999
                        }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={skillItems[hoveredItem].cursorImage}
                                alt={skillItems[hoveredItem].label}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}                <div className="flex flex-col items-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
                    {/* Left column - paragraph (optimized for mobile) */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {/* Paragraph content remains the same but with mobile-optimized text sizes */}
                        <div className="prose prose-invert max-w-none">                            <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
                            I{`'`}m a <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">passionate developer</span> who builds scalable web and mobile applications. I transform complex problems into <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">elegant solutions</span> through clean, efficient code that delivers <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">exceptional user experiences</span>.
                        </p>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
                                My journey began with a fascination for creating digital solutions that make life easier. Over the years, I've honed my skills in <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">full-stack development</span>, focusing on React, Node.js, and modern web technologies.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                                Beyond coding, I{`'`}m devoted to <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">continuous learning</span> and staying <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">adaptable</span> with emerging technologies. My <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">curiosity</span> drives me to explore new tech and contribute to open-source when I{`'`}m not spending time with my cats.
                            </p>
                        </div>
                    </motion.div>                    {/* Right column - bullet points with enhanced hover */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {skillItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-4 rounded-lg backdrop-blur-sm border border-white/5 hover:border-purple-500/20 transition-all duration-300 touch-manipulation"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 10px 30px -15px rgba(139, 92, 246, 0.3)"
                                    }}
                                    onMouseEnter={() => setHoveredItem(index)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    style={{ cursor: 'default' }}
                                    onTouchStart={() => {
                                        // Disable hover effect on touch devices
                                        if (window.innerWidth <= 768) return;
                                        setHoveredItem(index);
                                    }}
                                    onTouchEnd={() => {
                                        if (window.innerWidth <= 768) return;
                                        setHoveredItem(null);
                                    }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <div>
                                            <span className="font-mono text-white text-base md:text-lg font-medium">{item.label}</span>
                                            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Subtle shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent rounded-lg transition-opacity duration-500"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements remain the same */}
            <div className="absolute left-4 bottom-10 w-24 h-24 border border-purple-500/10 rounded-lg -rotate-12 hidden lg:block"></div>
            <div className="absolute right-10 top-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden lg:block"></div>
        </section>
    );
}