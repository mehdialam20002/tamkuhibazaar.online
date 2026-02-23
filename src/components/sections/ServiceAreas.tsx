"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const locations = [
    { name: "Tamkuhi Raj", time: "10-20 mins", vendors: "50+" },
    { name: "Sewarhi", time: "15-25 mins", vendors: "30+" },
    { name: "Fazilnagar", time: "15-30 mins", vendors: "25+" },
    { name: "Kasia", time: "20-30 mins", vendors: "20+" },
];

export function ServiceAreas() {
    return (
        <section id="service-areas" className="py-24 bg-background relative border-y border-border overflow-hidden">
            {/* Decorative background map texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge className="mb-6 bg-red-100/80 text-red-600 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-100/90 text-sm py-1 px-4 shadow-none border-none uppercase tracking-widest font-bold" variant="secondary">
                        Service Areas
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Where We Deliver
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Currently serving these areas with lightning-fast delivery. More cities coming soon!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {locations.map((loc, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            key={loc.name}
                            className="bg-card dark:bg-secondary/30 rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-red-500/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Active
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">{loc.name}</h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center text-muted-foreground pb-3 border-b border-border/50">
                                    <span>Delivery Time</span>
                                    <span className="font-extrabold text-foreground">{loc.time}</span>
                                </div>
                                <div className="flex justify-between items-center text-muted-foreground pt-1">
                                    <span>Vendors</span>
                                    <span className="font-extrabold text-foreground">{loc.vendors}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-6xl mx-auto mt-10 p-5 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border-2 border-dashed border-red-200 dark:border-red-900/50 text-center"
                >
                    <span className="text-red-700 dark:text-red-400 font-medium">
                        Expanding to more areas soon! Want us in your city? <a href="#" className="underline font-bold hover:text-red-800 dark:hover:text-red-300 transition-colors">Let us know</a>
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
