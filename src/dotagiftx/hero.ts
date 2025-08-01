import heroes from './heroes.json';

export type Hero =
  'Abaddon' |
  'Alchemist' |
  'Ancient Apparition' |
  'Anti-Mage' |
  'Arc Warden' |
  'Axe' |
  'Bane' |
  'Batrider' |
  'Beastmaster' |
  'Bloodseeker' |
  'Bounty Hunter' |
  'Brewmaster' |
  'Bristleback' |
  'Broodmother' |
  'Centaur Warrunner' |
  'Chaos Knight' |
  'Chen' |
  'Clinkz' |
  'Clockwerk' |
  'Crystal Maiden' |
  'Dark Seer' |
  'Dark Willow' |
  'Dawnbreaker' |
  'Dazzle' |
  'Death Prophet' |
  'Disruptor' |
  'Doom' |
  'Dragon Knight' |
  'Drow Ranger' |
  'Earth Spirit' |
  'Earthshaker' |
  'Elder Titan' |
  'Ember Spirit' |
  'Enchantress' |
  'Enigma' |
  'Faceless Void' |
  'Grimstroke' |
  'Gyrocopter' |
  'Hoodwink' |
  'Huskar' |
  'Invoker' |
  'Io' |
  'Jakiro' |
  'Juggernaut' |
  'Keeper of the Light' |
  'Kez' |
  'Kunkka' |
  'Legion Commander' |
  'Leshrac' |
  'Lich' |
  'Lifestealer' |
  'Lina' |
  'Lion' |
  'Lone Druid' |
  'Luna' |
  'Lycan' |
  'Magnus' |
  'Marci' |
  'Mars' |
  'Medusa' |
  'Meepo' |
  'Mirana' |
  'Monkey King' |
  'Morphling' |
  'Muerta' |
  'Naga Siren' |
  'Nature\'s Prophet' |
  'Necrophos' |
  'Night Stalker' |
  'Nyx Assassin' |
  'Ogre Magi' |
  'Omniknight' |
  'Oracle' |
  'Outworld Destroyer' |
  'Pangolier' |
  'Phantom Assassin' |
  'Phantom Lancer' |
  'Phoenix' |
  'Primal Beast' |
  'Puck' |
  'Pudge' |
  'Pugna' |
  'Queen of Pain' |
  'Razor' |
  'Riki' |
  'Ringmaster' |
  'Rubick' |
  'Sand King' |
  'Shadow Demon' |
  'Shadow Fiend' |
  'Shadow Shaman' |
  'Silencer' |
  'Skywrath Mage' |
  'Slardar' |
  'Slark' |
  'Snapfire' |
  'Sniper' |
  'Spectre' |
  'Spirit Breaker' |
  'Storm Spirit' |
  'Sven' |
  'Techies' |
  'Templar Assassin' |
  'Terrorblade' |
  'Tidehunter' |
  'Timbersaw' |
  'Tinker' |
  'Tiny' |
  'Treant Protector' |
  'Troll Warlord' |
  'Tusk' |
  'Underlord' |
  'Undying' |
  'Ursa' |
  'Vengeful Spirit' |
  'Venomancer' |
  'Viper' |
  'Visage' |
  'Void Spirit' |
  'Warlock' |
  'Weaver' |
  'Windranger' |
  'Winter Wyvern' |
  'Witch Doctor' |
  'Wraith King' |
  'Zeus';

export interface HeroAssets {
  name: Hero;
  image_hero: string;
  image_type: string;
}

/**
 * Fetches the hero assets
 *
 * @param {Hero} hero 
 * @returns {HeroAssets}
 */
export const getHero = (hero: Hero): HeroAssets => {
  const heroAsset = heroes.find((h) => h.name === hero);
  if (!heroAsset) {
    throw new Error('Unknown hero');
  }

  return heroAsset as HeroAssets;
};
