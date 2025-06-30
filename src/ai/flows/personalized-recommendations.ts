'use server';

/**
 * @fileOverview Provides personalized content recommendations and connection suggestions for new users.
 *
 * - getPersonalizedRecommendations - A function that returns personalized content and connection recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, interests, and preferences.'),
  contentLibrary: z
    .string()
    .describe('A summary of the available content on the platform.'),
  userNetwork: z
    .string()
    .describe('A summary of the existing users and their connections.'),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  contentRecommendations: z
    .array(z.string())
    .describe('A list of content recommendations personalized for the user.'),
  connectionSuggestions: z
    .array(z.string())
    .describe('A list of connection suggestions for the user.'),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert recommendation engine for the makeHer platform, which is a content, marketplace, and community hub for women who embrace nurturing, homemaking, and soft living.

  Given the following user profile, content library, and user network, provide personalized content recommendations and connection suggestions for the user.

  User Profile:
  {{userProfile}}

  Content Library:
  {{contentLibrary}}

  User Network:
  {{userNetwork}}

  Content Recommendations:
  A list of content recommendations personalized for the user.

  Connection Suggestions:
  A list of connection suggestions for the user.`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
