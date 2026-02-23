export default function PartnerPage() {
    return (
        <>
            <h1>Partner With Us</h1>
            <p className="lead">
                Grow your business by joining the fast-growing Tamkuhi Bazaar local network. Reach thousands of customers daily.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                    <h3 className="text-primary mt-0">For Local Shops & Vendors</h3>
                    <p>Sell your groceries, fresh produce, and essentials online. We handle the delivery and tech while you focus on quality.</p>
                    <ul className="text-sm">
                        <li>Zero setup fees</li>
                        <li>Instant payouts</li>
                        <li>Dedicated account manager</li>
                    </ul>
                </div>
                <div className="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20">
                    <h3 className="text-orange-600 mt-0">For Delivery Partners</h3>
                    <p>Turn your idle time into earnings. Work flexibly and be your own boss by joining our rider fleet.</p>
                    <ul className="text-sm">
                        <li>Weekly payouts</li>
                        <li>Insurance coverage</li>
                        <li>Performance bonuses</li>
                    </ul>
                </div>
            </div>

            <h2>How to Apply?</h2>
            <p>
                Ready to take the next step? Fill out our simple onboarding form, and our regional team will contact you within 24 hours to schedule a meeting and get you set up.
            </p>

            <form className="mt-8 space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium mb-1">Business/Full Name</label>
                    <input type="text" className="w-full p-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input type="tel" className="w-full p-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Partnership Type</label>
                    <select className="w-full p-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary outline-none">
                        <option>Shop Vendor</option>
                        <option>Delivery Rider</option>
                        <option>Wholesale Suppier</option>
                    </select>
                </div>
                <button type="button" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 mt-4">
                    Submit Request
                </button>
            </form>
        </>
    );
}
