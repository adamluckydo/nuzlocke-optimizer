import fs from 'fs';
import csv from 'csv-parser';
import { MoveData } from '../../damage-calc/calc/src/data/moves';

interface FullMoveData extends MoveData {
  name?: string;
  pp?: number;
  accuracy?: number;
  effect?: string;
  effectChance?: number;
}

interface CsvRow {
  Moves: string;
  PP: string;
  Accuracy: string;
  Effect: string;
  'Effect Chance': string;
}

// TODO allow upserting from the CSV
// TODO for each feild in the CSV, figure out how it maps exactly to the existing type
// TODO Update FullMoveData with any new fields that don't exist on MoveData
export function prepareMovesData(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Read ek_moves.json
    const pokemonData: Record<string, MoveData | undefined> = JSON.parse(
      fs.readFileSync('./src/ek_moves.json', 'utf8'),
    ) as Record<string, MoveData>;

    const moves: Record<string, FullMoveData | undefined> = {
      ...pokemonData,
    };

    // Create a stream to read the CSV file
    fs.createReadStream('./src/moves.csv')
      .pipe(csv())
      .on('data', (row: CsvRow) => {
        // Normalize the move name
        const moveName = row.Moves;

        // Check if the move exists in the JSON data
        if (moves[moveName]) {
          const move = moves[moveName];
          if (move) {
            // Added this check to satisfy TypeScript's strict null checks.
            // Add the new fields from the CSV data to the existing JSON data
            move.pp = Number(row.PP);
            move.accuracy = Number(row.Accuracy);
            move.effect = row.Effect;
            move.effectChance = Number(row['Effect Chance']);
          }
        }
      })
      .on('end', () => {
        // Write the final JSON data to a file
        fs.writeFile(
          './src/updated_moves.json',
          JSON.stringify(moves, null, 2),
          (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          },
        );
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

(async () => {
  await prepareMovesData();
})();
