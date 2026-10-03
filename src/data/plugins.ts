// Comprehensive Minecraft Plugins & Mods Database

export interface Plugin {
  name: string;
  description: string;
  version: string;
  category: string;
  downloads: string;
  rating: number;
  author: string;
  tags: string[];
}

export const pluginsDatabase: Plugin[] = [
  // Core & Essentials
  { name: 'EssentialsX', description: 'The essential plugin suite for Minecraft servers', version: '2.20.1', category: 'Core', downloads: '10M+', rating: 4.8, author: 'EssentialsX Team', tags: ['commands', 'economy', 'homes'] },
  { name: 'EssentialsX Spawn', description: 'Spawn management for EssentialsX', version: '2.20.1', category: 'Core', downloads: '5M+', rating: 4.7, author: 'EssentialsX Team', tags: ['spawn', 'teleport'] },
  { name: 'EssentialsX Chat', description: 'Chat formatting for EssentialsX', version: '2.20.1', category: 'Core', downloads: '4M+', rating: 4.6, author: 'EssentialsX Team', tags: ['chat', 'formatting'] },
  { name: 'EssentialsX AntiBuild', description: 'Build protection for EssentialsX', version: '2.20.1', category: 'Core', downloads: '3M+', rating: 4.5, author: 'EssentialsX Team', tags: ['protection', 'build'] },
  { name: 'Vault', description: 'Permission, chat, and economy API', version: '1.7.3', category: 'API', downloads: '12M+', rating: 4.9, author: 'MilkBowl', tags: ['api', 'economy', 'permissions'] },
  { name: 'PlaceholderAPI', description: 'Placeholder expansion system', version: '2.11.5', category: 'API', downloads: '8M+', rating: 4.8, author: 'HelpChat', tags: ['api', 'placeholders'] },
  { name: 'ProtocolLib', description: 'Packet manipulation library', version: '5.1.0', category: 'API', downloads: '15M+', rating: 4.9, author: 'dmulloy2', tags: ['api', 'packets'] },
  { name: 'Citizens', description: 'NPC plugin for creating custom NPCs', version: '2.0.33', category: 'Core', downloads: '7M+', rating: 4.7, author: 'fullwall', tags: ['npc', 'entities'] },
  
  // Permissions
  { name: 'LuckPerms', description: 'Advanced permissions plugin', version: '5.4.102', category: 'Permissions', downloads: '8M+', rating: 4.9, author: 'Luck', tags: ['permissions', 'groups'] },
  { name: 'PermissionsEx', description: 'Permissions management system', version: '1.23.4', category: 'Permissions', downloads: '6M+', rating: 4.5, author: 'zml', tags: ['permissions'] },
  { name: 'GroupManager', description: 'Classic permissions and groups', version: '2.9', category: 'Permissions', downloads: '4M+', rating: 4.3, author: 'ElgarL', tags: ['permissions', 'groups'] },
  { name: 'bPermissions', description: 'Lightweight permissions plugin', version: '2.12', category: 'Permissions', downloads: '2M+', rating: 4.2, author: 'Desmin88', tags: ['permissions'] },
  
  // World Management
  { name: 'WorldEdit', description: 'In-game world editor', version: '7.2.15', category: 'World', downloads: '10M+', rating: 4.9, author: 'EngineHub', tags: ['worldedit', 'building', 'tools'] },
  { name: 'WorldGuard', description: 'Region protection and flags', version: '7.0.9', category: 'World', downloads: '8M+', rating: 4.8, author: 'EngineHub', tags: ['protection', 'regions'] },
  { name: 'Multiverse-Core', description: 'World management plugin', version: '4.3.1', category: 'World', downloads: '9M+', rating: 4.7, author: 'Multiverse', tags: ['worlds', 'portals'] },
  { name: 'Multiverse-Portals', description: 'Portal creation for Multiverse', version: '4.2.2', category: 'World', downloads: '6M+', rating: 4.6, author: 'Multiverse', tags: ['portals', 'teleport'] },
  { name: 'Multiverse-NetherPortals', description: 'Nether portal management', version: '4.2.2', category: 'World', downloads: '5M+', rating: 4.5, author: 'Multiverse', tags: ['nether', 'portals'] },
  { name: 'MyWorlds', description: 'Alternative world management', version: '1.19.3-v2', category: 'World', downloads: '1M+', rating: 4.4, author: 'bergerkiller', tags: ['worlds'] },
  { name: 'PlotSquared', description: 'Plot management system', version: '7.1.0', category: 'World', downloads: '4M+', rating: 4.7, author: 'IntellectualSites', tags: ['plots', 'building'] },
  { name: 'GriefPrevention', description: 'Area-of-effect claim system', version: '16.18.2', category: 'World', downloads: '5M+', rating: 4.8, author: 'RoboMWM', tags: ['protection', 'claims'] },
  { name: 'Lands', description: 'Advanced land claim system', version: '7.7.1', category: 'World', downloads: '2M+', rating: 4.6, author: 'Angeschossen', tags: ['lands', 'claims', 'protection'] },
  { name: 'Residence', description: 'Residence protection plugin', version: '5.1.4.2', category: 'World', downloads: '3M+', rating: 4.5, author: 'bekvon', tags: ['residences', 'protection'] },
  
  // Economy
  { name: 'EssentialsX Economy', description: 'Economy system for EssentialsX', version: '2.20.1', category: 'Economy', downloads: '6M+', rating: 4.7, author: 'EssentialsX Team', tags: ['economy', 'money'] },
  { name: 'ShopGUIPlus', description: 'Advanced shop GUI plugin', version: '1.82.0', category: 'Economy', downloads: '3M+', rating: 4.8, author: 'brcdev', tags: ['shops', 'gui', 'economy'] },
  { name: 'ChestShop', description: 'Chest-based shop system', version: '3.12.1', category: 'Economy', downloads: '5M+', rating: 4.6, author: 'Acrobot', tags: ['shops', 'chests'] },
  { name: 'EconomyShopGUI', description: 'GUI shop plugin', version: '5.5.2', category: 'Economy', downloads: '2M+', rating: 4.5, author: 'Ghost_chu', tags: ['shops', 'gui'] },
  { name: 'Gringotts', description: 'Physical currency system', version: '2.10.0', category: 'Economy', downloads: '1M+', rating: 4.4, author: 'tokers', tags: ['economy', 'currency'] },
  { name: 'TokenEnchant', description: 'Token-based economy', version: '1.9.5', category: 'Economy', downloads: '800K+', rating: 4.3, author: 'McOzone', tags: ['tokens', 'economy'] },
  { name: 'PlayerPoints', description: 'Points currency system', version: '3.2.5', category: 'Economy', downloads: '2M+', rating: 4.5, author: 'Black_ixx', tags: ['points', 'currency'] },
  
  // Protection & Anti-Grief
  { name: 'CoreProtect', description: 'Rollback and logging system', version: '2.22.1', category: 'Protection', downloads: '4M+', rating: 4.9, author: 'Intelli', tags: ['rollback', 'logging', 'protection'] },
  { name: 'Prism', description: 'Advanced rollback system', version: '3.1.0', category: 'Protection', downloads: '2M+', rating: 4.7, author: 'AddstarMC', tags: ['rollback', 'logging'] },
  { name: 'HawkEye', description: 'Block logging and rollback', version: '1.0.8', category: 'Protection', downloads: '1M+', rating: 4.4, author: 'oliverw92', tags: ['logging', 'rollback'] },
  { name: 'AntiCheat', description: 'Comprehensive anti-cheat system', version: '2.2.4', category: 'Protection', downloads: '3M+', rating: 4.3, author: 'Gravity', tags: ['anticheat', 'hacks'] },
  { name: 'NoCheatPlus', description: 'Advanced anti-cheat plugin', version: '3.16.1', category: 'Protection', downloads: '5M+', rating: 4.5, author: 'Evenprime', tags: ['anticheat'] },
  { name: 'AAC (Advanced AntiCheat)', description: 'Premium anti-cheat solution', version: '5.4.1', category: 'Protection', downloads: '2M+', rating: 4.8, author: 'konsolas', tags: ['anticheat', 'premium'] },
  { name: 'Spartan Anti-Cheat', description: 'Modern anti-cheat plugin', version: '7.5', category: 'Protection', downloads: '1.5M+', rating: 4.7, author: 'Vagdedes', tags: ['anticheat'] },
  { name: 'Matrix AntiCheat', description: 'Advanced cheat detection', version: '6.9.3', category: 'Protection', downloads: '1M+', rating: 4.6, author: 'MatrixTeam', tags: ['anticheat'] },
  
  // Gameplay
  { name: 'mcMMO', description: 'RPG-style skill leveling', version: '2.1.228', category: 'Gameplay', downloads: '6M+', rating: 4.7, author: 'nossr50', tags: ['rpg', 'skills', 'leveling'] },
  { name: 'Jobs Reborn', description: 'Job and profession system', version: '5.2.2.2', category: 'Gameplay', downloads: '4M+', rating: 4.8, author: 'Zrips', tags: ['jobs', 'professions'] },
  { name: 'AureliumSkills', description: 'Modern skills and stats plugin', version: '1.3.8', category: 'Gameplay', downloads: '1.5M+', rating: 4.7, author: 'Aurelium', tags: ['skills', 'stats'] },
  { name: 'Quests', description: 'Quest system for servers', version: '4.6.0', category: 'Gameplay', downloads: '3M+', rating: 4.6, author: 'PikaMug', tags: ['quests', 'rpg'] },
  { name: 'BetonQuest', description: 'Advanced quest plugin', version: '2.1.2', category: 'Gameplay', downloads: '1M+', rating: 4.8, author: 'Co0sh', tags: ['quests', 'rpg', 'story'] },
  { name: 'MythicMobs', description: 'Custom mob creation', version: '5.6.2', category: 'Gameplay', downloads: '4M+', rating: 4.9, author: 'Xikage', tags: ['mobs', 'custom', 'bosses'] },
  { name: 'EliteMobs', description: 'Enhanced mob system', version: '8.3.15', category: 'Gameplay', downloads: '2M+', rating: 4.7, author: 'Magmaguy', tags: ['mobs', 'bosses', 'dungeons'] },
  { name: 'Denizen', description: 'Advanced scripting engine', version: '1.2.8', category: 'Gameplay', downloads: '2M+', rating: 4.6, author: 'DenizenScript', tags: ['scripting', 'npcs', 'custom'] },
  { name: 'Magic', description: 'Spell casting system', version: '10.2.1', category: 'Gameplay', downloads: '3M+', rating: 4.8, author: 'NathanWolf', tags: ['magic', 'spells', 'rpg'] },
  { name: 'Heroes', description: 'Class and skill system', version: '1.10.0', category: 'Gameplay', downloads: '1M+', rating: 4.4, author: 'Sleaker', tags: ['classes', 'skills', 'rpg'] },
  
  // Chat & Communication
  { name: 'EssentialsX Chat', description: 'Chat formatting plugin', version: '2.20.1', category: 'Chat', downloads: '4M+', rating: 4.6, author: 'EssentialsX Team', tags: ['chat', 'formatting'] },
  { name: 'ChatManager', description: 'Advanced chat management', version: '2.3.5', category: 'Chat', downloads: '1.5M+', rating: 4.5, author: 'HSGamer', tags: ['chat', 'management'] },
  { name: 'LPC (Chat Format)', description: 'Lightweight chat formatter', version: '1.15', category: 'Chat', downloads: '800K+', rating: 4.3, author: 'Ingrim4', tags: ['chat', 'format'] },
  { name: 'DiscordSRV', description: 'Discord integration', version: '1.27.0', category: 'Chat', downloads: '3M+', rating: 4.9, author: 'Scarsz', tags: ['discord', 'integration'] },
  { name: 'VentureChat', description: 'Advanced chat channels', version: '3.6.1', category: 'Chat', downloads: '1M+', rating: 4.6, author: 'Aust1n46', tags: ['chat', 'channels'] },
  { name: 'LunaChat', description: 'Multi-channel chat system', version: '3.0.5', category: 'Chat', downloads: '900K+', rating: 4.4, author: 'luna', tags: ['chat', 'channels'] },
  
  // Teleportation
  { name: 'EssentialsX Warp', description: 'Warp point management', version: '2.20.1', category: 'Teleportation', downloads: '5M+', rating: 4.7, author: 'EssentialsX Team', tags: ['warps', 'teleport'] },
  { name: 'CMI', description: 'Complete management interface', version: '9.6.3.1', category: 'Teleportation', downloads: '4M+', rating: 4.9, author: 'Zrips', tags: ['teleport', 'homes', 'warps'] },
  { name: 'BetterRTP', description: 'Random teleportation', version: '3.6.2', category: 'Teleportation', downloads: '2M+', rating: 4.7, author: 'SuperRonon', tags: ['rtp', 'teleport', 'random'] },
  { name: 'RandomTeleport', description: 'Random world teleport', version: '3.2.0', category: 'Teleportation', downloads: '1.5M+', rating: 4.5, author: 'SuperChips', tags: ['rtp', 'random'] },
  { name: 'TeleportationPlus', description: 'Advanced teleportation', version: '1.8.5', category: 'Teleportation', downloads: '800K+', rating: 4.4, author: 'TeleportTeam', tags: ['teleport'] },
  
  // Admin Tools
  { name: 'WorldEdit', description: 'World editing tools', version: '7.2.15', category: 'Admin', downloads: '10M+', rating: 4.9, author: 'EngineHub', tags: ['editing', 'tools'] },
  { name: 'VoxelSniper', description: 'Terrain editing tool', version: '5.172.0', category: 'Admin', downloads: '2M+', rating: 4.6, author: 'PrismarineTeam', tags: ['editing', 'terrain'] },
  { name: 'FAWE (FastAsyncWorldEdit)', description: 'Async WorldEdit fork', version: '2.8.1', category: 'Admin', downloads: '3M+', rating: 4.8, author: 'IntellectualSites', tags: ['worldedit', 'async'] },
  { name: 'AdminCmd', description: 'Admin command suite', version: '7.4.5', category: 'Admin', downloads: '1M+', rating: 4.3, author: 'ElgarL', tags: ['admin', 'commands'] },
  { name: 'BanManager', description: 'Advanced ban system', version: '7.11.0', category: 'Admin', downloads: '2M+', rating: 4.7, author: 'confuser', tags: ['bans', 'moderation'] },
  { name: 'LiteBans', description: 'Premium ban management', version: '3.12.0', category: 'Admin', downloads: '3M+', rating: 4.9, author: 'Ruan625Br', tags: ['bans', 'moderation', 'premium'] },
  
  // Utilities
  { name: 'ClearLag', description: 'Entity and lag management', version: '3.2.1', category: 'Utilities', downloads: '8M+', rating: 4.6, author: 'bob7l', tags: ['lag', 'cleanup'] },
  { name: 'AutoSaveWorld', description: 'World auto-saving', version: '45.0', category: 'Utilities', downloads: '3M+', rating: 4.5, author: 'Nijikokun', tags: ['autosave', 'world'] },
  { name: 'Dynmap', description: 'Real-time web map', version: '3.7', category: 'Utilities', downloads: '5M+', rating: 4.8, author: 'mikeprimm', tags: ['map', 'web', 'realtime'] },
  { name: 'BlueMap', description: 'Modern 3D web map', version: '4.1.0', category: 'Utilities', downloads: '1.5M+', rating: 4.7, author: 'BlueMap', tags: ['map', '3d', 'web'] },
  { name: 'Plan', description: 'Player analytics', version: '5.6.2611', category: 'Utilities', downloads: '2M+', rating: 4.8, author: 'AuroraLS3', tags: ['analytics', 'stats'] },
  { name: 'Spark', description: 'Performance profiler', version: '1.10.53', category: 'Utilities', downloads: '3M+', rating: 4.9, author: 'lucko', tags: ['performance', 'profiler'] },
  { name: 'Timings', description: 'Server performance monitoring', version: '1.0', category: 'Utilities', downloads: '10M+', rating: 4.7, author: 'Aikar', tags: ['performance', 'monitoring'] },
  
  // Minigames
  { name: 'BedWars1058', description: 'Bed Wars minigame', version: '23.12', category: 'Minigames', downloads: '3M+', rating: 4.8, author: 'andrei1058', tags: ['bedwars', 'minigame'] },
  { name: 'BedWars Relay', description: 'Modern Bed Wars', version: '1.5.0', category: 'Minigames', downloads: '1M+', rating: 4.7, author: 'BedWarsRelay', tags: ['bedwars'] },
  { name: 'SkyWars', description: 'Sky Wars minigame', version: '3.0.0', category: 'Minigames', downloads: '2M+', rating: 4.6, author: 'SkyWarsTeam', tags: ['skywars', 'minigame'] },
  { name: 'MurderMystery', description: 'Murder Mystery game', version: '2.1.0', category: 'Minigames', downloads: '1.5M+', rating: 4.7, author: 'MMTeam', tags: ['murder', 'mystery'] },
  { name: 'SurvivalGames', description: 'Hunger Games style', version: '1.12.0', category: 'Minigames', downloads: '2M+', rating: 4.5, author: 'SGTeam', tags: ['survival', 'games'] },
  { name: 'ArcadeGames', description: 'Arcade game collection', version: '2.5.0', category: 'Minigames', downloads: '1M+', rating: 4.6, author: 'ArcadeTeam', tags: ['arcade', 'minigames'] },
  { name: 'BuildBattle', description: 'Building competition', version: '1.8.0', category: 'Minigames', downloads: '800K+', rating: 4.5, author: 'BBTeam', tags: ['building', 'competition'] },
  { name: 'TNT Run', description: 'TNT Run minigame', version: '1.5.0', category: 'Minigames', downloads: '1M+', rating: 4.4, author: 'TNTRunTeam', tags: ['tnt', 'run'] },
  
  // Custom Items & Enchants
  { name: 'CustomCrafting', description: 'Custom recipe creation', version: '4.5.2', category: 'Custom', downloads: '1M+', rating: 4.6, author: 'WolfyScript', tags: ['crafting', 'recipes', 'custom'] },
  { name: 'ItemsAdder', description: 'Custom items and blocks', version: '3.6.3', category: 'Custom', downloads: '2M+', rating: 4.8, author: 'LoneDev', tags: ['items', 'blocks', 'custom'] },
  { name: 'Oraxen', description: 'Custom items and resourcepack', version: '1.160.0', category: 'Custom', downloads: '1.5M+', rating: 4.7, author: 'OraxenTeam', tags: ['items', 'resourcepack', 'custom'] },
  { name: 'AdvancedEnchantments', description: 'Custom enchantments', version: '8.9.10', category: 'Custom', downloads: '2M+', rating: 4.8, author: 'GC', tags: ['enchantments', 'custom'] },
  { name: 'EpicCraftingPlus', description: 'Advanced crafting system', version: '4.2.5', category: 'Custom', downloads: '1M+', rating: 4.6, author: 'SergiFerry', tags: ['crafting', 'custom'] },
  { name: 'MagicCosmetics', description: 'Custom cosmetic items', version: '2.1.0', category: 'Custom', downloads: '500K+', rating: 4.5, author: 'MagicTeam', tags: ['cosmetics', 'custom'] },
  
  // Crates & Rewards
  { name: 'CrazyCrates', description: 'Virtual crate system', version: '1.15.1', category: 'Crates', downloads: '2M+', rating: 4.7, author: 'BadBones69', tags: ['crates', 'rewards'] },
  { name: 'ExcellentCrates', description: 'Advanced crate plugin', version: '5.3.0', category: 'Crates', downloads: '1M+', rating: 4.8, author: 'NGX_Dev', tags: ['crates', 'gui'] },
  { name: 'DailyRewards', description: 'Daily login rewards', version: '2.5.0', category: 'Crates', downloads: '1.5M+', rating: 4.6, author: 'DRTeam', tags: ['rewards', 'daily'] },
  { name: 'VotingPlugin', description: 'Voting rewards system', version: '6.12.0', category: 'Crates', downloads: '2M+', rating: 4.7, author: 'Ben12345rocks', tags: ['voting', 'rewards'] },
  { name: 'NuVotifier', description: 'Vote listener', version: '2.7.2', category: 'Crates', downloads: '4M+', rating: 4.8, author: 'Ichbinjoe', tags: ['voting', 'listener'] },
  
  // Cosmetics
  { name: 'GadgetsMenu', description: 'Cosmetic gadgets', version: '4.5.0', category: 'Cosmetics', downloads: '2M+', rating: 4.6, author: 'Jerry123', tags: ['gadgets', 'cosmetics'] },
  { name: 'PlayerParticles', description: 'Particle effects', version: '8.4.0', category: 'Cosmetics', downloads: '3M+', rating: 4.8, author: 'Esophose', tags: ['particles', 'effects'] },
  { name: 'Hats', description: 'Cosmetic hats', version: '6.1.0', category: 'Cosmetics', downloads: '1.5M+', rating: 4.5, author: 'christopher33', tags: ['hats', 'cosmetics'] },
  { name: 'Trail', description: 'Particle trails', version: '3.2.0', category: 'Cosmetics', downloads: '1M+', rating: 4.4, author: 'TrailTeam', tags: ['trails', 'particles'] },
  { name: 'Pets', description: 'Custom pet system', version: '4.1.0', category: 'Cosmetics', downloads: '1.5M+', rating: 4.6, author: 'PetsTeam', tags: ['pets', 'cosmetics'] },
  
  // Performance
  { name: 'ClearLag', description: 'Lag reduction', version: '3.2.1', category: 'Performance', downloads: '8M+', rating: 4.6, author: 'bob7l', tags: ['lag', 'cleanup'] },
  { name: 'PaperLib', description: 'Paper performance library', version: '1.0.8', category: 'Performance', downloads: '5M+', rating: 4.7, author: 'PaperMC', tags: ['performance', 'library'] },
  { name: 'VillagerOptimiser', description: 'Villager lag reduction', version: '1.1.8', category: 'Performance', downloads: '1M+', rating: 4.5, author: 'StellarHorizons', tags: ['villagers', 'performance'] },
  { name: 'FarmLimiter', description: 'Farm lag reduction', version: '1.5.0', category: 'Performance', downloads: '800K+', rating: 4.4, author: 'FarmTeam', tags: ['farms', 'performance'] },
  
  // Modded (Fabric/Forge Mods)
  { name: 'Sodium', description: 'Rendering optimization (Fabric)', version: '0.5.8', category: 'Mods', downloads: '20M+', rating: 4.9, author: 'CaffeineMC', tags: ['fabric', 'performance', 'rendering'] },
  { name: 'Lithium', description: 'Server optimization (Fabric)', version: '0.11.1', category: 'Mods', downloads: '15M+', rating: 4.9, author: 'CaffeineMC', tags: ['fabric', 'performance', 'server'] },
  { name: 'Phosphor', description: 'Lighting optimization (Fabric)', version: '0.8.0', category: 'Mods', downloads: '10M+', rating: 4.8, author: 'CaffeineMC', tags: ['fabric', 'lighting', 'performance'] },
  { name: 'Iris Shaders', description: 'Shader support (Fabric)', version: '1.6.11', category: 'Mods', downloads: '12M+', rating: 4.9, author: 'IrisShaders', tags: ['fabric', 'shaders', 'graphics'] },
  { name: 'OptiFine', description: 'HD graphics and performance', version: '1.20.4_HD_U_I7', category: 'Mods', downloads: '50M+', rating: 4.7, author: 'sp614x', tags: ['optifine', 'hd', 'shaders'] },
  { name: 'Fabric API', description: 'Core Fabric library', version: '0.97.0', category: 'Mods', downloads: '30M+', rating: 4.9, author: 'FabricMC', tags: ['fabric', 'api', 'core'] },
  { name: 'Forge', description: 'Mod loading framework', version: '47.2.0', category: 'Mods', downloads: '40M+', rating: 4.8, author: 'MinecraftForge', tags: ['forge', 'loader', 'core'] },
  { name: 'JEI (Just Enough Items)', description: 'Recipe viewer', version: '15.3.0', category: 'Mods', downloads: '25M+', rating: 4.9, author: 'mezz', tags: ['jei', 'recipes', 'items'] },
  { name: 'REI (Roughly Enough Items)', description: 'Recipe viewer (Fabric)', version: '12.0.684', category: 'Mods', downloads: '18M+', rating: 4.8, author: 'shedaniel', tags: ['fabric', 'recipes', 'items'] },
  { name: 'Create', description: 'Mechanical automation mod', version: '0.5.1f', category: 'Mods', downloads: '15M+', rating: 4.9, author: 'simibubi', tags: ['automation', 'mechanical', 'tech'] },
  { name: 'Applied Energistics 2', description: 'Digital storage system', version: '15.0.18', category: 'Mods', downloads: '12M+', rating: 4.8, author: 'AE2Team', tags: ['storage', 'automation', 'tech'] },
  { name: 'Thermal Expansion', description: 'Tech mod suite', version: '10.3.0', category: 'Mods', downloads: '20M+', rating: 4.7, author: 'TeamCoFH', tags: ['tech', 'automation', 'energy'] },
  { name: 'Mekanism', description: 'High-tech machinery', version: '10.4.2', category: 'Mods', downloads: '18M+', rating: 4.8, author: 'aidancbrady', tags: ['tech', 'machinery', 'automation'] },
  { name: 'Industrial Craft 2', description: 'Classic tech mod', version: '4.0.0', category: 'Mods', downloads: '25M+', rating: 4.6, author: 'Player', tags: ['tech', 'classic', 'industry'] },
  { name: 'Tinkers Construct', description: 'Tool creation mod', version: '3.7.0', category: 'Mods', downloads: '22M+', rating: 4.8, author: 'mDiyo', tags: ['tools', 'crafting', 'custom'] },
  { name: 'Biomes O\' Plenty', description: 'Additional biomes', version: '18.2.0', category: 'Mods', downloads: '15M+', rating: 4.7, author: 'Forstride', tags: ['biomes', 'worldgen', 'nature'] },
  { name: 'Twilight Forest', description: 'Dimension mod', version: '4.3.1850', category: 'Mods', downloads: '20M+', rating: 4.9, author: 'Benimatic', tags: ['dimension', 'adventure', 'bosses'] },
  { name: 'Alex\'s Mobs', description: 'Additional mobs', version: '1.22.6', category: 'Mods', downloads: '12M+', rating: 4.8, author: 'AlexModGuy', tags: ['mobs', 'animals', 'creatures'] },
  { name: 'Farmer\'s Delight', description: 'Farming expansion', version: '1.2.3', category: 'Mods', downloads: '10M+', rating: 4.9, author: 'vectorwing', tags: ['farming', 'food', 'cooking'] },
  { name: 'Waystones', description: 'Teleportation waypoints', version: '14.1.3', category: 'Mods', downloads: '8M+', rating: 4.7, author: 'BlayTheNinth', tags: ['teleport', 'waypoints', 'travel'] },
  { name: 'JourneyMap', description: 'Minimap and world map', version: '5.9.0', category: 'Mods', downloads: '18M+', rating: 4.6, author: 'techbrew', tags: ['map', 'minimap', 'navigation'] },
  { name: 'Xaero\'s Minimap', description: 'Lightweight minimap', version: '23.9.0', category: 'Mods', downloads: '15M+', rating: 4.8, author: 'xaero96', tags: ['minimap', 'navigation'] },
  { name: 'Mouse Tweaks', description: 'Inventory management', version: '2.24', category: 'Mods', downloads: '12M+', rating: 4.7, author: 'YaLTeR', tags: ['inventory', 'ui', 'quality'] },
  { name: 'Inventory Tweaks', description: 'Inventory sorting', version: '1.0.0', category: 'Mods', downloads: '10M+', rating: 4.5, author: 'Kobata', tags: ['inventory', 'sorting'] },
  { name: 'AppleSkin', description: 'Food saturation display', version: '2.5.0', category: 'Mods', downloads: '8M+', rating: 4.6, author: 'squeek502', tags: ['food', 'hud', 'quality'] },
  { name: 'Controlling', description: 'Keybind management', version: '12.0.0', category: 'Mods', downloads: '10M+', rating: 4.5, author: 'Jaredlll08', tags: ['keybinds', 'controls', 'ui'] },
  { name: 'WorldEdit (Mod)', description: 'In-game world editor', version: '7.2.15', category: 'Mods', downloads: '15M+', rating: 4.9, author: 'EngineHub', tags: ['worldedit', 'building', 'tools'] },
  { name: 'Lucky Blocks', description: 'Random reward blocks', version: '11.2.0', category: 'Mods', downloads: '8M+', rating: 4.4, author: 'PlayerInventor', tags: ['lucky', 'random', 'rewards'] },
  { name: 'Morpheus', description: 'Sleep voting system', version: '4.5.0', category: 'Mods', downloads: '5M+', rating: 4.6, author: 'Quetzi', tags: ['sleep', 'voting', 'night'] },
  { name: 'Iron Chests', description: 'Expanded storage', version: '14.0.0', category: 'Mods', downloads: '15M+', rating: 4.7, author: 'progwml6', tags: ['storage', 'chests', 'inventory'] },
  { name: 'Iron Backpacks', description: 'Portable storage', version: '3.0.0', category: 'Mods', downloads: '5M+', rating: 4.5, author: 'progwml6', tags: ['storage', 'backpacks', 'portable'] },
];

export const categories = [
  'All',
  'Core',
  'API',
  'Permissions',
  'World',
  'Economy',
  'Protection',
  'Gameplay',
  'Chat',
  'Teleportation',
  'Admin',
  'Utilities',
  'Minigames',
  'Custom',
  'Crates',
  'Cosmetics',
  'Performance',
  'Mods',
];
