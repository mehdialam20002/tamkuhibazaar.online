import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border mt-20 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block relative h-12 w-48 mb-2">
                            <Image
                                src="/logo.png"
                                alt="Tamkuhi Bazaar"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-muted-foreground">
                            Your hyperlocal quick commerce platform. Groceries, food, and essentials delivered in 10-30 minutes.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors glass">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors glass">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors glass">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="/partner" className="hover:text-primary transition-colors">Partner with us</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>
                                <Link href="/help" className="hover:text-primary transition-colors">Help Center</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span>Tamkuhi Raj, Kushinagar, Uttar Pradesh, 274406</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>support@tamkuhibazaar.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Tamkuhi Bazaar. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                    </div>
                </div>
            </div>
        </footer>
    );
}
