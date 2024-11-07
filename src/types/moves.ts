import { PokemonStats, Type } from '.'

export type MoveTarget = 'Your Pokemon' | 'One Opponent Pokemon' | 'Your two Pokemon' | 'Both Opponent Pokemon' | 'All' | 'Opponent [???]';

export interface Move {
  name: string;
  type: Type;
  power: number;
  accuracy: number;
  pp: number;
  target: MoveTarget;
  flags: {
    drain?: [number, number];
    multihit?: [number, number];
    recoil?: [number, number];
    contact?: boolean;
    sound?: boolean;
    directDamage?: boolean;
    oneHitKO?: boolean;
    highCrit?: boolean; // +1 crit stage
  };
  priority?: number;
  self?: {
    boosts?: Partial<PokemonStats>;
  };
  secondary?: {
    chance: number;
    status?: string;
    boosts?: Partial<PokemonStats>;
  }[];
}
