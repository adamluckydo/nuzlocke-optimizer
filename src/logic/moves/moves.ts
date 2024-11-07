import { BattleConditions, Move, PokemonSpecies } from '../../types';

interface DamageRange {
  min: number;
  max: number;
}

interface MoveEffect {
  type: 'boost' | 'status' | 'terrain' | 'weather';
  value: number | string;
  chance?: number;
  target: 'self' | 'opponent' | 'field';
}

interface MoveOutcome {
  damage: DamageRange;
  criticalHitChance: number;
  effects: Array<{
    effect: MoveEffect;
    probability: number;
  }>;
}

// Pure function for calculating critical hit chance
const getCriticalHitChance = (move: Move): number => {
  // Default crit rate is 1/16 (0.0625)
  let critRate = 0.0625;

  // Adjust based on move properties
  if (move.flags?.highCritRatio) {
    critRate *= 4;
  }

  return critRate;
};

// Pure function for calculating damage range
const calculateDamageRange = (
  move: Move,
  attacker: PokemonSpecies,
  defender: PokemonSpecies,
  field: BattleConditions
): DamageRange => {
  // Calculate min/max damage
  // This is a placeholder - we'll implement the full damage formula later
  return {
    min: 0,
    max: 0,
  };
};

// Main move calculation function
export const calculateMoveOutcome = (
  move: Move,
  attacker: PokemonSpecies,
  defender: PokemonSpecies,
  field: BattleConditions
): MoveOutcome => {
  const damage = calculateDamageRange(move, attacker, defender, field);
  const critChance = getCriticalHitChance(move);

  const effects = (move.secondary || []).map(effect => ({
    effect: {
      status: effect.status,
      boosts: effect.boosts,
    },
    probability: effect.chance
  }));

  return {
    damage,
    criticalHitChance: critChance,
    effects,
  };
};

// Helper function for checking if a move will KO
export const willMoveKO = (
  outcome: MoveOutcome,
  defenderHP: number
): boolean | 'maybe' => {
  if (outcome.damage.min >= defenderHP) return true;
  if (outcome.damage.max < defenderHP) return false;
  return 'maybe';
};

// Function to calculate probability of KO
export const calculateKOProbability = (
  outcome: MoveOutcome,
  defenderHP: number
): number => {
  if (outcome.damage.min >= defenderHP) return 1;
  if (outcome.damage.max < defenderHP) return 0;

  // Simple linear probability between min and max damage
  // We can make this more sophisticated later with actual damage rolls
  const range = outcome.damage.max - outcome.damage.min;
  const required = defenderHP - outcome.damage.min;
  return (range - required) / range;
};
