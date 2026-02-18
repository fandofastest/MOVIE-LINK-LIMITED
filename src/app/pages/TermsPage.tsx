import { FileText } from "lucide-react";

export function TermsPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="size-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
          <p className="text-primary-foreground/90">Last updated: February 18, 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Movie Link Limited services, you agree to these Terms of Service.
              If you do not agree, do not use the services.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">2. Use of the Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to use the service only for lawful purposes and in a manner that does not infringe
              the rights of others or restrict their use and enjoyment.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">3. Third-Party Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              The service may display information obtained from third-party providers (for example, movie
              databases). Such content is provided as-is and may be subject to third-party terms.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">4. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The service is provided on an “as is” and “as available” basis without warranties of any kind.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">5. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms, contact us at privacy@movielinklimited.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
