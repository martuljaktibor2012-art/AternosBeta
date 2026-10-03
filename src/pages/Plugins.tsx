import { useState } from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Download, Trash2, Search, Check, ExternalLink } from 'lucide-react';

interface Plugin {
  name: string;
  description: string;
  version: string;
  installed: boolean;
  enabled: boolean;
  category: string;
  downloads: string;
  rating: number;
}

const installedPlugins: Plugin[] = [
  { name: 'EssentialsX', description: 'Core plugin for server management', version: '2.20.1', installed: true, enabled: true, category: 'Core', downloads: '10M+', rating: 4.8 },
  { name: 'WorldEdit', description: 'In-game map editor', version: '7.2.15', installed: true, enabled: true, category: 'World', downloads: '8M+', rating: 4.9 },
  { name: 'WorldGuard', description: 'Region protection and flags', version: '7.0.9', installed: true, enabled: true, category: 'World', downloads: '7M+', rating: 4.7 },
  { name: 'LuckPerms', description: 'Permissions plugin', version: '5.4.102', installed: true, enabled: true, category: 'Core', downloads: '6M+', rating: 4.9 },
];

const availablePlugins: Plugin[] = [
  { name: 'Vault', description: 'API for economy, permissions, and chat', version: '1.7.3', installed: false, enabled: false, category: 'API', downloads: '12M+', rating: 4.8 },
  { name: 'PlaceholderAPI', description: 'Placeholder expansion system', version: '2.11.5', installed: false, enabled: false, category: 'API', downloads: '5M+', rating: 4.7 },
  { name: 'GriefPrevention', description: 'Anti-griefing plugin', version: '16.18.2', installed: false, enabled: false, category: 'Protection', downloads: '4M+', rating: 4.6 },
  { name: 'Dynmap', description: 'Real-time web map for your server', version: '3.7', installed: false, enabled: false, category: 'World', downloads: '3M+', rating: 4.5 },
  { name: 'CoreProtect', description: 'Rollback and logging', version: '2.22.1', installed: false, enabled: false, category: 'Protection', downloads: '2M+', rating: 4.8 },
  { name: 'mcMMO', description: 'RPG-style skill leveling', version: '2.1.228', installed: false, enabled: false, category: 'Gameplay', downloads: '5M+', rating: 4.6 },
];

export default function Plugins() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'installed' | 'browse'>('installed');
  const [plugins, setPlugins] = useState<Plugin[]>(installedPlugins);

  const handleInstall = (pluginName: string) => {
    const plugin = availablePlugins.find(p => p.name === pluginName);
    if (plugin) {
      setPlugins([...plugins, { ...plugin, installed: true, enabled: true }]);
    }
  };

  const handleUninstall = (pluginName: string) => {
    setPlugins(plugins.filter(p => p.name !== pluginName));
  };

  const filteredAvailable = availablePlugins.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Plugins</h1>
          <p className="text-text-secondary text-sm mt-1">Manage server plugins and extensions</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab('installed')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'installed'
              ? 'border-mc-green text-mc-green'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Installed ({plugins.length})
        </button>
        <button
          onClick={() => setActiveTab('browse')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'browse'
              ? 'border-mc-green text-mc-green'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Browse Plugins
        </button>
      </div>

      {activeTab === 'installed' && (
        <div className="space-y-3">
          {plugins.map((plugin, index) => (
            <motion.div
              key={plugin.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-bg-card border border-border rounded-xl p-4 hover:border-border-light transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple/20 rounded-lg flex items-center justify-center">
                    <Puzzle size={20} className="text-purple" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-text-primary">{plugin.name}</h3>
                      <span className="text-xs text-text-muted">v{plugin.version}</span>
                      <span className={`px-1.5 py-0.5 rounded text-xs ${
                        plugin.enabled
                          ? 'bg-mc-green/10 text-mc-green'
                          : 'bg-text-muted/10 text-text-muted'
                      }`}>
                        {plugin.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary mt-1">{plugin.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(plugin.name)}
                  className="p-1.5 rounded hover:bg-red/10 text-text-muted hover:text-red transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'browse' && (
        <>
          {/* Search */}
          <div className="flex items-center bg-bg-card border border-border rounded-lg px-3 py-2">
            <Search size={16} className="text-text-muted mr-2" />
            <input
              type="text"
              placeholder="Search plugins..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-sm text-text-primary placeholder-text-muted outline-none w-full"
            />
          </div>

          {/* Plugin Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAvailable.map((plugin, index) => (
              <motion.div
                key={plugin.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-bg-card border border-border rounded-xl p-4 hover:border-border-light transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple/20 rounded-lg flex items-center justify-center">
                      <Puzzle size={20} className="text-purple" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">{plugin.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-text-muted">v{plugin.version}</span>
                        <span className="text-xs text-text-muted">•</span>
                        <span className="text-xs text-text-muted">{plugin.downloads}</span>
                      </div>
                    </div>
                  </div>
                  <button className="p-1.5 rounded hover:bg-bg-hover text-text-muted transition-colors">
                    <ExternalLink size={14} />
                  </button>
                </div>

                <p className="text-xs text-text-secondary mb-3">{plugin.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={`text-xs ${i < Math.floor(plugin.rating) ? 'text-yellow' : 'text-text-muted'}`}>
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-text-muted ml-1">{plugin.rating}</span>
                  </div>
                  <button
                    onClick={() => handleInstall(plugin.name)}
                    className="px-3 py-1.5 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                  >
                    <Download size={12} />
                    Install
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
