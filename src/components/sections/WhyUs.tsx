"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Map, Clock } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6 text-orange-500" />,
        title: "Lightning Fast Delivery",
        description: "Orders delivered to your doorstep in 10-30 minutes flat.",
    },
    {
        icon: <Map className="w-6 h-6 text-blue-500" />,
        title: "Supporting Local Vendors",
        description: "We partner with stores in Tamkuhi Raj to boost local economy.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
        title: "100% Return Policy",
        description: "Not satisfied? Get instant replacements or refunds. No questions asked.",
    },
    {
        icon: <Clock className="w-6 h-6 text-purple-500" />,
        title: "Open Early & Late",
        description: "From 6 AM breakfast runs to 11 PM midnight cravings, we're here.",
    },
];

export function WhyUs() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Why Choose <span className="text-gradient">Tamkuhi Bazaar?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We&apos;re not just another delivery app. We are built specifically for the towns of Purvanchal. We understand the local needs, shops, and preferences better than anyone else.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-background border border-border shadow-sm flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Visual Image grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] lg:h-[600px] w-full"
                    >
                        <div className="absolute inset-0 grid grid-cols-2 gap-4 p-4">
                            <div className="col-span-1 row-span-2 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-3xl overflow-hidden glass border-white/20 flex flex-col items-center justify-center p-6 text-center shadow-xl">
                                <span className="text-8xl mb-4 drop-shadow-md">🛵</span>
                                <h3 className="font-extrabold text-2xl text-foreground">Local Riders</h3>
                                <p className="text-muted-foreground text-sm mt-2">Drawn from our own community</p>
                            </div>
                            <div className="col-span-1 row-span-1 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-3xl overflow-hidden glass border-white/20 flex items-center justify-center flex-col shadow-xl">
                                <span className="text-6xl mb-2 drop-shadow-md">🏪</span>
                                <h3 className="font-bold text-lg text-foreground">Trusted Shops</h3>
                            </div>
                            <div className="col-span-1 row-span-1 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-3xl overflow-hidden glass border-white/20 flex items-center justify-center flex-col shadow-xl">
                                <span className="text-6xl mb-2 drop-shadow-md">🍎</span>
                                <h3 className="font-bold text-lg text-foreground">Highest Quality</h3>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
