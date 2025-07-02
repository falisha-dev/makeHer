
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ShieldCheck } from 'lucide-react';

export function RecommendationDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-background/80 border-accent/30 shadow-lg backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl flex items-center gap-3 text-foreground">
            <ShieldCheck className="text-accent w-8 h-8" />
            A Safe & Nurturing Space
          </CardTitle>
          <p className="font-body text-muted-foreground md:text-lg pt-2">
            Our AI works behind the scenes to ensure makeHer remains a positive and supportive community for everyone.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 rounded-lg border border-border bg-card p-4 md:p-6">
            {/* Example 1: A good post */}
            <div className="flex items-start gap-4">
               <Avatar className="w-10 h-10 border-2 border-primary/50">
                <AvatarFallback className="bg-primary/20 text-primary font-body text-xl">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-muted p-3">
                <p className="font-body font-bold text-foreground/90">Anna</p>
                <p className="font-body text-foreground/90">
                  Just tried this sourdough recipe! My family loved it. Thanks for sharing! ❤️
                </p>
              </div>
            </div>
            
            {/* Example 2: A flagged post */}
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10 border-2 border-destructive/50">
                <AvatarFallback className="bg-destructive/20 text-destructive font-body text-xl">
                  U
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="rounded-lg bg-muted p-3 opacity-60">
                    <p className="font-body font-bold text-foreground/90">AnonymousUser</p>
                    <p className="font-body text-foreground/90 italic">
                      This is so stupid, why would anyone do this? Your projects are ugly.
                    </p>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/10 p-3">
                    <ShieldCheck className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div className="text-sm">
                        <p className="font-body font-semibold text-destructive">AI Analysis</p>
                        <p className="font-body text-destructive/90">
                            This post was flagged for violating our community guidelines on respectful communication. Let's keep makeHer a kind and supportive space.
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
