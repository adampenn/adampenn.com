export interface Venture {
  name: string;
  oneLiner: string;
  category: 'Investing' | 'Operations' | 'Media';
  url: string;
}

export const ventures: Venture[] = [
  {
    name: 'Bidwell Capital Fund',
    oneLiner: 'Helping investors build wealth through real assets — short-term rental funds, oil syndications, and tax-advantaged strategies.',
    category: 'Investing',
    url: 'https://bidwellcapitalfund.com',
  },
  {
    name: 'Penn Properties',
    oneLiner: 'Vacation rental management in Northern California. Hands-on operations, great guest experiences, consistent returns.',
    category: 'Operations',
    url: 'https://pennproperties.us',
  },
  {
    name: 'Wealth Independence Podcast',
    oneLiner: 'Conversations on passive income, alternative investments, and building financial freedom — especially for tech professionals.',
    category: 'Media',
    url: 'http://wealthindependencepod.com/',
  },
];
