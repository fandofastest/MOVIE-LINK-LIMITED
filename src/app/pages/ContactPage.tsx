import { Mail, MessageSquare } from "lucide-react";

export function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="size-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact</h1>
          <p className="text-primary-foreground/90">Get in touch with Movie Link Limited</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Support</h2>
            <p className="text-muted-foreground leading-relaxed">
              For general questions, support requests, or legal inquiries, contact us using the email below.
            </p>

            <div className="bg-muted/30 p-8 rounded-lg border mt-8">
              <div className="flex items-center gap-3">
                <Mail className="size-6 text-primary" />
                <a
                  href="mailto:privacy@movielinklimited.com"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  privacy@movielinklimited.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We aim to respond within a reasonable timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
