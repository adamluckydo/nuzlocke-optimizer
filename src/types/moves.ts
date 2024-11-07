import { PokemonStats, StatStages, Status, Type } from '.'

export type MoveTarget = 'Your Pokemon' | 'One Opponent Pokemon' | 'Your two Pokemon' | 'Both Opponent Pokemon' | 'All' | 'Opponent [???]';

export interface Move {
  name: string;
  type: Type;
  bp: number;
  acc: number;
  pp: number;
  target: MoveTarget;
  priority?: number;
  flags?: {
    twoTurn?: boolean; // Takes one turn to set up, and a second turn to activate
    drain?: number; // Fraction of damage dealt to recover as own health
    twoHit?: boolean; // Hits 2x
    multihit?: boolean; // Hits 2-5x; 25% chance of each
    recoil?: number; // Fraction of max health taken as recoil damage
    contact?: boolean;
    sound?: boolean;
    directDamage?: boolean;
    oneHitKO?: boolean; // Fails if under opponent level, 30% chance if equal level, +1% chance per level above
    highCrit?: boolean; // +1 crit stage
  };
  self?: {
    focusEnergy?: boolean; // +2 crit stages; fails if Pokemon is already focused
    statChanges?: Partial<StatStages>; // Number of stages to add/subtract from each stat
  };
  secondary?: {
    chance: number;
    flinch?: boolean;
    status?: Status;
    confuse?: boolean;
    curse?: boolean;
    statChanges?: Partial<StatStages>; // Number of stages to add/subtract from each stat
  }[];
  other?: string; // Text description of unique effect (to be implemented in code)
}
