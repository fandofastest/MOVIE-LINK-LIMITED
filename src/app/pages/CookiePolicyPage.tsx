import { Cookie, Shield } from "lucide-react";

export function CookiePolicyPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Cookie className="size-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-primary-foreground/90">Last updated: February 18, 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Cookie Policy explains how Movie Link Limited uses cookies and similar technologies.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">2. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device that help websites remember preferences
              and understand how the site is used.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">3. How We Use Cookies</h2>
            <div className="bg-muted/30 p-6 rounded-lg border">
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Remember basic preferences</li>
                <li>Measure performance and improve user experience</li>
                <li>Maintain security and prevent abuse</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">4. Your Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control cookies through your browser settings. Disabling cookies may impact
              certain features.
            </p>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg mt-10">
              <div className="flex items-center gap-3">
                <Shield className="size-6 text-primary" />
                <p className="text-muted-foreground leading-relaxed">
                  For more information about how we handle personal data, please review our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
