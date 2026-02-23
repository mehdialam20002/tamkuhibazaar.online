export default function CareersPage() {
    return (
        <>
            <h1>Careers at Tamkuhi Bazaar</h1>
            <p className="lead">
                Join us in revolutionizing local commerce in Purvanchal. We are always looking for driven, passionate individuals to help us expand.
            </p>

            <h2>Open Positions</h2>

            <div className="mt-8 space-y-6">
                <div className="p-6 border border-border rounded-xl bg-background">
                    <h3 className="mt-0 mb-2">Delivery Partner (Rider)</h3>
                    <p className="text-sm text-muted-foreground mt-0">Tamkuhi Raj & Kasia · Full-time / Part-time</p>
                    <p>Earn competitive payouts, flexible hours, and be the face of Tamkuhi Bazaar in your neighborhood.</p>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition">Apply Now</button>
                </div>

                <div className="p-6 border border-border rounded-xl bg-background">
                    <h3 className="mt-0 mb-2">City Operations Manager</h3>
                    <p className="text-sm text-muted-foreground mt-0">Sewarhi · Full-time</p>
                    <p>Oversee daily logistics, manage rider fleets, and ensure lightning-fast delivery times across our fulfillment centers.</p>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition">Apply Now</button>
                </div>

                <div className="p-6 border border-border rounded-xl bg-background">
                    <h3 className="mt-0 mb-2">Vendor Onboarding Specialist</h3>
                    <p className="text-sm text-muted-foreground mt-0">Remote / Field Work · Full-time</p>
                    <p>Help local shop owners transition to the digital economy by onboarding them onto our marketplace.</p>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition">Apply Now</button>
                </div>
            </div>

            <h2 className="mt-12">Don't see a fit?</h2>
            <p>
                We're growing fast! Send your resume to <strong>careers@tamkuhibazaar.in</strong> and we'll reach out if a relevant position opens up.
            </p>
        </>
    );
}
