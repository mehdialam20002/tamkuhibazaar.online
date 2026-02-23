import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const getPost = (slug: string) => {
        if (slug === "farmers") {
            return {
                title: "Meet the Farmers Behind Your Fresh Produce",
                category: "Local Spotlight",
                date: "Oct 12, 2023",
                readTime: "5 min read",
                image: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=1600&q=80",
                author: "Ravi Kishan"
            }
        }
        if (slug === "tracking") {
            return {
                title: "Introducing Live Cart Tracking",
                category: "Tech Updates",
                date: "Oct 18, 2023",
                readTime: "3 min read",
                image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1600&q=80",
                author: "Tech Team"
            }
        }
        return {
            title: "We are expanding our delivery zones!",
            category: "Company News",
            date: "Oct 24, 2023",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=1600&q=80",
            author: "Tamkuhi Team"
        }
    }

    const post = getPost(params.slug);

    return (
        <article className="min-h-screen bg-background pb-20 pt-20 md:pt-24 lg:pt-0">
            <div className="relative w-full h-[60vh] min-h-[400px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                <div className="absolute bottom-0 w-full">
                    <div className="container mx-auto px-4 md:px-6 pb-12 max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center text-primary font-bold hover:underline mb-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
                        </Link>

                        <div className="mb-4">
                            <span className="text-secondary-foreground bg-secondary px-3 py-1 rounded-full font-bold tracking-widest uppercase text-xs">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-tight drop-shadow-md">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-foreground font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md">
                                    {post.author[0]}
                                </div>
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" /> {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary" /> {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 pt-12 max-w-3xl">
                <div className="prose prose-lg dark:prose-invert prose-primary mx-auto">

                    <p className="lead text-xl text-muted-foreground font-medium mb-8">
                        {`The future of quick commerce is here, and it's built specifically for the residents of Purvanchal. We believe that top-tier technology should be accessible everywhere, not just in metropolitan hubs.`}
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                        Bridging the Gap
                    </h2>

                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        {`Ever since we launched Tamkuhi Bazaar, the overwhelming response from Tamkuhi Raj and Sewarhi has been incredible. Hundreds of daily orders have proven that convenience is universally desired. Today, we are thrilled to announce the next step in our journey.`}
                    </p>

                    <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8 text-foreground/90 font-medium py-2">
                        {`"Our mission has always been simple: empower local vendors and deliver happiness to doorsteps within 30 minutes. Today, the circle grows."`}
                    </blockquote>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                        What this means for you
                    </h2>

                    <ul className="space-y-4 mb-8 text-muted-foreground">
                        <li>
                            <strong className="text-foreground">Faster Deliveries:</strong> With new micro-fulfillment centers, our delivery radius shrinks, meaning your essentials arrive hotter and fresher.
                        </li>
                        <li>
                            <strong className="text-foreground">More Vendors:</strong> We are onboarding 50+ new local shops across Kasia and Fazilnagar.
                        </li>
                        <li>
                            <strong className="text-foreground">Extended Hours:</strong> Nighttime deliveries are now being trialed in select zip codes.
                        </li>
                    </ul>

                    <p className="mb-12 text-muted-foreground leading-relaxed">
                        {`Stay tuned as we continue to roll out updates to the app. Make sure your Tamkuhi Bazaar application is updated to the latest version to access the new delivery zones. Thank you for making this local revolution possible!`}
                    </p>
                </div>

                <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <span className="font-bold mr-4">
                            {`Share this article:`}
                        </span>
                        <button className="text-muted-foreground hover:text-primary transition-colors p-2 glass rounded-full">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}