'use server';

import { z } from 'zod';
import { getPersonalizedRecommendations } from '@/ai/flows/personalized-recommendations';

const WaitlistSchema = z.object({
  email: z.string().email(),
});

export async function joinWaitlist(formData: FormData) {
  const validatedFields = WaitlistSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid email address provided.',
    };
  }
  
  const { email } = validatedFields.data;

  // Here you would typically save the email to a database (e.g., Firestore)
  // and send a confirmation email.
  console.log(`New waitlist submission: ${email}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: 'Successfully joined the waitlist!',
  };
}


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
