import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedContainerProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    animation?: 'fade-up' | 'fade-in' | 'scale-up';
}

export function AnimatedContainer({ children, delay = 0, className = '', animation = 'fade-up' }: AnimatedContainerProps) {
    const getVariants = () => {
        switch (animation) {
            case 'fade-up':
                return {
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                };
            case 'fade-in':
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                };
            case 'scale-up':
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                };
            default:
                return {
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                };
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
            variants={getVariants()}
        >
            {children}
        </motion.div>
    );
}
