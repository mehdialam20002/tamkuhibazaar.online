"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
    { name: "Fresh Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=500&q=80", color: "bg-green-100/80 dark:bg-green-900/20", delay: 0 },
    { name: "Fresh Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80", color: "bg-red-100/80 dark:bg-red-900/20", delay: 0.1 },
    { name: "Dairy & Bakery", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80", color: "bg-blue-100/80 dark:bg-blue-900/20", delay: 0.2 },
    { name: "Atta, Rice & Dal", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80", color: "bg-amber-100/80 dark:bg-amber-900/20", delay: 0.3 },
    { name: "Meat & Fish", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80", color: "bg-rose-100/80 dark:bg-rose-900/20", delay: 0.4 },
    { name: "Snacks & Drinks", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&q=80", color: "bg-purple-100/80 dark:bg-purple-900/20", delay: 0.5 },
    { name: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80", color: "bg-teal-100/80 dark:bg-teal-900/20", delay: 0.6 },
    { name: "Cleaning Essentials", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500&q=80", color: "bg-sky-100/80 dark:bg-sky-900/20", delay: 0.7 },
    { name: "Sweet Tooths", image: "https://images.unsplash.com/photo-1550171394-b1ebdbd5d996?w=500&q=80", color: "bg-pink-100/80 dark:bg-pink-900/20", delay: 0.8 },
    { name: "Local Restaurants", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80", color: "bg-orange-100/80 dark:bg-orange-900/20", delay: 0.9 },
];

export function Categories() {
    return (
        <section id="categories" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                            Shop by <span className="text-gradient">Categories</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Find exactly what you need from our wide selection of high-quality local products.
                        </p>
                    </div>
                    <button className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 transition-all">
                        View All Categories →
                    </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: category.delay * 0.5 }}
                            key={index}
                            className="group cursor-pointer"
                        >
                            <div className={`card-premium aspect-square flex flex-col items-center justify-center p-4 text-center ${category.color} group-hover:scale-[1.03] overflow-hidden relative`}>
                                <div className="absolute inset-x-0 top-0 h-3/5 overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                                </div>
                                <h3 className="font-bold text-sm md:text-base leading-tight mt-auto pt-2 z-20">
                                    {category.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
