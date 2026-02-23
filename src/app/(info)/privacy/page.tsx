export default function PrivacyPage() {
    return (
        <>
            <h1>Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last Updated: October 2023</p>

            <p>Your privacy is critically important to us at Tamkuhi Bazaar. This privacy policy explains how we collect, use, and protect your personal information.</p>

            <h2>1. Information We Collect</h2>
            <p>We only collect information about you if we have a reason to do so, such as providing our services, communicating with you, or improving our platform. This includes:</p>
            <ul>
                <li>Basic account info (Name, Phone number, Email)</li>
                <li>Delivery addresses</li>
                <li>Transaction and payment history</li>
                <li>Location data (when app is in use for live tracking)</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>We use your information to deliver groceries, process payments, and send you important updates about your orders. We do not sell your personal data to third parties.</p>

            <h2>3. Security</h2>
            <p>While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so.</p>

            <h2>4. Your Rights</h2>
            <p>You have the right to request access to the personal data we have collected about you. You can also request that we delete your account and associated data through the app settings.</p>

            <div className="mt-8 p-6 bg-secondary rounded-xl">
                <h3>Contact Privacy Team</h3>
                <p className="m-0 text-sm">If you have a question about this privacy policy, please contact us at <a href="mailto:privacy@tamkuhibazaar.in" className="text-primary font-medium">privacy@tamkuhibazaar.in</a></p>
            </div>
        </>
    );
}
