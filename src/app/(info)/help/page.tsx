import { Search, ChevronDown } from "lucide-react";

export default function HelpPage() {
    const faqs = [
        { q: "How long does delivery take?", a: "We guarantee delivery between 10 to 30 minutes depending on your exact location and traffic conditions." },
        { q: "What are your delivery hours?", a: "Our service is operational from 6:00 AM in the morning to 11:00 PM at night, seven days a week." },
        { q: "How do I return a damaged item?", a: "Simply take a picture of the damaged item within 2 hours of delivery and upload it in the 'My Orders' section. We will process an instant refund or replacement." },
        { q: "Do you deliver to my village?", a: "We are currently serving Tamkuhi Raj, Sewarhi, Fazilnagar, and Kasia along with their immediate adjoining areas. Check the app for exact pin code availability." }
    ];

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="mb-4">How can we help you?</h1>
                <div className="relative max-w-xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search for articles, questions..."
                        className="w-full h-14 pl-12 pr-4 rounded-full border border-border bg-background focus:ring-2 focus:ring-primary outline-none shadow-sm"
                    />
                </div>
            </div>

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-4 mt-6">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl p-5 bg-background hover:border-primary/30 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold m-0">{faq.q}</h3>
                            <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-muted-foreground mt-3 mb-0 hidden group-hover:block transition-all">{faq.a}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-secondary/50 rounded-2xl text-center border border-border">
                <h3 className="mt-0">Still need help?</h3>
                <p>Our customer support team is available from 8 AM to 10 PM.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold">Chat with us</button>
                    <button className="bg-background border border-border px-6 py-3 rounded-full font-bold hover:bg-secondary transition-colors text-foreground">Call +91 98765 43210</button>
                </div>
            </div>
        </>
    );
}
