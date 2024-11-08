import { Move } from '../types';

export const MOVES: {[name: string]: Move} = {
  'Pound': {
    name: 'Pound',
    type: 'Normal',
    bp: 40,
    acc: 1,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Karate Chop': {
    name: 'Karate Chop',
    type: 'Fighting',
    bp: 50,
    acc: 1,
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
    bp: 15,
    acc: .85,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      multihit: true,
    },
  },
  'Weather Ball': {
    name: 'Weather Ball',
    type: 'Normal',
    bp: 50,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Weather Ball (Fire)': {
    name: 'Weather Ball',
    type: 'Fire',
    bp: 100,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Weather Ball (Water)': {
    name: 'Weather Ball',
    type: 'Water',
    bp: 100,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Mega Punch': {
    name: 'Mega Punch',
    type: 'Normal',
    bp: 80,
    acc: .85,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Pay Day': {
    name: 'Pay Day',
    type: 'Normal',
    bp: 40,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    other: 'Receive money equal to double the user Pokemon\'s level'
  },
  'Fire Punch': {
    name: 'Fire Punch',
    type: 'Fire',
    bp: 75,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .1,
      status: 'BRN'
    }],
  },
  'Ice Punch': {
    name: 'Ice Punch',
    type: 'Ice',
    bp: 75,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .1,
      status: 'FRZ'
    }],
  },
  'Thunderpunch': {
    name: 'Thunderpunch',
    type: 'Electric',
    bp: 75,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .1,
      status: 'PAR'
    }],
  },
  'Scratch': {
    name: 'Scratch',
    type: 'Normal',
    bp: 40,
    acc: 1,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Guillotine': {
    name: 'Guillotine',
    type: 'Normal',
    bp: 1,
    acc: .3,
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
    bp: 80,
    acc: 1,
    pp: 10,
    target: 'Both Opponent Pokemon',
    flags: {
      highCrit: true,
    },
  },
  'Swords Dance': {
    name: 'Swords Dance',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        atk: 2,
      },
    }]
  },
  'Cut': {
    name: 'Cut',
    type: 'Normal',
    bp: 50,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Gust': {
    name: 'Gust',
    type: 'Flying',
    bp: 40,
    acc: 1,
    pp: 35,
    target: 'One Opponent Pokemon',
  },
  'Wing Attack': {
    name: 'Wing Attack',
    type: 'Flying',
    bp: 60,
    acc: 1,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Whirlwind': {
    name: 'Whirlwind',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    priority: -6,
    other: "Switches opponent Pokemon out"
  },
  'Fly': {
    name: 'Fly',
    type: 'Flying',
    bp: 70,
    acc: .95,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Bind': {
    name: 'Bind',
    type: 'Normal',
    bp: 15,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 1,
      statChanges: {
        eva: -1,
      },
    }],
    other: 'Deal 1/16 of the opponent\'s health at the end of the turn for 2-5 turns'
  },
  'Slam': {
    name: 'Slam',
    type: 'Normal',
    bp: 80,
    acc: .75,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Vine Whip': {
    name: 'Vine Whip',
    type: 'Grass',
    bp: 35,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Stomp': {
    name: 'Stomp',
    type: 'Normal',
    bp: 65,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      flinch: true,
    }],
    other: 'Double damage, perfect accuracy, and 2x flinch on minimized'
  },
  'Double Kick': {
    name: 'Double Kick',
    type: 'Fighting',
    bp: 30,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      twoHit: true,
    },
  },
  'Mega Kick': {
    name: 'Mega Kick',
    type: 'Normal',
    bp: 120,
    acc: .75,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Jump Kick': {
    name: 'Jump Kick',
    type: 'Fighting',
    bp: 70,
    acc: .95,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    other: 'If attack misses, user loses 1/2 of max HP'
  },
  'Rolling Kick': {
    name: 'Rolling Kick',
    type: 'Fighting',
    bp: 60,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      flinch: true
    }],
  },
  'Sand-attack': {
    name: 'Sand-attack',
    type: 'Ground',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Headbutt': {
    name: 'Headbutt',
    type: 'Normal',
    bp: 70,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      flinch: true,
    }],
  },
  'Horn Attack': {
    name: 'Horn Attack',
    type: 'Normal',
    bp: 65,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Fury Attack': {
    name: 'Fury Attack',
    type: 'Normal',
    bp: 15,
    acc: .85,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      multihit: true,
    },
  },
  'Drill Run': {
    name: 'Drill Run',
    type: 'Ground',
    bp: 80,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      highCrit: true,
    }
  },
  'Tackle': {
    name: 'Tackle',
    type: 'Normal',
    bp: 35,
    acc: .95,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Body Slam': {
    name: 'Body Slam',
    type: 'Normal',
    bp: 85,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      status: 'PAR'
    }],
    other: 'Bypass accuracy checks and 2x damage on minimized opponent'
  },
  'Wrap': {
    name: 'Wrap',
    type: 'Normal',
    bp: 15,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 1,
      statChanges: {
        eva: -1,
      },
    }],
    other: 'Deal 1/16 of the opponent\'s health at the end of the turn for 2-5 turns'
  },
  'Take Down': {
    name: 'Take Down',
    type: 'Normal',
    bp: 90,
    acc: .85,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      recoil: .25,
    },
  },
  'Thrash': {
    name: 'Thrash',
    type: 'Normal',
    bp: 90,
    acc: 1,
    pp: 20,
    target: 'Opponent [???]',
    flags: {
      contact: true,
    },
    other: 'Attack for 3 turns, then become confused'
  },
  'Double-edge': {
    name: 'Double-edge',
    type: 'Normal',
    bp: 120,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      recoil: 1/3,
    },
  },
  'Tail Whip': {
    name: 'Tail Whip',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 1,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        def: -1,
      },
    }]
  },
  'Poison Sting': {
    name: 'Poison Sting',
    type: 'Poison',
    bp: 15,
    acc: 1,
    pp: 35,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      status: 'PSN',
    }],
  },
  'Twineedle': {
    name: 'Twineedle',
    type: 'Bug',
    bp: 25,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      twoHit: true,
    },
    secondary: [{
      chance: .2,
      status: 'PSN',
    }],
  },
  'Pin Missile': {
    name: 'Pin Missile',
    type: 'Bug',
    bp: 15,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      multihit: true,
    },
  },
  'Leer': {
    name: 'Leer',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 1,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        def: -1,
      },
    }]
  },
  'Bite': {
    name: 'Bite',
    type: 'Dark',
    bp: 60,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      flinch: true,
    }],
  },
  'Growl': {
    name: 'Growl',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 1,
    target: 'Both Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 1,
      statChanges: {
        atk: -1,
      },
    }]
  },
  'Roar': {
    name: 'Roar',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    priority: -6,
    flags: {
      sound: true,
    },
    other: 'Switches opponent Pokemon out'
  },
  'Sing': {
    name: 'Sing',
    type: 'Normal',
    bp: 0,
    acc: .7,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: .2,
      status: 'SLP',
    }],
  },
  'Supersonic': {
    name: 'Supersonic',
    type: 'Normal',
    bp: 0,
    acc: .55,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 1,
      confuse: true,
    }]
  },
  'Sonicboom': {
    name: 'Sonicboom',
    type: 'Normal',
    bp: 1,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
    other: 'Deals 20 damage'
  },
  'Disable': {
    name: 'Disable',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    other: 'Disable opponent\'s last used move',
  },
  'Acid': {
    name: 'Acid',
    type: 'Poison',
    bp: 40,
    acc: 1,
    pp: 30,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        def: -1,
      },
    }]
  },
  'Ember': {
    name: 'Ember',
    type: 'Fire',
    bp: 40,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'BRN',
    }],
  },
  'Flamethrower': {
    name: 'Flamethrower',
    type: 'Fire',
    bp: 95,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'BRN',
    }],
  },
  'Mist': {
    name: 'Mist',
    type: 'Ice',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
    other: 'Prevents statuses from being lowered for 5 turns'
  },
  'Water Gun': {
    name: 'Water Gun',
    type: 'Water',
    bp: 40,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
  },
  'Hydro Pump': {
    name: 'Hydro Pump',
    type: 'Water',
    bp: 120,
    acc: .85,
    pp: 8,
    target: 'One Opponent Pokemon',
  },
  'Surf': {
    name: 'Surf',
    type: 'Water',
    bp: 95,
    acc: 1,
    pp: 24,
    target: 'Both Opponent Pokemon',
  },
  'Ice Beam': {
    name: 'Ice Beam',
    type: 'Ice',
    bp: 95,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'FRZ',
    }],
  },
  'Blizzard': {
    name: 'Blizzard',
    type: 'Ice',
    bp: 120,
    acc: .7,
    pp: 8,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'FRZ',
    }],
  },
  'Psybeam': {
    name: 'Psybeam',
    type: 'Psychic',
    bp: 65,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      confuse: true,
    }],
  },
  'Bubblebeam': {
    name: 'Bubblebeam',
    type: 'Water',
    bp: 65,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      statChanges: {
        spd: -1,
      }
    }],
  },
  'Aurora Beam': {
    name: 'Aurora Beam',
    type: 'Ice',
    bp: 65,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      statChanges: {
        atk: -1,
      }
    }],
  },
  'Hyper Beam': {
    name: 'Hyper Beam',
    type: 'Normal',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    other: 'Pokemon must recharge after using'
  },
  'Peck': {
    name: 'Peck',
    type: 'Flying',
    bp: 35,
    acc: 1,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Drill Peck': {
    name: 'Drill Peck',
    type: 'Flying',
    bp: 80,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      highCrit: true,
    },
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Psychic',
    bp: 70,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
  },
  'Low Kick': {
    name: 'Low Kick',
    type: 'Fighting',
    bp: 1,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    other: 'Deals damage according to opponent weight. Can also hit Diving opponents.' // https://pokemondb.net/move/low-kick
  },
  'Counter': {
    name: 'Counter',
    type: 'Fighting',
    bp: 1,
    acc: 1,
    pp: 32,
    target: 'Your Pokemon',
    priority: -5,
    flags: {
      contact: true,
      directDamage: true,
    },
    other: 'After being hit by a physical attack, deals 2X damage to opponent who attacked'
  },
  'Seismic Toss': {
    name: 'Seismic Toss',
    type: 'Fighting',
    bp: 1,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
    other: 'Deals damage equal to user\'s level'
  },
  'Strength': {
    name: 'Strength',
    type: 'Normal',
    bp: 80,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Absorb': {
    name: 'Absorb',
    type: 'Grass',
    bp: 20,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      drain: .5
    },
  },
  'Mega Drain': {
    name: 'Mega Drain',
    type: 'Grass',
    bp: 40,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      drain: .5
    },
  },
  'Leech Seed': {
    name: 'Leech Seed',
    type: 'Grass',
    bp: 0,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    other: 'Drains 1/8 of the opponent\'s health at the end of each turn'
  },
  'Growth': {
    name: 'Growth',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        spAtk: 1,
      },
    }]
  },
  'Razor Leaf': {
    name: 'Razor Leaf',
    type: 'Grass',
    bp: 55,
    acc: .95,
    pp: 25,
    target: 'Both Opponent Pokemon',
    flags: {
      highCrit: true,
    }
  },
  'Solarbeam': {
    name: 'Solarbeam',
    type: 'Grass',
    bp: 120,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    other: 'Fires in one turn if there is sun'
  },
  'Poisonpowder': {
    name: 'Poisonpowder',
    type: 'Poison',
    bp: 0,
    acc: .75,
    pp: 35,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'PSN'
    }]
  },
  'Stun Spore': {
    name: 'Stun Spore',
    type: 'Grass',
    bp: 0,
    acc: .75,
    pp: 30,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'PAR'
    }]
  },
  'Sleep Powder': {
    name: 'Sleep Powder',
    type: 'Grass',
    bp: 0,
    acc: .8,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'SLP'
    }]
  },
  'Petal Dance': {
    name: 'Petal Dance',
    type: 'Grass',
    bp: 95,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .1,
      statChanges: {
        spDef: -1
      }
    }]
  },
  'String Shot': {
    name: 'String Shot',
    type: 'Bug',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        spd: -1
      }
    }]
  },
  'Dragon Rage': {
    name: 'Dragon Rage',
    type: 'Dragon',
    bp: 1,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
    other: 'Deals 40 damage'
  },
  'Fire Spin': {
    name: 'Fire Spin',
    type: 'Fire',
    bp: 15,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        eva: -1,
      },
    }],
    other: 'Deal 1/16 of the opponent\'s health at the end of the turn for 2-5 turns'
  },
  'Thundershock': {
    name: 'Thundershock',
    type: 'Electric',
    bp: 40,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'PAR'
    }],
  },
  'Thunderbolt': {
    name: 'Thunderbolt',
    type: 'Electric',
    bp: 95,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'PAR'
    }],
  },
  'Thunder Wave': {
    name: 'Thunder Wave',
    type: 'Electric',
    bp: 0,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'PAR'
    }],
  },
  'Thunder': {
    name: 'Thunder',
    type: 'Electric',
    bp: 120,
    acc: .7,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      status: 'PAR'
    }],
    other: 'Always hits in rain. Accuracy drops to 50% in Sun.'
  },
  'Rock Throw': {
    name: 'Rock Throw',
    type: 'Rock',
    bp: 50,
    acc: .9,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Earthquake': {
    name: 'Earthquake',
    type: 'Ground',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'All',
    other: 'Deals 2x damage to digging Pokemon'
  },
  'Earth Power': {
    name: 'Earth Power',
    type: 'Ground',
    bp: 90,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      statChanges: {
        def: -1,
      },
    }],
  },
  'Dig': {
    name: 'Dig',
    type: 'Ground',
    bp: 60,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Toxic': {
    name: 'Toxic',
    type: 'Poison',
    bp: 0,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'TOX'
    }],
  },
  'Confusion': {
    name: 'Confusion',
    type: 'Psychic',
    bp: 50,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      confuse: true,
    }],
  },
  'Psychic': {
    name: 'Psychic',
    type: 'Psychic',
    bp: 90,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      statChanges: {
        spDef: -1,
      },
    }],
  },
  'Hypnosis': {
    name: 'Hypnosis',
    type: 'Psychic',
    bp: 0,
    acc: .7,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'SLP'
    }],
  },
  'Meditate': {
    name: 'Meditate',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        atk: 1,
      },
    }]
  },
  'Agility': {
    name: 'Agility',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        spd: 2,
      },
    }]
  },
  'Quick Attack': {
    name: 'Quick Attack',
    type: 'Normal',
    bp: 40,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    priority: 1,
    flags: {
      contact: true,
    },
  },
  'Rage': {
    name: 'Rage',
    type: 'Normal',
    bp: 20,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    other: 'Deals increased damage on consecutive use'
  },
  'Teleport': {
    name: 'Teleport',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 20,
    target: 'Your two Pokemon',
    other: 'Flees a wild battle'
  },
  'Night Shade': {
    name: 'Night Shade',
    type: 'Ghost',
    bp: 1,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
    other: 'Deals damage equal to user\'s level'
  },
  'Mimic': {
    name: 'Mimic',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Replaces Mimic with the opponent\'s last move. 5 PP'
  },
  'Screech': {
    name: 'Screech',
    type: 'Normal',
    bp: 0,
    acc: .85,
    pp: 3,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 1,
      statChanges: {
        def: -2,
      },
    }],
  },
  'Double Team': {
    name: 'Double Team',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 6,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        eva: 2,
      },
    }]
  },
  'Recover': {
    name: 'Recover',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    flags: {
      recover: .5
    }
  },
  'Harden': {
    name: 'Harden',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        def: 1,
      },
    }]
  },
  'Minimize': {
    name: 'Minimize',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 6,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        eva: 2,
      },
    }]
  },
  'Smokescreen': {
    name: 'Smokescreen',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        acc: -1,
      },
    }]
  },
  'Confuse Ray': {
    name: 'Confuse Ray',
    type: 'Ghost',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      confuse: true,
    }]
  },
  'Withdraw': {
    name: 'Withdraw',
    type: 'Water',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        def: 1,
      },
    }]
  },
  'Defense Curl': {
    name: 'Defense Curl',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        def: 1,
      },
    }],
    other: 'Doubles damage of Rollout and Ice Ball after use'
  },
  'Barrier': {
    name: 'Barrier',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        def: 2,
      },
    }],
  },
  'Light Screen': {
    name: 'Light Screen',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
    other: 'Sets up a screen that reduces incoming spAtk damage by 50%. Lasts for 5 turns. Breakable by Brick Break'
  },
  'Haze': {
    name: 'Haze',
    type: 'Ice',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'All',
    other: 'Resets stat changes of all Pokemon on the field'
  },
  'Reflect': {
    name: 'Reflect',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
    other: 'Sets up a screen that reduces incoming atk damage by 50%. Lasts for 5 turns. Breakable by Brick Break'
  },
  'Focus Energy': {
    name: 'Focus Energy',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your Pokemon',
    other: 'Raises user\'s critical hit stage by 2'
  },
  'Bide': {
    name: 'Bide',
    type: 'Unknown',
    bp: 1,
    acc: 1,
    pp: 10,
    target: 'Your Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
    other: 'Stores damage received for 2 turns, and releases 2x damage to last attacker on the 3rd turn'
  },
  'Metronome': {
    name: 'Metronome',
    type: 'Unknown',
    bp: 0,
    acc: 0,
    pp: 35,
    target: 'Your Pokemon',
    other: 'Use a random move'
  },
  'Mirror Move': {
    name: 'Mirror Move',
    type: 'Flying',
    bp: 0,
    acc: 0,
    pp: 20,
    target: 'Your Pokemon',
    other: 'Use the opponent\'s last move'
  },
  'Selfdestruct': {
    name: 'Selfdestruct',
    type: 'Normal',
    bp: 200,
    acc: 1,
    pp: 1,
    target: 'All',
    other: 'User faints after damage is dealt'
  },
  'Egg Bomb': {
    name: 'Egg Bomb',
    type: 'Grass',
    bp: 120,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      recoil: 1/3,
    }
  },
  'Lick': {
    name: 'Lick',
    type: 'Ghost',
    bp: 20,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      status: 'PAR'
    }],
  },
  'Smog': {
    name: 'Smog',
    type: 'Poison',
    bp: 20,
    acc: .7,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .4,
      status: 'PSN'
    }],
  },
  'Sludge Bomb': {
    name: 'Sludge Bomb',
    type: 'Poison',
    bp: 90,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      status: 'PSN'
    }],
  },
  'Bone Club': {
    name: 'Bone Club',
    type: 'Ground',
    bp: 65,
    acc: .85,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      flinch: true,
    }],
  },
  'Fire Blast': {
    name: 'Fire Blast',
    type: 'Fire',
    bp: 120,
    acc: .85,
    pp: 8,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'BRN'
    }],
  },
  'Waterfall': {
    name: 'Waterfall',
    type: 'Water',
    bp: 80,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      flinch: true,
    }],
  },
  'Clamp': {
    name: 'Clamp',
    type: 'Water',
    bp: 35,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 1,
      statChanges: {
        eva: -1,
      },
    }],
    other: 'Deal 1/16 of the opponent\'s health at the end of the turn for 2-5 turns'
  },
  'Swift': {
    name: 'Swift',
    type: 'Normal',
    bp: 60,
    acc: 0,
    pp: 20,
    target: 'Both Opponent Pokemon',
  },
  'Head Smash': {
    name: 'Head Smash',
    type: 'Rock',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      recoil: 1/3,
    }
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Unknown',
    bp: 70,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    other: 'Type is calculated based on user\'s IVs'
  },
  'Amnesia': {
    name: 'Amnesia',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        spDef: 2
      }
    }]
  },
  'Kinesis': {
    name: 'Kinesis',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 6,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        acc: -1
      }
    }]
  },
  'Softboiled': {
    name: 'Softboiled',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 16,
    target: 'Your Pokemon',
    flags: {
      recover: .5,
    }
  },
  'Hi Jump Kick': {
    name: 'Hi Jump Kick',
    type: 'Fighting',
    bp: 85,
    acc: .9,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    other: 'If attack misses, user loses 1/2 of max HP'
  },
  'Glare': {
    name: 'Glare',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'PAR'
    }]
  },
  'Dream Eater': {
    name: 'Dream Eater',
    type: 'Psychic',
    bp: 100,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      drain: 1/2
    },
    other: 'Only hits if opponent is sleeping'
  },
  'Leech Life': {
    name: 'Leech Life',
    type: 'Bug',
    bp: 40,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      drain: 1/2
    },
  },
  'Lovely Kiss': {
    name: 'Lovely Kiss',
    type: 'Normal',
    bp: 0,
    acc: .85,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'SLP'
    }]
  },
  'Sky Attack': {
    name: 'Sky Attack',
    type: 'Flying',
    bp: 120,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      recoil: 1/3,
    }
  },
  'Transform': {
    name: 'Transform',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 32,
    target: 'One Opponent Pokemon',
    other: 'Transforms into target, copying all types, stats, stat changes, and moves'
  },
  'Bubble': {
    name: 'Bubble',
    type: 'Water',
    bp: 20,
    acc: 1,
    pp: 30,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: .1,
      statChanges: {
        spd: -1
      }
    }],
  },
  'Dizzy Punch': {
    name: 'Dizzy Punch',
    type: 'Normal',
    bp: 90,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .3,
      confuse: true
    }],
  },
  'Spore': {
    name: 'Spore',
    type: 'Grass',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'SLP'
    }]
  },
  'Flash': {
    name: 'Flash',
    type: 'Normal',
    bp: 0,
    acc: .7,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        acc: -1
      }
    }],
  },
  'Psywave': {
    name: 'Psywave',
    type: 'Psychic',
    bp: 1,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      directDamage: true,
    },
    other: 'Deals a random amount of damage between 50% and 150% of the user\'s level'
  },
  'Acid Armor': {
    name: 'Acid Armor',
    type: 'Poison',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        def: 2
      }
    }],
  },
  'Crabhammer': {
    name: 'Crabhammer',
    type: 'Water',
    bp: 120,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      highCrit: true,
    },
  },
  'Explosion': {
    name: 'Explosion',
    type: 'Normal',
    bp: 250,
    acc: 1,
    pp: 1,
    target: 'All',
    other: 'User faints after damage is dealt'
  },
  'Fury Swipes': {
    name: 'Fury Swipes',
    type: 'Normal',
    bp: 18,
    acc: .8,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      multihit: true,
    },
  },
  'Bonemerang': {
    name: 'Bonemerang',
    type: 'Ground',
    bp: 50,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      twoHit: true,
    },
  },
  'Rest': {
    name: 'Rest',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      status: 'SLP'
    }],
    other: 'User sleeps for exactly 2 turns, then wakes up'
  },
  'Rock Slide': {
    name: 'Rock Slide',
    type: 'Rock',
    bp: 75,
    acc: 1,
    pp: 16,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: .3,
      flinch: true,
    }],
  },
  'Hyper Fang': {
    name: 'Hyper Fang',
    type: 'Normal',
    bp: 80,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .1,
      flinch: true,
    }],
  },
  'Conversion': {
    name: 'Conversion',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 30,
    target: 'Your Pokemon',
    other: 'Changes user\'s type to the type of the first move in their move list'
  },
  'Tri Attack': {
    name: 'Tri Attack',
    type: 'Normal',
    bp: 80,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [
      {
        chance: 1/15,
        status: 'PSN'
      },
      {
        chance: 1/15,
        status: 'PAR'
      },
      {
        chance: 1/15,
        status: 'FRZ'
      },
    ],
  },
  'Super Fang': {
    name: 'Super Fang',
    type: 'Dark',
    bp: 1,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      directDamage: true,
    },
    other: 'Halves opponent\'s HP'
  },
  'Slash': {
    name: 'Slash',
    type: 'Normal',
    bp: 70,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      highCrit: true,
    },
  },
  'Substitute': {
    name: 'Substitute',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
      sacrifice: .5,
    },
    other: 'Creates a substitute using the user\'s own HP'
  },
  'Struggle': {
    name: 'Struggle',
    type: 'Normal',
    bp: 50,
    acc: 1,
    pp: 1,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
      recoil: .25,
    },
  },
  'Sketch': {
    name: 'Sketch',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'One Opponent Pokemon',
    other: 'Replace this move permanently with the target\'s last used move'
  },
  'Thief': {
    name: 'Thief',
    type: 'Dark',
    bp: 40,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    other: 'Steals a held item if user is not holding one. For trainer battles, item is only kept for the duration of the battle. For wild battles, item is kept permanently'
  },
  'Spider Web': {
    name: 'Spider Web',
    type: 'Bug',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Prevents opponent from fleeing'
  },
  'Mind Reader': {
    name: 'Mind Reader',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    other: 'Guarantees the user\'s next attack will hit'
  },
  'Nightmare': {
    name: 'Nightmare',
    type: 'Ghost',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    other: 'Causes sleeping opponent to lose 1/4 of their maximum HP at the end of each turn'
  },
  'Flame Wheel': {
    name: 'Flame Wheel',
    type: 'Fire',
    bp: 60,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: .1,
      status: 'BRN'
    }],
  },
  'Snore': {
    name: 'Snore',
    type: 'Normal',
    bp: 60,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: .3,
      flinch: true
    }],
  },
  'Curse': {
    name: 'Curse',
    type: 'Unknown',
    bp: 0,
    acc: 0,
    pp: 6,
    target: 'One Opponent Pokemon',
    other: 'If user is a Ghost type, loses 50% of its HP and places a curse on the opponent, causing it to lose 25% of its max HP at the end of every turn. If user is not a Ghost type, raises the user\'s atk and def by one stage and lowers spd by one stage'
  },
  'Flail': {
    name: 'Flail',
    type: 'Normal',
    bp: 1,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    other: 'Deals more damage the lower the user\'s HP is' // https://pokemondb.net/move/flail
  },
  'Conversion 2': {
    name: 'Conversion 2',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 30,
    target: 'Your two Pokemon',
    other: 'Changs this user\'s type to one that is resistant or immune to the last move used by the target, randomly'
  },
  'Aeroblast': {
    name: 'Aeroblast',
    type: 'Flying',
    bp: 120,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      highCrit: true,
    }
  },
  'Reversal': {
    name: 'Reversal',
    type: 'Fighting',
    bp: 1,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    other: 'Deals more damage the lower the user\'s HP is' // https://pokemondb.net/move/reversal
  },
  'Spite': {
    name: 'Spite',
    type: 'Ghost',
    bp: 0,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    other: 'The opponent\'s last move loses 2-5 PP'
  },
  'Powder Snow': {
    name: 'Powder Snow',
    type: 'Ice',
    bp: 40,
    acc: 1,
    pp: 25,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: .1,
      status: 'FRZ'
    }],
  },
  'Protect': {
    name: 'Protect',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    priority: 3,
    other: 'Makes the user invulnerable from attacks for this turn. 1/3 accuracy drop each consecutive turn used'
  },
  'Mach Punch': {
    name: 'Mach Punch',
    type: 'Fighting',
    bp: 40,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    priority: 1,
    flags: {
      contact: true,
    },
  },
  'Scary Face': {
    name: 'Scary Face',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'One Opponent Pokemon',
  },
  'Faint Attack': {
    name: 'Faint Attack',
    type: 'Dark',
    bp: 60,
    acc: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
  },
  'Sweet Kiss': {
    name: 'Sweet Kiss',
    type: 'Normal',
    bp: 0,
    acc: .75,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Belly Drum': {
    name: 'Belly Drum',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
  },
  'Gunk Shot': {
    name: 'Gunk Shot',
    type: 'Poison',
    bp: 120,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Poison'
    }],
  },
  'Mud-slap': {
    name: 'Mud-slap',
    type: 'Ground',
    bp: 20,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'Lower Acc.'
    }],
  },
  'Octazooka': {
    name: 'Octazooka',
    type: 'Water',
    bp: 95,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 50,
      alt: 'Lower Acc.'
    }],
  },
  'Spikes': {
    name: 'Spikes',
    type: 'Ground',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your sent out Pokemon',
  },
  'Zap Cannon': {
    name: 'Zap Cannon',
    type: 'Electric',
    bp: 100,
    acc: .5,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'Parlyze'
    }],
  },
  'Foresight': {
    name: 'Foresight',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Destiny Bond': {
    name: 'Destiny Bond',
    type: 'Ghost',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your two Pokemon',
  },
  'Perish Song': {
    name: 'Perish Song',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your two Pokemon',
    flags: {
      sound: true,
    },
  },
  'Icy Wind': {
    name: 'Icy Wind',
    type: 'Ice',
    bp: 55,
    acc: 1,
    pp: 24,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'Lower Spd.'
    }],
  },
  'Detect': {
    name: 'Detect',
    type: 'Fighting',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    priority: 3,
    other: 'Makes the user invulnerable from attacks for this turn. 1/3 accuracy drop each consecutive turn used'
  },
  'Bone Rush': {
    name: 'Bone Rush',
    type: 'Ground',
    bp: 100,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2,5, 5],
    },
  },
  'Lock-on': {
    name: 'Lock-on',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Ground',
    bp: 70,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
  },
  'Sandstorm': {
    name: 'Sandstorm',
    type: 'Rock',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your two Pokemon',
  },
  'Giga Drain': {
    name: 'Giga Drain',
    type: 'Grass',
    bp: 75,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
    drain: [1, 2],
    },
  },
  'Endure': {
    name: 'Endure',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your two Pokemon',
    priority: 3,
  },
  'Charm': {
    name: 'Charm',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Rollout': {
    name: 'Rollout',
    type: 'Rock',
    bp: 30,
    acc: .9,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'False Swipe': {
    name: 'False Swipe',
    type: 'Normal',
    bp: 40,
    acc: 1,
    pp: 40,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Swagger': {
    name: 'Swagger',
    type: 'Normal',
    bp: 0,
    acc: .9,
    pp: 15,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'Confuse + Raise Attk. sharply'
    }],
  },
  'Milk Drink': {
    name: 'Milk Drink',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your two Pokemon',
  },
  'Wild Charge': {
    name: 'Wild Charge',
    type: 'Electric',
    bp: 90,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 10,
      alt: '1/3 Recoil'
    }],
  },
  'X-scissors': {
    name: 'X-scissors',
    type: 'Bug',
    bp: 80,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
  },
  'Steel Wing': {
    name: 'Steel Wing',
    type: 'Steel',
    bp: 80,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      alt: '+1 Def'
    }],
  },
  'Mean Look': {
    name: 'Mean Look',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Attract': {
    name: 'Attract',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Sleep Talk': {
    name: 'Sleep Talk',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 16,
    target: 'Your Pokemon',
  },
  'Heal Bell': {
    name: 'Heal Bell',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 2,
    target: 'Your two Pokemon',
    flags: {
      sound: true,
    },
  },
  'Return': {
    name: 'Return',
    type: 'Normal',
    bp: 103,
    acc: 1,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Present': {
    name: 'Present',
    type: 'Normal',
    bp: 1,
    acc: .9,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Frustration': {
    name: 'Frustration',
    type: 'Normal',
    bp: 103,
    acc: 1,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Safeguard': {
    name: 'Safeguard',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
  },
  'Pain Split': {
    name: 'Pain Split',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Sacred Fire': {
    name: 'Sacred Fire',
    type: 'Fire',
    bp: 120,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 50,
      alt: 'Burn'
    }],
  },
  'Magnitude': {
    name: 'Magnitude',
    type: 'Ground',
    bp: 1,
    acc: 1,
    pp: 30,
    target: 'All',
  },
  'Dynamicpunch': {
    name: 'Dynamicpunch',
    type: 'Fighting',
    bp: 100,
    acc: .5,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'Confuse'
    }],
  },
  'Megahorn': {
    name: 'Megahorn',
    type: 'Bug',
    bp: 120,
    acc: .9,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Dragonbreath': {
    name: 'Dragonbreath',
    type: 'Dragon',
    bp: 60,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Parlyze'
    }],
  },
  'Baton Pass': {
    name: 'Baton Pass',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 40,
    target: 'Your two Pokemon',
  },
  'Encore': {
    name: 'Encore',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Pursuit': {
    name: 'Pursuit',
    type: 'Dark',
    bp: 40,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Rapid Spin': {
    name: 'Rapid Spin',
    type: 'Normal',
    bp: 20,
    acc: 1,
    pp: 1,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Sweet Scent': {
    name: 'Sweet Scent',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'Both Opponent Pokemon',
  },
  'Iron Tail': {
    name: 'Iron Tail',
    type: 'Steel',
    bp: 100,
    acc: .9,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      alt: 'Lower Def.'
    }],
  },
  'Metal Claw': {
    name: 'Metal Claw',
    type: 'Steel',
    bp: 50,
    acc: .95,
    pp: 35,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 10,
      alt: 'Raise Own Attk.'
    }],
  },
  'Vital Throw': {
    name: 'Vital Throw',
    type: 'Fighting',
    bp: 70,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    priority: -1,
    flags: {
      contact: true,
    },
  },
  'Morning Sun': {
    name: 'Morning Sun',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your two Pokemon',
  },
  'Synthesis': {
    name: 'Synthesis',
    type: 'Grass',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your two Pokemon',
  },
  'Moonlight': {
    name: 'Moonlight',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your two Pokemon',
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Normal',
    bp: 1,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Cross Chop': {
    name: 'Cross Chop',
    type: 'Fighting',
    bp: 100,
    acc: .9,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Twister': {
    name: 'Twister',
    type: 'Dragon',
    bp: 40,
    acc: 1,
    pp: 20,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 20,
      alt: 'Double dmg On Flyer Flinch Chance'
    }],
  },
  'Rain Dance': {
    name: 'Rain Dance',
    type: 'Water',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your two Pokemon',
  },
  'Sunny Day': {
    name: 'Sunny Day',
    type: 'Fire',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your two Pokemon',
  },
  'Crunch': {
    name: 'Crunch',
    type: 'Dark',
    bp: 80,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 20,
      alt: 'Lower Spec. Def.'
    }],
  },
  'Mirror Coat': {
    name: 'Mirror Coat',
    type: 'Psychic',
    bp: 1,
    acc: 1,
    pp: 32,
    target: 'Your Pokemon',
    priority: -5,
    flags: {
      directDamage: true,
    },
  },
  'Psych Up': {
    name: 'Psych Up',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Extremespeed': {
    name: 'Extremespeed',
    type: 'Normal',
    bp: 100,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    priority: 1
  },
  'Ancientpower': {
    name: 'Ancientpower',
    type: 'Rock',
    bp: 80,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 10,
      alt: 'Omniboost'
    }],
  },
  'Shadow Ball': {
    name: 'Shadow Ball',
    type: 'Ghost',
    bp: 80,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 20,
      alt: 'Lower Def.'
    }],
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Fighting',
    bp: 70,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
  },
  'Rock Smash': {
    name: 'Rock Smash',
    type: 'Fighting',
    bp: 40,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 50,
      alt: 'Lower Def.'
    }],
  },
  'Whirlpool': {
    name: 'Whirlpool',
    type: 'Water',
    bp: 15,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: '2-5 Hits + Lower Evas.'
    }],
  },
  'Beat Up': {
    name: 'Beat Up',
    type: 'Dark',
    bp: 10,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Fake Out': {
    name: 'Fake Out',
    type: 'Normal',
    bp: 40,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    priority: 1
  },
  'Uproar': {
    name: 'Uproar',
    type: 'Normal',
    bp: 50,
    acc: 1,
    pp: 10,
    target: 'Opponent [???]',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 1,
      alt: 'Uproar'
    }],
  },
  'Stockpile': {
    name: 'Stockpile',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 16,
    target: 'Your two Pokemon',
  },
  'Spit Up': {
    name: 'Spit Up',
    type: 'Normal',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
  },
  'Swallow': {
    name: 'Swallow',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your two Pokemon',
  },
  'Heat Wave': {
    name: 'Heat Wave',
    type: 'Fire',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 20,
      alt: 'Burn'
    }],
  },
  'Hail': {
    name: 'Hail',
    type: 'Ice',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your two Pokemon',
  },
  'Torment': {
    name: 'Torment',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Flatter': {
    name: 'Flatter',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
  },
  'Will-o-wisp': {
    name: 'Will-o-wisp',
    type: 'Fire',
    bp: 0,
    acc: .85,
    pp: 15,
    target: 'One Opponent Pokemon',
  },
  'Memento': {
    name: 'Memento',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 1,
    target: 'One Opponent Pokemon',
  },
  'Facade': {
    name: 'Facade',
    type: 'Normal',
    bp: 70,
    acc: 1,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Focus Punch': {
    name: 'Focus Punch',
    type: 'Fighting',
    bp: 150,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    priority: -3,
    flags: {
      contact: true,
    },
  },
  'Smellingsalt': {
    name: 'Smellingsalt',
    type: 'Normal',
    bp: 60,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Follow Me': {
    name: 'Follow Me',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your Pokemon',
    priority: 3,
  },
  'Nature Power': {
    name: 'Nature Power',
    type: 'Normal',
    bp: 0,
    acc: .95,
    pp: 20,
    target: 'Your Pokemon',
  },
  'Charge': {
    name: 'Charge',
    type: 'Electric',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your two Pokemon',
  },
  'Taunt': {
    name: 'Taunt',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'One Opponent Pokemon',
  },
  'Helping Hand': {
    name: 'Helping Hand',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your two Pokemon',
    priority: 5
  },
  'Role Play': {
    name: 'Role Play',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Wish': {
    name: 'Wish',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 2,
    target: 'Your two Pokemon',
  },
  'Assist': {
    name: 'Assist',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 32,
    target: 'Your Pokemon',
  },
  'Ingrain': {
    name: 'Ingrain',
    type: 'Grass',
    bp: 0,
    acc: 1,
    pp: 1,
    target: 'Your two Pokemon',
  },
  'Superpower': {
    name: 'Superpower',
    type: 'Fighting',
    bp: 120,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Magic Coat': {
    name: 'Magic Coat',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'Your Pokemon',
    priority: 4,
  },
  'Recycle': {
    name: 'Recycle',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 16,
    target: 'Your two Pokemon',
  },
  'Revenge': {
    name: 'Revenge',
    type: 'Fighting',
    bp: 60,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    priority: -4,
    flags: {
      contact: true,
    },
  },
  'Brick Break': {
    name: 'Brick Break',
    type: 'Fighting',
    bp: 75,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Yawn': {
    name: 'Yawn',
    type: 'Normal',
    bp: 0,
    acc: .7,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Knock Off': {
    name: 'Knock Off',
    type: 'Dark',
    bp: 20,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 1,
      alt: 'Knock Off'
    }],
  },
  'Endeavor': {
    name: 'Endeavor',
    type: 'Normal',
    bp: 1,
    acc: 1,
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
    bp: 120,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
  },
  'Skill Swap': {
    name: 'Skill Swap',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
  },
  'Imprison': {
    name: 'Imprison',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'Your two Pokemon',
  },
  'Refresh': {
    name: 'Refresh',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'Your two Pokemon',
  },
  'Grudge': {
    name: 'Grudge',
    type: 'Ghost',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'Your two Pokemon',
  },
  'Snatch': {
    name: 'Snatch',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'Your Pokemon',
    priority: 4,
  },
  'Secret Power': {
    name: 'Secret Power',
    type: 'Normal',
    bp: 70,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Secret Power'
    }],
  },
  'Dive': {
    name: 'Dive',
    type: 'Water',
    bp: 60,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Force Palm': {
    name: 'Force Palm',
    type: 'Fighting',
    bp: 60,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Parlyze'
    }],
  },
  'Camouflage': {
    name: 'Camouflage',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your two Pokemon',
  },
  'Tail Glow': {
    name: 'Tail Glow',
    type: 'Bug',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'Your two Pokemon',
  },
  'Luster Purge': {
    name: 'Luster Purge',
    type: 'Psychic',
    bp: 90,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 50,
      alt: 'Lower Spec. Def.'
    }],
  },
  'Mist Ball': {
    name: 'Mist Ball',
    type: 'Psychic',
    bp: 90,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 50,
      alt: 'Lower Spec. Attk.'
    }],
  },
  'Featherdance': {
    name: 'Featherdance',
    type: 'Flying',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Teeter Dance': {
    name: 'Teeter Dance',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 32,
    target: 'Both Opponent Pokemon',
  },
  'Blaze Kick': {
    name: 'Blaze Kick',
    type: 'Fire',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      alt: 'Burn chance increased crit'
    }],
  },
  'Mud Sport': {
    name: 'Mud Sport',
    type: 'Ground',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'Your two Pokemon',
  },
  'Ice Ball': {
    name: 'Ice Ball',
    type: 'Ice',
    bp: 30,
    acc: .9,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Needle Arm': {
    name: 'Needle Arm',
    type: 'Grass',
    bp: 95,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      alt: 'Flinch 2x on minimized'
    }],
  },
  'Slack Off': {
    name: 'Slack Off',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'Your two Pokemon',
  },
  'Hyper Voice': {
    name: 'Hyper Voice',
    type: 'Normal',
    bp: 120,
    acc: 1,
    pp: 16,
    target: 'Both Opponent Pokemon',
    flags: {
      sound: true,
    },
    secondary: [{
      chance: 20,
      alt: 'Lower Def.'
    }],
  },
  'Poison Fang': {
    name: 'Poison Fang',
    type: 'Poison',
    bp: 90,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 50,
      alt: 'Badly Poison Chance'
    }],
  },
  'Crush Claw': {
    name: 'Crush Claw',
    type: 'Normal',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 50,
      alt: 'Lower Def.'
    }],
  },
  'Blast Burn': {
    name: 'Blast Burn',
    type: 'Fire',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
  },
  'Hydro Cannon': {
    name: 'Hydro Cannon',
    type: 'Water',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
  },
  'Meteor Mash': {
    name: 'Meteor Mash',
    type: 'Steel',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      alt: 'Raise Own Attk.'
    }],
  },
  'Shadow Sneak': {
    name: 'Shadow Sneak',
    type: 'Ghost',
    bp: 40,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
  },
  'Weather Ball': {
    name: 'Weather Ball',
    type: 'Normal',
    bp: 50,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
  },
  'Aromatherapy': {
    name: 'Aromatherapy',
    type: 'Grass',
    bp: 0,
    acc: 0,
    pp: 2,
    target: 'Your two Pokemon',
  },
  'Fake Tears': {
    name: 'Fake Tears',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'One Opponent Pokemon',
  },
  'Air Slash': {
    name: 'Air Slash',
    type: 'Flying',
    bp: 80,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Target flinches'
    }],
  },
  'Overheat': {
    name: 'Overheat',
    type: 'Fire',
    bp: 120,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Odor Sleuth': {
    name: 'Odor Sleuth',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'One Opponent Pokemon',
  },
  'Rock Tomb': {
    name: 'Rock Tomb',
    type: 'Rock',
    bp: 55,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'Lower Spd.'
    }],
  },
  'Silver Wind': {
    name: 'Silver Wind',
    type: 'Bug',
    bp: 60,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 10,
      alt: 'Omniboost'
    }],
  },
  'Flash Cannon': {
    name: 'Flash Cannon',
    type: 'Steel',
    bp: 90,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Lower Def.'
    }],
  },
  'Grasswhistle': {
    name: 'Grasswhistle',
    type: 'Grass',
    bp: 0,
    acc: .7,
    pp: 24,
    target: 'One Opponent Pokemon',
  },
  'Tickle': {
    name: 'Tickle',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 6,
    target: 'One Opponent Pokemon',
  },
  'Cosmic Power': {
    name: 'Cosmic Power',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 6,
    target: 'Your two Pokemon',
  },
  'Water Spout': {
    name: 'Water Spout',
    type: 'Water',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'Both Opponent Pokemon',
  },
  'Signal Beam': {
    name: 'Signal Beam',
    type: 'Bug',
    bp: 75,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 10,
      alt: 'Confuse'
    }],
  },
  'Shadow Punch': {
    name: 'Shadow Punch',
    type: 'Ghost',
    bp: 70,
    acc: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Extrasensory': {
    name: 'Extrasensory',
    type: 'Psychic',
    bp: 80,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Flinch 2x on minimized'
    }],
  },
  'Sky Uppercut': {
    name: 'Sky Uppercut',
    type: 'Fighting',
    bp: 90,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Sand Tomb': {
    name: 'Sand Tomb',
    type: 'Ground',
    bp: 15,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: '2-5 Hits + Lower Evas.'
    }],
  },
  'Sheer Cold': {
    name: 'Sheer Cold',
    type: 'Ice',
    bp: 1,
    acc: .3,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      oneHitKO: true,
    },
  },
  'Muddy Water': {
    name: 'Muddy Water',
    type: 'Water',
    bp: 95,
    acc: 1,
    pp: 10,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 30,
      alt: 'Lower Acc.'
    }],
  },
  'Bullet Seed': {
    name: 'Bullet Seed',
    type: 'Grass',
    bp: 25,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2,5, 5],
    },
  },
  'Aerial Ace': {
    name: 'Aerial Ace',
    type: 'Flying',
    bp: 60,
    acc: 0,
    pp: 32,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Ice Shard': {
    name: 'Ice Shard',
    type: 'Ice',
    bp: 40,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
  },
  'Iron Defense': {
    name: 'Iron Defense',
    type: 'Steel',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
  },
  'Block': {
    name: 'Block',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Howl': {
    name: 'Howl',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your two Pokemon',
  },
  'Dragon Claw': {
    name: 'Dragon Claw',
    type: 'Dragon',
    bp: 80,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Frenzy Plant': {
    name: 'Frenzy Plant',
    type: 'Grass',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
  },
  'Bulk Up': {
    name: 'Bulk Up',
    type: 'Fighting',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
  },
  'Bounce': {
    name: 'Bounce',
    type: 'Flying',
    bp: 85,
    acc: .85,
    pp: 5,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      alt: 'Fly/Bounce/Dig'
    }],
  },
  'Mud Shot': {
    name: 'Mud Shot',
    type: 'Ground',
    bp: 55,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'Lower Spd.'
    }],
  },
  'Poison Tail': {
    name: 'Poison Tail',
    type: 'Poison',
    bp: 120,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
    secondary: [{
      chance: 30,
      alt: 'Badly Poison Chance'
    }],
  },
  'Hidden Power': {
    name: 'Hidden Power',
    type: 'Bug',
    bp: 70,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
  },
  'Volt Tackle': {
    name: 'Volt Tackle',
    type: 'Electric',
    bp: 120,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    recoil: [1, 3],
    },
    secondary: [{
      chance: 30,
      alt: '1/3 Recoil'
    }],
  },
  'Magical Leaf': {
    name: 'Magical Leaf',
    type: 'Grass',
    bp: 60,
    acc: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
  },
  'Water Sport': {
    name: 'Water Sport',
    type: 'Water',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'Your two Pokemon',
  },
  'Calm Mind': {
    name: 'Calm Mind',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
  },
  'Leaf Blade': {
    name: 'Leaf Blade',
    type: 'Grass',
    bp: 95,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      contact: true,
    },
  },
  'Dragon Dance': {
    name: 'Dragon Dance',
    type: 'Dragon',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
  },
  'Rock Blast': {
    name: 'Rock Blast',
    type: 'Rock',
    bp: 25,
    acc: .8,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
    multihit: [2,5, 5],
    },
  },
  'Shock Wave': {
    name: 'Shock Wave',
    type: 'Electric',
    bp: 60,
    acc: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
  },
  'Water Pulse': {
    name: 'Water Pulse',
    type: 'Water',
    bp: 60,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 20,
      alt: 'Confuse'
    }],
  },
  'Doom Desire': {
    name: 'Doom Desire',
    type: 'Steel',
    bp: 120,
    acc: .85,
    pp: 5,
    target: 'One Opponent Pokemon',
  },
  'Psycho Boost': {
    name: 'Psycho Boost',
    type: 'Psychic',
    bp: 140,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      alt: 'take 1/4 damage'
    }],
  },
};
