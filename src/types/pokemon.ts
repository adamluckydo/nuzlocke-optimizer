import { Ability } from "./ability";
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
  usedItem?: Item; // Item that was used. Necessary to track for Recycle.
  statStages: StatStages;
  digging?: boolean; // Turn 1 of Dig
  flying?: boolean; // Turn 1 of Fly
  diving?: boolean; // Turn 1 of Dive
  bouncing?: boolean; // Turn 1 of Bounce
  charging?: boolean; // Turn 1 of Solarbeam
  flinched?: boolean; // If flinched, Pokemon can not move this turn. Clear at end of turn.
  helped?: boolean; // Caused by Helping Hand (from an ally). When helped, this Pokemon's move does double damage. Clear after this Pokemon moves (or the end of the turn).
  magicCoat?: boolean; // Magic Coat. Reflect all status condition causing moves that would hit this Pokemon back to the opponent. Reflected moves include: Attract, Block, Charm, Confuse Ray, Cotton Spore, Fake Tears, Feather Dance, Flash, Flatter, Glare, Grass Whistle, Growl, Hypnosis, Leech Seed, Leer, Lovely Kiss, Mean Look, Metal Sound, Poison Gas, Poison Powder, Sand Attack, Scary Face, Screech, Sing, Sleep Powder, Smokescreen, Spider Web, Spore, String Shot, Stun Spore, Supersonic, Swagger, Sweet Kiss, Sweet Scent, Tail Whip, Thunder Wave, Tickle, Toxic, Will-O-Wisp, Yawn. Clear at the end of the turn.
  enduring?: boolean; // Endure. Survive all incoming attacks (minimum 1 HP remaining). Clear at end of turn.
  charged?: boolean; // Charge. After using Charge, if this Pokemon uses a damaging electric attack, it will deal double damage. Clear after one turn.
  drowsyTurn?: 1 | 2; // Caused by Yawn. Set to 1 when this Pokemon is hit by Yawn, then increment at the end of the turn. This Pokemon will fall asleep if they are still on the field at the end of their 2nd turn.
  snapOutChance?: 0 | .25 | .5 | .75 | 1; // Set to indicate Pokemon is confused. Confusion can last 2-5 turns with a guaranteed snap-out on the 5th turn. 25% chance to snap out on turn 2, 50% turn 3, 75% 4, 100% 5. Do not iterate if Pokemon is unable to attack due to sleep, freeze, or flinch. Can self-hit during Fly/Dive/Dig/etc. Confuse hit is 50% chance to deal 40bp of typeless physical damage to self (based on attack stat).
  cursed?: boolean; // Caused by Curse (from Ghost types). This Pokemon take 1/4 of their max HP as damage at the end of each turn (including if opponent faints).
  focused?: boolean; // Focus Energy. +2 crit stages; fails if already used.
  bindReleaseChance?:  0 | .25 | .5 | .75 | 1; // Caused by: Bind, Wrap, Fire Spin, Clamp, Whirlpool. Take 1/16 damage at the end of every turn; increment release chance at the end of each turn.
  thrashTurn?: 1 | 2; // Upon using Thrash, sets this counter. Increment after 2nd thrash lands. After the 3rd thrash lands, clear counter and set Pokemon to confused (snapOutChance = 0).
  disabledMove?: Move // Disable. Currently disabled move.
  disableEndChance?: 0 | .125 | .25 | .375 | .5 | .625 | .75 | .875 | 1; // Disable. Chance to release Disable; begins at 0 when move is first diabled & increments at the end of each turn.
  recharging?: boolean; // Hyper Beam, Blast Burn, Hydro Cannon, Frenzy Plant. Set after using. Next turn, Pokemon can't move and clear flag.
  seeded?: boolean; // Caused by Leech Seed. Drains 1/8 of this Pokemon's health at the end of each turn and restores it to the Pokemon who used Leech Seed.
  rageAtkStage?: number; // Rage. If this Pokemon used Rage, set this counter to 0. While this field is set, every time this Pokemon receives damage, increment the counter. When this Pokemon attacks with Rage, add this number to this Pokemon's Attack stat stage during damage calculation. If this Pokemon attacks with a move other than Rage, clear this field.
  minimized?: boolean; // Minimize. If this Pokemon used minimize, take 2x damage from Body Slam, Stomp, Needle Arm, and Extrasensory.
  curled?: boolean; // Defense Curl. Rollout and Ice Ball deal 2x damage to opponents.
  bideTurn?: 1 | 2; // Upon using Bide, sets this counter. Increment after 2nd turn. On the 3rd turn, clear counter and deal 2x the damage of bideDamage (and clear bideDamage).
  bideDamage?: number; // Bide. Amount of damage received by this Pokemon while biding. Deal 2x on releasing Bide. Damage is typeless, so it can hit Ghost types.
  currentType?: Type; // Camouflage, Conversion, & Conversion 2. All calculations use this type.
  substituteHp?: number; // Substitute. Substitute health is initially 50% of max HP, and absorbs all incoming damage until it is broken.
  trapped?: boolean; // Caused by Mean Look / Spider Web / Block. Pokemon cannot flee or switch out.
  sureHit?: boolean; // Mind Reader & Lock-on. Guarantees this Pokemon's next attack will hit.
  nightmare?: boolean; // Caused by Nightmare. Pokemon loses 1/4 of its maximum HP at the end of each turn. Only set if Pokemon is currently asleep, and clear after Pokemon wakes up.
  protectTurn?: number; // Protect/Detect. Initialize to 1 and increment on each consecutive use. This Pokemon cannot be hit by any moves while protected. Accuracy of Protect/Detect is multiplied by 2/3 each consecutive turn.
  tangible?: boolean; // Caused by Foresight and Odor Sleuth. If this Pokemon is currently a Ghost type, Normal and Fighting attacks will hit it.
  bonded?: boolean; // Destiny Bond. Until this Pokemon moves again (including turns of sleeping or flinching), if an opponent attacks this Pokemon and it faints, the opponent will also faint.
  grudge?: boolean; // Grudge. Until this Pokemon moves again (including turns of sleeping or flinching), if an opponent attacks this Pokemon and it faints, the opponent's move will lose all of its PP.
  perishTurn?: 1 | 2 | 3; // Caused by Perish Song. Set count to 1 when Perish Song is first used, and increment at the end of each turn. If end of turn is reached when perishTurn is 3, this Pokemon faints.
  rolloutMultiplier?: 0 | 1 | 2 | 3 | 4; // Rollout. Set count to 0 when Rollout is first used, and increment at the end of each turn. On each Rollout damage calculation, bp = (original bp) * 2^(rolloutMultiplier)
  iceBallMultiplier?: 0 | 1 | 2 | 3 | 4; // Ice Ball. Set count to 0 when Ice Ball is first used, and increment at the end of each turn. On each Ice Ball damage calculation, bp = (original bp) * 2^(iceBallMultiplier)
  attracted?: boolean; // Caused by Attract (if opponent is of opposite gender). Pokemon has a 50% chance of being unable to attack the opponent. Clear upon opponent or this Pokemon fainting or switching out.
  safeguardTurn?: 1 | 2 | 3 | 4 | 5; // Safeguard. Pokemon cannot be afflicted by non-volatile status conditions from opponents for 5 turns. Set count to 1 when Safeguard is first used and increment at the end of each turn.
  encoreCount?: 0 | 1 | 2 | 3 | 4 | 5; // Caused by Encore. Set count to 0 when this Pokemon is first Encored, and iterate after each time it moves. Chance to release Encore after opponent moves is: 0, 0, 20%, 40%, 60%, 80%. If moving when encoreCount is 5, clear the field and end the Encore afterwards.
  uproarTurn?: 1 | 2 | 3; // Uproar. Set to 1 when Uproar is used, then increment at the end of each turn. After Uproar is used on the 3rd turn, clear the counter.
  stockpileCount?: 1 | 2 | 3; // Stockpile. To be used with Spit Up or Swallow.
  tormentLastMove?: Move; // Caused by Torment. This Pokemon can not use their previously used move again.
  focusing?: boolean; // Focus Punch. Set at the beginning of the turn the attack is used; if this Pokemon is damaged by an opponent's move before Focus Punch lands, flinch this Pokemon (and clear focusing).
  followMe?: boolean; // Follow Me. If this Pokemon is being followed, in a double battle, all attacks from the opponent's side will be directed to this Pokemon.
  tauntTurn?: 1 | 2 | 3; // Caused by Taunt. Set to 1 when Taunt is used, then increment at the end of each turn. This Pokemon can not use Status-category moves for 3 turns. Moves include: Attract, Block, Charm, Confuse Ray, Cotton Spore, Disable, Encore, Fake Tears, Feather Dance, Flash, Flatter, Foresight, Kinesis, Glare, Grass Whistle, Growl, Hypnosis, Leech Seed, Leer, Lovely Kiss, Mean Look, Metal Sound, Odor Sleuth, Poison Gas, Poison Powder, Roar, Sand Attack, Scary Face, Screech, Sing, Sleep Powder, Smokescreen, Spider Web, Spikes, Spite, Spore, String Shot, Stun Spore, Supersonic, Swagger, Sweet Kiss, Sweet Scent, Tail Whip, Taunt, Thunder Wave, Tickle, Torment, Toxic, Will-O-Wisp, Whirlwind, Yawn.
  currentAbility?: Ability; // Skill Swap & Role Play. If a move causes this Pokemon to have a different ability, it's stored here.
  ingrained?: boolean; // Ingrain. Pokemon restores 1/16 of their HP at the end of each turn, but can't switch out unless Baton Pass is used. Roar and Whirlwind will have no effect. Cancels any ground-type immunity the Pokemon may have.
  imprison?: boolean; // Imprison. Causes opponents to not be able to use any move the user knows.
}
