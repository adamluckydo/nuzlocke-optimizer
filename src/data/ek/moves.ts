import { Move } from '../../types';

/** All moves are specifically for EK. Added moves / increased accuracy / modified effects */
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
    other: 'User must recharge after using'
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
    other: 'After being hit by a physical attack, deals 2x damage to opponent who attacked'
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
    other: 'Resets stat changes of all Pokemon on the field',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        atk: 0,
        def: 0,
        spAtk: 0,
        spDef: 0,
        spd: 0
      }
    },
    {
      chance: 1,
      statChanges: {
        atk: 0,
        def: 0,
        spAtk: 0,
        spDef: 0,
        spd: 0
      }
    }]
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
    secondary: [{
      chance: 1,
      statChanges: {
        spd: -2
      }
    }],
  },
  'Faint Attack': {
    name: 'Faint Attack',
    type: 'Dark',
    bp: 60,
    acc: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    other: 'Ignores accuracy checks'
  },
  'Sweet Kiss': {
    name: 'Sweet Kiss',
    type: 'Normal',
    bp: 0,
    acc: .75,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      confuse: true,
    }],
  },
  'Belly Drum': {
    name: 'Belly Drum',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your Pokemon',
    flags: {
      sacrifice: .5,
    },
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        atk: 6
      }
    }]
  },
  'Gunk Shot': {
    name: 'Gunk Shot',
    type: 'Poison',
    bp: 120,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      status: 'PSN'
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
      statChanges: {
        acc: -1
      }
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
      chance: .5,
      statChanges: {
        acc: -1
      }
    }],
  },
  'Spikes': {
    name: 'Spikes',
    type: 'Ground',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Both Opponent Pokemon',
    other: 'Lays a layer of spikes on the opponent\'s side of the battlefield. Upon switching in, opponent takes (1/8, 1/6, 1/4) damage depending on how many layers of spikes exist'
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
      status: 'PAR'
    }],
  },
  'Foresight': {
    name: 'Foresight',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        eva: 0 // Reset evasiveness
      }
    }],
    other: 'Allows Normal and Fighting type attacks to hit opponent if they are the Ghost type'
  },
  'Destiny Bond': {
    name: 'Destiny Bond',
    type: 'Ghost',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    other: 'Causes the opponent to faint if they attack the user and the user faints (before making another move)'
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
    other: 'Causes all Pokemon on the field to faint after 3 more turns'
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
      statChanges: {
        spd: -1,
      }
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
  },
  'Lock-on': {
    name: 'Lock-on',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    other: 'Guarantees the user\'s next attack will hit'
  },
  'Sandstorm': {
    name: 'Sandstorm',
    type: 'Rock',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'All',
    other: 'Creates a sandstorm on the battlefield that lasts for 5 turns' // https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move)
  },
  'Giga Drain': {
    name: 'Giga Drain',
    type: 'Grass',
    bp: 75,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    flags: {
      drain: .5
    },
  },
  'Endure': {
    name: 'Endure',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    priority: 3,
  },
  'Charm': {
    name: 'Charm',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        atk: -2
      }
    }]
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
    other: 'Attacks for 5 turns or until missing, doubling damage on each consecutive turn'
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
    other: 'If this move would cause the opponent to faint, leaves the opponent at 1HP'
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
      confuse: true,
      statChanges: {
        atk: 2
      }
    }],
  },
  'Milk Drink': {
    name: 'Milk Drink',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    flags: {
      recover: .5
    }
  },
  'Wild Charge': {
    name: 'Wild Charge',
    type: 'Electric',
    bp: 90,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      recoil: 1/3,
    }
  },
  'X-scissors': {
    name: 'X-scissors',
    type: 'Bug',
    bp: 80,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    flags: {
      highCrit: true,
    }
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
      chance: .1,
      self: true,
      statChanges: {
        def: 1
      }
    }],
  },
  'Mean Look': {
    name: 'Mean Look',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    other: 'Prevents opponent from fleeing'
  },
  'Attract': {
    name: 'Attract',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'One Opponent Pokemon',
    other: 'Prevents opponent of opposite gender from attacking 50% of the time'
  },
  'Sleep Talk': {
    name: 'Sleep Talk',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 16,
    target: 'Your Pokemon',
    other: 'User uses one of its other moves while sleeping'
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
    other: 'Heals the party\'s status conditions'
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
    bp: 0,
    acc: .9,
    pp: 15,
    target: 'All',
    other: '40% chance of dealing 40bp, 30% chance of dealing 80bp, 10% chance of dealing 120bp, and 20% chance of healing 1/4 of the user\'s max HP'
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
    other: 'Set HP of user and opponent to (HP + Opponent HP) / 2'
  },
  'Sacred Fire': {
    name: 'Sacred Fire',
    type: 'Fire',
    bp: 120,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .5,
      status: 'BRN'
    }],
  },
  'Magnitude': {
    name: 'Magnitude',
    type: 'Ground',
    bp: 1,
    acc: 1,
    pp: 30,
    target: 'All',
    other: 'Deals varying damage. Deals 2x damage to Pokemon using Dig' // https://pokemondb.net/move/magnitude
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
      confuse: true
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
      chance: .3,
      status: 'PAR'
    }],
  },
  'Baton Pass': {
    name: 'Baton Pass',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 40,
    target: 'Your two Pokemon',
    other: 'Switches user out for another Pokemon, passing all stat stage changes, confusion, focused effect, trapped effect, sureHit effect, cursed effect, perishTurn, and substitute (with remaining HP)'
  },
  'Encore': {
    name: 'Encore',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    other: 'Causes opponent to repeat their last used move for 2-6 turns'
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
    other: 'If target is switching out, has priority +7 and has double bp'
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
    other: 'Removes Bind, Wrap, Clamp, Whirlpool, Fire Spin, Leech Seed, and Spikes'
  },
  'Sweet Scent': {
    name: 'Sweet Scent',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        eva: -1
      }
    }],
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
      chance: .3,
      statChanges: {
        def: -1
      }
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
      chance: .1,
      self: true,
      statChanges: {
        atk: 1
      }
    }],
  },
  'Vital Throw': {
    name: 'Vital Throw',
    type: 'Fighting',
    bp: 70,
    acc: 0,
    pp: 10,
    target: 'One Opponent Pokemon',
    priority: -1,
    flags: {
      contact: true,
    },
    other: 'Ignores accuracy checks'
  },
  'Morning Sun': {
    name: 'Morning Sun',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    other: 'Restores 25% of max HP. In sunlight, restores 50%. In all other weather, restores 1/8.'
  },
  'Synthesis': {
    name: 'Synthesis',
    type: 'Grass',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    other: 'Restores 25% of max HP. In sunlight, restores 50%. In all other weather, restores 1/8.'
  },
  'Moonlight': {
    name: 'Moonlight',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    other: 'Restores 25% of max HP. In sunlight, restores 50%. In all other weather, restores 1/8.'
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
      highCrit: true,
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
      chance: .2,
      flinch: true
    }],
    other: 'Inflicts 2x damage to opponents in Bounce or Fly'
  },
  'Rain Dance': {
    name: 'Rain Dance',
    type: 'Water',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'All',
    other: 'Causes a rain shower that lasts for 5 turns' // https://pokemondb.net/move/rain-dance
  },
  'Sunny Day': {
    name: 'Sunny Day',
    type: 'Fire',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'All',
    other: 'Causes bright sunlight that lasts for 5 turns' // https://pokemondb.net/move/sunny-day
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
      chance: .2,
      statChanges: {
        spDef: -1
      }
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
    other: 'After being hit by a special attack, deals 2x damage to opponent who attacked'
  },
  'Psych Up': {
    name: 'Psych Up',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Copies the opponent\'s stat stage changes'
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
      chance: .1,
      self: true,
      statChanges: {
        atk: 1,
        def: 1,
        spAtk: 1,
        spDef: 1,
        spd: 1
      }
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
      chance: .2,
      statChanges: {
        def: -1
      }
    }],
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
      chance: .5,
      statChanges: {
        def: -1
      }
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
      statChanges: {
        eva: -1,
      },
    }],
    other: 'Deal 1/16 of the opponent\'s health at the end of the turn for 2-5 turns'
  },
  'Beat Up': {
    name: 'Beat Up',
    type: 'Dark',
    bp: 10,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Damage is calculated using each non-statused party member' // https://pokemondb.net/move/beat-up
  },
  'Fake Out': {
    name: 'Fake Out',
    type: 'Normal',
    bp: 40,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    priority: 1,
    secondary: [{
      chance: 1,
      flinch: true,
    }]
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
    other: 'Attacks consecutively for 3 turns. No Pokemon can sleep during an Uproar'
  },
  'Stockpile': {
    name: 'Stockpile',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 16,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        def: 1,
        spDef: 1,
      }
    }]
  },
  'Spit Up': {
    name: 'Spit Up',
    type: 'Normal',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    other: 'Upon use, damage = (bp * stockpileCount). Also removes def and spDef boosts given from Stockpiling.'
  },
  'Swallow': {
    name: 'Swallow',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 10,
    target: 'Your Pokemon',
    other: 'Restores 25%, 50%, or 100% of the user\'s HP based on their stockpileCount'
  },
  'Heat Wave': {
    name: 'Heat Wave',
    type: 'Fire',
    bp: 100,
    acc: 1,
    pp: 16,
    target: 'Both Opponent Pokemon',
    secondary: [{
      chance: .2,
      status: 'BRN'
    }],
  },
  'Hail': {
    name: 'Hail',
    type: 'Ice',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'Your two Pokemon',
    other: 'Creates a hailstorm that lasts for 5 turns' // https://pokemondb.net/move/hail
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
    secondary: [{
      chance: 1,
      confuse: true,
      statChanges: {
        spAtk: 1
      }
    }]
  },
  'Will-o-wisp': {
    name: 'Will-o-wisp',
    type: 'Fire',
    bp: 0,
    acc: .85,
    pp: 15,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'BRN'
    }]
  },
  'Memento': {
    name: 'Memento',
    type: 'Dark',
    bp: 0,
    acc: 0,
    pp: 1,
    target: 'One Opponent Pokemon',
    flags: {
      sacrifice: 1
    },
    secondary: [{
      chance: 1,
      statChanges: {
        atk: -2,
        spAtk: -2,
      }
    }],
    other: 'Always hits'
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
    other: 'If the user is poisoned, paralyzed, or burned, deals 2x damage'
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
    other: 'If the user is damaged by a move before this attack hits, they will lose their focus and flinch'
  },
  'Smellingsalt': {
    name: 'Smellingsalt',
    type: 'Normal',
    bp: 60,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Deals 2x damage to paralyzed opponents, but heals their paralysis'
  },
  'Follow Me': {
    name: 'Follow Me',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your Pokemon',
    priority: 3,
    other: 'Directs all attacks from opponents in a double battle to this Pokemon'
  },
  'Nature Power': {
    name: 'Nature Power',
    type: 'Normal',
    bp: 0,
    acc: .95,
    pp: 20,
    target: 'Your Pokemon',
    other: 'Turns into a different move based on the current terrain' // https://pokemondb.net/move/nature-power
  },
  'Charge': {
    name: 'Charge',
    type: 'Electric',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        spDef: 1
      }
    }],
    other: 'User\'s next move, if Electric, will deal 2x damage'
  },
  'Taunt': {
    name: 'Taunt',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'One Opponent Pokemon',
    other: 'Causes the opponent to not be able to use Status-category moves for 3 turns'
  },
  'Helping Hand': {
    name: 'Helping Hand',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your Pokemon',
    priority: 5,
    other: 'Doubles the damage of ally Pokemon\'s move in a double battle'
  },
  'Role Play': {
    name: 'Role Play',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Copies the opponent\'s ability'
  },
  'Wish': {
    name: 'Wish',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 2,
    target: 'Your Pokemon',
    other: 'Heals the Pokemon in the slot this move was used by 50% of its maximum health after one turn' // Battlefield
  },
  'Assist': {
    name: 'Assist',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 32,
    target: 'Your Pokemon',
    other: 'Uses a random move known by any of the party\'s Pokemon' // https://pokemondb.net/move/assist
  },
  'Ingrain': {
    name: 'Ingrain',
    type: 'Grass',
    bp: 0,
    acc: 1,
    pp: 1,
    target: 'Your Pokemon',
    other: 'User plants roots to restore 1/16 of max HP at the end of each turn, but can\'t switch out'
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
      recoil: 1/3,
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
    other: 'Reflects any status condition causing move back to the opponent'
  },
  'Recycle': {
    name: 'Recycle',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 16,
    target: 'Your Pokemon',
    other: 'User\'s hold item is restored'
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
    other: 'Deals double damage if the target damaged the user during the current turn'
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
    other: 'Breaks barriers such as Reflect and Light Screen before attacking'
  },
  'Yawn': {
    name: 'Yawn',
    type: 'Normal',
    bp: 0,
    acc: .7,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Makes target drowsy (so they will fall asleep at the end of the next turn)'
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
    other: 'If the opponent has a held item, deals 2x damage and removes the item for the rest of the battle. If the item activates on attack, its effect is proced before it is removed'
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
    other: 'Reduces the opponent\'s health to equal the user\'s. Fails if user\'s health is higher'
  },
  'Draco Meteor': {
    name: 'Draco Meteor',
    type: 'Dragon',
    bp: 120,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      recoil: 1/3
    }
  },
  'Skill Swap': {
    name: 'Skill Swap',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    other: 'Swaps the user\'s ability with the target\'s'
  },
  'Imprison': {
    name: 'Imprison',
    type: 'Psychic',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'Your Pokemon',
    other: 'Causes opponents to not be able to use any move the user knows'
  },
  'Refresh': {
    name: 'Refresh',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'Your two Pokemon',
    other: 'Cures paralysis, poison, or burn'
  },
  'Grudge': {
    name: 'Grudge',
    type: 'Ghost',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'Your two Pokemon',
    other: 'If user faints before using another move, causes the opponent\'s move to lose all of its PP'
  },
  'Snatch': {
    name: 'Snatch',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'Your Pokemon',
    priority: 4,
    other: 'Steals the effects of the next status move used by the opponent(s) that turn'
  },
  'Secret Power': {
    name: 'Secret Power',
    type: 'Normal',
    bp: 70,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    other: 'Has a 30% chance of causing a secondary effect, based on the terrain'
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
    other: 'The user dives underwater for one turn, then attacks the next turn'
  },
  'Force Palm': {
    name: 'Force Palm',
    type: 'Fighting',
    bp: 60,
    acc: 1,
    pp: 16,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      status: 'PAR'
    }],
  },
  'Camouflage': {
    name: 'Camouflage',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 20,
    target: 'Your Pokemon',
    other: 'Causes the user to change its type based on the current terrain.' // https://pokemondb.net/move/camouflage
  },
  'Tail Glow': {
    name: 'Tail Glow',
    type: 'Bug',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        spAtk: 2
      }
    }]
  },
  'Luster Purge': {
    name: 'Luster Purge',
    type: 'Psychic',
    bp: 90,
    acc: 1,
    pp: 10,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .5,
      statChanges: {
        spDef: -1
      }
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
      chance: .5,
      statChanges: {
        spAtk: -1
      }
    }],
  },
  'Featherdance': {
    name: 'Featherdance',
    type: 'Flying',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        atk: -2
      }
    }],
  },
  'Teeter Dance': {
    name: 'Teeter Dance',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 32,
    target: 'All',
    secondary: [{
      chance: 1,
      confuse: true
    }]
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
      highCrit: true
    },
    secondary: [{
      chance: .3,
      status: 'BRN'
    }],
  },
  'Mud Sport': {
    name: 'Mud Sport',
    type: 'Ground',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'Your two Pokemon',
    other: 'Reduces the power of Electric type moves by 50%' // Battlefield
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
    other: 'Attacks for 5 turns or until missing, doubling damage on each consecutive turn'
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
      chance: .3,
      flinch: true
    }],
    other: '2x damage and chance to flinch on minimized targets'
  },
  'Slack Off': {
    name: 'Slack Off',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 10,
    target: 'Your two Pokemon',
    flags: {
      recover: .5,
    }
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
      chance: .2,
      statChanges: {
        def: -1,
      }
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
      chance: .5,
      status: 'TOX'
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
      chance: .5,
      statChanges: {
        def: -1,
      }
    }],
  },
  'Blast Burn': {
    name: 'Blast Burn',
    type: 'Fire',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    other: 'User must recharge after using'
  },
  'Hydro Cannon': {
    name: 'Hydro Cannon',
    type: 'Water',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    other: 'User must recharge after using'
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
      chance: .3,
      self: true,
      statChanges: {
        atk: 1,
      }
    }],
  },
  'Shadow Sneak': {
    name: 'Shadow Sneak',
    type: 'Ghost',
    bp: 40,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    priority: 1
  },
  'Aromatherapy': {
    name: 'Aromatherapy',
    type: 'Grass',
    bp: 0,
    acc: 0,
    pp: 2,
    target: 'Your two Pokemon',
    other: 'Cures all status problems in the party' // Same as Heal Bell
  },
  'Fake Tears': {
    name: 'Fake Tears',
    type: 'Dark',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        spDef: -2
      }
    }]
  },
  'Air Slash': {
    name: 'Air Slash',
    type: 'Flying',
    bp: 80,
    acc: 1,
    pp: 25,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      flinch: true
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
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        spAtk: -2
      }
    }]
  },
  'Odor Sleuth': {
    name: 'Odor Sleuth',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 3,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        eva: 0 // Reset evasiveness
      }
    }],
    other: 'Allows Normal and Fighting type attacks to hit opponent if they are the Ghost type'
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
      statChanges: {
        spd: -1
      }
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
      chance: .1,
      self: true,
      statChanges: {
        atk: 1,
        def: 1,
        spAtk: 1,
        spDef: 1,
        spd: 1
      }
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
      chance: .3,
      statChanges: {
        def: -1,
      }
    }],
  },
  'Grasswhistle': {
    name: 'Grasswhistle',
    type: 'Grass',
    bp: 0,
    acc: .7,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      status: 'SLP'
    }]
  },
  'Tickle': {
    name: 'Tickle',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 6,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: 1,
      statChanges: {
        atk: -1,
        def: -1
      }
    }]
  },
  'Cosmic Power': {
    name: 'Cosmic Power',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 6,
    target: 'Your two Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        def: 1,
        spDef: 1
      }
    }]
  },
  'Water Spout': {
    name: 'Water Spout',
    type: 'Water',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'Both Opponent Pokemon',
    other: 'Inflicts damage according to the user\'s HP. (150 * Current HP / Max HP)'
  },
  'Signal Beam': {
    name: 'Signal Beam',
    type: 'Bug',
    bp: 75,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .1,
      confuse: true
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
    other: 'Ignores accuracy checks'
  },
  'Extrasensory': {
    name: 'Extrasensory',
    type: 'Psychic',
    bp: 80,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .3,
      flinch: true
    }],
    other: '2x damage and chance to flinch on minimized targets'
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
    other: 'Can hit Pokemon during Bounce and Fly'
  },
  'Sand Tomb': {
    name: 'Sand Tomb',
    type: 'Ground',
    bp: 15,
    acc: 1,
    pp: 24,
    target: 'One Opponent Pokemon',
    flags: {
      multihit: true,
    },
    secondary: [{
      chance: 1,
      statChanges: {
        eva: -1
      }
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
      chance: .3,
      statChanges: {
        acc: -1
      }
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
      multihit: true,
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
    other: 'Bypasses accuracy checks'
  },
  'Ice Shard': {
    name: 'Ice Shard',
    type: 'Ice',
    bp: 40,
    acc: 1,
    pp: 30,
    target: 'One Opponent Pokemon',
    priority: 1,
  },
  'Iron Defense': {
    name: 'Iron Defense',
    type: 'Steel',
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
    }]
  },
  'Block': {
    name: 'Block',
    type: 'Normal',
    bp: 0,
    acc: 1,
    pp: 5,
    target: 'One Opponent Pokemon',
    other: 'Prevents opponent from fleeing'
  },
  'Howl': {
    name: 'Howl',
    type: 'Normal',
    bp: 0,
    acc: 0,
    pp: 5,
    target: 'Your Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        atk: 2
      }
    }]
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
      highCrit: true,
    },
  },
  'Frenzy Plant': {
    name: 'Frenzy Plant',
    type: 'Grass',
    bp: 150,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    other: 'User must recharge after using'
  },
  'Bulk Up': {
    name: 'Bulk Up',
    type: 'Fighting',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        atk: 1,
        def: 1
      }
    }]
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
      chance: .3,
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
      statChanges: {
        spd: -1
      }
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
      chance: .3,
      status: 'TOX'
    }],
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
      recoil: 1/3
    },
    secondary: [{
      chance: .1,
      status: 'PAR'
    }],
  },
  'Magical Leaf': {
    name: 'Magical Leaf',
    type: 'Grass',
    bp: 60,
    acc: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    other: 'Bypasses accuracy checks'
  },
  'Water Sport': {
    name: 'Water Sport',
    type: 'Water',
    bp: 0,
    acc: 1,
    pp: 15,
    target: 'All',
    other: 'Reduces the power of Electric type moves by 50%' // Battlefield
  },
  'Calm Mind': {
    name: 'Calm Mind',
    type: 'Psychic',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        spAtk: 1,
        spDef: 1
      }
    }],
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
      highCrit: true,
    },
  },
  'Dragon Dance': {
    name: 'Dragon Dance',
    type: 'Dragon',
    bp: 0,
    acc: 0,
    pp: 3,
    target: 'Your two Pokemon',
    secondary: [{
      chance: 1,
      self: true,
      statChanges: {
        atk: 1,
        spAtk: 1
      }
    }],
  },
  'Rock Blast': {
    name: 'Rock Blast',
    type: 'Rock',
    bp: 25,
    acc: .8,
    pp: 10,
    target: 'One Opponent Pokemon',
    flags: {
      multihit: true
    },
  },
  'Shock Wave': {
    name: 'Shock Wave',
    type: 'Electric',
    bp: 60,
    acc: 0,
    pp: 20,
    target: 'One Opponent Pokemon',
    other: 'Bypasses accuracy checks'
  },
  'Water Pulse': {
    name: 'Water Pulse',
    type: 'Water',
    bp: 60,
    acc: 1,
    pp: 20,
    target: 'One Opponent Pokemon',
    secondary: [{
      chance: .2,
      confuse: true
    }],
  },
  'Doom Desire': {
    name: 'Doom Desire',
    type: 'Steel',
    bp: 120,
    acc: .85,
    pp: 5,
    target: 'One Opponent Pokemon',
    other: 'Causes the opponent to be hit two turns after the move is used' // Battlefield
  },
  'Psycho Boost': {
    name: 'Psycho Boost',
    type: 'Psychic',
    bp: 140,
    acc: 1,
    pp: 8,
    target: 'One Opponent Pokemon',
    flags: {
      recoil: 1/4
    }
  },
};
