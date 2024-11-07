import { Item } from "./item";
import { Move } from "./moves";
import { Type } from "./types";

export type Nature =
  | 'Adamant'
  | 'Bashful'
  | 'Bold'
  | 'Brave'
  | 'Calm'
  | 'Careful'
  | 'Docile'
  | 'Gentle'
  | 'Hardy'
  | 'Hasty'
  | 'Impish'
  | 'Jolly'
  | 'Lax'
  | 'Lonely'
  | 'Mild'
  | 'Modest'
  | 'Naive'
  | 'Naughty'
  | 'Quiet'
  | 'Quirky'
  | 'Rash'
  | 'Relaxed'
  | 'Sassy'
  | 'Serious'
  | 'Timid';

export type Stat = 'hp' | 'attack' | 'defense' | 'spAttack' | 'spDefense' | 'speed';

export interface PokemonStats {
  readonly hp: number;
  readonly atk: number;
  readonly def: number;
  readonly spAtk: number;
  readonly spDef: number;
  readonly spd: number;
}

export interface PokemonSpecies {
  readonly name: string;
  readonly baseStats: PokemonStats;
  readonly types: [Type] | [Type, Type];
  readonly abilities: string[];
  readonly percentFemale: number;
  readonly catchRate: number;
  readonly learnset: {
    readonly move: Move;
    readonly level?: number; // If learned by level-up
  }[];
  readonly heldItem?: Item;
  readonly heldItemChance?: number;
  readonly evolutions?: {
    name: string; // Resulting species name
    level?: number; // If level-up evo
    item?: Item; // If item-based evo
  }[];
  readonly priorEvolutions?: string[]; // Prior forms (for checking dupes)
}

export interface Pokemon extends PokemonSpecies {
  nickName?: string;
  nature: Nature;
  ability: string;
  ivs: PokemonStats;
  level: number;
  currentHp: number;
  boosts: {
    critStage?: number;
    atk?: number;
    def?: number;
    spAtk?: number;
    spDef?: number;
    spd?: number;
  }
  heldItem?: Item;
  status?: 'BRN' | 'PSN' | 'TOX' | 'PRZ' | 'FRZ' | 'SLP';
  // Burn deals 1/8 max health at the end of every turn (including if opponent faints). Halves attack stat in damage calculations (affects confusion damage). Does not reduce damage of direct-damage moves.
  // Poison deals 1/16 max health at the end of every turn (including if opponent faints).
  // Toxic adds 1/16 max health to damage taken at the end of every turn, capping at 15 * (max HP / 16). If switched out, the toxic counter is reset.
  // Paralyzed Pokemon have a 25% chance of not being able to move. Paralysis also decreases the Pokemon's speed stat by 75%, rounded down.
  // Frozen Pokemon can not move. Each turn, they have a 20% chance of thawing when they attack. All damaging fire-type moves can thaw a frozen target. Flash Fire is also disabled when frozen.
  // Sleeping Pokemon cannot move (unless using Snore or Sleep Talk). Rest is a guaranteed sleep of 2 turns.
  restTurn?: 1 | 2; // Counter to track when a Pokemon should wake up after resting. On use, sets turn to 1 (if Early Bird, set turn to 2). On next turn, increment counter by 1. On next turn, clear counter and wake up.
  wakeUpChance?: .25 | .5 | .75 | 1; // Sleep can last up to 4 turns. Base 25% chance to wake up; cumulative 25% chance to wake up on each successive turn.
  snapOutChance?: 0 | .25 | .5 | .75 | 1; // Confusion can last up to 5 turns with a guaranteed snap-out on the 5th turn. 25% chance to snap out on turn 2, 50% turn 3, 75% 4, 100% 5. Do not iterate if Pokemon is unable to attack due to sleep, freeze, or flinch. Can self-hit during Fly/Dive/Dig/etc. Confuse hit is 50% chance to deal 40bp of typeless physical damage to self (based on attack stat).
  toxicCounter?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15; // Damage = Counter * Max HP /16. Reset to 1 on switch out.
  cursed?: boolean; // Cursed Pokemon take 1/4 of their max HP as damage at the end of each turn (including if opponent faints).
}
