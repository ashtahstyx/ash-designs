export type PlatformInfo = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
};

export type PlatformEntry = {
  platform: PlatformInfo;
  released_at: string;
  requirements_en: {
    minimum: string;
    recommended: string;
  } | null;
  requirements_ru: unknown | null;
};

// If a Game has platforms like this:
export type Game = {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  playtime?: number;
  platforms?: PlatformEntry[];
};
