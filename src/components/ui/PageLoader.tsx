// Minimal rectangle loading animation component

import { motion } from 'framer-motion';

export default function PageLoader() {
    return (
        <div className="fixed inset-0 z-50 bg-white grid place-items-center">
            <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-8 bg-neutral-800"
                        animate={{
                            scaleY: [1, 2, 1],
                            opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
