import Link from "next/link";

export default function BlogPage() {
    return (
        <>
            <h1>Tamkuhi Bazaar Blog</h1>
            <p className="lead">Stories, updates, and community highlights from the heart of Purvanchal.</p>

            <div className="space-y-12 mt-12">
                <article className="border-b border-border pb-10">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Company News</span>
                    <Link href="/blog/expansion">
                        <h2 className="mt-2 mb-4 hover:text-primary transition-colors cursor-pointer">We are expanding our delivery zones!</h2>
                    </Link>
                    <p className="text-muted-foreground mb-4">Great news for the residents of Kasia and Hata. Starting next month, our 30-minute delivery guarantee will cover your neighborhoods entirely.</p>
                    <Link href="/blog/expansion" className="text-primary font-medium hover:underline">Read full story →</Link>
                </article>

                <article className="border-b border-border pb-10">
                    <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Local Spotlight</span>
                    <Link href="/blog/farmers">
                        <h2 className="mt-2 mb-4 hover:text-primary transition-colors cursor-pointer">Meet the Farmers Behind Your Fresh Produce</h2>
                    </Link>
                    <p className="text-muted-foreground mb-4">We spent a day in the fields surrounding Tamkuhi Raj to see exactly where your daily vegetables come from. The dedication is inspiring.</p>
                    <Link href="/blog/farmers" className="text-primary font-medium hover:underline">Read full story →</Link>
                </article>

                <article>
                    <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">Tech Updates</span>
                    <Link href="/blog/tracking">
                        <h2 className="mt-2 mb-4 hover:text-primary transition-colors cursor-pointer">Introducing Live Cart Tracking</h2>
                    </Link>
                    <p className="text-muted-foreground mb-4">You asked, we delivered. You can now see exactly where your rider is with our new map integration feature.</p>
                    <Link href="/blog/tracking" className="text-primary font-medium hover:underline">Read full story →</Link>
                </article>
            </div>
        </>
    );
}
