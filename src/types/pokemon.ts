enum Type {
  NORMAL,
  FIRE,
  WATER,
  ELECTRIC,
  GRASS,
  ICE,
  FIGHTING,
  POISON,
  GROUND,
  FLYING,
  PSYCHIC,
  BUG,
  ROCK,
  GHOST,
  DRAGON,
  DARK,
  STEEL,
}

enum Nature {
  ADAMANT,
  BASHFUL,
  BOLD,
  BRAVE,
  CALM,
  CAREFUL,
  DOCILE,
  GENTLE,
  HARDY,
  HASTY,
  IMPISH,
  JOLLY,
  LAX,
  LONELY,
  MILD,
  MODEST,
  NAIVE,
  NAUGHTY,
  QUIET,
  QUIRKY,
  RASH,
  RELAXED,
  SASSY,
  SERIOUS,
  TIMID,
}

enum Effect {
  PARALYZE,
  POISON,
  BURN,
  SLEEP,
  CONFUSE,
  INC_ATK,
  INC_DEF,
  INC_SP_ATK,
  INC_SP_DEF,
  INC_SPD,
  SHRP_INC_ATK,
  SHRP_INC_DEF,
  SHRP_INC_SP_ATK,
  SHRP_INC_SP_DEF,
  SHRP_INC_SPD,
  DEC_ATK,
  DEC_DEF,
  DEC_SP_ATK,
  DEC_SP_DEF,
  DEC_SPD,
  SHRP_DEC_ATK,
  SHRP_DEC_DEF,
  SHRP_DEC_SP_ATK,
  SHRP_DEC_SP_DEF,
  SHRP_DEC_SPD,
}

enum Status {
  PAR,
  PSN,
  BRN,
  SLP,
}

interface Stats {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  spd: number;
}

interface Move {
  name: string;
  type: Type;
  power: number;
  accuracy: number;
  effect: Effect[];
}

interface Pokemon {
  name: string;
  types: Type[];
  baseStats: Stats;
  ivs: Stats;
  nature: Nature;
  location: string;
  level: number;
  experience: number;
  moves: Move[];
  status: Status;
  currentHp: number;
}

export interface PokemonBattleStatus {
  pokemon: Pokemon;

  confused?: boolean;
  battleStats: Stats; // hp is current hp (not total); other stats are +/- changes
}
