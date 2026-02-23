import { Users, Target, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="min-h-screen bg-background py-16 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        About Tamkuhi Bazaar
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {`Tamkuhi Bazaar is Purvanchal's first dedicated hyperlocal quick commerce platform, bringing the convenience of instant delivery to connecting towns.`}
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">

                    {/* Mission */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <Target className="w-10 h-10 text-primary mb-4" />
                        <h2 className="text-xl font-bold mb-3">Our Mission</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {`We aim to empower local vendors while providing unparalleled convenience to the residents of Tamkuhi Raj, Sewarhi, Fazilnagar, and Kasia. By bridging the gap between local shops and modern digital logistics, we are building a sustainable local economy.`}
                        </p>
                    </div>

                    {/* Why We Started */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <Zap className="w-10 h-10 text-primary mb-4" />
                        <h2 className="text-xl font-bold mb-3">Why We Started</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {`Too often, incredible technological advancements remain restricted to Tier-1 cities. We believe the people of Purvanchal deserve the same standard of living, speed, and quality of service as anyone in a major metropolitan area.`}
                        </p>
                    </div>

                    {/* Team */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <Users className="w-10 h-10 text-primary mb-4" />
                        <h2 className="text-xl font-bold mb-3">The Team</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {`We are a passionate team of local entrepreneurs, delivery partners, and tech enthusiasts working round the clock to ensure your daily essentials reach you in under 30 minutes.`}
                        </p>
                    </div>

                </div>

                {/* Bottom Highlight Section */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Building the Future of Local Commerce</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {`Tamkuhi Bazaar is more than just a delivery platform — it's a movement to digitize local markets and empower communities with technology.`}
                    </p>
                </div>

            </div>
        </section>
    );
}