'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { joinWaitlist } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WaitlistSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type WaitlistFormValues = z.infer<typeof WaitlistSchema>;

export function WaitlistForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(WaitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    setServerError('');
    const formData = new FormData();
    formData.append('email', data.email);
    
    const result = await joinWaitlist(formData);
    
    if (result.success) {
      setIsSuccess(true);
      reset();
    } else {
      setServerError(result.message);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex h-14 items-center justify-center rounded-full border-2 border-primary/50 bg-background/80 px-6">
        <p className="text-center font-body text-lg text-foreground">
          Thank you! We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full max-w-md gap-2" noValidate>
      <div className="relative">
        <Input
          {...register('email')}
          type="email"
          placeholder="your.email@example.com"
          className={cn("h-14 rounded-full border-2 bg-background/80 px-6 pr-16 text-lg placeholder:text-muted-foreground focus:ring-primary/50", errors.email || serverError ? "border-destructive" : "border-primary/50 focus:border-primary")}
          aria-invalid={!!errors.email || !!serverError}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-primary/70"
          disabled={isSubmitting}
          aria-label="Join Waitlist"
        >
          {isSubmitting ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <ArrowRight className="h-5 w-5" />}
        </Button>
      </div>
      {(errors.email || serverError) && (
        <p className="px-6 text-sm text-destructive">
          {errors.email?.message || serverError}
        </p>
      )}
    </form>
  );
}
