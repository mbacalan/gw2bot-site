import Vue from "vue";

export default {
  data() {
    return {
      commandsMainOne: {
        account: {
          name: "account",
          desc: "Information about your account"
        },
        achievementinfo: {
          name: "achievement",
          desc: "Display achievement information and your completion status"
        },
        bosses: {
          name: "bosses",
          desc: "Shows your raid progression for the week"
        },
        cats: {
          name: "cats",
          desc: "Displays cats you haven't collected"
        },
        changelog: {
          name: "changelog",
          desc: "List of recent changes to the bot"
        },
        character: {
          name: "character",
          desc: "Character related commands",
          args: {
            attributes: "Lists attributes of given character",
            birthdays: "Lists days until each of your character's birthdays",
            crafting: "Displays your characters and their crafting level",
            build: "Displays the build of given character",
            gear: "Displays the gear of given character",
            info: "Info about the given character",
            list: "Lists all your characters with extra information",
            pvpbuild: "Displays the build of given character",
            togglepublic: "Toggle your character's status to public",
            wvwbuild: "Displays the build of given character"
          }
        },
        chatcode: {
          name: "chatcode",
          desc: "Generate a chat code"
        },
        daily: {
          name: "daily",
          desc: "Commands showing daily things",
          args: {
            all: "Show today's all dailies",
            fractal: "Show today's all fractal dailies",
            psna: "Show today's Pact Supply Network Agent locations",
            pve: "Show today's PvE dailies",
            pvp: "Show today's PvP dailies",
            wvw: "Show today's WvW dailies"
          }
        },
        dulfy: {
          name: "dulfy",
          desc: "Search dulfy.net"
        },
        et: {
          name: "et",
          desc: "The event timer",
          args: {
            bosses: "Upcoming world bosses",
            day: "Current day/night cycle",
            hot: "Event timer for HoT maps and Dry Top",
            pof: "Event timer for PoF and LS4 maps"
          }
        },
        gem: {
          name: "gem",
          desc: "Commands related to gems",
          args: {
            price: "Lists current gold/gem exchange prices",
            track:
              "Recive a notification when cost of 400 gems drops below the specified cost"
          }
        },
        guild: {
          name: "guild",
          desc: "Guild related commands",
          args: {
            default:
              "Set your preferred guild for guild commands on current Discord Server",
            info: "Information about general guild stats",
            log: "Get log of last 20 entries of stash/treasury/members",
            members: "Get list of all members and their ranks",
            treasury: "Get list of current and needed items for upgrades"
          }
        },
        guildsync: {
          name: "guildsync",
          desc: "Guild synchronization related commands",
          args: {
            clear: "Wipes settings and created roles and turns sync off",
            guildrole:
              "Adds a new role based on the guild tag for channel management",
            now:
              "Force a synchronization, also deletes or creates new ranks as needed",
            setup:
              "Setup process for ingame roster to Discord member list synchronization",
            toggle: "Toggles synchronization on/off - does not wipe settings"
          }
        },
        gw2wiki: {
          name: "gw2wiki",
          desc: "Search the Guild Wars 2 wiki"
        }
      },
      commandsMainTwo: {
        key: {
          name: "key",
          desc: "Commands related to API keys",
          args: {
            add: "Adds your key and associates it with your Discord account",
            info: "Information about your API key",
            remove: "Removes your key from the list",
            switch: "Swaps between multiple stored API keys"
          }
        },
        prefix: {
          name: "prefix",
          desc: "Set bot's prefixes for this server"
        },
        pvp: {
          name: "pvp",
          desc: "Commands related to PvP",
          args: {
            professions: "Information about your PvP profession stats",
            stats: "Information about your general PvP stats"
          }
        },
        sab: {
          name: "sab",
          desc: "Commands related to Super Adventure Box",
          args: {
            unlocks: "Displays missing SAB unlocks for specified character",
            zones: "Displays missing SAB zones for specified character"
          }
        },
        search: {
          name: "search",
          desc: "Search your account for items"
        },
        server: {
          name: "server",
          desc: "Commands for server management",
          args: {
            forceaccountnames:
              "Automatically change nicknames to in-game names",
            timezone: "Change the timezone bot will use in this server"
          }
        },
        skill: {
          name: "skillinfo",
          desc: "Information about a given skill"
        },
        tp: {
          name: "tp",
          desc: "Commands related to Trading Post",
          args: {
            current: "Show current selling/buying transactions",
            delivery: "Show your items awaiting in delivery box",
            price: "Checks price of an item"
          }
        },
        trait: {
          name: "trait",
          desc: "Information about a given trait"
        },
        wallet: {
          name: "wallet",
          desc: "Commands related to wallet",
          args: {
            currencies: "Returns a list of all currencies",
            currency:
              "Info about a currency. See [p]wallet currencies for list",
            maps: "Shows map-specific currencies",
            show: "Shows most important currencies in your wallet",
            tokens: "Shows instance-specific currencies"
          }
        },
        worldSync: {
          name: "worldsync",
          desc: "Role management based on in game account world",
          args: {
            allyrole: "Set the role to be given to those in the linked worlds",
            now: "Run the worldsync now",
            toggle: "Enable automatic world roles",
            world: "Set your home world",
            worldrole: "Set the role to be given to those in the home world"
          }
        },
        wvw: {
          name: "wvw",
          desc: "Commands related to WvW",
          args: {
            info:
              "Info about a world. If none is provided, defaults to account's world",
            worlds: "List all worlds",
            populationtrack:
              "Receive a notification when the world is no longer full"
          }
        },
        li: {
          name: "li",
          desc: "Shows how many Legendary Insights you have"
        },
        help: {
          name: "help",
          desc: "Shows the commands menu"
        }
      },
      commandsNotifiersOne: {
        bossnotifier: {
          name: "bossnotifier",
          desc: "Sends the next two bosses every 15 minutes to a channel",
          args: {
            channel: "Sets the channel to send the bosses to",
            toggle: "Toggles posting upcoming bosses"
          }
        },
        dailynotifier: {
          name: "dailynotifier",
          desc: "Sends a list of dailies to specified channel",
          args: {
            channel: "Sets the channel to send the dailies to",
            toggle: "Toggles posting dailies at server reset",
            autodelete: "Toggles autodeleting last day's daily notification",
            autopin: "Toggles autopinning daily notifications",
            categories:
              "Choose which categories to display on daily notifications"
          }
        }
      },
      commandsNotifiersTwo: {
        updatenotifier: {
          name: "updatenotifier",
          desc: "For setting up notifcations whenever the game updates",
          args: {
            channel: "Sets the channel to send the update announcement",
            mention:
              "Change the type of mention to be included with update notifier",
            toggle: "Toggles sending game update notifications"
          }
        },
        newsfeed: {
          name: "newsfeed",
          desc: "For setting up automatic guildwars2.com news feed",
          args: {
            channel: "Sets the channel to send the news to",
            toggle: "Toggles posting news"
          }
        }
      },
      commandsMetaOne: {
        info: {
          name: "info",
          desc: "Display bot's info"
        },
        ping: {
          name: "ping",
          desc: "Pong!"
        }
      },
      commandsMetaTwo: {
        uptime: {
          name: "uptime",
          desc: "Display bot's uptime"
        },
        stats: {
          name: "stats",
          desc: "Statistic related commands",
          args: {
            server: "Statistics of this server",
            user: "Statistics of the user"
          }
        }
      }
    };
  },
  methods: {
    toggleActive: function(event, command) {
      if (command.active) {
        command.active = false;
      } else if (!command.active) {
        Vue.set(command, "active", true);
      }
    }
  }
};
