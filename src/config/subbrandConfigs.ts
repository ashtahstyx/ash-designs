export const subbrandConfigs = {
  ah: {
    name: 'Ash Designs',
    navItems: [
      // { label: 'Garden Party', path: 'gardenparty' },
      { label: 'Loliware', path: '/loliware/web' },
      { label: 'Game Hive', path: '/gamehive/app' },
      { label: 'Coo App', path: 'coo' },
      { label: 'Meet Ash', path: 'about' },
    ],
  },
  gamehive: {
    name: 'Game Hive',
    navItems: [
      { label: 'App', path: 'app' },
      { label: 'Back', path: '/ah' },
    ],
  },
  loliware: {
    name: 'LoliWare',
    navItems: [
      { label: 'Info', path: 'info' },
      { label: 'Website', path: 'web' },
      { label: 'Branding', path: 'brand' },
      { label: 'Back', path: '/ah' },
    ],
  },
} as const;

export type SubbrandKey = keyof typeof subbrandConfigs;
