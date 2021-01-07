module.exports = {
  GLOBAL: {
    EVERYONE: "Everyone",
    NOT_SPECIFIED: "No especificado",
    PROVIDE_ARGS: "Por favor proporciona argumentos",
    ERROR: "Ha ocurrido un error",
    NAME: "Nombre",
    NOT_AN_OPTION: "`{option}` No es una opcion valida",
    SUCCESS: "Exito",
    REASON: "Razón",
    URL: "URL",
    NONE: "None",
    YES: "Si",
    NO: "No",
  },
  GUILD: {
    NOT_FOUND: "Gremio no encontrado",
    LEFT: "Ha abandonado el gremio **${guild_name}**",
    LEVEL_UP_MESSAGES: "Mensaje de subida de nivel",
    ANNOUNCE_CHANNEL: "Canal de anuncios",
    SUGGEST_CHANNEL: "canal de sugerencias",
    WELCOME_CHANNEL: "Canal de bienvenidas",
    LEAVE_CHANNEL: "Canal de salidas",
    PREFIX: "Prefijo",
    IS_VERIFIED: "Si, este servidor esta verificado",
    IS_PARTNERED: "Si, este servidor esta asociado",
    NOT_VERIFIED: "Nope, este servidor no esta verificado",
    NOT_PARTNERED: "Nope, este servidor no esta asociado",
    OWNER: "Dueño del gremio",
    CHANNEL_C: "Numero de canales",
    EMOJI_C: "Numero de emojis",
    ROLES_C: "Numero de roles",
    MEMBER_C: "Numero de miembros",
    REGION: "Region",
    VERIFICATION: "Nivel de verificacíon",
    MFA: "Nivel MFA",
    BOOSTS: "Mejoras",
    BOOST_LVL: "Nivel de mejora",
    VERIFIED: "Verificado",
    PARTNERED: "Asociado",
  },
  MEMBER: {
    TAG: "Tag",
    BOT: "Bot",
    ROLES: "Roles",
    BADGES: "Insignias",
    ONLINE: "Conectado",
    OFFLINE: "Desconectado",
    MEMBERS: "Miembros",
    STATUS: "Estado",
    CREATED_ON: "Creada en",
    JOINED_AT: "Entró en",
    ID: "Id",
    USERNAME: "Usuario",
    NICKNAME: "Apodo",
    NOT_FOUND: "Miembro no encontrado",
    CANNOT_BE_BANNED: "Ese miembro no puede ser baneado",
    DM_BAN_MESSAGE: "Has sido **baneado** de **{guild_name}**, Razón: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} Ha sido baneado de este servidor. Razón: **{ban_reason}**. Tambien le he enviado un DM al usuario para hacerle saber.",
    BOT_DATA: "Datos del bot no guardados, por lo tanto no puedo buscar esa informacion",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Mi rol no es mas alto que el rol **{role}**!",
    MY_ROLE_MUST_BE_HIGHER:
      "Mi rol debe ser mas alto que el rol mas alto del usuario **{member}**!",
    YOUR_ROLE_MUST_BE_HIGHER: "Tu rol debe ser mas alto que el rol **{role}**!",
    PROVIDE_ROLE: "Por favor proporciona un rol",
    ALREADY_HAS_ROLE: "El miembro ya tiene ese rol",
    ADDED_ROLE_TO: "Se le ha añadido el rol **{role}** a {member}",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Click aqui si la imagen falla en cargar.]",
    CLYDE: "Clyde",
    CUDDLES: "abrazos con",
    FEEDED: "Alimentado",
    HUGGED: "Abrazado",
    PATTED: "Palmeado",
    KISSED: "Besadi",
    POKED: "Empujado",
    SLAPPED: "Abofeteado",
    NO_GIPHY_KEY:
      "La api de giphy no fue encontrada en la configuración (Contacta con el dueño del bot)",
    NO_GPIHY_FOUND: "No gifs were found with that",
  },
  ANIMAL: {
    CAT_FACT: "Hecho de gato",
    DOG_FACT: "Hecho de perro",
    COW: "Vaca",
  },
  BOT_OWNER: {
    SHUTDOWN: "El bot se esta acabando",
    EVAL: "Comando de Eval",
    EVAL_TYPE: "Tipo",
    EVAL_INPUT: "Entrada",
    EVAL_OUTPUT: "Salida",
    UPDATE_NICKNAME: "Actualizado por el dueño del bot",
    UPDATED_NICKNAME: "Se ha actualizado el apodo a **{nickname}**",
    PROVIDE_TYPE: "Por favor proporciona un tipo",
    CANNOT_BL_OWNER: "No puedes poner en lista negra al dueño",
    CANNOT_BL_BOT: "El bot no puede ser añadido a la lista negra",
    NOT_BLD: "Usuario no esta en lista negra",
    ALREADY_BLD: "{member} ya esta en lista negra",
    NOT_OPTION: "**{type}** no es una opcion",
    BLACKLISTED: "En lista negra",
    UNBLACKLISTED: "No incluido en la lista negra",
    BLACKLISTED_SUCCESS: "{member} fue {type}",
    BLD_STATUS: "Estado de la lista negra",
  },
  LEVELS: {
    XP: "XP",
    LEVEL: "Nivel",
    LEADERBOARD: "Tabla de clasificación",
    RESET_CONF: "¿Reiniciar toda la experiencia? y/n",
    RESET_SUCCESS: "Se ha reiniciado la Xp de todos",
    RESET_CANCEL: "Reinicio de xp cancelado",
    PROVIDE_AMOUNT: "Por favor proporciona una cantidad",
    PROVIDE_VALID_NR: "Por favor proporciona un numero valido",
    GIVE_XP_SUCCESS: "Se le ha dado a **{member}** **{amount}** de XP",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Necesitas estar en un canal de voz",
    NO_QUEUE: "No hay canciones sonando ahora",
    QUEUE_CLEARED: "La cola se ha vaciado",
    QUEUE: "Cola de canciones",
    BETWEEN_0_100: "El volumen debe estar entre 0 y 100",
    VOL_SUCCESS: "Se ha establecido el volumen a {vol}%",
    PLAYING: "Reproduciendo",
    PAUSED: "Pausado",
    DURATION: "Duración",
    PROVIDE_SEARCH: "Proporcione una consulta de búsqueda",
    ADDED_TO_QUEUE: "{song} ha sido añadida a la cola",
    ADDED_PL_TO_QUEUE: "Playlist: {name} was added to queue ({length} songs)",
    NOW_PLAYING: "Sonando ahora:",
    REQUESTED_BY: "Pedida por:",
    NO_PERMS: "No tengo los permisos correctos para ese canal de voz!",
    NO_RESULTS: "Ninguna cancion fue encontrada",
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
    MONEY: "Dinero",
    BANK: "Banco",
    BALANCE: "Balance",
    DAILY_ERROR: "Ya has recolectado tu premio diario",
    WEEKLY_ERROR: "Ya has recolectado tu premio semanal",
    DAILY_SUCCESS: "Has recolectado tu premio diario de **{amount}** monedas",
    WEEKLY_SUCCESS: "Has recolectado tu premio semanal de **{amount}** monedas",
    STORE_EMPTY:
      "La tienda de este servidor esta vacia! hablale a un moderador que agregue cosas usando `{prefix}store add <item>`",
    PROVIDE_ITEM_TO_BUY: "Proporciona el item para comprar",
    NOT_ENOUGH_MONEY: "No tienes suficiente dinero",
    BUY_SUCCESS: "Has comprado **{item}** pagado **{price}**",
    NOT_FOUND_STORE:
      "**{query}** No fue encontrado en la tienda, Por favor usa `{prefix}store` Para ver todos los items en la tienda",
    ALREADY_OWN_ITEM: "Ya tienes ese item",
    PROVIDE_VALID_AMOUNT: "Por favor proporciona una cantidad numerica valida",
    DEPOSITED_ALL: "Has depositado todo el dinero!",
    DEPOSITED_AMOUNT: "Has depositado **{amount} Monedas**",
    WITHDRAW_ALL: "Has retirado todo el dinero!",
    WITHDRAW_AMOUNT: "Has retirado **{amount} Monedas**",
    PROFILE: "Perfil",
    INV_EMPTY: "El inventario del usuario esta vacio",
    INVENTORY: "Inventario",
    INV_ITEMS: "Inventario de items",
    VIEW_INVENTORY: "Usa `{prefix}inventory <usuario>` Para su inventario de items.",
    MONEY_LEADERBOARD: "Tabla de clasificación de dinero",
    TOTAL_BALANCE: "Balance total",
    BOTH_COUNTED: "Dinero de banco y bolsillo contados",
    DICE_LANDED: "Ha caido un: {roll}",
    DICE_WON: "Felicidades! has ganado un premio de **{price} Monedas**",
    DICE_LOST: "Necesitas que caiga un **6** para obtener un premio de **{price} Monedas**",
    RECENTLY_WORKED: "Ya has trabajado recientemente, {time} restante",
    WORKED: "{member} trabajó de **{job_name}** y obtuvo **{amount}**!",
    CANNOT_PAY_SELF: "No te puedes pagar a ti mismo",
    PAY_SUCCESS: "Has dado a **{member}** **{amount} Monedas**",
    CANNOT_ROB_SELF: "No te puedes robar a ti mismo!",
    BETWEEN_1_1000: "La cantidad debe estar entre 1 y 1000",
    MEMBER_NO_MONEY: "El usuario no tiene ese dinero, por lo tanto no lo puedes robar.",
    ROB_SUCCESS: "Has robado una cantidad de **{amount} Monedas** a **{member}**",
    STORE: "Tienda",
    MANAGE_STORE_PERMS:
      "No tienes los permisos correctos para manejar la tienda! (Administrar servidor)",
    PROVIDE_VALID_ITEM: "Por favor proporciona un item para Añadir/remover!",
    PRICE: "Precio",
    ALREADY_EXISTS: "**{item}** ya existe en la tienda!",
    PROVIDE_PRICE: "Por favor proporciona un precio para el item!",
    MUST_BE_NUMBER: "El precio debe ser un numero!",
    ADDED_TO_STORE: "{item} fue añadido en el a la tienda!",
    NOT_IN_STORE: "**{item}** no existe en la tienda!",
    REMOVED_FROM_STORE: "{item} fue removido de la tienda!",
    WON_SLOTS: "Has ganado y obtuviste {amount} monedas",
    LOST_SLOTS: "Has perdido!",
    MAX_BET: "Apuesta maxima es 500",
    ADDED_MONEY: "Successfully added {amount} to user balance",
    MIN_BET: "Minimum bet of 1 is required",
    MIN_AMOUNT: "Amount must be above 0",
    RESET_CONF: "Reset all balance? y/n",
    RESET_SUCCESS: "Successfully reset everyone's balance",
    RESET_CANCEL: "reset-economy was canceled",
  },
  GAMES: {
    BETS_ON: "{member_1} Apostó a {member_2}",
    LOST_BET: "{member_1} Apostó a {member_2}!\n {member_1} No gano la apuesta",
    WON_BET: "{member_1} Apostó a {member_2} y {member_1} gano la apuesta!",
    CALC: "Calculadora",
    INVALID_CALC: "Calculación invalida",
    COMPLIMENT: "Cumplido",
    LANDED_TAILS: "Ha caido cara",
    LANDED_HEADS: "Ha caido sello",
    HAPPINESS: "Felicidas",
    IQ_TEST: "Test de IQ",
    IQ_IS: "Tu IQ es de: {iq}",
    RPS: "Piedra Papel Tijeras",
    ROCK: "Piedra",
    PAPER: "Papel",
    SCISSORS: "Tijeras",
    WYR: "¿Que prefieres?",
    ANSWER: "Respuesta",
    QUESTION: "Pregunta",
    YOU_WON: "Has ganado 50 monedas!",
    BOT_WON: "El bot ha ganado!",
    BOTH_WON: "It's a tie",
    OPPONENTS_CHOICE: "Opponents choice",
    YOUR_CHOICE: "Your choice",
    WINNER: "Winner",
    INVALID_INPUT: "Input must be 1 of the following:",
  },
  UTIL: {
    AVATAR: "Avatar",
    NOT_AFK: "Ya no estas AFK",
    AFK: "Ahora esta ADK",
    BMI_WEIGHT: "Peso",
    BMI_HEIGHT: "Altura",
    BMI: "BMI",
    BMI_CM: "Por favor proporciona la altura en centimetros",
    BMI_KG: "Por facor proporciona el peso en kilogramos",
    SUPPORT_SERVER: "Apoya el servidor",
    BUG_REPORT: "{member} ha reportado un bug",
    BUG_REPORTED: "Bug reportado ha sido enviado!",
    CHANNEL_TOPIC: "Tema del canal",
    TEXT_CHANNEL: "Canal de texto",
    VOICE_CHANNEL: "Canal de voz",
    TEXT_CHANNELS: "Canales de texto" /* plural! */,
    VOICE_CHANNELS: "Canales de voz" /* plural! */,
    NO_DEF_FOUND: "Definición no encontrada para {word}",
    DEF_FOR_WORD: "Definición de {word}",
    CATEGORY: "Categoria",
    DEFINITION: "Definición",
    DEPENDENCIES: "Dependencias",
    ANIMATED: "Animado",
    NON_ANIMATED: "No animado",
    NEW_FEEDBACK: "Nuevos comentarios",
    FEEDBACK_SEND: "Se ha enviado el comentario!",
    GH_NOT_FOUND: "Cuenta de GitHub no encontrada",
    GH_FOLLOWING: "Siguiendo",
    GH_FOLLOWERS: "Seguidores",
    GH_WEBSITE: "Sitio web",
    GH_LOCATION: "Ubicacion",
    GH_BIO: "Biografia",
    GH_PROVIDE_USERNAME: "Proporciona un usuario!",
    SEARCHING: "Buscando",
    PROVIDE_EXT: "Por favor proporciona una extencion, e.j.: `ts`, `js`, `html`, ...",
    PROVIDE_CODE: "Por favor proporciona codigo",
    NO_IMG_FOUND: "Imagen no encontrada",
    PROVIDE_M_S: "Por favor proporciona el nombre de la pelicula o serie",
    DB_RATINGS: "Calificaciones",
    DB_COUNTRY: "Pais",
    DB_GENRES: "Genero",
    DB_AWARDS: "Premios",
    DB_LANGS: "Lenguajes",
    DB_RELEASED: "Liberada",
    DB_NOT_FOUND: "No fue encontrado nada con {search}",
    TOTAL_MB: "Total",
    HUMANS: "Humanos",
    BOTS: "Bots",
    PLAYERS: "Jugadores",
    VERSION: "Version",
    PROTOCOL: "Protocolo",
    DESCRIPTION: "Descripción",
    MC_NOT_FOUND: "Servidor no fue encontrado",
    MC_PROVIDE_IP: "Proporciona una IP",
    NPM_SEARCH: "Busqueda de NPM",
    NPM_TOP_5: "Top 5 de resultados para **{query}**",
    AUTHOR: "Autor",
    VIEW_ON_NPM: "ver en npm",
    MAX_PLAYERS: "Maximo de jugadores",
    PS_NOT_FOUND: "Aplicacion no encontrada",
    DEVELOPER: "Desarrollador",
    SCORE: "Puntaje",
    CREATED_BY: "Creado por {member}",
    MENTIONABLE: "Mencionable",
    POSITION: "Position (from top)",
    ROLE_NOT_FOUND: "Role no encontrado",
    ROLES: "Roles",
    NO_GUILD_ICON: "Este gremio no tiene icono",
    PROVIDE_EMOJI: "Por favor proporciona un emoji",
    ENLARGED_EMOJI: "Version ampliada de {emoji}",
    INVALID_EMOJI: "Emoji invalido!",
    PROVIDE_SKIN: "Por favor escribe el nombre de la skin",
    SKIN_NOT_FOUND: "Jugador `{search}` no fue encontrado!",
    SKIN_NAME: "Skin del jugador {name}",
    DOWNLOAD_SKIN: "[Descargar skin]",
    G_TRANSLATE: "Traducción de Google",
    NEW_SUGGESTION: "Nueva sugerencia",
    NO_SUGG_CHANNEL:
      "Tu servidor no tiene un canal de sugerencias!\n Usa `set suggest-channel <Mencion del canal>` Para establecer un canal por defecto.",
    UPTIME: "{member} ha estado activo por {time}",
    WEATHER: "Clima",
    PROVIDE_COUNTRY: "Por favor proporciona uan ciudad/pais",
    C_NOT_FOUND: "Ciudad: **{query}** no fue encontrada!",
    MAIN: "Principal",
    CURRENT: "Actual",
    CURRENT_TEMP: "Temperatura actual",
    FEELS_LIKE: "Se siente como",
    WIND_SPEED: "Velocidad del viento",
    WIND_DEGREES: "Direccion del viento",
    COUNTRY: "Pais",
    NO_W_FOUND: "No resultados fueron encontrados",
    DOC_NOT_FOUND: "No fue encontrado en los documentos",
    MAINTAINERS: "Maintainers",
    LAST_MODIFIED: "Last modified",
  },
  BOT: {
    GUILDS: "Gremios",
    CHANNELS: "Canales",
    USERS: "Usuarios",
    COMMAND_COUNT: "Numero de comandos",
    VC_CONNS: "Conecciones de voz",
    INFO_2: "Información del bot",
    INFO: "Info del bot",
    SYSTEM_INFO: "Info del sistema",
    RAM_USAGE: "Uso de RAM",
    UPTIME: "Tiempo activo",
    DJS_V: "Version de Discord.js",
    NODE_V: "Version de NodeJS",
    REPO: "Repositorio",
    DASHBOARD: "Dashboard",
    DEVELOPER: "Developer",
    CONTRIBUTORS: "Contributors",
    INVITE_BOT: "Invite bot",
    USED_SINCE_UP: "Used since up",
    TOTAL_USED_CMDS: "Total used",
    LATENCY: "Latency",
  },
  CONFIG: {
    OPTION_CMD_WORK: "{option} necesita ser proporcionada, para que el comando funcione.",
  },
  HELP: {
    CAT_NOT_EXIST: "Esa categoria no fue encontrada",
    CMD_NOT_FOUND: "Comando o alias no encontrado",
    FULL_CMD_LIST: "View full detail command list",
    CLICK_ME: "Click me",
    COMMANDS: "Comandos",
    COOLDOWN: "Refrescamiento",
    ALIASES: "Alias",
    USAGE: "Uso",
    COMMAND: "Comando",
    OPTIONS: "Opciones",
    GUILD_PREFIX: "Prefijo del servidor",
    CMD_DESC:
      "usa `{prefix}help <nombre del comando | alias>` para ver mas informacion del comando\n Mas informacion puede ser encontrada usando el comando `botinfo`",
    OWNER_ONLY: "Solo el dueño puede ver esto!",
    NSFW_ONLY: "Para ver los comando NSFW debes estar en un canal NSFW!",
    CUSTOM_CMD: "This is a custom command, therefore I cannot show more info",
    BOT_PERMS: "Bot Permissions",
    MEMBER_PERMS: "Member Permissions",
    CATEGORIES: {
      admin: "Comandos de admins",
      animal: "Comandos de animales",
      botowner: "Comandos del dueño del bot",
      nsfw: "Comandos NSFW",
      hentainsfw: "Comandos Hentai",
      games: "Comandos de juegos",
      image: "Comandos de imagenes",
      music: "Comandos de musica",
      util: "Comandos de utilidad",
      economy: "Comandos de economia",
      levels: "Comandos de niveles",
      exempt: "Comandos exentos (comandos que no pueden ser deshabilitados)",
      disabled: "Disabled commands (this guild only)",
      giveaway: "Giveaway commands",
      reminder: "Reminder commands",
      reactions: "Reaction role commands",
      custom: "Custom commands",
      ticket: "Ticket commands",
    },
  },
  POKEMON: {
    SPECIES: "Especie",
    ABILITIES: "Habilidades",
    HEIGHT: "Altura",
    WEIGHT: "Peso",
    EXPERIENCE: "Experiencia",
    GENDER: "Genero",
    EGG_GROUPS: "Grupo de huevo",
    FAMILY: "Familia",
    EVO_STAGE: "Etapas de evolución",
    EVO_LINE: "Linea de evolucion",
    STATS: "Estadisticas",
    HP: "HP",
    ATTACK: "Ataque",
    DEFENSE: "Defensa",
    SP_ATK: "SP ATK",
    SP_DEF: "SP DEF",
    SPEED: "Veñocidad",
    TOTAL: "Total",
    PROVIDE_NAME: "Por favor proporciona el nombre de pokemon!",
    NOT_FOUND:
      "Ningun pokemon fue encontrado con {query}. Por favor usa el deletreo correcto e intenta de nuevo.",
  },
  REACTIONS: {
    NO_ROLE: "Por favor proporciona un rol valido",
    CHANNEL_NOT_FOUND: "El canal con el ID `{channelId}` no fue encontrado",
    TITLE: "Rol por reaccion",
    DESC: "Reacciones:",
    SUCCESS: "Se ha enviado el mensaje con las reacciones",
    NOT_FOUND: "Reacción no encontrada con el ID del mensaje",
    DELETE_SUCCESS: "Se ha eliminado la reacción",
    FOUND_NO_MSG:
      "La reaccion fue encontrada pero el mensaje no, la reaccion ha sido eliminada de la base de datos",
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
