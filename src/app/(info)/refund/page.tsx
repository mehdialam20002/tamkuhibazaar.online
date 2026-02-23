import { RefreshCcw, PackageCheck, Clock } from "lucide-react";

export default function RefundPage() {
    return (
        <section className="min-h-screen bg-background py-16 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Refund & Cancellation Policy
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {`We strive to ensure perfect orders, but if something goes wrong, we've got your back.`}
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">

                    {/* Order Cancellation */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <RefreshCcw className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">Order Cancellation</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {`You can cancel your order for a 100% refund within 1 minute of placing it, provided the vendor has not begun packing it. Once the order is packed or out for delivery, cancellations are not permitted.`}
                        </p>
                    </div>

                    {/* Damaged Items */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <PackageCheck className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">Missing / Damaged Items</h2>
                        </div>

                        <p className="text-muted-foreground mb-4">
                            {`If you receive a spilled, damaged, or expired item, please follow these steps:`}
                        </p>

                        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                            <li>{`Open the Tamkuhi Bazaar App and navigate to "My Orders".`}</li>
                            <li>{`Select the problematic order and click "Report an Issue".`}</li>
                            <li>{`Provide a clear photograph of the damaged item.`}</li>
                        </ol>

                        <p className="text-muted-foreground mt-4">
                            {`Our team will review the issue within 2 hours. Approved claims will result in an immediate refund to your original payment method or Tamkuhi Wallet.`}
                        </p>
                    </div>

                    {/* Refund Time */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">Refund Processing Time</h2>
                        </div>

                        <ul className="space-y-2 text-muted-foreground">
                            <li><strong className="text-foreground">Tamkuhi Wallet:</strong> Instant</li>
                            <li><strong className="text-foreground">UPI & Net Banking:</strong> 2-3 business days</li>
                            <li><strong className="text-foreground">Credit/Debit Cards:</strong> 5-7 business days</li>
                        </ul>
                    </div>

                </div>

                {/* Highlight Box */}
                <div className="mt-12 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400 mb-2">
                        Non-returnable Items
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {`Fresh produce (vegetables, fruits), unpacked meats, and opened personal hygiene products cannot be returned unless they are clearly spoiled at the time of delivery.`}
                    </p>
                </div>

            </div>
        </section>
    );
}