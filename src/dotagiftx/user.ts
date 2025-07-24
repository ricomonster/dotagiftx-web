export type Boon = 'SHOPKEEPERS_CONTRACT' | 'REFRESHER_ORB' | 'REFRESHER_SHARD'

export interface User {
  id: string;
  steam_id: string;
  name: string;
  url: string;
  avatar: string;
  status: number;
  notes: string;
  donation: number;
  donated_at: unknown;
  created_at: string;
  updated_at: string;
  market_stats: MarketStats;
  rank_score: number;
  subscription: number;
  subscribed_at: unknown;
  subscription_type: string;
  subscription_ends_at: string;
  boons: Boon[];
  hammer: boolean;
}

export interface MarketStats {
  pending: number;
  live: number;
  reserved: number;
  sold: number;
  removed: number;
  cancelled: number;
  bid_live: number;
  bid_completed: number;
  delivery_no_hit: number;
  delivery_name_verified: number;
  delivery_sender_verified: number;
  delivery_private: number;
  delivery_error: number;
  inventory_no_hit: number;
  inventory_verified: number;
  inventory_private: number;
  inventory_error: number;
  resell_live: number;
  resell_reserved: number;
  resell_sold: number;
  resell_removed: number;
  resell_cancelled: number;
}
