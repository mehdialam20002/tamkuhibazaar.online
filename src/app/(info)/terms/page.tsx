import { FileText, Scale, AlertTriangle, RefreshCw } from "lucide-react";

export default function TermsPage() {
    return (
        <section className="min-h-screen bg-background py-16 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {`Last Updated: October 2023`}
                    </p>
                </div>

                {/* Intro */}
                <div className="mb-12 text-muted-foreground leading-relaxed text-lg">
                    {`Welcome to Tamkuhi Bazaar. By accessing our platform, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.`}
                </div>

                {/* Sections */}
                <div className="space-y-10">

                    {/* Use License */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">1. Use License</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {`Permission is granted to temporarily download one copy of the materials (information or software) on Tamkuhi Bazaar's website for personal, non-commercial transitory viewing only.`}
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">2. Disclaimer</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {`The materials on Tamkuhi Bazaar's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability.`}
                        </p>
                    </div>

                    {/* Limitations */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">3. Limitations</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {`In no event shall Tamkuhi Bazaar or its suppliers be liable for any damages including loss of data, profit, or business interruption arising from the use or inability to use our platform.`}
                        </p>
                    </div>

                    {/* Revisions */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">4. Revisions and Errata</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {`The materials appearing on the website may include technical, typographical, or photographic errors. We do not guarantee that any content is accurate, complete, or current.`}
                        </p>
                    </div>

                    {/* Modifications */}
                    <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition">
                        <div className="flex items-center gap-3 mb-4">
                            <RefreshCw className="w-6 h-6 text-primary" />
                            <h2 className="text-xl font-bold">5. Service Modifications</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {`We reserve the right to modify or discontinue the service, temporarily or permanently, at any time without prior notice.`}
                        </p>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                    <p className="text-muted-foreground">
                        {`By continuing to use Tamkuhi Bazaar, you acknowledge that you have read and agreed to these terms.`}
                    </p>
                </div>

            </div>
        </section>
    );
}