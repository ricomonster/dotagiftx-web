// Interfaces
import type { MarketStats } from './market';

export type Boon = 'SHOPKEEPERS_CONTRACT' | 'REFRESHER_ORB' | 'REFRESHER_SHARD'

export interface User {
  id: string;
  avatar: string;
  boons: Boon[];
  created_at: string;
  donated_at: unknown;
  donation: number;
  hammer: boolean;
  market_stats: MarketStats;
  name: string;
  notes: string;
  rank_score: number;
  status: number;
  steam_id: string;
  subscribed_at: unknown;
  subscription: number;
  subscription_ends_at: string;
  subscription_type: string;
  updated_at: string;
  url: string;
}

