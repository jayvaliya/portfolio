"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// Temporarily commenting out unused imports
// import { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { EMAILJS_CONFIG } from '../config/emailjs';

export default function Contact() {
    // Form state and handlers - temporarily commented out
    /*
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const formRef = useRef(null); 
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Map form field names to state properties
        if (name === 'from_name') {
            setFormData(prev => ({ ...prev, name: value }));
        } else if (name === 'from_email') {
            setFormData(prev => ({ ...prev, email: value }));
        } else if (name === 'message') {
            setFormData(prev => ({ ...prev, message: value }));
        } else {
            // Fallback for any other fields
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }; 
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Debug info
        console.log("Attempting to send email with EmailJS...");

        // Form data validation
        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill out all fields");
            setIsSubmitting(false);
            return;
        }

        try {
            // Using EmailJS to send the form data
            if (formRef.current) {
                // Log form data for debugging
                console.log("Form element:", formRef.current);

                // First try using direct send method
                try {
                    const result = await emailjs.send(
                        EMAILJS_CONFIG.SERVICE_ID,
                        EMAILJS_CONFIG.TEMPLATE_ID,
                        {
                            from_name: formData.name,
                            from_email: formData.email,
                            message: formData.message,
                            to_name: "Jay Valiya", // Add recipient name
                            to_email: 'valiyajay555@gmail.com', // Explicitly set recipient
                            reply_to: formData.email // Make sure reply-to is set
                        },
                        EMAILJS_CONFIG.PUBLIC_KEY
                    );

                    console.log("Email sent result:", result.text);

                    if (result.text === 'OK') {
                        console.log("Email sent successfully!");
                        setSubmitted(true);
                        setFormData({ name: '', email: '', message: '' });

                        // Reset the "submitted" state after a while
                        setTimeout(() => setSubmitted(false), 5000);
                    }
                } catch (error) {
                    console.error("Direct send failed, trying form method:", error);                    
                    // Fallback to sendForm method
                    // First ensure form has all the necessary fields set properly
                    if (formRef.current) {
                        const formElement = formRef.current as HTMLFormElement;

                        // Make sure hidden fields are properly set
                        let toEmailField = formElement.elements.namedItem('to_email') as HTMLInputElement;
                        if (!toEmailField) {
                            toEmailField = document.createElement('input');
                            toEmailField.type = 'hidden';
                            toEmailField.name = 'to_email';
                            formElement.appendChild(toEmailField);
                        }
                        toEmailField.value = 'valiyajay555@gmail.com';

                        // Log the form data to verify
                        const formData = new FormData(formElement);
                        console.log("Form data before sendForm:", Object.fromEntries(formData.entries()));

                        const result = await emailjs.sendForm(
                            EMAILJS_CONFIG.SERVICE_ID,
                            EMAILJS_CONFIG.TEMPLATE_ID,
                            formElement,
                            { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
                        );

                        console.log("Email sent result (form method):", result.text);

                        if (result.text === 'OK') {
                            console.log("Email sent successfully with form method!");
                            setSubmitted(true);
                            setFormData({ name: '', email: '', message: '' });

                            // Reset the "submitted" state after a while
                            setTimeout(() => setSubmitted(false), 5000);
                        }
                    }
                }
            }
        } catch (error: unknown) {
            console.error('Error sending email:', error);
            const err = error as { text?: string; message?: string };
            if (err.text) {
                setError(`Error: ${err.text}`);
            } else if (err.message) {
                setError(`Error: ${err.message}`);
            } else {
                setError("There was an error sending your message. Please try again later.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };    */
    const socialLinks = [
        { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/jayvaliya', rel: 'noopener noreferrer' },
        { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/jay-valiya', rel: 'noopener noreferrer' },
        { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: 'https://x.com/jayvaliya09', rel: 'noopener noreferrer' }
    ];

    return (
        <section className="relative py-20 md:py-32 bg-[#0a0a12] overflow-hidden" id="contact">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-[15%] w-64 h-64 rounded-full bg-purple-700/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-[5%] w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section heading */}                <div className="flex flex-col items-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3"></div>
                    <p className="text-gray-300 text-center max-w-2xl mt-6 text-base md:text-lg px-4">
                        Interested in working together? Feel free to reach out through email or social media.
                    </p>
                </div>                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact form - temporarily commented out */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl border border-white/10 backdrop-blur-sm p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                            {submitted ? (
                                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                                    <p className="text-white">Thank you for your message! I'll get back to you soon.</p>
                                </div>
                            ) : (<form ref={formRef} onSubmit={handleSubmit}>
                                {error && (
                                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center mb-6">
                                        <p className="text-white">{error}</p>
                                    </div>
                                )}                                
                                <input
                                    type="hidden"
                                    name="to_email"
                                    value="valiyajay555@gmail.com"
                                />
                                <input
                                    type="hidden"
                                    name="to_name"
                                    value="Jay Valiya"
                                />
                                <input
                                    type="hidden"
                                    name="reply_to"
                                    value={formData.email}
                                />
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="from_name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-purple-900/20 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="from_email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-purple-900/20 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 bg-purple-900/20 border border-white/10 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white font-medium transition-all hover:from-purple-600 hover:to-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                            )}
                        </div>
                    </motion.div> */}

                    {/* Contact info and social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 rounded-xl border border-white/10 backdrop-blur-sm p-8 shadow-lg h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

                            <p className="text-gray-300 mb-8">
                                Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you.
                            </p>                            <div className="space-y-4 mb-12">
                                <div className="flex items-center">
                                    <FaEnvelope className="text-purple-400 w-5 h-5 mr-3" />
                                    <button
                                        className="text-gray-300 hover:text-white hover:underline transition-all bg-transparent border-0 p-0 cursor-pointer"
                                        onClick={() => {
                                            navigator.clipboard.writeText("valiyajay555@gmail.com");
                                            alert("Email copied to clipboard!");
                                        }}
                                    >
                                        valiyajay555@gmail.com
                                    </button>
                                </div>
                            </div><h4 className="text-xl font-semibold text-white mb-4">Find Me On</h4>                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((link, index) =>
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel={link.rel || "noopener noreferrer"}
                                        className="flex items-center justify-center w-12 h-12 md:p-3 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-lg border border-white/10 text-white hover:border-purple-500/30 transition-all"
                                        title={link.name}
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                )}
                            </div>

                            <div className="mt-auto pt-12">
                                <p className="text-gray-400 text-sm">
                                    I'm currently {" "}
                                    <span className="text-green-400">available</span>
                                    {" "} for freelance projects and full-time opportunities.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute right-4 bottom-10 w-24 h-24 border border-purple-500/10 rounded-lg rotate-12 hidden lg:block"></div>
            <div className="absolute left-10 top-20 w-16 h-16 border border-indigo-500/10 rounded-full hidden lg:block"></div>
        </section>
    );
}
