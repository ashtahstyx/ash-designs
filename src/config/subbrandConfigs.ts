export const subbrandConfigs = {
  ah: {
    name: 'Ash Designs',
    navItems: [
      { label: 'Home', path: '' },
      { label: 'Garden Party', path: 'gardenparty' },
      { label: 'Loliware', path: 'loliware' },
      { label: 'Coo App', path: 'coo' },
      { label: 'Game Hive', path: '/gamehive/app' },
      { label: 'Meet Ash', path: 'about' },
    ],
  },
  gamehive: {
    name: 'Game Hive',
    navItems: [
      { label: 'App', path: 'app' },
      { label: 'Learn More', path: 'info' },
      { label: 'Back', path: '/ah' },
    ],
  },
} as const;

export type SubbrandKey = keyof typeof subbrandConfigs;
