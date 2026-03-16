// Minimal rectangle loading animation component

import { motion } from 'framer-motion';

export default function PageLoader() {
    // We can check the native window location since this is outside the RouterProvider
    // Or it might be shown during initial load of an interior page
    const isInterior = typeof window !== 'undefined' && window.location.pathname.includes('/interior');

    return (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
            {isInterior && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <img 
                        src="/images/interior-logo.png" 
                        alt="Jiachen Interior Design" 
                        className="h-12 md:h-16 object-contain"
                    />
                </motion.div>
            )}
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
