// JSON
import treasures from './treasures.json';

export interface Treasure {
  asset: string;
  treasure: string;
}

/**
 * Get the treasure based on its name
 *
 * @param {string} treasure
 * @returns {Treasure|undefined}
 */
export const getTreasure = (treasure: string): Treasure|undefined => {
  const treasures = getTreasures();
  return treasures.find(t => t.treasure === treasure);
};

/**
 * Returns the treasures
 *
 * @returns {Treasure[]}
 */
export const getTreasures = (): Treasure[] => {
  return treasures;
};
