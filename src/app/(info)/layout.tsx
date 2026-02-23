"use client";

import { motion } from "framer-motion";

export default function InfoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen pt-32 pb-24 bg-secondary/20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="card-premium p-8 md:p-12 prose dark:prose-invert prose-primary max-w-none"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
