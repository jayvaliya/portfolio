'use client';

import { useState, useEffect, useRef } from 'react';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
// import heroImage from '../assets/hero2.png';
import heroImage from '../assets/hero.jpg';
import { motion } from 'framer-motion';

// Add Space Grotesk for an elegant, unique header font
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-space-grotesk',
});

const roles = ["Fullstack Developer", "Software Engineer", "Mobile App Developer", "", "Problem Solver"];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [delta, setDelta] = useState(200);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    // For 3D card effect
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);

    // Handle mouse movement over the image
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!imageContainerRef.current) return;

        const rect = imageContainerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the container (0-1)
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Center the origin (convert from 0-1 to -0.5-0.5)
        setMousePosition({
            x: x - 0.5,
            y: y - 0.5
        });
    };

    // Reset when mouse leaves
    const handleMouseLeave = () => {
        setMousePosition(null);
    };

    useEffect(() => {
        // Blinking cursor effect
        const cursorInterval = setInterval(() => {
            if (cursorRef.current) {
                cursorRef.current.classList.toggle('opacity-0');
            }
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const ticker = setTimeout(() => {
            const role = roles[roleIndex];

            if (isDeleting) {
                setCurrentRole(role.substring(0, currentRole.length - 1));
            } else {
                setCurrentRole(role.substring(0, currentRole.length + 1));
            }

            // Adjust typing speed for natural feel
            if (isDeleting) {
                setDelta(100);
            } else {
                setDelta(Math.random() * 100 + 100);
            }

            if (!isDeleting && currentRole === role) {
                setDelta(1500);
                setIsDeleting(true);
            } else if (isDeleting && currentRole === "") {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
                setDelta(500);
            }
        }, delta);

        return () => clearTimeout(ticker);
    }, [currentRole, delta, isDeleting, roleIndex]);

    return (
        <div
            className="relative min-h-screen bg-gradient-to-b from-[#0a0a12] via-[#0d0d16] to-[#0a0a12] text-white p-4 sm:p-8 overflow-hidden pb-0"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-[10%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl animate-pulse-slow2"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl animate-pulse-slow3"></div>
            </div>

            {/* Geometric decorations */}
            <div className="absolute top-12 left-12 w-24 h-24 border border-purple-500/20 rounded-lg rotate-12 animate-float-slow"></div>
            <div className="absolute bottom-16 right-16 w-16 h-16 border border-indigo-500/20 rounded-full animate-float-slow2"></div>
            <div className="absolute top-1/4 right-1/3 w-8 h-8 border border-pink-500/20 rotate-45 animate-float-slow3"></div>

            {/* Radial gradient that follows cursor */}
            {mousePosition && (
                <div
                    className="pointer-events-none absolute w-[50vw] h-[50vw] rounded-full radial-gradient opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                        left: `calc(${(mousePosition.x + 0.5) * 100}vw)`,
                        top: `calc(${(mousePosition.y + 0.5) * 100}vh)`,
                        transform: 'translate(-50%, -50%)'
                    }}
                ></div>
            )}

            {/* Main content wrapper - changed to flex row for side-by-side layout */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
                {/* Text content - stacked on mobile, side by side on desktop */}
                <div className={`${spaceGrotesk.variable} w-full lg:max-w-xl py-6 lg:py-0 text-center lg:text-left`}>
                    <div className="relative inline-block">
                        <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent tracking-tight mb-0 hover:scale-105 transition-transform duration-300">
                            {"Hello World"}
                        </h1>
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-fuchsia-500/20 to-indigo-600/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-pulse"></div>
                    </div>
                    <h2 className="font-sans text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mt-3 mb-8 opacity-90 transition-all duration-300 hover:tracking-wide">
                        I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400">Jay</span>
                    </h2>

                    <div className="inline-flex h-12 items-center justify-center px-4 py-2 border border-purple-500/20 rounded-full backdrop-blur-sm bg-white/5 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                        <span className="font-mono text-xl sm:text-2xl bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                            {currentRole}
                        </span>
                        <span
                            ref={cursorRef}
                            className="font-mono text-xl sm:text-2xl text-purple-400 ml-0.5"
                        >
                            |
                        </span>
                    </div>

                    <div className="mt-8 space-y-4 max-w-lg mx-auto lg:mx-0">
                        <p className="text-gray-300 text-base sm:text-lg">
                            A passionate developer creating intuitive, scalable solutions for web and mobile platforms.
                        </p>                        <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">                            <button
                            onClick={() => {
                                navigator.clipboard.writeText("valiyajay555@gmail.com");
                                alert("Email copied to clipboard!");
                            }}
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all shadow-lg shadow-purple-500/20 min-h-[44px] min-w-[120px] cursor-pointer"
                        >
                            Get In Touch
                        </button>
                            <a
                                href="https://drive.google.com/file/d/1tohATQRygC4wTo-tWq-x_IGtqTEHpb__/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-purple-500/20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all min-h-[44px] min-w-[120px]"
                            >
                                Resume
                            </a>
                            <a
                                href="#projects"
                                className="px-6 py-3 border border-purple-500/20 rounded-lg text-white font-medium hover:bg-white/5 transition-all min-h-[44px] min-w-[120px]"
                            >
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                {/* Professional photo section - responsive for mobile and desktop */}
                <div
                    ref={imageContainerRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-3/4 sm:w-2/3 lg:w-2/5 mt-8 lg:mt-0 relative group mx-auto lg:mx-0"
                    style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    {/* Photo frame with 3D effects */}
                    <motion.div
                        className="relative w-full h-full transform-gpu will-change-transform"
                        initial={{ rotateX: 0, rotateY: 0 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: mousePosition
                                ? `rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg)`
                                : 'rotateY(0deg) rotateX(0deg)'
                        }}
                        animate={mousePosition ? {
                            rotateY: mousePosition.x * 15, // Adjust the multiplier for more/less rotation
                            rotateX: -mousePosition.y * 15,
                        } : {
                            rotateY: 0,
                            rotateX: 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            mass: 0.8
                        }}
                    >
                        {/* 3D lighting effects */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600/40 via-fuchsia-500/30 to-indigo-600/40 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-all duration-300"></div>

                        {/* Outer ring - adds depth */}
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-indigo-500/20"></div>

                        {/* Main circular photo container */}
                        <div className="relative overflow-hidden rounded-full border border-white/20 shadow-[0_20px_50px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:shadow-[0_20px_80px_rgba(139,92,246,0.4)]">
                            {/* Perfect circle with 1:1 aspect ratio */}
                            <div className="aspect-square w-full relative">
                                <Image
                                    src={heroImage}
                                    alt="Professional headshot"
                                    fill
                                    className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />

                                {/* Shine effect that follows mouse */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-transparent to-white/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: mousePosition ?
                                            `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(255,255,255,0.3), transparent 60%)`
                                            : 'none'
                                    }}
                                ></div>

                                {/* Bottom shadow for depth */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a12]/80 to-transparent"></div>

                                {/* Edge highlight for 3D effect */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        boxShadow: mousePosition
                                            ? `inset ${-mousePosition.x * 10}px ${-mousePosition.y * 10}px 10px rgba(255,255,255,0.1)`
                                            : 'none'
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* 3D decorative elements */}
                        <div
                            className="absolute top-1/2 -right-6 w-12 h-12 border border-purple-500/30 rounded-full animate-float-slow hidden lg:block blur-[1px] transform -translate-y-1/2"
                            style={{
                                transform: mousePosition
                                    ? `translateZ(${mousePosition.x * 20}px) translateY(-50%)`
                                    : 'translateY(-50%)'
                            }}
                        ></div>
                        <div
                            className="absolute -bottom-4 left-1/4 w-8 h-8 border border-indigo-500/20 rounded-full animate-float-slow2 hidden lg:block blur-[0.5px]"
                            style={{
                                transform: mousePosition
                                    ? `translateZ(${-mousePosition.y * 15}px)`
                                    : 'none'
                            }}
                        ></div>
                    </motion.div>
                </div>
            </div>

            {/* Arrow for desktop */}
            {/* <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <svg
                    className="w-6 h-6 mx-auto animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div> */}
        </div>
    );
}