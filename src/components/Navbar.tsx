"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ShoppingBag, Search, Menu, X, Moon, Sun } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-40 sm:h-12 sm:w-48">
                        <Image
                            src="/logo.png"
                            alt="Tamkuhi Bazaar"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 font-medium">
                    <Link href="#how-it-works" className="hover:text-primary transition-colors">
                        How It Works
                    </Link>
                    <Link href="#categories" className="hover:text-primary transition-colors">
                        Categories
                    </Link>
                    <Link href="#service-areas" className="hover:text-primary transition-colors">
                        Locations
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative group">
                        <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                    </div>

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted && theme === "dark" ? (
                            <Sun className="w-5 h-5 text-yellow-400" />
                        ) : (
                            <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        )}
                    </button>

                    <button className="relative p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-colors group">
                        <ShoppingBag className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                            2
                        </span>
                    </button>

                    <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25">
                        Download App
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button className="relative">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                            2
                        </span>
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-1"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full glass border-t border-border/50 py-4 px-4 flex flex-col gap-4 md:hidden shadow-xl">
                    <Link
                        href="#how-it-works"
                        className="p-3 bg-secondary/50 rounded-xl font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        How It Works
                    </Link>
                    <Link
                        href="#categories"
                        className="p-3 bg-secondary/50 rounded-xl font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Categories
                    </Link>
                    <Link
                        href="#service-areas"
                        className="p-3 bg-secondary/50 rounded-xl font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Locations
                    </Link>

                    <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl font-medium">
                        <span>Theme</span>
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 bg-background rounded-full"
                        >
                            {mounted && theme === "dark" ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4" />}
                        </button>
                    </div>

                    <button className="w-full bg-primary text-white py-3 rounded-xl font-bold mt-2">
                        Download App
                    </button>
                </div>
            )}
        </header>
    );
}
