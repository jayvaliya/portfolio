"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollRestoration } from '@/lib/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Use scroll restoration helper
    useScrollRestoration();

    useEffect(() => {
        console.log("Navbar component mounted");

        // Log active section changes for debugging
        console.log(`Initial active section: ${activeSection}`);

        // Check initial scroll position
        if (window.scrollY > 50) {
            setScrolled(true);
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Determine active section
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100; // Offset to trigger earlier

            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionId = section.getAttribute('id') || '';

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Journey', href: '#journey' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]; return (
        <header className={`fixed top-0 left-0 right-0 z-[51] transition-all duration-300 ${scrolled ? 'bg-[#0a0a12]/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">                    {/* Logo */}
                    <Link
                        href="#"
                        className="flex items-center"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">Jay Valiya</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">                        {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative text-sm font-medium transition-colors ${(activeSection === item.href.substring(1) ||
                                (activeSection === '' && item.href === '#'))
                                ? 'text-white'
                                : 'text-gray-300 hover:text-white'
                                }`}
                        >
                            {item.name}
                            {(activeSection === item.href.substring(1) ||
                                (activeSection === '' && item.href === '#')) && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
                                )}
                        </Link>
                    ))}
                    </nav>

                    {/* Social links - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://github.com/jayvaliya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/jay-valiya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </a>                        <Link
                            href="#contact"
                            className="ml-4 px-4 py-2 border border-purple-500/20 rounded-md bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-white font-medium hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 top-[65px] bg-[#0a0a12]/95 backdrop-blur-lg z-40"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col h-full pt-6 px-4">
                            <nav className="flex flex-col space-y-4 mb-12">
                                {navigation.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >                                        <Link
                                        href={item.href}
                                        className={`block text-xl py-2 ${activeSection === item.href.substring(1) ? 'text-white font-bold' : 'text-white font-medium'
                                            }`}
                                        onClick={closeMenu}
                                    >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                className="flex items-center space-x-6 mt-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <a
                                    href="https://github.com/jayvaliya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jay-valiya/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </motion.div>

                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >                                <Link
                                href="#contact"
                                className="block w-full text-center px-6 py-3 border border-purple-500/20 rounded-md bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-white font-medium hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300"
                                onClick={closeMenu}
                            >
                                    Contact Me
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
