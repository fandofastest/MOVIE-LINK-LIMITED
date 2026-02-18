import { Building2 } from "lucide-react";

export function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="size-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About</h1>
          <p className="text-primary-foreground/90">Learn more about Movie Link Limited</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Movie Link Limited builds technology that helps people discover, explore, and enjoy movies.
              We focus on clear information, great user experience, and responsible data handling.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed">
              We develop applications and services that integrate with entertainment data providers to
              present up-to-date movie information, helping users find what to watch next.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground">Privacy Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take privacy seriously and aim to be transparent about how data is handled. Please review
              our Privacy Policy and related legal pages for details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
