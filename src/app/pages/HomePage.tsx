import { Film, Shield, Users, Zap } from "lucide-react";

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Film className="size-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MOVIE LINK LIMITED</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Leading the way in movie discovery and entertainment technology
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Movie Link Limited is a technology company dedicated to revolutionizing how people discover, 
              explore, and engage with movies. We provide cutting-edge applications and services that connect 
              users with the world of cinema.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our platform leverages comprehensive movie databases and intelligent recommendation systems 
              to deliver personalized entertainment experiences to millions of users worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border">
              <Zap className="size-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Discovery</h3>
              <p className="text-muted-foreground">
                Intelligent movie recommendations tailored to your preferences and viewing history.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <Users className="size-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">User Experience</h3>
              <p className="text-muted-foreground">
                Intuitive interfaces designed for seamless navigation and enjoyment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <Shield className="size-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p className="text-muted-foreground">
                Your data security and privacy are our top priorities in everything we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Technology</h2>
            <div className="bg-muted/20 p-8 rounded-lg border">
              <p className="text-muted-foreground text-center mb-4">
                This product uses the TMDB API but is not endorsed or certified by TMDB.
              </p>
              <p className="text-muted-foreground text-center">
                We integrate with leading entertainment databases to provide accurate, 
                up-to-date information about movies, including details, ratings, and media content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
