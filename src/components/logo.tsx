import type { FC } from 'react';

export const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`inline-flex items-center gap-3 font-headline text-foreground ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path d="M12 5.5C12 3.567 13.567 2 15.5 2S19 3.567 19 5.5c0 1.215-.615 2.29-1.566 2.924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.434 8.424A3.5 3.5 0 0 1 18.5 12.5c0 1.933-1.567 3.5-3.5 3.5S11.5 14.433 11.5 12.5c0-1.215.615-2.29 1.566-2.924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.934 9.576A3.5 3.5 0 0 1 8.5 11.5c-1.933 0-3.5-1.567-3.5-3.5S6.567 4.5 8.5 4.5c1.215 0 2.29.615 2.924 1.566" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 12c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-.985-.407-1.87-1.047-2.515" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 16a3.5 3.5 0 0 1 3.5 3.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5c0-.985.407-1.87 1.047-2.515" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-3xl tracking-wide">makerHer</span>
    </div>
  );
};
