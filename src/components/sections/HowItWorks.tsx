"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Zap } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-8 h-8 text-orange-500" />,
        title: "Browse Products",
        description: "Search from thousands of local products and daily essentials at the best prices.",
        bgClass: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
        icon: <ShoppingBag className="w-8 h-8 text-primary" />,
        title: "Add to Cart",
        description: "Select your favorite items and proceed to a fast, secure checkout.",
        bgClass: "bg-red-100 dark:bg-red-900/20",
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-600" />,
        title: "Get Delivered Fast",
        description: "Sit back and relax. Your order will be at your doorsteps in 10-30 minutes.",
        bgClass: "bg-yellow-100 dark:bg-yellow-900/20",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        How <span className="text-gradient">Tamkuhi Bazaar</span> Works
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Getting your daily essentials delivered is as easy as 1-2-3. We&apos;ve simplified the process so you save time.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
                >
                    {/* Connecting Line for Desktop */}
                    <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-orange-200 via-primary/50 to-yellow-200 dark:from-orange-900/50 dark:via-primary/30 dark:to-yellow-900/50 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative group">
                            <div className="card-premium p-8 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-24 h-24 rounded-3xl ${step.bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                    {step.icon}
                                </div>

                                {/* Step Number Badge */}
                                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-background border-2 border-primary text-primary font-bold flex items-center justify-center text-sm shadow-sm">
                                    {index + 1}
                                </div>

                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
