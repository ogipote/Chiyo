module.exports = {
  GLOBAL: {
    EVERYONE: "Everyone",
    NOT_SPECIFIED: "Ej angivet",
    PROVIDE_ARGS: "Vänligen ge args",
    ERROR: "Ett fel uppstod",
    NAME: "Namn",
    NOT_AN_OPTION: "`{option}` Är inte ett giltigt alternativ",
    SUCCESS: "Framgång!",
    REASON: "Anledning",
    URL: "URL",
    NONE: "Ingen",
    YES: "Ja",
    NO: "Neh",
  },
  GUILD: {
    NOT_FOUND: "Guild hittades inte",
    LEFT: "Framgångsrikt lämnat guild **${guild_name}**",
    LEVEL_UP_MESSAGES: "Nivå upp meddelanden",
    ANNOUNCE_CHANNEL: "Announce kanal",
    SUGGEST_CHANNEL: "Förslag kanal",
    WELCOME_CHANNEL: "Välkomstkanal",
    LEAVE_CHANNEL: "Lämna kanalen",
    PREFIX: "Prefix",
    IS_VERIFIED: "Ja, den här servern är verifierad",
    IS_PARTNERED: "Ja, den här servern är partner",
    NOT_VERIFIED: "Nej, den här servern är inte verifierad",
    NOT_PARTNERED: "Nej, den här servern är inte partner",
    OWNER: "Guildägare",
    CHANNEL_C: "Kanalantal",
    EMOJI_C: "Emoji räkna",
    ROLES_C: "Roll räkna",
    MEMBER_C: "Medlem räkna",
    REGION: "Område",
    VERIFICATION: "Verifieringsnivå",
    MFA: "MFA-nivå",
    BOOSTS: "Boosts",
    BOOST_LVL: "Boosts level",
    VERIFIED: "Verifierad",
    PARTNERED: "Samarbetar",
  },
  MEMBER: {
    TAG: "Tagg",
    BOT: "Bottar",
    ROLES: "Roller",
    BADGES: "Badges",
    ONLINE: "Uppkopplad",
    OFFLINE: "Off-line",
    MEMBERS: "Medlemmar",
    STATUS: "Status",
    CREATED_ON: "Skapad på",
    JOINED_AT: "Gick med på",
    ID: "Id",
    USERNAME: "Användarnamn",
    NICKNAME: "Smeknamn",
    PROVIDE_MEMBER: "Vänligen ange en medlem",
    NOT_FOUND: "Medlem hittades inte",
    CANNOT_BE_BANNED: "Denna medlem kan inte förbjudas",
    DM_BAN_MESSAGE:
      "Du har blivit **förbjudna** från **{guild_name}**, Anledning: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} förbjöds framgångsrikt från servern. Anledning: **{ban_reason}**. Jag har också skickat en DM som meddelar personen.",
    BOT_DATA: "Bot data does not save, therefore I cannot fetch his data",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Min roll är inte tillräckligt hög än **{role}** roll!",
    MY_ROLE_MUST_BE_HIGHER: "Min roll måste vara högre än **{member}** högsta roll!",
    YOUR_ROLE_MUST_BE_HIGHER: "Din roll måste vara högre än **{role}** roll!",
    PROVIDE_ROLE: "Vänligen ange en roll",
    ALREADY_HAS_ROLE: "Den medlemmen har redan den rollen",
    ADDED_ROLE_TO: "har lagts till **{role}** till {member}",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Klicka här om bilden inte kunde laddas.]",
    CLYDE: "Clyde",
    CUDDLES: "kramar med",
    FEEDED: "matas",
    HUGGED: "kramade",
    PATTED: "klappade",
    KISSED: "kysste",
    POKED: "stötte",
    SLAPPED: "slog",
  },
  ANIMAL: {
    CAT_FACT: "Kattfakta",
    DOG_FACT: "Hundfakta",
    COW: "Ko",
  },
  BOT_OWNER: {
    SHUTDOWN: "Bot stängs av",
    EVAL: "Eval-kommando",
    EVAL_TYPE: "Typ",
    EVAL_INPUT: "Inmatning",
    EVAL_OUTPUT: "Produktion",
    UPDATE_NICKNAME: "Uppdaterad av bot-ägaren",
    UPDATED_NICKNAME: "Smeknamnet har uppdaterats till **{nickname}**",
    PROVIDE_TYPE: "Vänligen ange en typ",
    CANNOT_BL_OWNER: "Det går inte att svartlista ägaren",
    NOT_BLD: "Användaren är inte svartlistad",
    ALREADY_BLD: "{member} är redan svartlistad",
    NOT_OPTION: "**{type}** är inte ett alternativ",
    BLACKLISTED: "svartlistad",
    UNBLACKLISTED: "osvartlistad",
    BLACKLISTED_SUCCESS: "{member} var {type}",
    BLD_STATUS: "Svartlistans status",
  },
  LEVELS: {
    XP: "XP",
    LEVEL: "Nivå",
    LEADERBOARD: "Leaderboard",
    RESET_CONF: "Reset all XP? y/n",
    RESET_SUCCESS: "Återställ allas xp ",
    RESET_CANCEL: "resetxp avbröts",
    PROVIDE_AMOUNT: "Vänligen ange ett belopp",
    PROVIDE_VALID_NR: "Ange ett giltigt nummer",
    GIVE_XP_SUCCESS: "SFramgångsrikt gav **{member}** **{amount}**XP",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Du måste vara i en röstkanal",
    NO_QUEUE: "Det finns inga låtar för närvarande",
    QUEUE_CLEARED: "Kön rensades",
    QUEUE: "Musik kö",
    BETWEEN_0_100: "Volymen måste vara mellan 0 och 100",
    VOL_SUCCESS: "Ställ in volymen till {vol}%",
    PLAYING: "Spelar",
    PAUSED: "Paused",
    DURATION: "Varaktighet",
    PROVIDE_SEARCH: "Ange en sökfråga",
    ADDED_TO_QUEUE: "Sång har lagts till i kön | {songs} låtar i kö",
    ADDED_PL_TO_QUEUE: "Playlist: {name} was added to queue ({length} songs)",
    NOW_PLAYING: "Nu spelas:",
    REQUESTED_BY: "Efterfrågad av",
    NO_PERMS: "Jag har inte rätt behörighet för den röstkanalen!",
    NO_RESULTS: "Inga låtar hittades",
    JOIN_ERROR: "There was an error joining the voice channel, make sure it's not full!",
    LIVE_NOT_SUPPORTED: "Live videos are not supported",
    SUC_REM_FILTER: "Successfully removed {filter}",
    SUC_APPLIED_FILTER: "Successfully applied {filter}",
    FILTER_NOT_FOUND: "That filter was not found",
    FILTER_ALREADY_ENABLED: "Filter `{filter}` is already enabled",
    FILTER_NOT_ENABLED: "Filter `{filter}` is not enabled?",
    NOT_VALID_OPTION: "{option} Is not a valid option `set`, `remove`",
    NO_LIRYCS: "No lyrics found for {songTitle}.",
    NOW: "Now", //🎵 lang.MUSIC.NOW ${playing ? lang.MUSIC.PLAYING : lang.MUSIC.PAUSED}
  },
  ECONOMY: {
    MONEY: "Pengar",
    BANK: "Bank",
    BALANCE: "Balans",
    DAILY_ERROR: "Du har redan samlat in ditt dagliga",
    WEEKLY_ERROR: "Du har redan samlat in din veckovisa",
    DAILY_SUCCESS: "Du samlade ditt dagliga **{amount}** mynt",
    WEEKLY_SUCCESS: "Du har samlat in din veckovis **{amount}** mynt",
    STORE_EMPTY:
      "Butiken för denna server är tom! Be en moderator lägga till artiklar i butiken med `{prefix}store add <Artikel>`",
    PROVIDE_ITEM_TO_BUY: "Vänligen ange en artikel att köpa",
    NOT_ENOUGH_MONEY: "Du har inte så mycket pengar",
    BUY_SUCCESS: "Framgångsrikt köpt **{item}** betalas **{price}**",
    NOT_FOUND_STORE:
      "**{query}** hittades inte i butiken, använd `{prefix}store` för att se alla artiklar i butiken",
    ALREADY_OWN_ITEM: "Du äger redan det här föremålet",
    PROVIDE_VALID_AMOUNT: "Ange ett giltigt numeriskt belopp",
    DEPOSITED_ALL: "Har deponerat alla dina pengar!",
    DEPOSITED_AMOUNT: "Har deponerats framgångsrikt **{amount} mynt**",
    WITHDRAW_ALL: "Lyckades tillbaka alla dina pengar!",
    WITHDRAW_AMOUNT: "Sframgångsrikt återkallad **{amount} mynt**",
    PROFILE: "Profil",
    INV_EMPTY: "Användarens inventering är tom",
    INVENTORY: "Lager",
    INV_ITEMS: "Lagerartiklar",
    VIEW_INVENTORY: "Använda `{prefix}inventory <user>` för att se deras lagervaror.",
    MONEY_LEADERBOARD: "Topplista för pengar",
    TOTAL_BALANCE: "Total balans",
    BOTH_COUNTED: "Bank och pengar räknades båda",
    DICE_LANDED: "Du landade på: {roll}",
    DICE_WON: "grattis! Du vann ett pris på **{price}mynt**",
    DICE_LOST: "Du måste landa en **6** för att få ett pris på **{price}mynt**",
    RECENTLY_WORKED: "Du har redan arbetat nyligen, {time} återstående",
    WORKED: "{member} arbetat som en **{job_name}** och tjänat **{amount}**!",
    CANNOT_PAY_SELF: "Du kan inte betala själv",
    PAY_SUCCESS: "Framgångsrikt gav **{member}** **{amount}mynt**",
    CANNOT_ROB_SELF: "Du kan inte råna dig själv!",
    BETWEEN_1_1000: "Beloppet måste vara mellan 1 och 1000",
    MEMBER_NO_MONEY: "Användaren har inga pengar, därför kan du inte råna den här användaren.",
    ROB_SUCCESS: "Rånat framgångsrikt **{amount}mynt** från **{member}**",
    STORE: "butiken",
    MANAGE_STORE_PERMS: "Du har inte rätt behörighet att hantera butiken! (Hantera server)",
    PROVIDE_VALID_ITEM: "Vänligen ange ett giltigt objekt till add/remove!",
    PRICE: "Price",
    ALREADY_EXISTS: "**{item}** finns redan i butiken!",
    PROVIDE_PRICE: "Ange ett pris för artikeln!",
    MUST_BE_NUMBER: "Priset måste vara ett nummer!",
    ADDED_TO_STORE: "{item} lades till i affären!",
    NOT_IN_STORE: "**{item}** finns inte i butiken!",
    REMOVED_FROM_STORE: "{item} togs bort från affären!",
    WON_SLOTS: "Du vann och fick {amount} mynt",
    LOST_SLOTS: "Du förlorade!",
    MAX_BET: "max bet amount is 500",
    ADDED_MONEY: "Successfully added {amount} to user balance",
    MIN_BET: "Minimum bet of 1 is required",
    MIN_AMOUNT: "Amount must be above 0",
    RESET_CONF: "Reset all balance? y/n",
    RESET_SUCCESS: "Successfully reset everyone's balance",
    RESET_CANCEL: "reset-economy was canceled",
  },
  GAMES: {
    BETS_ON: "{member_1} satsar på {member_2}",
    LOST_BET: "{member_1} satsar på {member_2}!\n {member_1} vann inte vadet",
    WON_BET: "{member_1} satsar på {member_2} och {member_1} vann inte vadet",
    CALC: "Kalkylator",
    INVALID_CALC: "Ogiltig beräkning",
    COMPLIMENT: "Komplimang",
    LANDED_TAILS: "Du landade på Tails",
    LANDED_HEADS: "Du landade på Heads",
    HAPPINESS: "Lycka",
    IQ_TEST: "IQ Test",
    IQ_IS: "Din IQ är: {iq}",
    RPS: "Sten sax påse",
    ROCK: "Sten",
    PAPER: "påse",
    SCISSORS: "sax",
    WYR: "Skulle du hellre?",
    ANSWER: "Svar",
    QUESTION: "Fråga",
    YOU_WON: "You won 50coins!",
    BOT_WON: "The bot has won!",
    BOTH_WON: "It's a tie",
    OPPONENTS_CHOICE: "Opponents choice",
    YOUR_CHOICE: "Your choice",
    WINNER: "Winner",
    INVALID_INPUT: "Input must be 1 of the following:",
  },
  UTIL: {
    AVATAR: "Avatar",
    NOT_AFK: "Du är inte afk längre",
    AFK: "Du är nu afk",
    BMI_WEIGHT: "Vikt",
    BMI_HEIGHT: "Höjd",
    BMI: "BMI",
    BMI_CM: "Ange din höjd i centimeter",
    BMI_KG: "Ange din vikt i kg",
    SUPPORT_SERVER: "Support server",
    BUG_REPORT: "{member} har rapporterat ett fel",
    BUG_REPORTED: "Felrapporten skickades!",
    CHANNEL_TOPIC: "Kanalämne",
    TEXT_CHANNEL: "Textkanal",
    VOICE_CHANNEL: "Röstkanal",
    TEXT_CHANNELS: "Textkanaler" /* plural! */,
    VOICE_CHANNELS: "Röstkanaler" /* plural! */,
    NO_DEF_FOUND: "Ingen definition hittades för {word}",
    DEF_FOR_WORD: "Definition för {word}",
    CATEGORY: "Kategori",
    DEFINITION: "Definition",
    DEPENDENCIES: "Beroenden",
    ANIMATED: "Animerad",
    NON_ANIMATED: "inte Animerad",
    NEW_FEEDBACK: "Ny Respons",
    FEEDBACK_SEND: "Skicka feedback framgångsrikt!",
    GH_NOT_FOUND: "GitHub-kontot hittades inte",
    GH_FOLLOWING: "Följer",
    GH_FOLLOWERS: "Följare",
    GH_WEBSITE: "Webside",
    GH_LOCATION: "Plats",
    GH_BIO: "Bio",
    GH_PROVIDE_USERNAME: "Vänligen ange ett användarnamn!",
    SEARCHING: "Söker",
    PROVIDE_EXT: "Vänligen ange en förlängning, e.g.: `ts`, `js`, `html`, ...",
    PROVIDE_CODE: "Vänligen ange kod",
    NO_IMG_FOUND: "Inga bilder hittades",
    PROVIDE_M_S: "Ange ett namn på en film eller serie",
    DB_RATINGS: "Betyg",
    DB_COUNTRY: "Land",
    DB_GENRES: "Genrer",
    DB_AWARDS: "Utmärkelser",
    DB_LANGS: "språk",
    DB_RELEASED: "Släppte",
    DB_NOT_FOUND: "Ingen film hittades med {search}",
    TOTAL_MB: "Total",
    HUMANS: "Människor",
    BOTS: "Bots",
    PLAYERS: "Spelare",
    VERSION: "Version",
    PROTOCOL: "Protocol",
    DESCRIPTION: "Beskrivning",
    MC_NOT_FOUND: "Server wasn't found",
    MC_PROVIDE_IP: "Ange en server-IP",
    NPM_SEARCH: "NPM-sökning",
    NPM_TOP_5: "Topp 5 hittade resultat för **{query}**",
    AUTHOR: "Författare",
    VIEW_ON_NPM: "Visa på npm ",
    MAX_PLAYERS: "Max spelare",
    PS_NOT_FOUND: "Ansökan hittades inte",
    DEVELOPER: "Utvecklare",
    SCORE: "Göra",
    CREATED_BY: "Created by {member}",
    MENTIONABLE: "Nämnbar",
    POSITION: "Position (from top)",
    ROLE_NOT_FOUND: "Roll hittades inte",
    ROLES: "Roller",
    NO_GUILD_ICON: "Den här guilden har ingen ikon",
    PROVIDE_EMOJI: "Vänligen ange en emoji",
    ENLARGED_EMOJI: "Förstorad version av {emoji}",
    INVALID_EMOJI: "Ogiltig emoji!",
    PROVIDE_SKIN: "Vänligen skriv hudens namn",
    SKIN_NOT_FOUND: "Spelaren `{search}` hittades inte!",
    SKIN_NAME: "Spelarhud {name}",
    DOWNLOAD_SKIN: "[Ladda ner hud]",
    G_TRANSLATE: "Google översätt",
    NEW_SUGGESTION: "Nytt förslag",
    NO_SUGG_CHANNEL:
      "Din server har ingen standardförslagskanal!  N Använd `set suggest-channel <channel mention>` för att ställa in standardkanalen.",
    UPTIME: "{member} har varit på för {time}",
    WEATHER: "Väder",
    PROVIDE_COUNTRY: "Vänligen ange en stad / ett land",
    C_NOT_FOUND: "Stad: **{query}** hittades inte!",
    MAIN: "Main",
    CURRENT: "Nuvarande",
    CURRENT_TEMP: "Aktuell temp ",
    FEELS_LIKE: "Känns som",
    WIND_SPEED: "Wind speed",
    WIND_DEGREES: "Vind grader",
    COUNTRY: "Land",
    NO_W_FOUND: "inga resultat hittades",
    DOC_NOT_FOUND: "Det hittades inte i dokumenten",
    MAINTAINERS: "Maintainers",
    LAST_MODIFIED: "Last modified",
  },
  BOT: {
    GUILDS: "Guilds",
    CHANNELS: "Kanaler",
    USERS: "Användare",
    COMMAND_COUNT: "Kommandoantal",
    VC_CONNS: "Röstanslutningar",
    INFO_2: "Botinformation",
    INFO: "Botinformation",
    SYSTEM_INFO: "System information",
    RAM_USAGE: "RAM-användning",
    UPTIME: "Upptid",
    DJS_V: "Discord.js version",
    NODE_V: "NodeJS version",
    REPO: "Repository",
    DASHBOARD: "Dashboard",
    DEVELOPER: "Developer",
    CONTRIBUTORS: "Contributors",
    INVITE_BOT: "Invite bot",
    USED_SINCE_UP: "Used since up",
    TOTAL_USED_CMDS: "Total used",
    LATENCY: "Latency",
  },
  CONFIG: {
    OPTION_CMD_WORK: "{option} måste tillhandahållas för att detta kommando ska fungera.",
  },
  HELP: {
    CAT_NOT_EXIST: "Den kategorin finns inte",
    CMD_NOT_FOUND: "Command or alias hittades inte",
    FULL_CMD_LIST: "View full detail command list",
    CLICK_ME: "Click me",
    COMMANDS: "Commands",
    COOLDOWN: "Kyla ner",
    ALIASES: "Alias",
    USAGE: "Användande",
    COMMAND: "Command",
    OPTIONS: "Options",
    GUILD_PREFIX: "Server prefix",
    CMD_DESC:
      "använda sig av `{prefix}help <command namn | alias>` för att se mer info om en command\n Mer information finns på `botinfo` command",
    OWNER_ONLY: "bara ägaren får se detta!",
    NSFW_ONLY: "För att visa nsfw-kommandon, kolla in en nsfw-kanal!",
    CUSTOM_CMD: "This is a custom command, therefore I cannot show more info",
    BOT_PERMS: "Bot Permissions",
    MEMBER_PERMS: "Member Permissions",
    CATEGORIES: {
      admin: "Administration commands",
      animal: "Djur Commands",
      botowner: "Botägare Commands",
      nsfw: "NSFW Commands",
      hentainsfw: "Hentai Commands",
      games: "Spel Commands",
      image: "Bild Commands",
      music: "musik Commands",
      util: "Util Commands",
      economy: "Ekonomi Commands",
      levels: "Nivåer Commands",
      exempt: "Undantagna kommandon (kommandon som inte kan inaktiveras)",
      disabled: "Disabled commands (this guild only)",
      giveaway: "Giveaway commands",
      reminder: "Reminder commands",
      reactions: "Reaction role commands",
      custom: "Custom commands",
      ticket: "Ticket commands",
    },
  },
  POKEMON: {
    SPECIES: "Arter",
    ABILITIES: "Förmågor",
    HEIGHT: "Höjd",
    WEIGHT: "Vikt",
    EXPERIENCE: "Erfarenhet",
    GENDER: "Kön",
    EGG_GROUPS: "Ägggrupper",
    FAMILY: "Familj",
    EVO_STAGE: "Evolution scenen",
    EVO_LINE: "Evolution linje",
    STATS: "Statistik",
    HP: "HP",
    ATTACK: "Ge sig på",
    DEFENSE: "Försvar",
    SP_ATK: "SP ATK",
    SP_DEF: "SP DEF",
    SPEED: "Fart",
    TOTAL: "Total",
    PROVIDE_NAME: "Ange ett pokemonnamn!",
    NOT_FOUND: "Ingen pokemon hittades med {query}. Använd rätt stavning och försök igen senare.",
  },
  REACTIONS: {
    NO_ROLE: "Please provide a valid role",
    CHANNEL_NOT_FOUND: "The channel with id `{channelId}` was not found",
    TITLE: "Reaction Role",
    DESC: "Reactions:",
    SUCCESS: "Successfully send message with reactions",
    NOT_FOUND: "Reaction was not found by that messageId",
    DELETE_SUCCESS: "Successfully deleted reaction",
    FOUND_NO_MSG:
      "Reaction was found but the message was not, reaction was deleted from the database",
    ROLES:
      "Please send your roles by id below, separate by space. E.G.: 389730847098379087 9876096987980987 7867869876689766",
    EMOJIS:
      "Please send your emojis below. The order will match with the order of the roles. Separate with a space",
    VALID_EMOJI: "You must provide a valid emojis (no custom emojis)!",
  },
  REMINDER: {
    SUCCESS: "Success! I will ping you **in this channel** in {time}",
    REMOVE_SUCCESS: "Successfully removed your reminder",
    NO_REMINDER_SET: "You don't have a reminder set",
    INVALID_DATE: "That is not a valid date",
    NO_ACTIVE_REM: "User doesn't have any active reminders",
    MESSAGE: "Message:",
    TIME: "Time:",
    USER_REMINDERS: "{memberUsername}'s active reminders",
  },
  COVID: {
    CASES: "Cases",
    RECOVERED: "Recovered",
    DEATHS: "Deaths",
    TOTAL: "Total",
    TODAY: "Today",
    CRITICAL: "Critical",
    TESTS: "Tests",
    LAST_UPDATED: "Last updated",
    NOT_FOUND: "Country was not found",
    TOTAL_POP: "Population",
  },
  EASY_GAMES: {
    PROVIDE_MEMBER: "Please provide a member",
    ACCEPT_CHALLENGE: "{user} Do you accept this challange?",
    DOESNT_PLAY: "looks like {user} doesnt wanna play",
    WICH_SIDE: "**{user}, Which Side Do You Pick? Type `End` To Forfeit!**",
    GAME_OVER: "Times up!",
    END: "end",
    INACTIVITY: "game ended due to inactivity!",
    WINNER: "Congrats u have won {winner}",
    DRAW: "Its a draw",
  },
  ADMIN: {
    ADD_CMD_ALREADY_EXISTS: "This command name is already added in guild custom commands.",
    ADD_CMD_USED_BY_BOT: "This command name is already in use by the bot",
    ADD_CMD_ADDED: "Successfully added **{name}** as a custom command to this guild",
    DEL_CMD_NOT_FOUND: "That command was not found",
    DEL_CMD_DELETED: "Successfully deleted the **{cmd}** Command",
    DEL_CMD_NO_COMMANDS: "This guild doesn't have any custom commands",
    BLACKLISTED_PROVIDE_OPTION: "Please provide an option '`add`, `remove`, `get`'",
    BLACKLISTED_ALREADY_EXISTS: "**{item}** already exist in blacklisted words",
    BLACKLISTED_ADDED: "Successfully added **{item}** to blacklisted words",
    BLACKLISTED_NOT_EXISTS: "**{item}** does not exist in blacklisted words",
    BLACKLISTED_REMOVED: "Successfully removed **{item}** from blacklisted words",
    BLACKLISTED_NONE_YET: "There are no blacklisted words yet.",
    BLACKLISTED_NO_WORDS: "This guid does not have any blacklisted words yet",
    CREATED_ROLE_CREATED: "Created Role",
    CREATED_ROLE_ADDED: "Successfully created the `{roleName}` role",
    C_TOPIC_PROVIDE_TOPIC: "Please provide a new topic",
    C_TOPIC_ADDED: "Successfully updated channel topic to {topic}",
    DEAFEN_ALREADY_DEAFENED: "User is not in a voice channel or is already deafened",
    DEAFEN_SUCCESS:
      "{member} was successfully deafenned from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    DEAFEN_SUCCESS_DM: "You've been **Deafenned** from **{guild}**, Reason: **{reason}**",
    DELETE_PROVIDE_AMOUNT: "Amount must be a valid number and between 0 below 100",
    DELETE_DELETED: "Deleted {amount} messages.",
    DELETE_ERROR:
      "An error occurred when deleting the messages, make sure they are not older than 14days",
    KICK_CANNOT_KICK: "That person can't be kicked.",
    KICK_SUCCESS_DM: "You've been **kicked** from **{guild}**, Reason: **{reason}**",
    KICK_SUCCESS:
      "**{tag}** was successfully kicked from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    MUTE_CANNOT_MUTE: "That member cannot be muted",
    MUTE_ALREADY_MUTED: "Member is already muted",
    MUTE_SUCCESS_DM: "You've been **muted** from **{guild}**, Reason: **{reason}**",
    MUTE_SUCCESS:
      "**{tag}** was successfully muted from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    BAN_BANNED_BY: "**Banned By:**",
    NUKE_NUKED: "Channel was successfully nuked",
    NUKE_CANCELED: "Nuke command was canceled",
    NUKE_CONFIRM: "Are you sure you want to nuke this channel? y/n",
    TEXT_OR_VALID_CHANNEL: "Please provide text or a valid channel!",
    DEFAULT_ANNOUNCE_CHANNEL:
      "You can also set a default channel using `set announce-channel <channel mention>`",
    OPTION_DOES_NOT_EXIST: "{option} does not exist",
    PROVIDE_COMMAND_OR_CATEGORY_NAME: "Please provide a command or category name",
    COMMAND_CANNOT_DISABLED: "That command cannot be disabled",
    COMMAND_ALREADY_DISABLED: "That command is already disabled",
    COMMAND_DISABLED: "Successfully **disabled** {commandName}",
    COMMAND_ENABLED: "Successfully **enabled** {commandName}",
    COMMAND_NOT_DISABLED: "That command is not disabled",
    COMMAND_OR_CATEGORY_NOT_FOUND: "Command or category was not found",
    COMMAND_NOT_FOUND: "Command was not found",
    CATEGORY_CANNOT_DISABLED: "That category cannot be disabled!",
    CATEGORY_ALREADY_DISABLED: "That category is already disabled",
    CATEGORY_DISABLED: "Successfully **disabled** {category}",
    CATEGORY_ENABLED: "Successfully **enabled** {category}",
    CATEGORY_NOT_DISABLED: "That category is not disabled",
    DISABLED_CATEGORY: "Disabled category",
    DISABLED_COMMAND: "Disabled command",
    ENABLED_CATEGORY: "Enabled category",
    ENABLED_COMMAND: "Enabled command",
    PROVIDE_VALID_OPTION: "Please provide an valid option (`add`, `remove`)",
    PROVIDE_CHANNEL: "Please provide a channel",
    CHANNEL_ALREADY_IGNORED: "That channel is already ignored by the bot",
    CHANNEL_NOT_IGNORED: "That channel is not ignored by the bot",
    REMOVE_IGNORED: "Remove {item} from ignored channels",
    NOT_A_OPTION: "`{option}` is not a option",
    CHANNEL_ALREADY_LOCKED: "That channel is already locked!",
    REASON_LOCK_CHANNEL: "Please provide a reason to lock this channel",
    LOCKED_CHANNEL_REASON: "Successfully locked {channel}, Reason: **{lockReason}**",
    NO_PERMISSIONS: "Sorry, You don't have the correct permissions for this command.",
    CURRENT_PREFIX:
      "Current server prefix: `{guildPrefix}`\nUse `{guildPrefix}prefix <prefix>` to set a new prefix",
    UPDATE_PREFIX: "Successfully updated prefix to `{prefix}`",
    MY_ROLE_MUST_BE_HIGHER: "My role must be higher than **{roleName}** role!",
    MY_ROLE_MUST_BE_HIGHER2: "My role must be higher than **{needsRoleTag}** highest role!",
    YOUR_ROLE_NOT_HIGHT: "Your role is not high enough than **{roleName}** role!",
    USER_WAS_NOT_FOUND: "User wasn't found",
    REMOVED_ROLE: "Successfully removed **{roleName}** from {needsRole}",
    REMOVED_ROLE_EVERYONE: "Successfully Removed **{roleName}** from Everyone",
    PROVIDE_VALID_USER: "Please provide a valid user",
    NO_WARNINGS: "There are no warnings",
    REMOVED_ALL_WARNINGS: "Successfully removed all warnings",
    ANNOUNCEMENT: "📢 Announcement 📢",
    PROVIDE_VALID_TIME: "Please provide a valid time: E.G.:",
    PROVIDE_VALID_MEMBER: "Please provide valid a member",
    PROVIDE_VALID_EMOJI: "Please provide a valid emoji",
    PROVIDE_VALID_OPTION: "Please provide an valid option",
    PROVIDE_VALID_CHANNEL_OR_ROLE: "Please provide a valid channel or role!",
    SUG_CHAN_NOW: "Suggest channel is now:",
    AN_CHAN_NOW: "Announcement channel is now:",
    WEL_CHAN_NOW: "Enabled welcome messages. Welcome channel is now:",
    LEAV_CHAN_NOW: "Enabled user leave messages. User Leave channel is now:",
    AUD_CHAN_NOW: "Enabled audit logs. Audit logs channel is now:",
    PERM_NEED: "I need `MANAGE_WEBHOOKS`, permissions for audit-logs",
    WEL_ROLE: "Enabled welcome roles. Welcome role:",
    EN_LVL_UP: "Successfully Enabled level up messages!",
    PROVIDE_LANG: "Please provide a language",
    LANG_NOT_AVAILABLE: "Language is not available. Available languages:",
    LANG_UPDATE: "Successfully updated language to",
    SET_STARBOARD_CHAN: "Successfully set {channel} as starboards channel",
    SET_MEM_COUNT_CHAN: "Successfully set as member count channel",
    UPDATE_WEL_MES: "Successfully updated welcome message (please use dashboard for better experience)",
    GIVE_NAME: "give_name",
    EMOJI_ADDED: "Emoji Added",
    EMOJI_ADDED_NAME: "Emoji Has Been Added! | Name:",
    PREVIEW: "Preview:",
    USE_NORMAL_EMOJI: "You Can Use Normal Emoji Without Adding In Server!",
    MAX_EMOJI: "Maximum emoji count reached for this guild!",
    STICKY_LONG: "Your sticky message can not be longer than 1800 characters!",
    STICKY_READ: "__***:warning: Sticky Message, Read Before Typing! :warning:***__",
    ALREADY_MUTED: "User is already muted!",
    CAN_NOT_MUTED: "User can't be muted",
    TEMP_MUTED: "You've been **temporary muted** from **{guildName}**, Reason: **{reason}**, Time: **{time}**",
    SUCCES_MUTED: "{muteMemberTag} was successfully muted for {time}. Reason: **{reason}**",
    PROVIDE_VALID_USERID: "Please provide a user id",
    SUC_UNBAN: "**{bannedUsername}** was successfully unbanned from the server.",
    NOT_IN_VOICE_OR_NOT_DEAF: "User is not in a voice channel or isn't deafened",
    UNDEAFENED_USER: "You've been **undeafened** from **{guildName}**",
    UNDEAFENED: "**{undeafenUserTag}** was successfully undeafened from the server. I have also send a DM letting the person know.",
    CHAN_NOT_LOCK: "That channel is not locked!",
    SUC_UNLOCK: "{channel} was successfully unlocked",
    NOT_MUTED: "User is not muted!",
    SUC_UNMUTE: "Successfully unmuted **{mutedMemberTag}**",
    CANNOT_RESET: "Cannot reset this! As there is no webhook for logging",
    SUC_RESET: "Succesfully reset logging!",
    STICKY_CLEAR: "Cleared sticky for **{channel}**",
    CAN_NOT_DISC: "User can't be disconnected.",
    NOT_IN_VOICE: "User is not in a voice at the moment.",
    YOU_DISC: "You've been **disconnected** from **{guildName}**, Reason: **{reason}**",
    USER_DISC: "**{kickUserTag}** was successfully disconnected from **{kickUserVoiceChannel}**. Reason: **{reason}**. I have also send a DM letting the person know.",
    USER_NOT_VOICE_OR_MUTED: "User is not in a voice channel or is already muted",
    YOU_MUTED: "You've been **Muted** from **{guildName}**, Reason: **{reason}**",
    USER_MUTED: "**{muteUserTag}** was successfully muted from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    USER_NOT_VOICE_OR_NOT_MUTED: "User is not in a voice channel or isn't muted",
    YOU_UNMUTED: "You've been **Unmuted** from **{guildName}**",
    USER_SUC_UNMUTED: "**{unmuteUserTag}** was successfully unmuted from the server. I have also send a DM letting the person know.",
    USER_NOT_WARN: "User can't be warned",
    USER_WARNED: "{memberTag} was warned with reason: {reason} (Total warnings: {warningsTotal})",
    WARN_NOT_FOUND: "warning wasn't found or {memberTag} doesn't have any warnings",
    WARNING: "Warning:",
    WARNED_ON: "Warned on:",
    MEMBER_WARNS: "{memberTag}'s warnings",
    TOTAL_WARNS: "Total warnings",
    USE_WARNS: "Use `{prefix}warnings <user> <warning number>` to view more info about a specific warning",
  },
  TICKET: {
    CANNOT_DO_ACTION: "This action cannot be done in a non ticket channel",
    CLOSING: "Closing this ticket in 15 seconds, type `cancel` to cancel",
    WILL_NOT_CLOSE: "This ticket will not be closed.",
    ALREADY_ACTIVE_TICKET: "You already have an active ticket",
    TICKET_FOR: "Support ticket for: {member}",
    CREATED: "Successfully created ticket!",
    NOT_ENABLED: "Tickets are not enabled for this guild! An administrator can enable it in {botName}'s settings",
    TICKET: "ticket-#{Id}",
  },
  EVENTS: {
    CHANNEL_CREATED: "Channel Created",
    CHANNEL_CREATED_MSG: "{channel_type}: **{channel}** was created",
    CHANNEL_DELETED: "Channel Deleted",
    CHANNEL_DELETED_MSG: "{channel_type}: **{channel}** was deleted",
    CHANNEL_RENAME_MSG: "{channel_type}: **{channel}** was renamed to **{new_channel}**",
    CHANNEL_RENAME: "Channel Rename",
    EMOJI_CREATED_MSG: "Emoji: {emoji} was created",
    EMOJI_CREATED: "New Emoji Created",
    EMOJI_DELETED_MSG: "Emoji: **{emoji}** was deleted",
    EMOJI_DELETED: "Emoji Deleted",
    EMOJI_RENAMED_MSG: "Emoji: **{emoji_name}** was renamed to **{new_name}** ({emoji})",
    BANNED_MEMBER: "Banned Member",
    NOT_FOUND: "Not found",
    BAN_ADD: "Member Banned",
    KICK_ADD: "Member Kicked",
    EXECUTED_BY: "Executed By",
    REASON: "Reason",
  },
};
