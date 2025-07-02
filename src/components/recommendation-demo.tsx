
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, MessageSquare, BrainCircuit, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';

export function RecommendationDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-background/80 border-accent/30 shadow-lg backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl flex items-center gap-3 text-foreground">
            <ShieldCheck className="text-accent w-8 h-8" />
            A Safe Space
          </CardTitle>
          <p className="font-body text-muted-foreground md:text-lg pt-2">
            Our AI works behind the scenes to ensure makeHer remains a positive and supportive community for everyone. Here’s how it works:
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 font-body text-center p-4">
            
            <div className="flex flex-col items-center max-w-xs">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-headline text-xl mb-2">1. Content is Posted</h3>
              <p className="text-muted-foreground text-sm">A user shares a new post or comment with the community.</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block mt-12" />

            <div className="flex flex-col items-center max-w-xs">
              <BrainCircuit className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-headline text-xl mb-2">2. AI Analysis</h3>
              <p className="text-muted-foreground text-sm">Our AI instantly reviews content against community guidelines.</p>
            </div>

            <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block mt-12" />

            <div className="flex flex-col items-center max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex flex-col items-center">
                    <CheckCircle className="w-8 h-8 text-chart-2"/>
                    <span className="text-xs text-muted-foreground mt-1">Approved</span>
                </div>
                <div className="flex flex-col items-center">
                    <ShieldAlert className="w-8 h-8 text-destructive"/>
                    <span className="text-xs text-muted-foreground mt-1">Flagged</span>
                </div>
              </div>
              <h3 className="font-headline text-xl mb-2">3. Moderation</h3>
              <p className="text-muted-foreground text-sm">Safe content is approved, while harmful content is flagged for review.</p>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
