"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Tiwari",
        location: "Tamkuhi Raj",
        text: "Saved my life yesterday when guests arrived unannounced. Groceries delivered in literally 15 minutes! The app is super smooth too.",
        rating: 5,
        avatar: "RT",
    },
    {
        name: "Pooja Singh",
        location: "Sewarhi",
        text: "I love the local store integration. I get the exact same fresh vegetables from my trusted vendor but delivered to my home.",
        rating: 5,
        avatar: "PS",
    },
    {
        name: "Amit Gupta",
        location: "Fazilnagar",
        text: "Great discounts and the delivery riders are very polite. Tamkuhi Bazaar is exactly the startup our towns needed.",
        rating: 4,
        avatar: "AG",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-secondary/50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        Loved by <span className="text-gradient">Locals</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Don&apos;t just take our word for it. Here&apos;s what the people of Purvanchal are saying about our service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            key={idx}
                            className="card-premium p-8 relative flex flex-col h-full bg-background"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-muted-foreground leading-relaxed flex-grow text-lg mb-8 italic">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{t.name}</h4>
                                    <p className="text-sm text-primary font-medium">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
