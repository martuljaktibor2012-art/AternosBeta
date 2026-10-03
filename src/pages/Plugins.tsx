import { useState } from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Download, Trash2, Search, Check, ExternalLink, Filter, X } from 'lucide-react';
import { pluginsDatabase, categories, type Plugin } from '../data/plugins';

export default function Plugins() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'installed' | 'browse'>('installed');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [installedPlugins, setInstalledPlugins] = useState<Plugin[]>([
    pluginsDatabase.find(p => p.name === 'EssentialsX')!,
    pluginsDatabase.find(p => p.name === 'WorldEdit')!,
    pluginsDatabase.find(p => p.name === 'WorldGuard')!,
    pluginsDatabase.find(p => p.name === 'LuckPerms')!,
  ]);

  const handleInstall = (plugin: Plugin) => {
    if (!installedPlugins.find(p => p.name === plugin.name)) {
      setInstalledPlugins([...installedPlugins, plugin]);
    }
  };

  const handleUninstall = (pluginName: string) => {
    setInstalledPlugins(installedPlugins.filter(p => p.name !== pluginName));
  };

  const filteredPlugins = pluginsDatabase.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const availablePlugins = filteredPlugins.filter(p => !installedPlugins.find(ip => ip.name === p.name));

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Plugins & Mods</h1>
          <p className="text-text-secondary text-sm mt-1">Browse and install {pluginsDatabase.length}+ plugins and mods</p>
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
          Installed ({installedPlugins.length})
        </button>
        <button
          onClick={() => setActiveTab('browse')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'browse'
              ? 'border-mc-green text-mc-green'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          Browse ({availablePlugins.length})
        </button>
      </div>

      {activeTab === 'installed' && (
        <div className="space-y-3">
          {installedPlugins.length === 0 ? (
            <div className="text-center py-12">
              <Puzzle size={48} className="text-text-muted mx-auto mb-3" />
              <p className="text-text-secondary">No plugins installed yet</p>
              <button
                onClick={() => setActiveTab('browse')}
                className="mt-4 px-4 py-2 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-sm font-medium transition-colors"
              >
                Browse Plugins
              </button>
            </div>
          ) : (
            installedPlugins.map((plugin, index) => (
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
                        <span className="px-1.5 py-0.5 rounded text-xs bg-mc-green/10 text-mc-green">
                          Installed
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary mt-1">{plugin.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-text-muted">{plugin.category}</span>
                        <span className="text-xs text-text-muted">•</span>
                        <span className="text-xs text-text-muted">{plugin.downloads}</span>
                        <span className="text-xs text-text-muted">•</span>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-yellow">★</span>
                          <span className="text-xs text-text-muted">{plugin.rating}</span>
                        </div>
                      </div>
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
            ))
          )}
        </div>
      )}

      {activeTab === 'browse' && (
        <>
          {/* Search and Filter */}
          <div className="flex gap-3">
            <div className="flex-1 flex items-center bg-bg-card border border-border rounded-lg px-3 py-2">
              <Search size={16} className="text-text-muted mr-2" />
              <input
                type="text"
                placeholder="Search plugins, mods, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-sm text-text-primary placeholder-text-muted outline-none w-full"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-text-muted hover:text-text-primary">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-mc-green text-white'
                    : 'bg-bg-card border border-border text-text-secondary hover:bg-bg-hover'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Plugin Grid */}
          {availablePlugins.length === 0 ? (
            <div className="text-center py-12">
              <Puzzle size={48} className="text-text-muted mx-auto mb-3" />
              <p className="text-text-secondary">No plugins found</p>
              <p className="text-xs text-text-muted mt-1">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availablePlugins.map((plugin, index) => (
                <motion.div
                  key={plugin.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
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

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {plugin.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-bg-tertiary rounded text-xs text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-xs ${i < Math.floor(plugin.rating) ? 'text-yellow' : 'text-text-muted'}`}>
                            ★
                          </span>
                        ))}
                        <span className="text-xs text-text-muted ml-1">{plugin.rating}</span>
                      </div>
                      <span className="text-xs text-text-muted">by {plugin.author}</span>
                    </div>
                    <button
                      onClick={() => handleInstall(plugin)}
                      className="px-3 py-1.5 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                    >
                      <Download size={12} />
                      Install
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
