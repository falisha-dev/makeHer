import type { FC } from 'react';
import { Home } from 'lucide-react';

export const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`inline-flex items-center gap-3 font-headline text-foreground ${className}`}>
      <Home className="h-7 w-7 text-primary" />
      <span className="text-3xl tracking-wide">makeHer</span>
    </div>
  );
};
