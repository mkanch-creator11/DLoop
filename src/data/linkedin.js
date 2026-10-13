// Content source: Digital Loop - LinkedIn Packages.pdf (pricing intentionally omitted)

export const funnel = [
  { stage: 'Attract', title: 'Brand presence', body: '12 engaging posts a month on personal profiles and the company page, as carousels, eBooks, banners and videos.', w: 100, a: 0.95 },
  { stage: 'Engage', title: 'Daily conversations', body: 'Thoughtful comments from every profile, plus polls posted across relevant LinkedIn groups each month.', w: 86, a: 0.85 },
  { stage: 'Connect', title: 'Targeted network', body: 'Connections built with prospects selected by demographics, interests, roles and industries.', w: 72, a: 0.75 },
  { stage: 'Convert', title: 'Outreach', body: 'Your offer pitched to all connections, turning a warm network into sales conversations.', w: 58, a: 0.65 },
  { stage: 'Report', title: 'Monthly performance report', body: 'See what the activity produced and where the next month should focus.', w: 44, a: 0.55 },
];

export const packages = [
  {
    id: 'business',
    name: 'Business',
    level: 1,
    for: 'For founders and small teams starting a steady LinkedIn pipeline.',
    leads: '15–20',
    metrics: [
      { label: 'LinkedIn profiles', value: '2', pct: 50 },
      { label: 'Engaging posts / month', value: '12', pct: 100 },
      { label: 'Thoughtful comments / month', value: '120', pct: 50 },
      { label: 'Group polls / month', value: '16 in 80 groups', pct: 50 },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    level: 2,
    for: 'For growing sales teams that want wider reach across more voices.',
    leads: '20–30',
    metrics: [
      { label: 'LinkedIn profiles', value: '3', pct: 75 },
      { label: 'Engaging posts / month', value: '12', pct: 100 },
      { label: 'Thoughtful comments / month', value: '180', pct: 75 },
      { label: 'Group polls / month', value: '24 in 120 groups', pct: 75 },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    level: 3,
    top: true,
    for: 'For organizations building a full LinkedIn-led sales funnel.',
    leads: '30–40',
    metrics: [
      { label: 'LinkedIn profiles', value: '4', pct: 100 },
      { label: 'Engaging posts / month', value: '12', pct: 100 },
      { label: 'Thoughtful comments / month', value: '240', pct: 100 },
      { label: 'Group polls / month', value: '32 in 160 groups', pct: 100 },
    ],
    extra: '6 additional group polls in monthly content',
  },
];

export const included = [
  ['Platform', 'LinkedIn'],
  ['Content postings', 'Personal profiles & company page'],
  ['Formats', 'Carousels, eBooks, banners, videos'],
  ['Targeting', 'Demographics, interests, roles, industries'],
  ['Network & outreach', 'Prospect connections, pitch to all'],
  ['Reporting', 'Monthly performance report'],
];

export const comparison = [
  ['LinkedIn profiles', '2', '3', '4'],
  ['Engaging posts / month', '12', '12', '12 + 6 group polls'],
  ['Thoughtful comments / month', '120', '180', '240'],
  ['Group polls / month', '16', '24', '32'],
  ['LinkedIn groups reached / month', '80', '120', '160'],
  ['Organic leads / quarter', '15–20', '20–30', '30–40'],
  ['Formats', 'Carousels, eBooks, banners, videos', 'Carousels, eBooks, banners, videos', 'Carousels, eBooks, banners, videos'],
  ['Targeting', '✓', '✓', '✓'],
  ['Connection building & outreach', '✓', '✓', '✓'],
  ['Monthly performance report', '✓', '✓', '✓'],
];

export const serviceOptions = [
  'Sales Enablement consulting',
  'LinkedIn Lead Generation: Business package',
  'LinkedIn Lead Generation: Growth package',
  'LinkedIn Lead Generation: Scale package',
  'Both services',
  'Not sure yet',
];
