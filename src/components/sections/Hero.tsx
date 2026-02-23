"use client";

import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background">
                <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-pulse" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-400/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-30" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start space-y-8"
                    >
                        <Badge variant="secondary" className="px-3 py-1.5 text-sm gap-2 glass border-primary/20">
                            <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                            Live Delivery in 10-30 mins
                        </Badge>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                            <span className="block">Food & Groceries</span>
                            <span className="text-gradient">Delivered Fast.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                            Local stores, best prices, and lightning-fast delivery to Tamkuhi Raj, Sewarhi, Fazilnagar, and Kasia.
                        </p>

                        {/* Search/Location Bar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="w-full max-w-md flex flex-col sm:flex-row gap-2"
                        >
                            <div className="relative w-full group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Enter your delivery location..."
                                    className="w-full h-14 pl-12 pr-4 rounded-full border border-input bg-background/50 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm transition-all"
                                />
                            </div>
                            <Button size="lg" className="h-14 px-8 rounded-full text-lg w-full sm:w-auto">
                                Order Now
                            </Button>
                        </motion.div>

                        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground pt-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex -space-x-2">
                                    {[
                                        { bg: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300", initial: "A" },
                                        { bg: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300", initial: "R" },
                                        { bg: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300", initial: "P" },
                                        { bg: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300", initial: "S" },
                                    ].map((user, i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full ${user.bg} border-2 border-background flex items-center justify-center text-xs font-bold overflow-hidden shadow-sm`}>
                                            {user.initial}
                                        </div>
                                    ))}
                                </div>
                                <span>10k+ Happy Customers</span>
                            </div>
                            <div className="w-px h-10 bg-border" />
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-1 text-foreground font-bold">
                                    4.8 <span className="text-yellow-400">★</span>
                                </span>
                                <span>App Store Rating</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative lg:h-[600px] flex items-center justify-center lg:justify-end"
                    >
                        {/* Abstract Premium Visual Representation */}
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Main App Mockup Outline */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-orange-400/10 rounded-[3rem] shadow-2xl border border-white/10 glass transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 overflow-hidden flex items-center justify-center">
                                <div className="w-[85%] h-[90%] bg-card rounded-[2rem] shadow-inner p-4 flex flex-col gap-3 border border-border overflow-hidden relative">
                                    {/* App Header */}
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="w-20 h-4 bg-primary/20 rounded-full" />
                                        <div className="w-7 h-7 bg-secondary rounded-full" />
                                    </div>

                                    {/* Search Bar */}
                                    <div className="w-full h-10 bg-secondary/50 rounded-xl flex items-center px-3 gap-2">
                                        <div className="w-4 h-4 rounded-full bg-muted" />
                                        <div className="w-24 h-2 bg-muted rounded-full" />
                                    </div>

                                    {/* Banner */}
                                    <div className="w-full h-24 bg-gradient-to-r from-orange-400 to-primary rounded-xl mt-1 flex items-center p-3 relative overflow-hidden shadow-sm">
                                        <div className="w-20 h-20 bg-white/20 rounded-full absolute -right-6 -bottom-6" />
                                        <div className="flex flex-col gap-2 relative z-10">
                                            <div className="w-16 h-3 bg-white/50 rounded-full" />
                                            <div className="w-24 h-4 bg-white shadow-sm rounded-full" />
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div className="grid grid-cols-3 gap-3 mt-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex flex-col items-center gap-1.5">
                                                <div className="w-12 h-12 bg-secondary/60 rounded-full shadow-sm" />
                                                <div className="w-8 h-2 bg-muted rounded-full" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Products Grid */}
                                    <div className="grid grid-cols-2 gap-3 mt-2 flex-grow">
                                        {[1, 2].map((i) => (
                                            <div key={i} className="bg-secondary/30 rounded-xl p-2 flex flex-col gap-2 border border-border/50">
                                                <div className="w-full h-16 bg-background rounded-lg shadow-sm" />
                                                <div className="w-2/3 h-2 bg-muted rounded-full mt-1" />
                                                <div className="w-1/3 h-3 bg-primary/80 rounded-full" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Element 1 - Delivery Badge */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-8 top-[20%] p-4 bg-background rounded-2xl shadow-xl border border-border flex items-center gap-3 z-10 hidden sm:flex"
                            >
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🛵</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Arriving in</p>
                                    <p className="text-green-600 dark:text-green-400 font-extrabold">12 mins</p>
                                </div>
                            </motion.div>

                            {/* Floating Element 2 - Discount */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-12 bottom-[25%] p-4 bg-background rounded-2xl shadow-xl border border-border flex items-center gap-3 z-10 hidden sm:flex"
                            >
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🔥</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Super Offer</p>
                                    <p className="text-primary font-extrabold">50% OFF</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
