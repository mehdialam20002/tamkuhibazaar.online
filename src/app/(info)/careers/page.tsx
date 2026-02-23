import { Briefcase, MapPin, Clock, Users } from "lucide-react";

export default function CareersPage() {
    return (
        <section className="min-h-screen bg-background py-16 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">

                {/* Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Careers at Tamkuhi Bazaar
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join us in revolutionizing local commerce in Purvanchal. We are always looking for driven, passionate individuals to grow with us.
                    </p>
                </div>

                {/* Open Positions */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-primary" />
                        Open Positions
                    </h2>

                    <div className="space-y-6">

                        {/* Job Card */}
                        <div className="p-6 border rounded-2xl bg-card shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Delivery Partner (Rider)</h3>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" /> Tamkuhi Raj & Kasia
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> Full-time / Part-time
                                </span>
                            </div>

                            <p className="text-muted-foreground mb-4">
                                Earn competitive payouts, flexible hours, and be the face of Tamkuhi Bazaar in your neighborhood.
                            </p>

                            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition">
                                Apply Now
                            </button>
                        </div>

                        {/* Job Card */}
                        <div className="p-6 border rounded-2xl bg-card shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">City Operations Manager</h3>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" /> Sewarhi
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> Full-time
                                </span>
                            </div>

                            <p className="text-muted-foreground mb-4">
                                Oversee daily logistics, manage rider fleets, and ensure lightning-fast delivery operations across fulfillment centers.
                            </p>

                            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition">
                                Apply Now
                            </button>
                        </div>

                        {/* Job Card */}
                        <div className="p-6 border rounded-2xl bg-card shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Vendor Onboarding Specialist</h3>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" /> Remote / Field Work
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> Full-time
                                </span>
                            </div>

                            <p className="text-muted-foreground mb-4">
                                Help local shop owners transition to the digital economy by onboarding them onto our platform.
                            </p>

                            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition">
                                Apply Now
                            </button>
                        </div>

                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center">
                    <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-4">Don’t see a perfect fit?</h2>
                    <p className="text-muted-foreground mb-6">
                        We are growing fast! Send your resume and we will reach out when a suitable opportunity opens up.
                    </p>
                    <a
                        href="mailto:careers@tamkuhibazaar.in"
                        className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
                    >
                        careers@tamkuhibazaar.in
                    </a>
                </div>

            </div>
        </section>
    );
}