export const subbrandConfigs = {
  ah: {
    name: 'Ash Designs',
    navItems: [
      { label: 'Home', path: '' },
      { label: 'About', path: 'about' },
      { label: 'Garden Party', path: 'gardenparty' },
      { label: 'Loliware', path: 'loliware' },
      { label: 'Coo Dating App', path: 'coo' },
      { label: 'Game Hive', path: 'gamehive' },
    ],
  },
  gamehive: {
    name: 'Game Hive',
    navItems: [
      { label: 'The App', path: 'gamehive' },
      { label: 'The Info', path: 'info' },
    ],
  },
} as const;

export type SubbrandKey = keyof typeof subbrandConfigs;
