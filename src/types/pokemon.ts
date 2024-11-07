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

export type Stat = 'hp' | 'atk' | 'def' | 'spAtk' | 'spDef' | 'spd';

export interface PokemonStats {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  spd: number;
}

export type StatStage = -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
export interface StatStages {
  atk: StatStage;
  def: StatStage;
  spAtk: StatStage;
  spDef: StatStage;
  spd: StatStage;
  eva: StatStage;
  acc: StatStage;
}

export type Status = 'BRN' | 'PSN' | 'TOX' | 'PAR' | 'FRZ' | 'SLP';

export interface PokemonSpecies {
  name: string;
  baseStats: PokemonStats;
  types: [Type] | [Type, Type];
  abilities: string[];
  percentFemale: number;
  weight: number;
  catchRate: number;
  learnset: {
    move: Move;
    level?: number; // If learned by level-up
  }[];
  heldItem?: Item;
  heldItemChance?: number;
  evolutions?: {
    name: string; // Resulting species name
    level?: number; // If level-up evo
    item?: Item; // If item-based evo
  }[];
  priorEvolutions?: string[]; // Prior forms (for checking dupes)
}

export interface Pokemon extends PokemonSpecies {
  nickName?: string;
  nature: Nature;
  ability: string;
  ivs: PokemonStats;
  level: number;
  currentHp: number;
  statStages: StatStages;
  heldItem?: Item;
  digging?: boolean; // Turn 1 of Dig
  flying?: boolean; // Turn 1 of Fly
  diving?: boolean; // Turn 1 of Dive
  flinched?: boolean; // If flinched, Pokemon can not move this turn. Clear at end of turn.
  status?: Status;
  // Burn deals 1/8 max health at the end of every turn (including if opponent faints). Halves attack stat in damage calculations (affects confusion damage). Does not reduce damage of direct-damage moves.
  // Poison deals 1/16 max health at the end of every turn (including if opponent faints).
  // Toxic adds 1/16 max health to damage taken at the end of every turn, capping at 15 * (max HP / 16). If switched out, the toxic counter is reset.
  // Paralyzed Pokemon have a 25% chance of not being able to move. Paralysis also decreases the Pokemon's speed stat by 75%, rounded down.
  // Frozen Pokemon can not move. Each turn, they have a 20% chance of thawing when they attack. All damaging fire-type moves can thaw a frozen target. Flash Fire is also disabled when frozen.
  // Sleeping Pokemon cannot move (unless using Snore or Sleep Talk). Rest is a guaranteed sleep of 2 turns.
  restTurn?: 1 | 2; // Counter to track when a Pokemon should wake up after resting. On use, sets turn to 1 (if Early Bird, set turn to 2). On next turn, increment counter by 1. On next turn, clear counter and wake up.
  wakeUpChance?: .25 | .5 | .75 | 1; // Sleep can last up to 4 turns. Base 25% chance to wake up; cumulative 25% chance to wake up on each successive turn.
  snapOutChance?: 0 | .25 | .5 | .75 | 1; // Set to indicate Pokemon is confused. Confusion can 2-5 turns with a guaranteed snap-out on the 5th turn. 25% chance to snap out on turn 2, 50% turn 3, 75% 4, 100% 5. Do not iterate if Pokemon is unable to attack due to sleep, freeze, or flinch. Can self-hit during Fly/Dive/Dig/etc. Confuse hit is 50% chance to deal 40bp of typeless physical damage to self (based on attack stat).
  toxicCounter?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15; // Damage = Counter * Max HP /16. Reset to 1 on switch out.
  cursed?: boolean; // Cursed Pokemon take 1/4 of their max HP as damage at the end of each turn (including if opponent faints).
  focusEnergy?: boolean; // +2 crit stages
  bindReleaseChance?:  0 | .25 | .5 | .75 | 1; // Take 1/8 damage at the end of every turn; increment release chance after each turn.
  thrashTurn?: 1 | 2; // Upon using thrash, sets this counter. Increment after 2nd thrash lands. After the 3rd thrash lands, clear counter and set Pokemon to confused (snapOutChance = 0).
  disabledMove?: Move // Currently disabled move
  disableEndChance?: 0 | .125 | .25 | .375 | .5 | .625 | .75 | .875 | 1; // Chance to release disable; begins at 0 when move is first diabled & increments after each turn.
  recharging?: boolean; // Hyper Beam. Set after using. Next turn, can't move and clear flag.
  seeded?: boolean; // Leech Seed. Drains 1/8 of this Pokemon's health at the end of each turn and restores it to the Pokemon who used Leech Seed.
}
