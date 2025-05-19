"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Position {
    x: number;
    y: number;
}

export default function MouseFollower() {
    const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isClicking, setIsClicking] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [trailPositions, setTrailPositions] = useState<Position[]>([]);
    const maxTrailPoints = 5;

    useEffect(() => {
        // Check if device is mobile/touch device
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);
    useEffect(() => {
        // Only add mouse tracking on non-mobile devices
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            const newPosition = { x: e.clientX, y: e.clientY };
            setMousePosition(newPosition);

            // Update trail positions
            setTrailPositions(prev => {
                const newTrail = [newPosition, ...prev.slice(0, maxTrailPoints - 1)];
                return newTrail;
            });

            // Check if hovering over text
            const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
            const isText = hoveredElement instanceof HTMLParagraphElement ||
                hoveredElement instanceof HTMLHeadingElement ||
                hoveredElement instanceof HTMLSpanElement ||
                hoveredElement?.nodeType === Node.TEXT_NODE;

            if (isText) {
                document.documentElement.classList.add('cursor-text');
            } else {
                document.documentElement.classList.remove('cursor-text');
            }
        };    // Track hover states on interactive elements
        const handleMouseEnter = (e: Event) => {
            setIsHovering(true);

            // Add a special effect for buttons
            if (e.target instanceof HTMLButtonElement ||
                (e.target instanceof HTMLElement && e.target.getAttribute('role') === 'button')) {
                document.documentElement.classList.add('cursor-pointer');
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
            document.documentElement.classList.remove('cursor-pointer');
        };

        // Track mouse clicks
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Add event listeners for mouse movement and clicks
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Add event listeners for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });    // Clean up event listeners
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.classList.remove('cursor-text');
            document.documentElement.classList.remove('cursor-pointer');
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [isMobile, maxTrailPoints]); // Added maxTrailPoints to dependency array

    // Don't render anything on mobile
    if (isMobile) {
        return null;
    }

    return (
        <>
            {/* Main cursor - follows exactly */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 z-[9999] pointer-events-none mix-blend-screen"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 0 : isClicking ? 0.8 : 1,
                    opacity: isClicking ? 0.7 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Secondary cursor - follows with delay */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-purple-500/50 z-[9998] pointer-events-none"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
                    opacity: isClicking ? 0.5 : 0.8
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                    mass: 1,
                }}
            />

            {/* Trail effect */}
            {trailPositions.map((position, index) => (
                <motion.div
                    key={index}
                    className="fixed top-0 left-0 rounded-full bg-purple-400 mix-blend-screen pointer-events-none"
                    style={{
                        width: `${Math.max(4 - index * 0.8, 1)}px`,
                        height: `${Math.max(4 - index * 0.8, 1)}px`,
                        opacity: 1 - index * 0.2,
                        zIndex: 9997 - index,
                        x: position.x - 4 + index * 2,
                        y: position.y - 4 + index * 2
                    }}
                />
            ))}
        </>
    );
}
