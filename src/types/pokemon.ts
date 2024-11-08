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
  /** Dynamic values (state saved across battles) */
  level: number;
  currentHp: number;
  heldItem?: Item;
  status?: Status;
  // Burn deals 1/8 max health at the end of every turn (including if opponent faints). Halves attack stat in damage calculations (affects confusion damage). Does not reduce damage of direct-damage moves.
  // Poison deals 1/16 max health at the end of every turn (including if opponent faints).
  // Toxic adds 1/16 max health to damage taken at the end of every turn, capping at 15 * (max HP / 16). If switched out, the toxic counter is reset.
  // Paralyzed Pokemon have a 25% chance of not being able to move. Paralysis also decreases the Pokemon's speed stat by 75%, rounded down.
  // Frozen Pokemon can not move. Each turn, they have a 20% chance of thawing when they attack. All damaging fire-type moves can thaw a frozen target. Flash Fire is also disabled when frozen.
  // Sleeping Pokemon cannot move (unless using Snore or Sleep Talk). Rest is a guaranteed sleep of 2 turns.
  restTurn?: 1 | 2; // Counter to track when a Pokemon should wake up after resting. On use, sets turn to 1 (if Early Bird, set turn to 2). On next turn, increment counter by 1. On next turn, clear counter and wake up.
  wakeUpChance?: .25 | .5 | .75 | 1; // Sleep can last up to 4 turns. Base 25% chance to wake up; cumulative 25% chance to wake up on each successive turn.
  toxicCounter?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15; // Damage = Counter * Max HP /16. Reset to 1 on switch out.
  /** In-battle stats (clear after switching out) */
  statStages: StatStages;
  digging?: boolean; // Turn 1 of Dig
  flying?: boolean; // Turn 1 of Fly
  diving?: boolean; // Turn 1 of Dive
  charging?: boolean; // Turn 1 of Solarbeam
  flinched?: boolean; // If flinched, Pokemon can not move this turn. Clear at end of turn.
  snapOutChance?: 0 | .25 | .5 | .75 | 1; // Set to indicate Pokemon is confused. Confusion can 2-5 turns with a guaranteed snap-out on the 5th turn. 25% chance to snap out on turn 2, 50% turn 3, 75% 4, 100% 5. Do not iterate if Pokemon is unable to attack due to sleep, freeze, or flinch. Can self-hit during Fly/Dive/Dig/etc. Confuse hit is 50% chance to deal 40bp of typeless physical damage to self (based on attack stat).
  cursed?: boolean; // Cursed Pokemon take 1/4 of their max HP as damage at the end of each turn (including if opponent faints).
  focused?: boolean; // Focus Energy. +2 crit stages; fails if already focused.
  bindReleaseChance?:  0 | .25 | .5 | .75 | 1; // Take 1/16 damage at the end of every turn; increment release chance after each turn. Caused by: Bind, Wrap, Fire Spin, Clamp.
  thrashTurn?: 1 | 2; // Upon using Thrash, sets this counter. Increment after 2nd thrash lands. After the 3rd thrash lands, clear counter and set Pokemon to confused (snapOutChance = 0).
  disabledMove?: Move // Currently disabled move
  disableEndChance?: 0 | .125 | .25 | .375 | .5 | .625 | .75 | .875 | 1; // Chance to release disable; begins at 0 when move is first diabled & increments after each turn.
  recharging?: boolean; // Hyper Beam. Set after using. Next turn, can't move and clear flag.
  seeded?: boolean; // Leech Seed. Drains 1/8 of this Pokemon's health at the end of each turn and restores it to the Pokemon who used Leech Seed.
  rageAtkStage?: number; // Rage. If this Pokemon used Rage, set this counter to 0. While this field is set, every time this Pokemon receives damage, increment the counter. When this Pokemon attacks with Rage, add this number to this Pokemon's Attack stat stage during damage calculation. If this Pokemon attacks with a move other than Rage, clear this field.
  minimized?: boolean; // Minimize. If this Pokemon used minimize, take 2x damage from Body Slam & Stomp.
  curled?: boolean; // Defense Curl. Rollout and Ice Ball deal 2x damage to opponents.
  bideTurn?: 1 | 2; // Upon using Bide, sets this counter. Increment after 2nd turn. On the 3rd turn, clear counter and deal 2x the damage of bideDamage (and clear bideDamage).
  bideDamage?: number; // Amount of damage received by this Pokemon while biding. Deal 2x on releasing Bide. Damage is typeless, so it can hit Ghost types.
  convertedType?: Type; // Conversion & Conversion 2. All calculations use this type.
  substituteHp?: number; // Substitute. Substitute health is initially 50% of max HP, and absorbs all incoming damage until it is broken.
  trapped?: boolean; // Cannot flee or switch out. Caused by Spider Web.
  mindRead?: boolean; // Mind Reader. Guarantees this Pokemon's next attack will hit.
  nightmare?: boolean; // Nightmare. Pokemon loses 1/4 of its maximum HP at the end of each turn. Only set if Pokemon is currently asleep, and clear after Pokemon wakes up.
  protectTurn?: number; // Protect/Detect. Initialize to 1 and increment on each consecutive use. This Pokemon cannot be hit by any moves while protected. Accuracy of Protect/Detect is multiplied by 2/3 each consecutive turn.
}
