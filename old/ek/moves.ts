import { MOVES, MoveData } from '../../../damage-calc/calc/src/data/moves';
import { DeepPartial, extend } from '../../../damage-calc/calc/src/util';

// Emerald Kaizo has some move changes
const EK_PATCH: Record<string, DeepPartial<MoveData>> = {
  'Weather Ball (Water)': { bp: 100, type: 'Water' },
  'Weather Ball (Fire)': { bp: 100, type: 'Fire' },
};

// Extend the existing Gen 3 movelist
export const EK_MOVES: Record<string, MoveData> = extend(
  true,
  {},
  MOVES[3],
  EK_PATCH,
) as Record<string, MoveData>;
