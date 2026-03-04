export interface Update {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const updates: Update[] = [
  {
    slug: 'q1-2026',
    title: 'Quarterly Founder Update: Q1 2026',
    date: 'March 2026',
    excerpt: 'Kicking off the year with new fund activity, operational improvements at Penn Properties, and a shift in how I think about time.',
  },
  {
    slug: 'q4-2025',
    title: 'Quarterly Founder Update: Q4 2025',
    date: 'December 2025',
    excerpt: 'Wrapping up 2025. Reflecting on what worked, what didn\'t, and what I\'m carrying into the new year.',
  },
];
