import { PokemonSpecies, Pokemon, PokemonStats, Nature, Stat } from '../../types';

const DEFAULT_IVS: PokemonStats = {
  hp: 31,
  atk: 31,
  def: 31,
  spAtk: 31,
  spDef: 31,
  spd: 31
};

const DEFAULT_EVS: PokemonStats = {
  hp: 0,
  atk: 0,
  def: 0,
  spAtk: 0,
  spDef: 0,
  spd: 0
};

// Map of natures to their stat modifications
const NATURE_MODIFIERS: Record<Nature, { increase?: Stat; decrease?: Stat }> = {
  'Adamant': { increase: 'attack', decrease: 'spAttack' },
  'Bashful': {},  // Neutral nature
  'Bold': { increase: 'defense', decrease: 'attack' },
  'Brave': { increase: 'attack', decrease: 'speed' },
  'Calm': { increase: 'spDefense', decrease: 'attack' },
  'Careful': { increase: 'spDefense', decrease: 'spAttack' },
  'Docile': {}, // Neutral nature
  'Gentle': { increase: 'spDefense', decrease: 'defense' },
  'Hardy': {}, // Neutral nature
  'Hasty': { increase: 'speed', decrease: 'defense' },
  'Impish': { increase: 'defense', decrease: 'spAttack' },
  'Jolly': { increase: 'speed', decrease: 'spAttack' },
  'Lax': { increase: 'defense', decrease: 'spDefense' },
  'Lonely': { increase: 'attack', decrease: 'defense' },
  'Mild': { increase: 'spAttack', decrease: 'defense' },
  'Modest': { increase: 'spAttack', decrease: 'attack' },
  'Naive': { increase: 'speed', decrease: 'spDefense' },
  'Naughty': { increase: 'attack', decrease: 'spDefense' },
  'Quiet': { increase: 'spAttack', decrease: 'speed' },
  'Quirky': {}, // Neutral nature
  'Rash': { increase: 'spAttack', decrease: 'spDefense' },
  'Relaxed': { increase: 'defense', decrease: 'speed' },
  'Sassy': { increase: 'spDefense', decrease: 'speed' },
  'Serious': {}, // Neutral nature
  'Timid': { increase: 'speed', decrease: 'attack' }
};

// Factory function to create a Pokemon
export const initializePokemon = (
  data: Pokemon,
  config: {
    level?: number;
    nature?: Nature;
    ivs?: Partial<PokemonStats>;
    evs?: Partial<PokemonStats>;
  } = {}
): PokemonSpecies => ({
  ...data,
  level: config.level ?? 100,
  nature: config.nature ?? 'Serious',
  ivs: { ...DEFAULT_IVS, ...config.ivs },
  evs: { ...DEFAULT_EVS, ...config.evs }
});

// Calculate HP stat
export const calculateHP = (pokemon: PokemonSpecies): number => {
  const { baseStats, level, ivs, evs } = pokemon;

  return Math.floor(
    ((2 * baseStats.hp + ivs.hp + Math.floor(evs.hp / 4)) * level) / 100
  ) + level + 10;
};

// Calculate any non-HP stat
export const calculateNonHPStat = (pokemon: PokemonSpecies, stat: Exclude<Stat, 'hp'>): number => {
  const { baseStats, level, nature, ivs, evs } = pokemon;

  // Calculate base stat value
  const baseStat = Math.floor(
    ((2 * baseStats[stat] + ivs[stat] + Math.floor(evs[stat] / 4)) * level) / 100
  ) + 5;

  // Apply nature modifier
  const natureModifier = getNatureModifier(nature, stat);
  return Math.floor(baseStat * natureModifier);
};

// Get nature modifier for a stat
export const getNatureModifier = (nature: Nature, stat: Stat): number => {
  const modifier = NATURE_MODIFIERS[nature];
  if (modifier.increase === stat) return 1.1;
  if (modifier.decrease === stat) return 0.9;
  return 1;
};

// Calculate all stats for a Pokemon
export const calculateStats = (pokemon: PokemonSpecies): PokemonStats => {
  return {
    hp: calculateHP(pokemon),
    atk: calculateNonHPStat(pokemon, 'attack'),
    def: calculateNonHPStat(pokemon, 'defense'),
    spAtk: calculateNonHPStat(pokemon, 'spAttack'),
    spDef: calculateNonHPStat(pokemon, 'spDefense'),
    spd: calculateNonHPStat(pokemon, 'speed')
  };
};
