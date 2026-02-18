import { Shield, Mail } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="size-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-primary-foreground/90">Last updated: February 18, 2026</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Movie Link Limited ("we", "our", or "us") respects your privacy and is committed to 
                protecting your personal information. This Privacy Policy explains how we collect, use, 
                and safeguard your data when you use our services and applications. We are dedicated to 
                maintaining the trust and confidence of our users by handling their information with care 
                and transparency.
              </p>
            </div>

            {/* Information Collected */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information Collected</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect various types of information to provide and improve our services. The types 
                of data we may collect include:
              </p>
              
              <div className="bg-muted/30 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-3 text-foreground">App Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Information about how you interact with our application, including pages visited, 
                  features used, search queries, and time spent within the app. This helps us understand 
                  user behavior and improve our services.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Device Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Technical information about your device, such as device type, operating system, 
                  browser type, IP address, unique device identifiers, and mobile network information. 
                  This data helps us optimize our application for different devices and platforms.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">User Preferences</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your personal preferences and interactions within our service, including your watchlist, 
                  favorite movies, ratings, and customized settings. This information allows us to personalize 
                  your experience and provide tailored recommendations.
                </p>
              </div>
            </div>

            {/* How Information is Used */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How Information is Used</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Improving Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To analyze usage patterns, identify areas for improvement, and develop new features 
                    that enhance the overall quality and performance of our applications. We continuously 
                    strive to deliver better experiences based on user feedback and data insights.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">App Functionality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide core features and functionality, including movie recommendations, search 
                    capabilities, content discovery, and personalized lists. Your data enables us to 
                    deliver the services you expect from our platform.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">User Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To personalize your experience by remembering your preferences, providing relevant 
                    content suggestions, and optimizing the interface based on your usage patterns. 
                    We aim to make every interaction meaningful and efficient.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services integrate with third-party APIs and services to provide comprehensive movie 
                information and enhanced functionality.
              </p>
              
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-foreground">TMDB API Usage</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We utilize The Movie Database (TMDB) API to access movie information, including titles, 
                  descriptions, ratings, images, and other related data. This integration allows us to 
                  provide you with accurate and up-to-date entertainment content.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  This product uses the TMDB API but is not endorsed or certified by TMDB.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take the security of your personal information seriously and implement reasonable 
                technical and organizational measures to protect your data against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our security practices include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Monitoring and logging of system activities</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive to protect your information, no method of transmission over the internet 
                or electronic storage is 100% secure. We cannot guarantee absolute security but are 
                committed to using industry-standard practices to safeguard your data.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us:
              </p>
              
              <div className="bg-muted/30 p-8 rounded-lg border">
                <div className="text-center">
                  <Shield className="size-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">MOVIE LINK LIMITED</h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mt-4">
                    <Mail className="size-5" />
                    <a 
                      href="mailto:privacy@movielinklimited.com" 
                      className="text-primary hover:underline"
                    >
                      privacy@movielinklimited.com
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    We will respond to your inquiries within a reasonable timeframe.
                  </p>
                </div>
              </div>
            </div>

            {/* Policy Updates Notice */}
            <div className="bg-accent/50 p-6 rounded-lg border border-accent mt-8">
              <p className="text-sm text-muted-foreground text-center">
                This Privacy Policy may be updated from time to time to reflect changes in our practices 
                or legal requirements. We encourage you to review this page periodically for the latest 
                information on our privacy practices.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
