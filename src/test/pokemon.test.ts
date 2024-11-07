import { Pokemon, PokemonData } from '@src/pokemon';

describe('Pokemon', () => {
  // Setup a test Pokemon data fixture
  const charizardData: PokemonData = {
    name: 'Charizard',
    baseStats: {
      hp: 78,
      attack: 84,
      defense: 78,
      spAttack: 109,
      spDefense: 85,
      speed: 100
    },
    types: ['Fire', 'Flying'],
    abilities: ['Blaze', 'Solar Power']
  };

  describe('stat calculations', () => {
    test('calculates base HP correctly', () => {
      const pokemon = new Pokemon(charizardData);
      // At level 100, no EVs, 31 IVs:
      // ((2 * 78 + 31 + 0/4) * 100/100) + 100 + 10 = 297
      expect(pokemon.calculateStat('hp')).toBe(297);
    });

    test('calculates HP with EVs', () => {
      const pokemon = new Pokemon(charizardData, 100, 'Serious',
        undefined, { hp: 252 });
      // ((2 * 78 + 31 + 252/4) * 100/100) + 100 + 10 = 360
      expect(pokemon.calculateStat('hp')).toBe(360);
    });

    test('applies nature correctly', () => {
      const pokemon = new Pokemon(charizardData, 100, 'Modest');

      // Base SpAtk calculation without nature:
      // ((2 * 109 + 31 + 0/4) * 100/100) + 5 = 254
      // With Modest (+SpAtk): 254 * 1.1 = 279
      expect(pokemon.calculateStat('spAttack')).toBe(279);

      // Base Attack calculation:
      // ((2 * 84 + 31 + 0/4) * 100/100) + 5 = 204
      // With Modest (-Atk): 204 * 0.9 = 183
      expect(pokemon.calculateStat('attack')).toBe(183);
    });

    test('handles neutral nature', () => {
      const pokemon = new Pokemon(charizardData, 100, 'Serious');
      // ((2 * 100 + 31 + 0/4) * 100/100) + 5 = 236
      expect(pokemon.calculateStat('speed')).toBe(236);
    });

    test('calculates non-HP stats correctly', () => {
      const pokemon = new Pokemon(charizardData, 100, 'Modest',
        undefined, { spAttack: 252 });

      // Base calculation for SpAtk:
      // ((2 * 109 + 31 + floor(252/4)) * 100/100) + 5 = 349
      // With Modest nature (+10%): Math.floor(349 * 1.1) = 383
      expect(pokemon.calculateStat('spAttack')).toBe(383);
    });
  });

  describe('level handling', () => {
    test('calculates stats at level 50', () => {
      const pokemon = new Pokemon(charizardData, 50);
      // At level 50: ((2 * 78 + 31 + 0/4) * 50/100) + 50 + 10 = 153
      expect(pokemon.calculateStat('hp')).toBe(153);
    });
  });

  describe('IV handling', () => {
    test('uses custom IVs when provided', () => {
      const pokemon = new Pokemon(charizardData, 100, 'Serious',
        { hp: 0 });
      // With 0 HP IV: ((2 * 78 + 0 + 0/4) * 100/100) + 100 + 10 = 266
      expect(pokemon.calculateStat('hp')).toBe(266);
    });
  });
});
