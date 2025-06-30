import Image from "next/image";
import { WaitlistForm } from "@/components/waitlist-form";
import { Logo } from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecommendationDemo } from "@/components/recommendation-demo";
import { BakeIcon, CommunityIcon, CraftIcon, ExpressIcon, LearnIcon, MarketplaceIcon, PinterestIcon, TwitterIcon, InstagramIcon } from "@/components/icons";

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

const featuredContent = [
  {
    title: "The Art of Sourdough",
    description: "A beginner's guide to creating and maintaining your own sourdough starter.",
    image: "https://placehold.co/600x400.png",
    hint: "sourdough bread"
  },
  {
    title: "Calm Morning Rhythms",
    description: "How to establish a peaceful morning routine for your family.",
    image: "https://placehold.co/600x400.png",
    hint: "calm morning"
  },
  {
    title: "Handmade for the Home",
    description: "Create beautiful, simple decor with our latest DIY craft tutorial.",
    image: "https://placehold.co/600x400.png",
    hint: "handmade home decor"
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
              Where Homemakers Flourish
            </h1>
            <p className="mt-6 max-w-2xl mx-auto font-body text-lg md:text-xl text-muted-foreground">
              Welcome to makeHer, a digital haven for women who choose the art of homemaking. Share, connect, and grow in a community that celebrates soft living and nurturing hearts.
            </p>
            <div className="mt-10 max-w-md mx-auto">
              <WaitlistForm />
              <p className="mt-4 text-xs text-muted-foreground">Join the waitlist to be the first to know when we launch.</p>
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

        <section id="content" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl text-foreground">Featured Content</h2>
              <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-muted-foreground">
                Get a taste of the inspiring and practical content you'll find on makeHer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredContent.map((content) => (
                <Card key={content.title} className="overflow-hidden border-primary/20 bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image src={content.image} alt={content.title} width={600} height={400} data-ai-hint={content.hint} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{content.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground">{content.description}</p>
                  </CardContent>
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
            <div className="text-center md:text-left">
               <h3 className="font-headline text-2xl text-foreground">Join the Movement</h3>
               <p className="mt-2 font-body text-muted-foreground">Follow us and be part of our growing community.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Pinterest" className="text-muted-foreground hover:text-primary transition-colors"><PinterestIcon className="w-6 h-6" /></a>
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
