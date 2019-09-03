const bosses = {
  'Spirit Vale': {
    1: {
      ids: [15438],
      icon: 'https://wiki.guildwars2.com/images/f/fb/Mini_Vale_Guardian.png',
      name: 'Vale Guardian',
      api_name: 'vale_guardian'
    },
    2: {
      ids: [15429],
      icon:
        'https://wiki.guildwars2.com/images/d/d1/Mini_Gorseval_the_Multifarious.png',
      name: 'Gorseval',
      api_name: 'gorseval'
    },
    3: {
      ids: [15375],
      icon: 'https://wiki.guildwars2.com/images/5/54/Mini_Sabetha.png',
      name: 'Sabetha the Saboteur',
      api_name: 'sabetha'
    }
  },
  'Salvation Pass': {
    1: {
      ids: [16123],
      icon: 'https://wiki.guildwars2.com/images/e/ed/Mini_Slubling.png',
      name: 'Slothasor',
      api_name: 'slothasor'
    },
    2: {
      ids: [16088],
      icon: 'https://i.imgur.com/UZZQUdf.png',
      name: 'Bandit Trio',
      api_name: 'bandit_trio'
    },
    3: {
      ids: [16115],
      icon:
        'https://wiki.guildwars2.com/images/5/5d/Mini_Matthias_Abomination.png',
      name: 'Matthias Gabrel',
      api_name: 'matthias'
    }
  },
  'Stronghold of the Faithfull': {
    1: {
      ids: [16253],
      icon:
        'https://wiki.guildwars2.com/images/b/b5/Mini_McLeod_the_Silent.png',
      name: 'Escort',
      api_name: 'escort'
    },
    2: {
      ids: [16235],
      icon: 'https://wiki.guildwars2.com/images/e/ea/Mini_Keep_Construct.png',
      name: 'Keep Construct',
      api_name: 'keep_construct'
    },
    3: {
      ids: [16246],
      icon: 'https://wiki.guildwars2.com/images/4/4b/Mini_Xera.png',
      name: 'Xera',
      api_name: 'xera'
    }
  },
  'Bastion of the Penitent': {
    1: {
      ids: [17194],
      icon:
        'https://wiki.guildwars2.com/images/b/b8/Mini_Cairn_the_Indomitable.png',
      name: 'Cairn the Indomitable',
      api_name: 'cairn'
    },
    2: {
      ids: [17172],
      icon: 'https://wiki.guildwars2.com/images/c/c8/Mini_Mursaat_Overseer.png',
      name: 'Mursaat Overseer',
      api_name: 'mursaat_overseer'
    },
    3: {
      ids: [17188],
      icon: 'https://wiki.guildwars2.com/images/f/f0/Mini_Samarog.png',
      name: 'Samarog',
      api_name: 'samarog'
    },
    4: {
      ids: [17154],
      icon:
        'https://wiki.guildwars2.com/images/e/e0/Mini_Ragged_White_Mantle_Figurehead.png',
      name: 'Deimos',
      api_name: 'deimos'
    }
  },
  'Hall of Chains': {
    1: {
      ids: [19767],
      icon: 'https://wiki.guildwars2.com/images/d/d4/Mini_Desmina.png',
      name: 'Soulless Horror',
      api_name: 'soulless_horror'
    },
    2: {
      ids: [19828],
      icon:
        'https://wiki.guildwars2.com/images/thumb/7/7b/Gold_River_of_Souls_Trophy.jpg/220px-Gold_River_of_Souls_Trophy.jpg',
      name: 'River of Souls',
      api_name: 'river_of_souls'
    },
    3: {
      ids: [19691],
      icon: 'https://wiki.guildwars2.com/images/3/37/Mini_Broken_King.png',
      name: 'Broken King',
      api_name: 'statues_of_grenth'
    },
    4: {
      ids: [19536],
      icon:
        'https://wiki.guildwars2.com/images/thumb/2/24/Eater_of_Souls_%28Hall_of_Chains%29.jpg/194px-Eater_of_Souls_%28Hall_of_Chains%29.jpg',
      name: 'Eater of Souls',
      api_name: 'statues_of_grenth'
    },
    5: {
      ids: [19651, 19844, 19450],
      icon:
        'https://wiki.guildwars2.com/images/thumb/a/a7/Eye_of_Fate.jpg/188px-Eye_of_Fate.jpg',
      name: 'Eyes 👀',
      api_name: 'statues_of_grenth'
    }
  },
  'Mythwright Gambit': {
    1: {
      ids: [43974],
      icon: 'https://i.imgur.com/eLyIWd2.png',
      name: 'Conjured Amalgamate',
      api_name: 'conjured_amalgamate'
    },
    2: {
      ids: [21105],
      icon: 'https://i.imgur.com/6O5MT7v.png',
      name: 'Twin Largos',
      api_name: 'twin_largos'
    },
    3: {
      ids: [20934],
      icon: 'https://wiki.guildwars2.com/images/f/f2/Mini_Qadim.png',
      name: 'Qadim',
      api_name: 'qadim'
    }
  },
  'The Key of Ahdashim': {
    1: {
      ids: [21964],
      icon: 'https://wiki.guildwars2.com/images/f/fc/Mini_Air_Djinn.png',
      name: 'Sabir',
      api_name: 'sabir'
    },
    2: {
      ids: [22006],
      icon: 'https://wiki.guildwars2.com/images/a/a0/Mini_Earth_Djinn.png',
      name: 'Adina',
      api_name: 'adina'
    },
    3: {
      ids: [22000],
      icon:
        'https://wiki.guildwars2.com/images/8/8b/Mini_Qadim_the_Peerless.png',
      name: 'Qadim the Peerless',
      api_name: 'qadim_the_peerless'
    }
  },
  Other: {
    1: {
      ids: [17021],
      icon:
        'http://dulfy.net/wp-content/uploads/2016/11/gw2-nightmare-fractal-teaser.jpg',
      name: 'MAMA'
    },
    2: {
      ids: [17028],
      icon: 'https://wiki.guildwars2.com/images/d/dc/Siax_the_Corrupted.jpg',
      name: 'Siax the Corrupted'
    },
    3: {
      ids: [16948],
      icon: 'https://wiki.guildwars2.com/images/5/57/Champion_Toxic_Hybrid.jpg',
      name: 'Ensolyss'
    },
    4: {
      ids: [17632],
      icon:
        'https://wiki.guildwars2.com/images/c/c1/Skorvald_the_Shattered.jpg',
      name: 'Skorvald'
    },
    5: {
      ids: [17949],
      icon: 'https://wiki.guildwars2.com/images/b/b4/Artsariiv.jpg',
      name: 'Artsariiv'
    },
    6: {
      ids: [17759],
      icon: 'https://wiki.guildwars2.com/images/5/5f/Arkk.jpg',
      name: 'Arkk'
    },
    7: {
      ids: [16199],
      icon: 'https://wiki.guildwars2.com/images/8/8f/Mini_Professor_Mew.png',
      name: 'Standard Kitty Golem'
    },
    8: {
      ids: [19645],
      icon: 'https://wiki.guildwars2.com/images/c/cb/Mini_Mister_Mittens.png',
      name: 'Medium Kitty Golem'
    },
    9: {
      ids: [19676],
      icon:
        'https://wiki.guildwars2.com/images/4/47/Mini_Baron_von_Scrufflebutt.png',
      name: 'Large Kitty Golem'
    },
    10: {
      ids: [16202],
      icon: 'https://wiki.guildwars2.com/images/3/33/Mini_Snuggles.png',
      name: 'Massive Kitty Golem'
    },
    11: {
      ids: [16177],
      icon: 'https://wiki.guildwars2.com/images/c/cb/Mini_Mister_Mittens.png',
      name: 'Average Kitty Golem'
    },
    12: {
      ids: [16198],
      icon: 'https://wiki.guildwars2.com/images/3/33/Mini_Snuggles.png',
      name: 'Vital Kitty Golem'
    }
  }
}

export default bosses
