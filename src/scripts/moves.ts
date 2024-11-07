import { Move } from '../types';

export const MOVES: {[name: string]: Move} = {
  'Pound': {
    name: 'Pound',
    type: 'Normal',
    power: 40,
    accuracy: 100,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Karate Chop': {
    name: 'Karate Chop',
    type: 'Fighting',
    power: 50,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      highCrit: true,
    },
  },
  'Doubleslap': {
    name: 'Doubleslap',
    type: 'Normal',
    power: 15,
    accuracy: 85,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Weather Ball': {
    name: 'Weather Ball',
    type: 'Water',
    power: 100,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Mega Punch': {
    name: 'Mega Punch',
    type: 'Normal',
    power: 80,
    accuracy: 85,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Pay Day': {
    name: 'Pay Day',
    type: 'Normal',
    power: 40,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Earn money'
    }],
  },
  'Fire Punch': {
    name: 'Fire Punch',
    type: 'Fire',
    power: 75,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      status: 'Burn'
    }],
  },
  'Ice Punch': {
    name: 'Ice Punch',
    type: 'Ice',
    power: 75,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      status: 'Freeze'
    }],
  },
  'Thunderpunch': {
    name: 'Thunderpunch',
    type: 'Electric',
    power: 75,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Parlyze'
    }],
  },
  'Scratch': {
    name: 'Scratch',
    type: 'Normal',
    power: 40,
    accuracy: 100,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Weather Ball': {
    name: 'Weather Ball',
    type: 'Fire',
    power: 100,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Guillotine': {
    name: 'Guillotine',
    type: 'Normal',
    power: 1,
    accuracy: 30,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      oneHitKO: true,
    },
  },
  'Razor Wind': {
    name: 'Razor Wind',
    type: 'Normal',
    power: 80,
    accuracy: 100,
    pp: 10,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Swords Dance': {
    name: 'Swords Dance',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Cut': {
    name: 'Cut',
    type: 'Normal',
    power: 50,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Gust': {
    name: 'Gust',
    type: 'Flying',
    power: 40,
    accuracy: 100,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Wing Attack': {
    name: 'Wing Attack',
    type: 'Flying',
    power: 60,
    accuracy: 100,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Whirlwind': {
    name: 'Whirlwind',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Fly': {
    name: 'Fly',
    type: 'Flying',
    power: 70,
    accuracy: 95,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Bind': {
    name: 'Bind',
    type: 'Normal',
    power: 15,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 100,
      status: '2-5 Hits + Lower Evas.'
    }],
  },
  'Slam': {
    name: 'Slam',
    type: 'Normal',
    power: 80,
    accuracy: 75,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Vine Whip': {
    name: 'Vine Whip',
    type: 'Grass',
    power: 35,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Stomp': {
    name: 'Stomp',
    type: 'Normal',
    power: 65,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Flinch 2x on minimized'
    }],
  },
  'Double Kick': {
    name: 'Double Kick',
    type: 'Fighting',
    power: 30,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    multihit: [2, undefined],
    },
  },
  'Mega Kick': {
    name: 'Mega Kick',
    type: 'Normal',
    power: 120,
    accuracy: 75,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Jump Kick': {
    name: 'Jump Kick',
    type: 'Fighting',
    power: 70,
    accuracy: 95,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Rolling Kick': {
    name: 'Rolling Kick',
    type: 'Fighting',
    power: 60,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Target flinches'
    }],
  },
  'Sand-attack': {
    name: 'Sand-attack',
    type: 'Ground',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Headbutt': {
    name: 'Headbutt',
    type: 'Normal',
    power: 70,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Target flinches'
    }],
  },
  'Horn Attack': {
    name: 'Horn Attack',
    type: 'Normal',
    power: 65,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Fury Attack': {
    name: 'Fury Attack',
    type: 'Normal',
    power: 15,
    accuracy: 85,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    multihit: [2,5, 5],
    },
  },
  'Drill Run': {
    name: 'Drill Run',
    type: 'Ground',
    power: 80,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Tackle': {
    name: 'Tackle',
    type: 'Normal',
    power: 35,
    accuracy: 95,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Body Slam': {
    name: 'Body Slam',
    type: 'Normal',
    power: 85,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Parlyze'
    }],
  },
  'Wrap': {
    name: 'Wrap',
    type: 'Normal',
    power: 15,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 100,
      status: '2-5 Hits + Lower Evas.'
    }],
  },
  'Take Down': {
    name: 'Take Down',
    type: 'Normal',
    power: 90,
    accuracy: 85,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    recoil: [1, 4],
    },
  },
  'Thrash': {
    name: 'Thrash',
    type: 'Normal',
    power: 90,
    accuracy: 100,
    pp: 20,
    target: 'Opponent [???]',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 100,
      status: 'Attk. 3 turns + confuse'
    }],
  },
  'Double-edge': {
    name: 'Double-edge',
    type: 'Normal',
    power: 120,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Tail Whip': {
    name: 'Tail Whip',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 1,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Poison Sting': {
    name: 'Poison Sting',
    type: 'Poison',
    power: 15,
    accuracy: 100,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Poison'
    }],
  },
  'Twineedle': {
    name: 'Twineedle',
    type: 'Bug',
    power: 25,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2, undefined],
    },
    secondary: [{
      chance: 20,
      status: '2 Hits + Poison'
    }],
  },
  'Pin Missile': {
    name: 'Pin Missile',
    type: 'Bug',
    power: 15,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2,5, 5],
    },
  },
  'Leer': {
    name: 'Leer',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 1,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Bite': {
    name: 'Bite',
    type: 'Dark',
    power: 60,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Target flinches'
    }],
  },
  'Growl': {
    name: 'Growl',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 1,
    target: 'Both Opponent Pokemon',
    flags: {
      sound: true,
    },
  },
  'Roar': {
    name: 'Roar',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
  },
  'Sing': {
    name: 'Sing',
    type: 'Normal',
    power: 0,
    accuracy: 70,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
  },
  'Supersonic': {
    name: 'Supersonic',
    type: 'Normal',
    power: 0,
    accuracy: 55,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
  },
  'Sonicboom': {
    name: 'Sonicboom',
    type: 'Normal',
    power: 1,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
  },
  'Disable': {
    name: 'Disable',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Acid': {
    name: 'Acid',
    type: 'Poison',
    power: 40,
    accuracy: 100,
    pp: 30,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Lower Def.'
    }],
  },
  'Ember': {
    name: 'Ember',
    type: 'Fire',
    power: 40,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Burn'
    }],
  },
  'Flamethrower': {
    name: 'Flamethrower',
    type: 'Fire',
    power: 95,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Burn'
    }],
  },
  'Mist': {
    name: 'Mist',
    type: 'Ice',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Water Gun': {
    name: 'Water Gun',
    type: 'Water',
    power: 40,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hydro Pump': {
    name: 'Hydro Pump',
    type: 'Water',
    power: 120,
    accuracy: 85,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Surf': {
    name: 'Surf',
    type: 'Water',
    power: 95,
    accuracy: 100,
    pp: 24,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Ice Beam': {
    name: 'Ice Beam',
    type: 'Ice',
    power: 95,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Freeze'
    }],
  },
  'Blizzard': {
    name: 'Blizzard',
    type: 'Ice',
    power: 120,
    accuracy: 70,
    pp: 8,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Freeze'
    }],
  },
  'Psybeam': {
    name: 'Psybeam',
    type: 'Psychic',
    power: 65,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Confuse'
    }],
  },
  'Bubblebeam': {
    name: 'Bubblebeam',
    type: 'Water',
    power: 65,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Lower Spd.'
    }],
  },
  'Aurora Beam': {
    name: 'Aurora Beam',
    type: 'Ice',
    power: 65,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Lower Attk.'
    }],
  },
  'Hyper Beam': {
    name: 'Hyper Beam',
    type: 'Normal',
    power: 150,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Peck': {
    name: 'Peck',
    type: 'Flying',
    power: 35,
    accuracy: 100,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Drill Peck': {
    name: 'Drill Peck',
    type: 'Flying',
    power: 80,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Psychic',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Low Kick': {
    name: 'Low Kick',
    type: 'Fighting',
    power: 1,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Counter': {
    name: 'Counter',
    type: 'Fighting',
    power: 1,
    accuracy: 100,
    pp: 32,
    target: 'Your Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
  },
  'Seismic Toss': {
    name: 'Seismic Toss',
    type: 'Fighting',
    power: 1,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
  },
  'Strength': {
    name: 'Strength',
    type: 'Normal',
    power: 80,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Absorb': {
    name: 'Absorb',
    type: 'Grass',
    power: 20,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    drain: [1, 2],
    },
  },
  'Mega Drain': {
    name: 'Mega Drain',
    type: 'Grass',
    power: 40,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    drain: [1, 2],
    },
  },
  'Leech Seed': {
    name: 'Leech Seed',
    type: 'Grass',
    power: 0,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Growth': {
    name: 'Growth',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Razor Leaf': {
    name: 'Razor Leaf',
    type: 'Grass',
    power: 55,
    accuracy: 95,
    pp: 25,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Solarbeam': {
    name: 'Solarbeam',
    type: 'Grass',
    power: 120,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Poisonpowder': {
    name: 'Poisonpowder',
    type: 'Poison',
    power: 0,
    accuracy: 75,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Stun Spore': {
    name: 'Stun Spore',
    type: 'Grass',
    power: 0,
    accuracy: 75,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Sleep Powder': {
    name: 'Sleep Powder',
    type: 'Grass',
    power: 0,
    accuracy: 80,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Petal Dance': {
    name: 'Petal Dance',
    type: 'Grass',
    power: 95,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      status: 'Lower Spec. Def.'
    }],
  },
  'String Shot': {
    name: 'String Shot',
    type: 'Bug',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Dragon Rage': {
    name: 'Dragon Rage',
    type: 'Dragon',
    power: 1,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
  },
  'Fire Spin': {
    name: 'Fire Spin',
    type: 'Fire',
    power: 15,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: '2-5 Hits + Lower Evas.'
    }],
  },
  'Thundershock': {
    name: 'Thundershock',
    type: 'Electric',
    power: 40,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Parlyze'
    }],
  },
  'Thunderbolt': {
    name: 'Thunderbolt',
    type: 'Electric',
    power: 95,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Parlyze'
    }],
  },
  'Thunder Wave': {
    name: 'Thunder Wave',
    type: 'Electric',
    power: 0,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Thunder': {
    name: 'Thunder',
    type: 'Electric',
    power: 120,
    accuracy: 70,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Thunder'
    }],
  },
  'Rock Throw': {
    name: 'Rock Throw',
    type: 'Rock',
    power: 50,
    accuracy: 90,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Earthquake': {
    name: 'Earthquake',
    type: 'Ground',
    power: 100,
    accuracy: 100,
    pp: 16,
    target: 'All',
    flags: {
    },
  },
  'Earth Power': {
    name: 'Earth Power',
    type: 'Ground',
    power: 90,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Lower Def.'
    }],
  },
  'Dig': {
    name: 'Dig',
    type: 'Ground',
    power: 60,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Toxic': {
    name: 'Toxic',
    type: 'Poison',
    power: 0,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Poison badly'
    }],
  },
  'Confusion': {
    name: 'Confusion',
    type: 'Psychic',
    power: 50,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Confuse'
    }],
  },
  'Psychic': {
    name: 'Psychic',
    type: 'Psychic',
    power: 90,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Lower Spec. Def.'
    }],
  },
  'Hypnosis': {
    name: 'Hypnosis',
    type: 'Psychic',
    power: 0,
    accuracy: 70,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Meditate': {
    name: 'Meditate',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Agility': {
    name: 'Agility',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Quick Attack': {
    name: 'Quick Attack',
    type: 'Normal',
    power: 40,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Rage': {
    name: 'Rage',
    type: 'Normal',
    power: 20,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Teleport': {
    name: 'Teleport',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 20,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Night Shade': {
    name: 'Night Shade',
    type: 'Ghost',
    power: 1,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
  },
  'Mimic': {
    name: 'Mimic',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Screech': {
    name: 'Screech',
    type: 'Normal',
    power: 0,
    accuracy: 85,
    pp: 3,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
  },
  'Double Team': {
    name: 'Double Team',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 6,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Recover': {
    name: 'Recover',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Harden': {
    name: 'Harden',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Minimize': {
    name: 'Minimize',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 6,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Smokescreen': {
    name: 'Smokescreen',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Confuse Ray': {
    name: 'Confuse Ray',
    type: 'Ghost',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Withdraw': {
    name: 'Withdraw',
    type: 'Water',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Defense Curl': {
    name: 'Defense Curl',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Barrier': {
    name: 'Barrier',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Light Screen': {
    name: 'Light Screen',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Haze': {
    name: 'Haze',
    type: 'Ice',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Reflect': {
    name: 'Reflect',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Focus Energy': {
    name: 'Focus Energy',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Bide': {
    name: 'Bide',
    type: 'Normal',
    power: 1,
    accuracy: 100,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
  },
  'Metronome': {
    name: 'Metronome',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 35,
    target: 'Your Pokemon',
    flags: {
    },
  },
  'Mirror Move': {
    name: 'Mirror Move',
    type: 'Flying',
    power: 0,
    accuracy: 0,
    pp: 20,
    target: 'Your Pokemon',
    flags: {
    },
  },
  'Selfdestruct': {
    name: 'Selfdestruct',
    type: 'Normal',
    power: 200,
    accuracy: 100,
    pp: 1,
    target: 'All',
    flags: {
    },
  },
  'Egg Bomb': {
    name: 'Egg Bomb',
    type: 'Grass',
    power: 120,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Lick': {
    name: 'Lick',
    type: 'Ghost',
    power: 20,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Parlyze'
    }],
  },
  'Smog': {
    name: 'Smog',
    type: 'Poison',
    power: 20,
    accuracy: 70,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 40,
      status: 'Poison'
    }],
  },
  'Sludge Bomb': {
    name: 'Sludge Bomb',
    type: 'Poison',
    power: 90,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Poison'
    }],
  },
  'Bone Club': {
    name: 'Bone Club',
    type: 'Ground',
    power: 65,
    accuracy: 85,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Target flinches'
    }],
  },
  'Fire Blast': {
    name: 'Fire Blast',
    type: 'Fire',
    power: 120,
    accuracy: 85,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Burn'
    }],
  },
  'Waterfall': {
    name: 'Waterfall',
    type: 'Water',
    power: 80,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Target flinches'
    }],
  },
  'Clamp': {
    name: 'Clamp',
    type: 'Water',
    power: 35,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 100,
      status: '2-5 Hits + Lower Evas.'
    }],
  },
  'Swift': {
    name: 'Swift',
    type: 'Normal',
    power: 60,
    accuracy: 0,
    pp: 20,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Head Smash': {
    name: 'Head Smash',
    type: 'Rock',
    power: 150,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Fire',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Grass',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Amnesia': {
    name: 'Amnesia',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Kinesis': {
    name: 'Kinesis',
    type: 'Psychic',
    power: 0,
    accuracy: 100,
    pp: 6,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Softboiled': {
    name: 'Softboiled',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 16,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Hi Jump Kick': {
    name: 'Hi Jump Kick',
    type: 'Fighting',
    power: 85,
    accuracy: 90,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Glare': {
    name: 'Glare',
    type: 'Dark',
    power: 0,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Dream Eater': {
    name: 'Dream Eater',
    type: 'Psychic',
    power: 100,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    drain: [1, 2],
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Ice',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Ghost',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Leech Life': {
    name: 'Leech Life',
    type: 'Bug',
    power: 40,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    drain: [1, 2],
    },
  },
  'Lovely Kiss': {
    name: 'Lovely Kiss',
    type: 'Normal',
    power: 0,
    accuracy: 85,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Sky Attack': {
    name: 'Sky Attack',
    type: 'Flying',
    power: 120,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Transform': {
    name: 'Transform',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Bubble': {
    name: 'Bubble',
    type: 'Water',
    power: 20,
    accuracy: 100,
    pp: 30,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Lower Spd.'
    }],
  },
  'Dizzy Punch': {
    name: 'Dizzy Punch',
    type: 'Normal',
    power: 90,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Confuse'
    }],
  },
  'Spore': {
    name: 'Spore',
    type: 'Grass',
    power: 0,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Flash': {
    name: 'Flash',
    type: 'Normal',
    power: 0,
    accuracy: 70,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Psywave': {
    name: 'Psywave',
    type: 'Psychic',
    power: 1,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Water',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Acid Armor': {
    name: 'Acid Armor',
    type: 'Poison',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Crabhammer': {
    name: 'Crabhammer',
    type: 'Water',
    power: 120,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Explosion': {
    name: 'Explosion',
    type: 'Normal',
    power: 250,
    accuracy: 100,
    pp: 1,
    target: 'All',
    flags: {
    },
  },
  'Fury Swipes': {
    name: 'Fury Swipes',
    type: 'Normal',
    power: 18,
    accuracy: 80,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    multihit: [2,5, 5],
    },
  },
  'Bonemerang': {
    name: 'Bonemerang',
    type: 'Ground',
    power: 50,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2, undefined],
    },
  },
  'Rest': {
    name: 'Rest',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Rock Slide': {
    name: 'Rock Slide',
    type: 'Rock',
    power: 75,
    accuracy: 100,
    pp: 16,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Target flinches'
    }],
  },
  'Hyper Fang': {
    name: 'Hyper Fang',
    type: 'Normal',
    power: 80,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      status: 'Target flinches'
    }],
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Dark',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Conversion': {
    name: 'Conversion',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 30,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Tri Attack': {
    name: 'Tri Attack',
    type: 'Normal',
    power: 80,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 20,
      status: 'Pois./Parl./Frz.'
    }],
  },
  'Super Fang': {
    name: 'Super Fang',
    type: 'Dark',
    power: 1,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
  },
  'Slash': {
    name: 'Slash',
    type: 'Normal',
    power: 70,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Substitute': {
    name: 'Substitute',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Struggle': {
    name: 'Struggle',
    type: 'Normal',
    power: 50,
    accuracy: 100,
    pp: 1,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    recoil: [1, 4],
    },
  },
  'Sketch': {
    name: 'Sketch',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Rock',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Thief': {
    name: 'Thief',
    type: 'Dark',
    power: 40,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 100,
      status: 'Normal Hit'
    }],
  },
  'Spider Web': {
    name: 'Spider Web',
    type: 'Bug',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Mind Reader': {
    name: 'Mind Reader',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Nightmare': {
    name: 'Nightmare',
    type: 'Ghost',
    power: 0,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Flame Wheel': {
    name: 'Flame Wheel',
    type: 'Fire',
    power: 60,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      status: 'Burn'
    }],
  },
  'Snore': {
    name: 'Snore',
    type: 'Normal',
    power: 60,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 30,
      status: '30% chance of Switch'
    }],
  },
  'Curse': {
    name: 'Curse',
    type: 'Unknown',
    power: 0,
    accuracy: 0,
    pp: 6,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Flail': {
    name: 'Flail',
    type: 'Normal',
    power: 1,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Conversion 2': {
    name: 'Conversion 2',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 30,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Aeroblast': {
    name: 'Aeroblast',
    type: 'Flying',
    power: 120,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Electric',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Reversal': {
    name: 'Reversal',
    type: 'Fighting',
    power: 1,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Spite': {
    name: 'Spite',
    type: 'Ghost',
    power: 0,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Powder Snow': {
    name: 'Powder Snow',
    type: 'Ice',
    power: 40,
    accuracy: 100,
    pp: 25,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Freeze'
    }],
  },
  'Protect': {
    name: 'Protect',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Mach Punch': {
    name: 'Mach Punch',
    type: 'Fighting',
    power: 40,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Scary Face': {
    name: 'Scary Face',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 3,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Faint Attack': {
    name: 'Faint Attack',
    type: 'Dark',
    power: 60,
    accuracy: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Sweet Kiss': {
    name: 'Sweet Kiss',
    type: 'Normal',
    power: 0,
    accuracy: 75,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Belly Drum': {
    name: 'Belly Drum',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Gunk Shot': {
    name: 'Gunk Shot',
    type: 'Poison',
    power: 120,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Poison'
    }],
  },
  'Mud-slap': {
    name: 'Mud-slap',
    type: 'Ground',
    power: 20,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Lower Acc.'
    }],
  },
  'Octazooka': {
    name: 'Octazooka',
    type: 'Water',
    power: 95,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 50,
      status: 'Lower Acc.'
    }],
  },
  'Spikes': {
    name: 'Spikes',
    type: 'Ground',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your sent out Pokemon',
    flags: {
    },
  },
  'Zap Cannon': {
    name: 'Zap Cannon',
    type: 'Electric',
    power: 100,
    accuracy: 50,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Parlyze'
    }],
  },
  'Foresight': {
    name: 'Foresight',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Destiny Bond': {
    name: 'Destiny Bond',
    type: 'Ghost',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Perish Song': {
    name: 'Perish Song',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
      sound: true,
    },
  },
  'Icy Wind': {
    name: 'Icy Wind',
    type: 'Ice',
    power: 55,
    accuracy: 100,
    pp: 24,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Lower Spd.'
    }],
  },
  'Detect': {
    name: 'Detect',
    type: 'Fighting',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Bone Rush': {
    name: 'Bone Rush',
    type: 'Ground',
    power: 100,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2,5, 5],
    },
  },
  'Lock-on': {
    name: 'Lock-on',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Ground',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Sandstorm': {
    name: 'Sandstorm',
    type: 'Rock',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Giga Drain': {
    name: 'Giga Drain',
    type: 'Grass',
    power: 75,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    drain: [1, 2],
    },
  },
  'Endure': {
    name: 'Endure',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Charm': {
    name: 'Charm',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Rollout': {
    name: 'Rollout',
    type: 'Rock',
    power: 30,
    accuracy: 90,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'False Swipe': {
    name: 'False Swipe',
    type: 'Normal',
    power: 40,
    accuracy: 100,
    pp: 40,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Swagger': {
    name: 'Swagger',
    type: 'Normal',
    power: 0,
    accuracy: 90,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Confuse + Raise Attk. sharply'
    }],
  },
  'Milk Drink': {
    name: 'Milk Drink',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Wild Charge': {
    name: 'Wild Charge',
    type: 'Electric',
    power: 90,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: '1/3 Recoil'
    }],
  },
  'X-scissors': {
    name: 'X-scissors',
    type: 'Bug',
    power: 80,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Steel Wing': {
    name: 'Steel Wing',
    type: 'Steel',
    power: 80,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      status: '+1 Def'
    }],
  },
  'Mean Look': {
    name: 'Mean Look',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Attract': {
    name: 'Attract',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Sleep Talk': {
    name: 'Sleep Talk',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 16,
    target: 'Your Pokemon',
    flags: {
    },
  },
  'Heal Bell': {
    name: 'Heal Bell',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 2,
    target: 'Your two Pokemon',
    flags: {
      sound: true,
    },
  },
  'Return': {
    name: 'Return',
    type: 'Normal',
    power: 103,
    accuracy: 100,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Present': {
    name: 'Present',
    type: 'Normal',
    power: 1,
    accuracy: 90,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Frustration': {
    name: 'Frustration',
    type: 'Normal',
    power: 103,
    accuracy: 100,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Safeguard': {
    name: 'Safeguard',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Pain Split': {
    name: 'Pain Split',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Sacred Fire': {
    name: 'Sacred Fire',
    type: 'Fire',
    power: 120,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 50,
      status: 'Burn'
    }],
  },
  'Magnitude': {
    name: 'Magnitude',
    type: 'Ground',
    power: 1,
    accuracy: 100,
    pp: 30,
    target: 'All',
    flags: {
    },
  },
  'Dynamicpunch': {
    name: 'Dynamicpunch',
    type: 'Fighting',
    power: 100,
    accuracy: 50,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Confuse'
    }],
  },
  'Megahorn': {
    name: 'Megahorn',
    type: 'Bug',
    power: 120,
    accuracy: 90,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Dragonbreath': {
    name: 'Dragonbreath',
    type: 'Dragon',
    power: 60,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Parlyze'
    }],
  },
  'Baton Pass': {
    name: 'Baton Pass',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 40,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Encore': {
    name: 'Encore',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Pursuit': {
    name: 'Pursuit',
    type: 'Dark',
    power: 40,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Rapid Spin': {
    name: 'Rapid Spin',
    type: 'Normal',
    power: 20,
    accuracy: 100,
    pp: 1,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Sweet Scent': {
    name: 'Sweet Scent',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Iron Tail': {
    name: 'Iron Tail',
    type: 'Steel',
    power: 100,
    accuracy: 90,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Lower Def.'
    }],
  },
  'Metal Claw': {
    name: 'Metal Claw',
    type: 'Steel',
    power: 50,
    accuracy: 95,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      status: 'Raise Own Attk.'
    }],
  },
  'Vital Throw': {
    name: 'Vital Throw',
    type: 'Fighting',
    power: 70,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Morning Sun': {
    name: 'Morning Sun',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Synthesis': {
    name: 'Synthesis',
    type: 'Grass',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Moonlight': {
    name: 'Moonlight',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Normal',
    power: 1,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Cross Chop': {
    name: 'Cross Chop',
    type: 'Fighting',
    power: 100,
    accuracy: 90,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Twister': {
    name: 'Twister',
    type: 'Dragon',
    power: 40,
    accuracy: 100,
    pp: 20,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 20,
      status: 'Double dmg On Flyer Flinch Chance'
    }],
  },
  'Rain Dance': {
    name: 'Rain Dance',
    type: 'Water',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Sunny Day': {
    name: 'Sunny Day',
    type: 'Fire',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Crunch': {
    name: 'Crunch',
    type: 'Dark',
    power: 80,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 20,
      status: 'Lower Spec. Def.'
    }],
  },
  'Mirror Coat': {
    name: 'Mirror Coat',
    type: 'Psychic',
    power: 1,
    accuracy: 100,
    pp: 32,
    target: 'Your Pokemon',
    flags: {
      directDamage: true,
    },
  },
  'Psych Up': {
    name: 'Psych Up',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Extremespeed': {
    name: 'Extremespeed',
    type: 'Normal',
    power: 100,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Ancientpower': {
    name: 'Ancientpower',
    type: 'Rock',
    power: 80,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Omniboost'
    }],
  },
  'Shadow Ball': {
    name: 'Shadow Ball',
    type: 'Ghost',
    power: 80,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 20,
      status: 'Lower Def.'
    }],
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Fighting',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Rock Smash': {
    name: 'Rock Smash',
    type: 'Fighting',
    power: 40,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 50,
      status: 'Lower Def.'
    }],
  },
  'Whirlpool': {
    name: 'Whirlpool',
    type: 'Water',
    power: 15,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: '2-5 Hits + Lower Evas.'
    }],
  },
  'Beat Up': {
    name: 'Beat Up',
    type: 'Dark',
    power: 10,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Fake Out': {
    name: 'Fake Out',
    type: 'Normal',
    power: 40,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Uproar': {
    name: 'Uproar',
    type: 'Normal',
    power: 50,
    accuracy: 100,
    pp: 10,
    target: 'Opponent [???]',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 100,
      status: 'Uproar'
    }],
  },
  'Stockpile': {
    name: 'Stockpile',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 16,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Spit Up': {
    name: 'Spit Up',
    type: 'Normal',
    power: 100,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Swallow': {
    name: 'Swallow',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Heat Wave': {
    name: 'Heat Wave',
    type: 'Fire',
    power: 100,
    accuracy: 100,
    pp: 16,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 20,
      status: 'Burn'
    }],
  },
  'Hail': {
    name: 'Hail',
    type: 'Ice',
    power: 0,
    accuracy: 0,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Torment': {
    name: 'Torment',
    type: 'Dark',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Flatter': {
    name: 'Flatter',
    type: 'Dark',
    power: 0,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Will-o-wisp': {
    name: 'Will-o-wisp',
    type: 'Fire',
    power: 0,
    accuracy: 85,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Memento': {
    name: 'Memento',
    type: 'Dark',
    power: 0,
    accuracy: 100,
    pp: 1,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Facade': {
    name: 'Facade',
    type: 'Normal',
    power: 70,
    accuracy: 100,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Focus Punch': {
    name: 'Focus Punch',
    type: 'Fighting',
    power: 150,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Smellingsalt': {
    name: 'Smellingsalt',
    type: 'Normal',
    power: 60,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Follow Me': {
    name: 'Follow Me',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 20,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Nature Power': {
    name: 'Nature Power',
    type: 'Normal',
    power: 0,
    accuracy: 95,
    pp: 20,
    target: 'Your Pokemon',
    flags: {
    },
  },
  'Charge': {
    name: 'Charge',
    type: 'Electric',
    power: 0,
    accuracy: 100,
    pp: 20,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Taunt': {
    name: 'Taunt',
    type: 'Dark',
    power: 0,
    accuracy: 100,
    pp: 3,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Helping Hand': {
    name: 'Helping Hand',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 20,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Flying',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Role Play': {
    name: 'Role Play',
    type: 'Psychic',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Wish': {
    name: 'Wish',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 2,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Assist': {
    name: 'Assist',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 32,
    target: 'Your Pokemon',
    flags: {
    },
  },
  'Ingrain': {
    name: 'Ingrain',
    type: 'Grass',
    power: 0,
    accuracy: 100,
    pp: 1,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Superpower': {
    name: 'Superpower',
    type: 'Fighting',
    power: 120,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Magic Coat': {
    name: 'Magic Coat',
    type: 'Psychic',
    power: 0,
    accuracy: 100,
    pp: 15,
    target: 'Your Pokemon',
    flags: {
    },
  },
  'Recycle': {
    name: 'Recycle',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 16,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Revenge': {
    name: 'Revenge',
    type: 'Fighting',
    power: 60,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Brick Break': {
    name: 'Brick Break',
    type: 'Fighting',
    power: 75,
    accuracy: 100,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Yawn': {
    name: 'Yawn',
    type: 'Normal',
    power: 0,
    accuracy: 70,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Knock Off': {
    name: 'Knock Off',
    type: 'Dark',
    power: 20,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 100,
      status: 'Knock Off'
    }],
  },
  'Endeavor': {
    name: 'Endeavor',
    type: 'Normal',
    power: 1,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
  },
  'Draco Meteor': {
    name: 'Draco Meteor',
    type: 'Dragon',
    power: 120,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Skill Swap': {
    name: 'Skill Swap',
    type: 'Psychic',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Imprison': {
    name: 'Imprison',
    type: 'Psychic',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Refresh': {
    name: 'Refresh',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Grudge': {
    name: 'Grudge',
    type: 'Ghost',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Snatch': {
    name: 'Snatch',
    type: 'Dark',
    power: 0,
    accuracy: 100,
    pp: 3,
    target: 'Your Pokemon',
    flags: {
    },
  },
  'Secret Power': {
    name: 'Secret Power',
    type: 'Normal',
    power: 70,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Secret Power'
    }],
  },
  'Dive': {
    name: 'Dive',
    type: 'Water',
    power: 60,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Force Palm': {
    name: 'Force Palm',
    type: 'Fighting',
    power: 60,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Parlyze'
    }],
  },
  'Camouflage': {
    name: 'Camouflage',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 20,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Tail Glow': {
    name: 'Tail Glow',
    type: 'Bug',
    power: 0,
    accuracy: 100,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Luster Purge': {
    name: 'Luster Purge',
    type: 'Psychic',
    power: 90,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 50,
      status: 'Lower Spec. Def.'
    }],
  },
  'Mist Ball': {
    name: 'Mist Ball',
    type: 'Psychic',
    power: 90,
    accuracy: 100,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 50,
      status: 'Lower Spec. Attk.'
    }],
  },
  'Featherdance': {
    name: 'Featherdance',
    type: 'Flying',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Teeter Dance': {
    name: 'Teeter Dance',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 32,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Blaze Kick': {
    name: 'Blaze Kick',
    type: 'Fire',
    power: 100,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Burn chance increased crit'
    }],
  },
  'Mud Sport': {
    name: 'Mud Sport',
    type: 'Ground',
    power: 0,
    accuracy: 100,
    pp: 15,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Ice Ball': {
    name: 'Ice Ball',
    type: 'Ice',
    power: 30,
    accuracy: 90,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Needle Arm': {
    name: 'Needle Arm',
    type: 'Grass',
    power: 95,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Flinch 2x on minimized'
    }],
  },
  'Slack Off': {
    name: 'Slack Off',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Hyper Voice': {
    name: 'Hyper Voice',
    type: 'Normal',
    power: 120,
    accuracy: 100,
    pp: 16,
    target: 'Both Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 20,
      status: 'Lower Def.'
    }],
  },
  'Poison Fang': {
    name: 'Poison Fang',
    type: 'Poison',
    power: 90,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 50,
      status: 'Badly Poison Chance'
    }],
  },
  'Crush Claw': {
    name: 'Crush Claw',
    type: 'Normal',
    power: 100,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 50,
      status: 'Lower Def.'
    }],
  },
  'Blast Burn': {
    name: 'Blast Burn',
    type: 'Fire',
    power: 150,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Hydro Cannon': {
    name: 'Hydro Cannon',
    type: 'Water',
    power: 150,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Meteor Mash': {
    name: 'Meteor Mash',
    type: 'Steel',
    power: 100,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Raise Own Attk.'
    }],
  },
  'Shadow Sneak': {
    name: 'Shadow Sneak',
    type: 'Ghost',
    power: 40,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Weather Ball': {
    name: 'Weather Ball',
    type: 'Normal',
    power: 50,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Aromatherapy': {
    name: 'Aromatherapy',
    type: 'Grass',
    power: 0,
    accuracy: 0,
    pp: 2,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Fake Tears': {
    name: 'Fake Tears',
    type: 'Dark',
    power: 0,
    accuracy: 100,
    pp: 3,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Air Slash': {
    name: 'Air Slash',
    type: 'Flying',
    power: 80,
    accuracy: 100,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Target flinches'
    }],
  },
  'Overheat': {
    name: 'Overheat',
    type: 'Fire',
    power: 120,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Odor Sleuth': {
    name: 'Odor Sleuth',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 3,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Rock Tomb': {
    name: 'Rock Tomb',
    type: 'Rock',
    power: 55,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Lower Spd.'
    }],
  },
  'Silver Wind': {
    name: 'Silver Wind',
    type: 'Bug',
    power: 60,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Omniboost'
    }],
  },
  'Flash Cannon': {
    name: 'Flash Cannon',
    type: 'Steel',
    power: 90,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Lower Def.'
    }],
  },
  'Grasswhistle': {
    name: 'Grasswhistle',
    type: 'Grass',
    power: 0,
    accuracy: 70,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Tickle': {
    name: 'Tickle',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 6,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Cosmic Power': {
    name: 'Cosmic Power',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 6,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Water Spout': {
    name: 'Water Spout',
    type: 'Water',
    power: 150,
    accuracy: 100,
    pp: 8,
    target: 'Both Opponent Pokemon',
    flags: {
    },
  },
  'Signal Beam': {
    name: 'Signal Beam',
    type: 'Bug',
    power: 75,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 10,
      status: 'Confuse'
    }],
  },
  'Shadow Punch': {
    name: 'Shadow Punch',
    type: 'Ghost',
    power: 70,
    accuracy: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Extrasensory': {
    name: 'Extrasensory',
    type: 'Psychic',
    power: 80,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Flinch 2x on minimized'
    }],
  },
  'Sky Uppercut': {
    name: 'Sky Uppercut',
    type: 'Fighting',
    power: 90,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Sand Tomb': {
    name: 'Sand Tomb',
    type: 'Ground',
    power: 15,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: '2-5 Hits + Lower Evas.'
    }],
  },
  'Sheer Cold': {
    name: 'Sheer Cold',
    type: 'Ice',
    power: 1,
    accuracy: 30,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      oneHitKO: true,
    },
  },
  'Muddy Water': {
    name: 'Muddy Water',
    type: 'Water',
    power: 95,
    accuracy: 100,
    pp: 10,
    target: 'Both Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 30,
      status: 'Lower Acc.'
    }],
  },
  'Bullet Seed': {
    name: 'Bullet Seed',
    type: 'Grass',
    power: 25,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2,5, 5],
    },
  },
  'Aerial Ace': {
    name: 'Aerial Ace',
    type: 'Flying',
    power: 60,
    accuracy: 0,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Ice Shard': {
    name: 'Ice Shard',
    type: 'Ice',
    power: 40,
    accuracy: 100,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Iron Defense': {
    name: 'Iron Defense',
    type: 'Steel',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Block': {
    name: 'Block',
    type: 'Normal',
    power: 0,
    accuracy: 100,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Howl': {
    name: 'Howl',
    type: 'Normal',
    power: 0,
    accuracy: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Dragon Claw': {
    name: 'Dragon Claw',
    type: 'Dragon',
    power: 80,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Frenzy Plant': {
    name: 'Frenzy Plant',
    type: 'Grass',
    power: 150,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Bulk Up': {
    name: 'Bulk Up',
    type: 'Fighting',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Bounce': {
    name: 'Bounce',
    type: 'Flying',
    power: 85,
    accuracy: 85,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Fly/Bounce/Dig'
    }],
  },
  'Mud Shot': {
    name: 'Mud Shot',
    type: 'Ground',
    power: 55,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'Lower Spd.'
    }],
  },
  'Poison Tail': {
    name: 'Poison Tail',
    type: 'Poison',
    power: 120,
    accuracy: 100,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      status: 'Badly Poison Chance'
    }],
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Bug',
    power: 70,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Volt Tackle': {
    name: 'Volt Tackle',
    type: 'Electric',
    power: 120,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    recoil: [1, 3],
    },
    secondary: [{
      chance: 30,
      status: '1/3 Recoil'
    }],
  },
  'Magical Leaf': {
    name: 'Magical Leaf',
    type: 'Grass',
    power: 60,
    accuracy: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Water Sport': {
    name: 'Water Sport',
    type: 'Water',
    power: 0,
    accuracy: 100,
    pp: 15,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Calm Mind': {
    name: 'Calm Mind',
    type: 'Psychic',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Leaf Blade': {
    name: 'Leaf Blade',
    type: 'Grass',
    power: 95,
    accuracy: 100,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Dragon Dance': {
    name: 'Dragon Dance',
    type: 'Dragon',
    power: 0,
    accuracy: 0,
    pp: 3,
    target: 'Your two Pokemon',
    flags: {
    },
  },
  'Rock Blast': {
    name: 'Rock Blast',
    type: 'Rock',
    power: 25,
    accuracy: 80,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2,5, 5],
    },
  },
  'Shock Wave': {
    name: 'Shock Wave',
    type: 'Electric',
    power: 60,
    accuracy: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Water Pulse': {
    name: 'Water Pulse',
    type: 'Water',
    power: 60,
    accuracy: 100,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 20,
      status: 'Confuse'
    }],
  },
  'Doom Desire': {
    name: 'Doom Desire',
    type: 'Steel',
    power: 120,
    accuracy: 85,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
    },
  },
  'Psycho Boost': {
    name: 'Psycho Boost',
    type: 'Psychic',
    power: 140,
    accuracy: 100,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
    },
    secondary: [{
      chance: 100,
      status: 'take 1/4 damage'
    }],
  },
};
