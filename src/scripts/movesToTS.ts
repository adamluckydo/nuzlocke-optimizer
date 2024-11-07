// scripts/convertMovesToTS.ts
import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse/sync';

interface EKJsonMove {
  bp: number;
  type?: string;
  target?: string;
  drain?: [number, number];
  multihit?: [number, number];
  recoil?: [number, number];
  makesContact?: boolean;
  isSound?: boolean;
}

const csvPath = path.join(__dirname, './EKBaseMoves.csv');
const jsonPath = path.join(__dirname, './ek_moves.json');
const outputPath = path.join(__dirname, './moves.ts');

const csvContent = fs.readFileSync(csvPath, 'utf-8');
const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

const generateMoveData = () => {
  let output = `// Generated from EKBase.csv and ek_moves.json
import { MoveData } from '../types';

export const MOVES: {[name: string]: MoveData} = {
`;

  records.forEach((record: any) => {
    const moveName = record.Attack;
    const jsonMove = jsonContent[moveName];

    if (!jsonMove) {
      console.warn(`Warning: Move ${moveName} not found in JSON data`);
    }

    // Combine data from both sources
    output += `  '${moveName}': {\n`;
    output += `    name: '${moveName}',\n`;
    output += `    type: '${record.Type}',\n`;
    output += `    power: ${parseInt(record.Power)},\n`;
    output += `    accuracy: ${parseInt(record.Accuracy)},\n`;
    output += `    pp: ${parseInt(record.PP)},\n`;
    output += `    target: '${record.Target}',\n`;

    // Add flags from JSON data
    output += `    flags: {\n`;
    if (jsonMove?.makesContact) {
      output += `      contact: true,\n`;
    }
    if (jsonMove?.isSound) {
      output += `      sound: true,\n`;
    }
    // Add drain if present
    if (jsonMove?.drain) {
      output += `    drain: [${jsonMove.drain[0]}, ${jsonMove.drain[1]}],\n`;
    }
    // Add multihit if present
    if (jsonMove?.multihit) {
      output += `    multihit: [${jsonMove.multihit}, ${jsonMove.multihit[1]}],\n`;
    }
    // Add recoil if present
    if (jsonMove?.recoil) {
      output += `    recoil: [${jsonMove.recoil[0]}, ${jsonMove.recoil[1]}],\n`;
    }
    output += `    },\n`;

    // Add secondary effects from CSV
    const effectChance = parseInt(record['Effect Chance']);
    if (effectChance && record.Effect) {
      output += `    secondary: [{\n`;
      output += `      chance: ${effectChance},\n`;
      output += `      status: '${record.Effect}'\n`;
      output += `    }],\n`;
    }

    output += `  },\n`;
  });

  output += '};\n';
  return output;
}

fs.writeFileSync(outputPath, generateMoveData());
