"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppDownload() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-gradient-to-br from-primary to-red-700 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shrink-0 text-white flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Decorative ripples */}
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-[50%] -right-[10%] w-[80%] h-[150%] rounded-[100%] border-[40px] border-white/10" />
                        <div className="absolute top-[10%] right-[10%] w-[40%] h-[80%] rounded-[100%] border-[20px] border-white/10" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative z-10 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Get the App. <br />
                            Order Faster.
                        </h2>
                        <p className="text-lg text-white/90 max-w-md font-medium">
                            Enjoy members-only exclusive discounts, live tracking, and faster checkouts.
                        </p>

                        <ul className="space-y-3 font-medium text-white/90">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-white" /> Access to Mega Flash Sales
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-white" /> Real-time order tracking
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-white" /> Faster checkout experience
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-full text-lg font-bold" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.tamkuhikart.app&pcampaignid=web_share", "_blank")}>
                                <Download className="mr-2 h-5 w-5" /> Download App
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-white border-white/30 hover:bg-white/10 h-14 px-8 rounded-full text-lg font-bold glass"
                                onClick={() => window.open("https://app.tamkuhibazaar.online/", "_blank")}
                            >
                                Open Web App
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Visual Phone Mockups */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative lg:h-[400px] w-full flex justify-center lg:justify-end lg:absolute lg:-right-10 lg:-bottom-20 z-10"
                    >
                        <div className="relative w-64 h-[500px] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden transform lg:rotate-[-5deg] lg:translate-y-10">
                            <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex justify-center rounded-b-3xl mx-16" />
                            <div className="w-full h-full bg-background flex flex-col pb-4">
                                {/* Mock UI */}
                                <div className="h-48 bg-primary/20 w-full" />
                                <div className="p-4 space-y-4 -mt-10">
                                    <div className="w-full h-24 bg-card rounded-2xl shadow-md p-3 flex flex-col justify-between">
                                        <div className="w-2/3 h-4 bg-secondary rounded" />
                                        <div className="flex justify-between items-end">
                                            <div className="w-1/3 h-6 bg-primary/20 rounded" />
                                            <div className="w-1/4 h-8 bg-primary rounded-lg" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="aspect-square bg-secondary rounded-2xl" />
                                        <div className="aspect-square bg-secondary rounded-2xl" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second offset phone */}
                        <div className="absolute right-0 lg:-right-20 top-20 w-64 h-[500px] bg-white rounded-[3rem] border-[8px] border-slate-200 shadow-2xl overflow-hidden transform lg:rotate-[5deg] hidden sm:block">
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 z-20 flex justify-center rounded-b-3xl mx-16" />
                            <div className="w-full h-full bg-slate-100 flex flex-col p-4 pt-10 gap-3">
                                <div className="w-full h-12 bg-white rounded-xl shadow-sm" />
                                <div className="w-full h-32 bg-white rounded-xl shadow-sm" />
                                <div className="w-full h-20 bg-primary/10 rounded-xl" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
