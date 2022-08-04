const commands = {
  main: [
    {
      name: 'account',
      desc: 'General information about your account',
      permissions: [
        'account'
      ]
    },
    {
      name: 'achievement',
      desc: 'Display achievement information and your completion status',
      permissions: [
        'progression'
      ],
      args: [
        {
          name: 'achievement_name',
          desc: 'Name of achievement. Example: Playing Chicken',
          required: true
        }
      ]
    },
    {
      name: 'bosses',
      desc: 'Shows your raid progression for the week',
      permissions: [
        'progression'
      ]
    },
    {
      name: 'cats',
      desc: 'Displays the cats you haven\'t unlocked yet',
      permissions: [
        'progression'
      ]
    },
    {
      name: 'character',
      desc: 'Character related commands',
      subcommands: [
        {
          name: 'birthdays',
          desc: 'Lists days until the next birthday for each of your characters',
          permissions: [
            'characters'
          ]
        },
        {
          name: 'crafting',
          desc: 'Displays your characters and their crafting level',
          permissions: [
            'characters'
          ]
        },
        {
          name: 'fashion',
          desc: 'Displays the fashion wars of given character',
          permissions: [
            'characters',
            'builds'
          ],
          args: [
            {
              name: 'character',
              desc: 'Name of character to inspect',
              required: true
            }
          ]
        },
        {
          name: 'gear',
          desc: 'Displays the gear, attributes and build of given character',
          permissions: [
            'characters',
            'builds'
          ],
          args: [
            {
              name: 'character',
              desc: 'Name of character to inspect',
              required: true
            }
          ]
        },
        {
          name: 'info',
          desc: 'Info about the given character',
          permissions: [
            'characters',
            'builds'
          ],
          args: [
            {
              name: 'character',
              desc: 'Name of character to inspect',
              required: true
            }
          ]
        },
        {
          name: 'list',
          desc: 'Lists all your characters',
          permissions: [
            'characters',
            'builds'
          ],
          args: [
            {
              name: 'info',
              desc: 'Select additional information to display, and to sort by',
              options: [
                'Age',
                'Profession',
                'Time played'
              ]
            }
          ]
        },
        {
          name: 'togglepublic',
          desc: 'Toggle your character\'s (or all of them) status to public',
          permissions: [
            'characters',
            'builds'
          ],
          args: [
            {
              name: 'character_or_all',
              desc: 'Name of character to toggle public status, or type \'all\' keyword'
            }
          ]
        }
      ]
    },
    {
      name: 'chatcode',
      desc: 'Generate a chat code',
      args: [
        {
          name: 'item',
          desc: 'Base item name for the chat code. Example: Banana',
          required: true
        },
        {
          name: 'quantity',
          desc: 'Item quantity, ranging from 1 to 255',
          required: true
        },
        {
          name: 'skin',
          desc: 'Skin name to apply on the item'
        },
        {
          name: 'upgrade_1',
          desc: 'Name of the upgrade in the first slot. Example: Mark of Penetration'
        },
        {
          name: 'upgrade_2',
          desc: 'Name of the upgrade in the second slot. Example: Superior Rune of Generosity'
        }
      ]
    },
    {
      name: 'daily',
      desc: 'Commands showing daily things',
      args: [
        {
          name: 'category',
          desc: 'Daily type',
          required: true,
          options: [
            'All dailies',
            'Fractals',
            'PSNA - Pact Supply Network Agent',
            'PvE',
            'PvP',
            'Strikes',
            'WvW'
          ]
        },
        {
          name: 'tomorrow',
          desc: 'Show tomorrow\'s dailies instead',
          options: [
            'False',
            'True'
          ]
        }
      ]
    },
    {
      name: 'et',
      desc: 'Event timer',
      args: [
        {
          name: 'category',
          desc: 'Event timer category',
          required: true,
          options: [
            'Day/night cycle',
            'EoD - End of Dragons',
            'HoT - Heart of Thorns',
            'IBS - The Icebrood Saga',
            'PoF - Path of Fire',
            'World bosses'
          ]
        }
      ]
    },
    {
      name: 'evtc',
      desc: 'Process an EVTC combat log in an attachment',
      args: [
        {
          name: 'file',
          desc: 'EVTC file to process. Accepted formats: .evtc, .zip, .zevtc',
          required: true
        }
      ]
    },
    {
      name: 'evtc_automation',
      desc: 'Commands related to automatic processing of arcdps log files',
      subcommands: [
        {
          name: 'api_key',
          desc: 'Generate an API key for third-party apps that automatically upload EVTC logs',
          args: [
            {
              name: 'operation',
              desc: 'The operation to perform',
              required: true,
              options: [
                'Delete your API key',
                'Generate or regenerate your API key',
                'View your API key'
              ]
            }
          ]
        },
        {
          name: 'autopost add_destination',
          desc: 'Add this channel as a personal destination to autopost EVTC logs to'
        },
        {
          name: 'autopost remove_destinations',
          desc: 'Remove chosen EVTC autoupload destinations'
        },
        {
          name: 'channel',
          desc: 'Sets a channel to automatically used to process EVTC logs posted within',
          args: [
            {
              name: 'enabled',
              desc: 'Disable or enable this feature on the specified channel',
              required: true,
              options: [
                'False',
                'True'
              ]
            },
            {
              name: 'channel',
              desc: 'The target channel',
              required: true
            },
            {
              name: 'autodelete',
              desc: 'Delete original message after processing the EVTC log',
              required: true,
              options: [
                'False',
                'True'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'gem',
      desc: 'Commands related to gems',
      subcommands: [
        {
          name: 'price',
          desc: 'Lists current gold/gem exchange prices',
          args: [
            {
              name: 'quantity',
              desc: 'The number of gems to evaluate (default is 400)'
            }
          ]
        },
        {
          name: 'track',
          desc: 'Recive a notification when cost of 400 gems drops below given cost',
          args: [
            {
              name: 'gold',
              desc: 'Recive a notification when price of 400 gems drops below this amount. Set to 0 to disable',
              required: true
            }
          ]
        }
      ]
    },
    {
      name: 'guild',
      desc: 'Guild related commands',
      permissions: [
        'guilds'
      ],
      subcommands: [
        {
          name: 'info',
          desc: 'General guild stats',
          args: [
            {
              name: 'guild',
              desc: 'Guild name',
              required: true
            }
          ]
        },
        {
          name: 'log',
          desc: 'Get log of last 20 entries of stash/treasury/members',
          args: [
            {
              name: 'guild',
              desc: 'Guild name',
              required: true
            },
            {
              name: 'log_type',
              desc: 'Select the type of log to inspect',
              required: true,
              options: [
                'Members',
                'Stash',
                'Treasury'
              ]
            }
          ]
        },
        {
          name: 'members',
          desc: 'Shows a list of members and their ranks',
          args: [
            {
              name: 'guild',
              desc: 'Guild name',
              required: true
            }
          ]
        },
        {
          name: 'treasury',
          desc: 'Get list of current and needed items for upgrades',
          args: [
            {
              name: 'guild',
              desc: 'Guild name',
              required: true
            }
          ]
        }
      ]
    },
    {
      name: 'guildsync',
      desc: 'Guild synchronization related commands: sync your in-game guild ranks with Discord roles',
      subcommands: [
        {
          name: 'add',
          desc: 'Sync your in-game guild ranks with Discord. Add a guild',
          permissions: [
            'guilds'
          ],
          args: [
            {
              name: 'guild_name',
              desc: 'The guild name of the guild you wish to sync with',
              required: true
            },
            {
              name: 'sync_type',
              desc: 'Select how you want the synced roles to behave',
              required: true,
              options: [
                'Give every member of your guild a single, guild specific role',
                'Sync both the ranks, and give every member a guild specific role',
                'Sync only the in-game ranks'
              ]
            },
            {
              name: 'authentication_method',
              desc: 'Select how you want to authenticate the leadership of the guild',
              required: true,
              options: [
                'Enter a key. If selected, fill out the api_key argument',
                'Have the bot prompt another user for authorization. If selected, fill out user_to_prompt argument',
                'Use your own currently active API key. You need to be the guild leader'
              ]
            },
            {
              name: 'api_key',
              desc: 'The API key to use for authorization. Use only if you\'ve selected it as the authentication_method'
            },
            {
              name: 'user_to_prompt',
              desc: 'The user to prompt for authorization. Use only if you\'ve selected it as the authentication_method'
            }
          ]
        },
        {
          name: 'diagnose',
          desc: 'Diagnose common issues with your guildsync configuration',
          args: [
            {
              name: 'sync',
              desc: 'The guildsync to debug',
              required: true
            },
            {
              name: 'user',
              desc: 'The user to test the config of'
            }
          ]
        },
        {
          name: 'edit',
          desc: 'Change settings and delete guildsyncs',
          args: [
            {
              name: 'sync',
              desc: 'The guildsync to modify',
              required: true
            },
            {
              name: 'operation',
              desc: 'Select the operation',
              required: true,
              options: [
                'Change API key. Make sure to fill out the api_key optional argument',
                'Delete a guildsync',
                'Toggle guild role. If disabled, this will delete the roles created by the bot',
                'Toggle syncing ranks. If disabled, this will delete the roles created by the bot'
              ]
            },
            {
              name: 'api_key',
              desc: 'The API key to use for authorization. Use only if you\'ve selected the \'Change API key\' operation'
            }
          ]
        },
        {
          name: 'purge',
          desc: 'Toggle kicking of users that are not in any of the synced guilds',
          permissions: [
            'guilds'
          ],
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable purge. You\'ll be asked to confirm your selection afterwards',
              required: true,
              options: [
                'False',
                'True'
              ]
            }
          ]
        },
        {
          name: 'toggle',
          desc: 'Global toggle for guildsync - does not wipe the settings',
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable guildsync for this server',
              required: true,
              options: [
                'False',
                'True'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'key',
      desc: 'Commands related to API keys',
      subcommands: [
        {
          name: 'add',
          desc: 'Adds a key and associates it with your Discord account',
          args: [
            {
              name: 'token',
              desc: 'Generate at https://account.arena.net under Applications tab',
              required: true
            }
          ]
        },
        {
          name: 'info',
          desc: 'Information about your API keys'
        },
        {
          name: 'remove',
          desc: 'Remove selected keys from the bot',
          args: [
            {
              name: 'token',
              desc: 'Key to remove',
              required: true
            }
          ]
        },
        {
          name: 'switch',
          desc: 'Swaps between multiple stored API keys',
          args: [
            {
              name: 'token',
              desc: 'Key to switch to',
              required: true
            }
          ]
        }
      ]
    },
    {
      name: 'kp',
      desc: 'Shows completed raids, fractals, and strikes',
      permissions: [
        'progression'
      ]
    },
    {
      name: 'li',
      desc: 'Shows how many Legendary Insights and Divinations you have earned',
      permissions: [
        'characters',
        'inventories'
      ]
    },
    {
      name: 'nodes',
      desc: 'Displays the home instance nodes you have not yet unlocked',
      permissions: [
        'progression'
      ]
    },
    {
      name: 'pvp',
      desc: 'Commands related to PvP',
      permissions: [
        'pvp'
      ],
      subcommands: [
        {
          name: 'professions',
          desc: 'Information about your PvP profession stats',
          args: [
            {
              name: 'profession',
              desc: 'Select a profession to view specific statistics',
              options: [
                'Elementalist',
                'Engineer',
                'Guardian',
                'Mesmer',
                'Necromancer',
                'Ranger',
                'Revenant',
                'Thief',
                'Warrior'
              ]
            }
          ]
        },
        {
          name: 'stats',
          desc: 'Information about your general PvP stats'
        }
      ]
    },
    {
      name: 'sab',
      desc: 'Commands related to Super Adventure Box',
      permissions: [
        'characters',
        'progression'
      ],
      subcommands: [
        {
          name: 'unlocks',
          desc: 'Displays missing SAB unlocks for specified character',
          args: [
            {
              name: 'character',
              desc: 'Character name',
              required: true
            }
          ]
        },
        {
          name: 'zones',
          desc: 'Displays missing SAB zones for specified character',
          args: [
            {
              name: 'character',
              desc: 'Character name',
              required: true
            }
          ]
        }
      ]
    },
    {
      name: 'search',
      desc: 'Find items on your account',
      permissions: [
        'characters',
        'inventories'
      ],
      args: [
        {
          name: 'item',
          desc: 'Specify the name of an item to search for',
          required: true
        }
      ]
    },
    {
      name: 'server',
      desc: 'Commands for server management',
      subcommands: [
        {
          name: 'api_key_role',
          desc: 'A feature to automatically add a role to members that have added an API key to the bot',
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable giving members with an API key a role',
              required: true,
              options: [
                'False',
                'True'
              ]
            },
            {
              name: 'role',
              desc: 'The role that will be given to members with an API key added'
            }
          ]
        },
        {
          name: 'default_guild',
          desc: 'Set your default guild for guild commands on this server',
          permissions: [
            'guilds'
          ],
          args: [
            {
              name: 'guild',
              desc: 'Guild name',
              required: true
            }
          ]
        },
        {
          name: 'force_account_names',
          desc: 'Automatically change all server member nicknames to in-game names',
          permissions: [
            'account'
          ],
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable automatically changing user nicknames to match in-game account name',
              required: true,
              options: [
                'False',
                'True'
              ]
            }
          ]
        },
        {
          name: 'preview_chat_links',
          desc: 'Enable or disable automatic GW2 chat link preview',
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable automatic chat link preview',
              required: true,
              options: [
                'False',
                'True'
              ]
            }
          ]
        },
        {
          name: 'sync_now',
          desc: 'Force a sync for any Guildsyncs and Worldsyncs you have'
        }
      ]
    },
    {
      name: 'skill',
      desc: 'Information about a given skill',
      args: [
        {
          name: 'skill',
          desc: 'The skill name to search for. Example: Meteor Shower',
          required: true
        }
      ]
    },
    {
      name: 'tp',
      desc: 'Commands related to Trading Post',
      subcommands: [
        {
          name: 'buying',
          desc: 'Show current buying transactions',
          permissions: [
            'tradingpost'
          ]
        },
        {
          name: 'delivery',
          desc: 'Show your items awaiting in delivery box',
          permissions: [
            'tradingpost'
          ]
        },
        {
          name: 'price',
          desc: 'Checks price of an item',
          args: [
            {
              name: 'item',
              desc: 'Specify the name of an item to check the price of',
              required: true
            }
          ]
        },
        {
          name: 'selling',
          desc: 'Show current selling transactions',
          permissions: [
            'tradingpost'
          ]
        }
      ]
    },
    {
      name: 'trait',
      desc: 'Information about a given trait',
      args: [
        {
          name: 'trait',
          desc: 'The trait name to search for. Example: Fresh Air',
          required: true
        }
      ]
    },
    {
      name: 'wallet',
      desc: 'Info about all of your currencies',
      permissions: [
        'wallet'
      ],
      args: [
        {
          name: 'currency',
          desc: 'The specific currency to search for. Leave blank for general overview'
        }
      ]
    },
    {
      name: 'wiki',
      desc: 'Search the Guild Wars 2 wiki',
      args: [
        {
          name: 'search_text',
          desc: 'The text to search the wiki for. Example: Lion\'s Arch',
          required: true
        },
        {
          name: 'language',
          desc: 'The language of the wiki to search on. Defaults to English',
          options: [
            'En',
            'De',
            'Fr',
            'Es'
          ]
        }
      ]
    },
    {
      name: 'worldsync',
      desc: 'World synchronization related commands: Role management based on in-game account world',
      args: [
        {
          name: 'enabled',
          desc: 'Enable or disable Worldsync',
          required: true,
          options: [
            'False',
            'True'
          ]
        },
        {
          name: 'ally_role',
          desc: 'The role to give to allies of the chosen world'
        },
        {
          name: 'world',
          desc: 'The world name to use for Worldsync'
        },
        {
          name: 'world_role',
          desc: 'The role to give to members of the chosen world'
        }
      ]
    },
    {
      name: 'wvw',
      desc: 'Commands related to WvW',
      subcommands: [
        {
          name: 'info',
          desc: 'Info about a world. Defaults to account\'s world',
          permissions: [
            'account'
          ],
          args: [
            {
              name: 'world',
              desc: 'World name. Leave blank to use your account\'s world'
            }
          ]
        },
        {
          name: 'population_track',
          desc: 'Receive a notification when a specified world is no longer full',
          args: [
            {
              name: 'world',
              desc: 'Specify the name of a World to track the population of, and recieve a notification when the world is no longer full',
              required: true
            }
          ]
        }
      ]
    }
  ],
  notifiers: [
    {
      name: 'reminder',
      desc: 'For setting up automatic personal notifications',
      subcommands: [
        {
          name: 'event',
          desc: 'Make the bot automatically notify you before an event starts',
          args: [
            {
              name: 'event_name',
              desc: 'Event name. Examples: Shadow Behemoth. Gerent Preparation',
              required: true
            },
            {
              name: 'minutes_before_event',
              desc: 'The number of minutes before the event that you\'ll be notified at'
            }
          ]
        },
        {
          name: 'mystic_forger',
          desc: 'Get a personal reminder whenever Daily Mystic Forger becomes active',
          args: [
            {
              name: 'reminder_frequency',
              desc: 'Select when you want to be notified',
              required: true,
              options: [
                'Disable the Mystic Forger reminder',
                'Get a message about Mystic Forger when it becomes active',
                'Get a message about Mystic Forger when it becomes active AND 24 hours before that'
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'notifier',
      desc: 'For setting up automatic server notifications',
      subcommands: [
        {
          name: 'bosses',
          desc: 'Sends the next two bosses every 15 minutes to a channel',
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable boss notifier. If enabling, channel argument must be set',
              required: true,
              options: [
                'False',
                'True'
              ]
            },
            {
              name: 'channel',
              desc: 'The channel to post to'
            },
            {
              name: 'behavior',
              desc: 'Select behavior for posting/editing the message. Defaults to posting a new message',
              options: [
                'Delete the previous day\'s message. Causes an unread notification',
                'Edit the previous day\'s message. No unread notification, but bad for active channels'
              ]
            }
          ]
        },
        {
          name: 'daily',
          desc: 'Send daily achievements to a channel every day',
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable Daily Notifier. If enabling, channel argument must be set',
              required: true,
              options: [
                'False',
                'True'
              ]
            },
            {
              name: 'channel',
              desc: 'The channel to post to'
            },
            {
              name: 'pin_message',
              desc: 'Toggle whether to automatically pin the daily message or not',
              options: [
                'False',
                'True'
              ]
            },
            {
              name: 'behavior',
              desc: 'Select additional behavior for deleting/editing the message. Leave blank for standard behavior',
              options: [
                'Delete the previous day\'s message and post a new message. Causes an unread notification',
                'Edit the previous day\'s message. No unread notification'
              ]
            }
          ]
        },
        {
          name: 'news',
          desc: 'Automatically sends news from guildwars2.com to a specified channel',
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable game news notifier. If enabling, channel argument must be set',
              required: true,
              options: [
                'False',
                'True'
              ]
            },
            {
              name: 'channel',
              desc: 'The channel to post to'
            },
            {
              name: 'mention',
              desc: 'The role to ping when posting the notification'
            }
          ]
        },
        {
          name: 'update',
          desc: 'Send a notification whenever the game is updated',
          args: [
            {
              name: 'enabled',
              desc: 'Enable or disable game update notifier. If enabling, channel argument must be set',
              required: true,
              options: [
                'False',
                'True'
              ]
            },
            {
              name: 'channel',
              desc: 'The channel to post to'
            },
            {
              name: 'mention',
              desc: 'The role to ping when posting the notification'
            }
          ]
        }
      ]
    }
  ],
  meta: [
    {
      name: 'help',
      desc: 'Basic information about the bot'
    },
    {
      name: 'botstatistics',
      desc: 'Bot statistic related commands',
      subcommands: [
        {
          name: 'global',
          desc: 'Total stats of the bot\'s command usage'
        },
        {
          name: 'server',
          desc: 'Command usage statistics of this Discord server'
        },
        {
          name: 'user',
          desc: 'Your own personal bot usage statistics',
          args: [
            {
              name: 'reveal',
              desc: 'Post the response as a publicly visible message. Defaults to False',
              options: [
                'False',
                'True'
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default commands
