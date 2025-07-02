
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Card, CardContent } from "@/components/ui/card";
import { RecommendationDemo } from "@/components/recommendation-demo";
import { BakeIcon, CommunityIcon, CraftIcon, ExpressIcon, LearnIcon, MarketplaceIcon, LinkedInIcon, TwitterIcon, InstagramIcon } from "@/components/icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const features = [
  {
    icon: <ExpressIcon className="w-8 h-8 text-primary" />,
    title: "Express Yourself",
    description: "Share your daily life, projects, and stories in a beautiful and supportive space.",
  },
  {
    icon: <CommunityIcon className="w-8 h-8 text-primary" />,
    title: "Build Community",
    description: "Connect with like-minded women who share your values and passions.",
  },
  {
    icon: <LearnIcon className="w-8 h-8 text-primary" />,
    title: "Learn & Grow",
    description: "Access tutorials and guides on baking, crafting, and homemaking skills.",
  },
  {
    icon: <MarketplaceIcon className="w-8 h-8 text-primary" />,
    title: "Shop & Sell",
    description: "Discover unique handmade goods or start your own shop in our marketplace.",
  },
  {
    icon: <BakeIcon className="w-8 h-8 text-primary" />,
    title: "Inspiring Recipes",
    description: "Find and share wholesome recipes for your family to enjoy.",
  },
  {
    icon: <CraftIcon className="w-8 h-8 text-primary" />,
    title: "Creative DIY",
    description: "Unleash your creativity with craft projects for a personal touch at home.",
  },
];

const testimonials = [
  {
    quote: "Finally, a platform that celebrates the choice to create a beautiful home life. I can't wait to share my sourdough journey!",
    author: "Eesha Salim",
    role: "Mother of 3, Homeschooling Mom",
  },
  {
    quote: "The marketplace feature is brilliant! I've been wanting to sell my handmade candles to people who truly appreciate the craft.",
    author: "Beatrice Holloway",
    role: "New Mother & Artisan",
  },
  {
    quote: "This is exactly what I've been looking for - a community that understands that homemaking is a beautiful, valuable choice.",
    author: "Clara Dubois",
    role: "Content Creator",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Logo />
        </div>
      </header>

      <main className="flex-grow">
        <section id="hero" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-foreground tracking-wide">
              Your Circle for Calm, Comfort, and Connection
            </h1>
            <p className="mt-6 max-w-2xl mx-auto font-body text-lg md:text-xl text-muted-foreground">
              Welcome to MakeHer, a digital haven for women who choose the art of soft living and homemaking. Share, connect, and grow in a community that celebrates soft living and nurturing hearts.
            </p>
            <div className="mt-10 max-w-md mx-auto flex flex-col items-center gap-4">
              <Button asChild size="lg" className="h-14 rounded-full px-10 text-lg">
                <a href="https://forms.gle/e7H2nCWP1h5fDLsy9" target="_blank" rel="noopener noreferrer">
                  Waitlist Here
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">Join the waitlist to be the first to know when we launch.</p>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl text-foreground">A Platform Built for You</h2>
              <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-muted-foreground">
                Everything you need to nurture your home, family, and soul.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-headline text-2xl text-foreground">{feature.title}</h3>
                  <p className="mt-2 font-body text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl text-foreground">What Women Are Saying</h2>
              <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-muted-foreground">
                Hear from women who love what we are building at makeHer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="border-primary/20 bg-card shadow-md flex flex-col items-center text-center p-8 pt-10 transition-shadow hover:shadow-xl duration-300">
                  <Avatar className="w-20 h-20 mb-6 border-2 border-primary/50">
                    <AvatarFallback className="bg-primary/20 text-primary font-headline text-3xl">
                      {testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <CardContent className="p-0 flex-grow">
                    <blockquote className="font-body text-lg text-foreground/90 italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </CardContent>
                  <div className="mt-6">
                    <p className="font-headline text-xl text-foreground">{testimonial.author}</p>
                    <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-demo" className="py-16 md:py-24 bg-accent/10">
          <div className="container mx-auto px-4 md:px-6">
            <RecommendationDemo />
          </div>
        </section>

      </main>

      <footer className="bg-primary/20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <Logo />
            <Button asChild size="lg" className="rounded-full px-8">
                <a href="https://forms.gle/e7H2nCWP1h5fDLsy9" target="_blank" rel="noopener noreferrer">
                    Waitlist Here
                </a>
            </Button>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="text-primary hover:text-primary/80 transition-colors"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram" className="text-primary hover:text-primary/80 transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="LinkedIn" className="text-primary hover:text-primary/80 transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground font-body">
            <p>&copy; {new Date().getFullYear()} makeHer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
