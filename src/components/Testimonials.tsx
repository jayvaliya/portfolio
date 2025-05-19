"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(0);

    // Testimonial data
    const testimonials = [
        {
            name: "Sarah Johnson",
            position: "Project Manager",
            company: "TechInnovate",
            quote: "Jay delivered exceptional work on our project. His technical skills combined with an intuitive understanding of our requirements resulted in a product that exceeded our expectations. A true professional who communicates clearly and delivers on time.",
            image: "/person1.jpg" // You'll need to add these images to your public folder
        },
        {
            name: "Michael Chen",
            position: "CTO",
            company: "StartupVision",
            quote: "Working with Jay was a seamless experience. His problem-solving abilities and attention to detail made our collaboration highly productive. He not only built exactly what we needed but also suggested valuable improvements we hadn't considered.",
            image: "/person2.jpg"
        },
        {
            name: "Priya Patel",
            position: "UI/UX Designer",
            company: "CreativeDigital",
            quote: "I've collaborated with Jay on multiple projects, and his ability to translate designs into functional code is impressive. He has a great eye for detail and ensures that the final product maintains the integrity of the design while performing flawlessly.",
            image: "/person3.jpg"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden" id="testimonials">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 right-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">What People Say</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
                    <p className="text-gray-300 text-center max-w-2xl mt-6 text-lg">
                        Feedback from clients and collaborators
                    </p>
                </div>

                {/* Testimonials carousel */}
                <div ref={ref} className="relative max-w-4xl mx-auto">
                    <FaQuoteLeft className="text-purple-500/10 text-8xl absolute -top-10 -left-4 z-0" />

                    <div className="overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <motion.div
                                        className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl border border-white/10 backdrop-blur-sm p-8 shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30 flex-shrink-0">
                                                {/* <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                /> */}
                                                {/* Placeholder for now */}
                                                <div className="w-full h-full bg-gradient-to-br from-purple-500/50 to-indigo-500/50"></div>
                                            </div>

                                            <div>
                                                <p className="text-gray-300 text-lg italic mb-6 relative z-10">"{testimonial.quote}"</p>

                                                <div>
                                                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                                                    <p className="text-purple-300">{testimonial.position}, {testimonial.company}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel controls */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${activeIndex === index
                                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 w-6'
                                    : 'bg-gray-600'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
