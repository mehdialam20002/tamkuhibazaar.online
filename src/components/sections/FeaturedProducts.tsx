"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const products = [
    {
        id: 1,
        name: "Farm Fresh Tomatoes",
        price: "₹40",
        originalPrice: "₹60",
        discount: "33% OFF",
        weight: "1 kg",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80",
        tag: "Bestseller",
    },
    {
        id: 2,
        name: "Aashirvaad Shudh Chakki Atta",
        price: "₹199",
        originalPrice: "₹230",
        discount: "13% OFF",
        weight: "5 kg",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80",
    },
    {
        id: 3,
        name: "Amul Taaza Toned Milk",
        price: "₹27",
        originalPrice: "₹28",
        discount: "3% OFF",
        weight: "500 ml",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
        tag: "Daily Need",
    },
    {
        id: 4,
        name: "Fortune Sunlite Refined Oil",
        price: "₹135",
        originalPrice: "₹165",
        discount: "18% OFF",
        weight: "1 L",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80",
    },
    {
        id: 5,
        name: "Maggi 2-Minute Noodles",
        price: "₹14",
        originalPrice: "₹14",
        discount: "",
        weight: "70 g",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80",
    },
    {
        id: 6,
        name: "Fresh Onions",
        price: "₹30",
        originalPrice: "₹45",
        discount: "33% OFF",
        weight: "1 kg",
        image: "https://images.unsplash.com/photo-1518977673343-a4e6143c086d?w=500&q=80",
    },
];

export function FeaturedProducts() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                            Best <span className="text-gradient">Sellers</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Top-rated products loved by our customers.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            key={product.id}
                            className="min-w-[280px] md:min-w-[300px] snap-start"
                        >
                            <div className="card-premium h-full flex flex-col relative group pb-4">

                                {/* Product Tags */}
                                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                    {product.discount && (
                                        <Badge className="bg-primary text-white pointer-events-none shadow-sm">
                                            {product.discount}
                                        </Badge>
                                    )}
                                    {product.tag && (
                                        <Badge variant="secondary" className="pointer-events-none w-max glass">
                                            {product.tag}
                                        </Badge>
                                    )}
                                </div>

                                <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-red-500 hover:border-red-200 transition-colors opacity-0 group-hover:opacity-100">
                                    <Heart className="w-5 h-5" />
                                </button>

                                {/* Image Wrapper */}
                                <div className="w-full h-48 bg-secondary/30 rounded-t-2xl relative overflow-hidden group-hover:bg-secondary/50 transition-colors mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 MixBlendMode-multiply dark:mix-blend-normal"
                                        sizes="(max-width: 768px) 100vw, 300px"
                                    />
                                </div>

                                <div className="px-5 flex flex-col flex-grow">
                                    <p className="text-sm text-muted-foreground mb-1">{product.weight}</p>
                                    <h3 className="font-bold text-lg mb-4 line-clamp-2 leading-tight">
                                        {product.name}
                                    </h3>

                                    <div className="mt-auto flex items-center justify-between">
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="font-extrabold text-xl">{product.price}</span>
                                                {product.originalPrice && product.originalPrice !== product.price && (
                                                    <span className="text-sm text-muted-foreground line-through decoration-1">
                                                        {product.originalPrice}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all shadow-sm">
                                            <Plus className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}
