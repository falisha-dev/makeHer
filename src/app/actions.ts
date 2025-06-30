'use server';

import { getPersonalizedRecommendations } from '@/ai/flows/personalized-recommendations';

export async function generateRecommendations(interests: string[]) {
  if (!interests || interests.length === 0) {
    return { error: 'Please select at least one interest.' };
  }

  try {
    const recommendations = await getPersonalizedRecommendations({
      userProfile: `A new user interested in ${interests.join(', ')}. They appreciate a soft, nurturing lifestyle and are looking for content and connections that align with homemaking values.`,
      contentLibrary: 'A vast collection of articles, videos, and tutorials on baking, crafting, home organization, gardening, parenting, and sustainable living.',
      userNetwork: 'A community of like-minded women, including experienced homemakers, artisans, new mothers, and those exploring a more traditional lifestyle.',
    });
    return { data: recommendations };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate recommendations. Please try again.' };
  }
}
