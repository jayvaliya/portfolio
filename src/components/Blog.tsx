"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

export default function Blog() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Blog posts data
    const blogPosts = [
        {
            title: "Building Scalable React Applications: Lessons Learned",
            excerpt: "Insights from scaling React applications and the architecture patterns that have proven most effective in production environments.",
            date: "May 10, 2025",
            category: "React",
            image: "/blog-react.jpg", // Add these to your public folder
            url: "#" // Will link to actual blog posts when available
        },
        {
            title: "Optimizing MongoDB for High-Traffic Applications",
            excerpt: "A deep dive into MongoDB optimization techniques that helped improve performance by 60% on our most demanding projects.",
            date: "April 22, 2025",
            category: "Backend",
            image: "/blog-mongodb.jpg",
            url: "#"
        },
        {
            title: "The Evolution of Mobile Development with React Native",
            excerpt: "Exploring how React Native has transformed mobile development and when it's the right choice for your project.",
            date: "March 15, 2025",
            category: "Mobile",
            image: "/blog-mobile.jpg",
            url: "#"
        }
    ];

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden" id="blog">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-1/3 left-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl"></div>
                <div className="absolute top-1/4 right-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">Blog & Insights</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
                    <p className="text-gray-300 text-center max-w-2xl mt-6 text-lg">
                        Thoughts, lessons, and insights from my development journey
                    </p>
                </div>

                {/* Blog grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                        >
                            <Link href={post.url} className="block">
                                <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
                                    <div className="relative h-56 overflow-hidden">
                                        {/* Image placeholder - replace with actual images */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-indigo-500/50 group-hover:scale-105 transition-transform duration-500"></div>
                                        {/* <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        /> */}
                                        <div className="absolute top-4 left-4 bg-purple-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center text-sm text-gray-400 mb-3">
                                            <FaCalendarAlt className="mr-2" />
                                            <span>{post.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{post.title}</h3>

                                        <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>

                                        <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                                            <span className="mr-2">Read more</span>
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View all button */}
                <div className="flex justify-center mt-12">
                    <Link
                        href="#"
                        className="px-6 py-3 border border-purple-500/20 rounded-md bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-white font-medium hover:from-purple-500/20 hover:to-indigo-500/20 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                    >
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
