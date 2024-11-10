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
    drain?: number; // Fraction of damage dealt to recover as own HP
    recoil?: number; // Fraction of max HP dealt to take as recoil damage
    recover?: number; // Fraction of own max HP to recover
    sacrifice?: number; // Fraction of own max HP to sacrifice
    twoHit?: boolean; // Hits 2x
    multihit?: boolean; // Hits 2-5x; 3/8 2 hits, 3/8 3 hits, 1/8 4 hits, 1/8 5 hits
    contact?: boolean; // Attacking Pokemon touches opponent
    sound?: boolean; // Sound-based move
    directDamage?: boolean; // No damage calculation
    oneHitKO?: boolean; // Fails if under opponent level, 30% chance if equal level, +1% chance per level above
    highCrit?: boolean; // +1 crit stage
  };
  secondary?: {
    chance: number; // Likelihood of secondary effect procing
    self?: boolean; // Whether this secondary effect applies to the user
    flinch?: boolean;
    status?: Status;
    confuse?: boolean;
    curse?: boolean;
    statChanges?: Partial<StatStages>; // Number of stages to add/subtract from each stat
  }[];
  other?: string; // Text description of unique effect (to be implemented in code)
}
