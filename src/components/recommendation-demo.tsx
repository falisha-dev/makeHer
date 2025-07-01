
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';

export function RecommendationDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-background/80 border-accent/30 shadow-lg backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl flex items-center gap-3 text-foreground">
            <Wand2 className="text-accent w-8 h-8" />
            Your Personal Guide
          </CardTitle>
          <p className="font-body text-muted-foreground md:text-lg pt-2">
            Our AI assistant helps you discover content and connections tailored to your passions. See how it works.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 rounded-lg border border-border bg-card p-4 md:p-6">
            {/* AI Assistant Message */}
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10 border-2 border-accent/50">
                <AvatarFallback className="bg-accent/20">
                  <Wand2 className="w-5 h-5 text-accent" />
                </AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-muted p-3 max-w-[80%]">
                <p className="font-body text-foreground/90">
                  Welcome to makeHer! To help me curate your sanctuary, tell me what you&apos;re passionate about.
                </p>
              </div>
            </div>

            {/* User Response Options */}
            <div className="flex justify-end">
              <div className="max-w-[80%] flex flex-wrap justify-end gap-2">
                <Button variant="outline" className="rounded-full bg-background font-body">Baking</Button>
                <Button variant="outline" className="rounded-full bg-background font-body">Crafting</Button>
                <Button variant="outline" className="rounded-full bg-background font-body">Gardening</Button>
                <Button variant="outline" className="rounded-full bg-background font-body">Homemaking</Button>
              </div>
            </div>
            
            {/* AI Assistant Follow-up */}
            <div className="flex items-start gap-4">
               <Avatar className="w-10 h-10 border-2 border-accent/50">
                <AvatarFallback className="bg-accent/20">
                  <Wand2 className="w-5 h-5 text-accent" />
                </AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-muted p-3 max-w-[80%]">
                <p className="font-body text-foreground/90">
                  Wonderful! I&apos;m finding some inspiring articles on baking and some beautiful craft projects for you to get started with. ✨
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
