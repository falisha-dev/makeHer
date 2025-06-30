import type { FC } from 'react';

type IconProps = {
  className?: string;
};

export const BakeIcon: FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12L22 12"></path><path d="M20 15C21.1046 15 22 14.1046 22 13V11C22 9.89543 21.1046 9 20 9"></path><path d="M4 9C2.89543 9 2 9.89543 2 11V13C2 14.1046 2.89543 15 4 15"></path></g></svg>
);

export const CraftIcon: FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.5 3L8.5 21" />
      <path d="M9.444 8.5C6.778 7.5 4.5 9.5 5.556 12C6.61 14.5 9.444 14.5 11.028 13" />
      <path d="M19.083 4.5C21.75 5.5 20.833 8.5 18.25 9.5C15.667 10.5 14.167 8.5 14.167 6.5C14.167 4.5 16.417 3.5 19.083 4.5Z" />
    </g>
  </svg>
);

export const CommunityIcon: FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10C15 11.6569 13.6569 13 12 13Z"></path><path d="M12 13V20"></path><path d="M18 17V20"></path><path d="M18 17C18 15.3431 16.6569 14 15 14C13.3431 14 12 15.3431 12 17"></path><path d="M6 17V20"></path><path d="M6 17C6 15.3431 7.34315 14 9 14C10.6569 14 12 15.3431 12 17"></path></g></svg>
);

export const MarketplaceIcon: FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7H21"></path><path d="M6 7L8 20H16L18 7"></path><path d="M9 7C9 4.79086 10.3431 3 12 3C13.6569 3 15 4.79086 15 7"></path></g></svg>
);

export const LearnIcon: FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19Z"></path><path d="M9 7H15"></path><path d="M9 11H15"></path><path d="M9 15H13"></path></g></svg>
);

export const ExpressIcon: FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.5C12 20.5 8.5 18 8.5 14C8.5 10 12 8.5 12 8.5C12 8.5 15.5 10 15.5 14C15.5 18 12 20.5 12 20.5Z"></path><path d="M12 8.5C12 5.5 10 3.5 10 3.5"></path><path d="M12 8.5C12 5.5 14 3.5 14 3.5"></path></g></svg>
);

export const TwitterIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.633 19.75h1.644L7.12 4.25H5.407l12.226 15.5z"/></svg>
);

export const InstagramIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export const PinterestIcon: FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.14.21c-6.84 0-12 5.04-12 11.2 0 4.67 2.9 8.63 6.95 10.23.5.08.68-.22.68-.48v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.45-1.12-1.1-1.42-1.1-1.42-.9-.6.07-.6.07-.6 1 .07 1.52 1 1.52 1 .9 1.5 2.34 1.07 2.9.82.08-.64.35-1.08.63-1.32-2.22-.24-4.55-1.08-4.55-4.82 0-1.06.38-1.93.98-2.6-.1-.25-.42-1.23.1-2.56 0 0 .83-.26 2.75 1.02.8-.22 1.64-.33 2.5-.33.85 0 1.7.1 2.5.33 1.92-1.3 2.75-1.02 2.75-1.02.52 1.33.2 2.3.1 2.56.6.67.98 1.54.98 2.6 0 3.75-2.33 4.58-4.56 4.82.36.3.68.92.68 1.85v2.72c0 .27.18.57.7.48C21.1 20.04 24 16.08 24 11.4c0-6.17-5.14-11.2-11.86-11.2z"/></svg>
);
