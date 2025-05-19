"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Journey', href: '#journey' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'Email', icon: <FaEnvelope />, href: 'mailto:valiyajay555@gmail.com' },
        { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/jayvaliya' },
        { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/in/jay-valiya' },
        { name: 'Twitter', icon: <FaTwitter />, href: 'https://x.com/jayvaliya09' }
    ];

    return (
        <footer className="relative bg-[#060609] text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500"></div>
                <div className="absolute bottom-1/3 left-[15%] w-64 h-64 rounded-full bg-purple-700/3 blur-3xl"></div>
                <div className="absolute top-1/4 right-[5%] w-72 h-72 rounded-full bg-indigo-600/3 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
                    {/* Brand and description */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent mb-4">Jay Valiya</h2>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Building innovative digital solutions that blend creativity with technical excellence. Let's create something amazing together.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Back to top button */}
                    <div className="flex flex-col items-end justify-end">
                        <button
                            onClick={scrollToTop}
                            className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-center group"
                            aria-label="Back to top"
                        >
                            <FaArrowUp className="text-white group-hover:transform group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 py-6 text-center md:text-left md:flex md:items-center md:justify-between">
                    <div className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Jay Valiya. All rights reserved.
                    </div>
                    <div className="text-gray-500 text-sm mt-2 md:mt-0">
                        Made with passion and Next.js
                    </div>
                </div>
            </div>
        </footer>
    );
}
