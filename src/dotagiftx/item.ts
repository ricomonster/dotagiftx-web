export type Rarity = 'very rare' | 'rare' | 'regular' | 'ultra rare'

export interface Item {
  id: string;
  slug: string;
  name: string;
  hero: string;
  image: string;
  origin: string;
  rarity: Rarity;
  active: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
}
