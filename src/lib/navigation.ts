"use client";

import { useEffect } from 'react';

export function useScrollRestoration() {
    useEffect(() => {
        // Scroll to section when hash changes
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 0);
            }
        };

        // Smooth scroll for all hash links
        const handleClick = (e: MouseEvent) => {
            const link = e.target as HTMLElement;
            const anchor = link.closest('a');

            if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
                e.preventDefault();

                // Close mobile menu if open
                const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]');
                if (mobileMenuButton) {
                    const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
                    if (expanded) {
                        (mobileMenuButton as HTMLElement).click();
                    }
                }

                const elementId = anchor.hash;
                const element = document.querySelector(elementId);

                if (element) {
                    window.history.pushState(null, '', elementId);
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        document.addEventListener('click', handleClick);

        // Handle initial hash on page load
        if (window.location.hash) {
            handleHashChange();
        }

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.removeEventListener('click', handleClick);
        };
    }, []);
}
