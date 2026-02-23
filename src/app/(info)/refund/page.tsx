export default function RefundPage() {
    return (
        <>
            <h1>Refund & Cancellation Policy</h1>
            <p className="lead">We strive to ensure perfect orders, but if something goes wrong, we've got your back.</p>

            <h2>Order Cancellation</h2>
            <p>
                You can cancel your order for a 100% refund within 1 minute of placing it, provided the vendor has not begun packing it.
                Once the order is packed or out for delivery, cancellations are not permitted.
            </p>

            <h2>Refunds for Missing/Damaged Items</h2>
            <p>If you receive a spilled, damaged, or expired item, please follow these steps:</p>
            <ol>
                <li>Open the Tamkuhi Bazaar App and navigate to "My Orders".</li>
                <li>Select the problematic order and click "Report an Issue".</li>
                <li>Provide a clear photograph of the damaged item.</li>
            </ol>
            <p>Our team will review the issue within 2 hours. Approved claims will result in an immediate refund to your original payment method or Tamkuhi Wallet.</p>

            <h2>Refund Processing Time</h2>
            <ul>
                <li><strong>Tamkuhi Wallet:</strong> Instant</li>
                <li><strong>UPI & Net Banking:</strong> 2-3 business days</li>
                <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
            </ul>

            <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-xl mt-8">
                <p className="text-orange-700 dark:text-orange-400 font-medium m-0">Non-returnable Items</p>
                <p className="text-sm mt-2 mb-0 delay-100">Please note that fresh produce (vegetables, fruits), unpacked meats, and opened personal hygiene products cannot be returned unless they are demonstrably spoiled upon delivery.</p>
            </div>
        </>
    );
}
