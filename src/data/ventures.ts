export interface Venture {
  name: string;
  oneLiner: string;
  category: 'Investing' | 'Operations' | 'Media';
  url: string;
}

export const ventures: Venture[] = [
  {
    name: 'Bidwell Capital Fund',
    oneLiner: 'Building Generational Wealth through Real Assets',
    category: 'Investing',
    url: 'https://bidwellcapitalfund.com',
  },
  {
    name: 'Penn Properties',
    oneLiner: 'Vacation rental management. Hands-on operations, built by an owner for owners, great guest experiences, consistent returns.',
    category: 'Operations',
    url: 'https://pennproperties.us',
  },
  {
    name: 'Wealth Independence Podcast',
    oneLiner: 'Conversations on passive income, alternative investments, and building financial freedom.',
    category: 'Media',
    url: 'http://wealthindependencepod.com/',
  },
];
