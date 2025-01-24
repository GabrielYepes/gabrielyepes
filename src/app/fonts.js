import { Michroma, Inter } from 'next/font/google';

// Heading font (Michroma)
export const headingFont = Michroma({
  subsets: ['latin'],
  weight: '400',  // Michroma only comes in weight 400
  variable: '--font-heading',
});

// Body text font (Inter)
export const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

// CSS variable names that we can use throughout our application
export const fontVariables = `${headingFont.variable} ${bodyFont.variable}`;