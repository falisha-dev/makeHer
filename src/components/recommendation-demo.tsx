'use client';

import { useState } from 'react';
import { generateRecommendations } from '@/app/actions';
import type { PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LoaderCircle, Wand2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const interests = [
  { id: 'baking', label: 'Baking' },
  { id: 'crafting', label: 'Crafting' },
  { id: 'gardening', label: 'Gardening' },
  { id: 'home-decor', label: 'Home Decor' },
  { id: 'parenting', label: 'Parenting' },
];

export function RecommendationDemo() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInterestChange = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((i) => i !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedInterests.length === 0) {
      setError('Please select at least one interest.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setRecommendations(null);

    const result = await generateRecommendations(selectedInterests);
    if (result.error) {
      setError(result.error);
    } else if (result.data) {
      setRecommendations(result.data);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="bg-background/80 border-accent/30 shadow-lg backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-3xl md:text-4xl flex items-center gap-3 text-foreground">
            <Wand2 className="text-accent w-8 h-8" />
            See Your Personalized Hub
          </CardTitle>
          <p className="font-body text-muted-foreground md:text-lg pt-2">
            Tell us what you love, and we'll curate a feed just for you. This is a preview of our powerful AI matching you with content and community.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-body font-semibold text-foreground">What are your interests?</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {interests.map((interest) => (
                  <div key={interest.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest.id}
                      checked={selectedInterests.includes(interest.id)}
                      onCheckedChange={() => handleInterestChange(interest.id)}
                      className="border-accent data-[state=checked]:bg-accent data-[state=checked]:border-accent text-primary-foreground"
                    />
                    <label
                      htmlFor={interest.id}
                      className="font-body text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {interest.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={isLoading || selectedInterests.length === 0} className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 disabled:bg-accent/70 h-11 px-8">
              {isLoading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate My Feed'
              )}
            </Button>
          </form>

          {(isLoading || recommendations) && (
            <div className={cn("mt-8 pt-6 border-t border-accent/20 transition-opacity", isLoading ? "opacity-50" : "opacity-100")}>
              {isLoading && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="h-7 w-1/2 bg-muted rounded animate-pulse mb-4"></div>
                      <div className="space-y-3">
                         <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                         <div className="h-4 w-5/6 bg-muted rounded animate-pulse"></div>
                         <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                      </div>
                    </div>
                     <div>
                      <div className="h-7 w-1/2 bg-muted rounded animate-pulse mb-4"></div>
                      <div className="space-y-3">
                         <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                         <div className="h-4 w-4/6 bg-muted rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {recommendations && (
                <div className="grid md:grid-cols-2 gap-8 font-body">
                  <div>
                    <h5 className="font-headline text-xl text-foreground mb-3">Content For You</h5>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      {recommendations.contentRecommendations.map((rec, i) => <li key={`c-${i}`}>{rec}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-headline text-xl text-foreground mb-3">Connections to Make</h5>
                    <ul className="list-disc list-inside space-y-2 text-foreground/90">
                      {recommendations.connectionSuggestions.map((sug, i) => <li key={`s-${i}`}>{sug}</li>)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
