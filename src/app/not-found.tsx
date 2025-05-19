"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0a0a12] text-white flex flex-col items-center justify-center p-4">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-8xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent mb-4">404</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
                    <p className="text-gray-300 mb-10">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        href="/"
                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition-all shadow-lg shadow-purple-500/20 w-full sm:w-auto"
                    >
                        <FaHome className="mr-2" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-lg text-white font-medium hover:bg-white/5 transition-all w-full sm:w-auto"
                    >
                        <FaArrowLeft className="mr-2" />
                        Go Back
                    </button>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <motion.div
                className="absolute bottom-10 left-10 w-20 h-20 border border-purple-500/10 rounded-lg rotate-12 hidden md:block"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 12 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>

            <motion.div
                className="absolute top-20 right-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden md:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            ></motion.div>
        </div>
    );
}
