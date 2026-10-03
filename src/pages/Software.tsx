import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Package, Zap, Shield, Code } from 'lucide-react';

interface Software {
  name: string;
  description: string;
  versions: string[];
  icon: string;
  color: string;
  popular: boolean;
  type: 'vanilla' | 'modded' | 'performance';
}

const software: Software[] = [
  {
    name: 'Vanilla',
    description: 'Official Minecraft server from Mojang. No modifications.',
    versions: ['1.20.4', '1.20.3', '1.20.2', '1.20.1', '1.19.4'],
    icon: '⛏️',
    color: 'from-mc-green to-mc-green-dark',
    popular: false,
    type: 'vanilla',
  },
  {
    name: 'Paper',
    description: 'High performance fork of Spigot. Optimized for speed.',
    versions: ['1.20.4', '1.20.3', '1.20.2', '1.20.1', '1.19.4'],
    icon: '📄',
    color: 'from-blue to-blue/80',
    popular: true,
    type: 'performance',
  },
  {
    name: 'Fabric',
    description: 'Lightweight modding platform. Fast updates and mods.',
    versions: ['1.20.4', '1.20.3', '1.20.2', '1.20.1'],
    icon: '🧵',
    color: 'from-amber to-orange',
    popular: false,
    type: 'modded',
  },
  {
    name: 'Forge',
    description: 'The classic modding platform. Largest mod library.',
    versions: ['1.20.4', '1.20.2', '1.20.1', '1.19.4', '1.18.2'],
    icon: '🔨',
    color: 'from-orange to-red',
    popular: false,
    type: 'modded',
  },
  {
    name: 'Spigot',
    description: 'Popular server mod with plugin support and optimizations.',
    versions: ['1.20.4', '1.20.3', '1.20.2', '1.20.1', '1.19.4'],
    icon: '🌶️',
    color: 'from-red to-red/80',
    popular: false,
    type: 'performance',
  },
  {
    name: 'Purpur',
    description: 'Fork of Paper with gameplay mechanics and configuration.',
    versions: ['1.20.4', '1.20.3', '1.20.2', '1.20.1'],
    icon: '🟣',
    color: 'from-purple to-purple/80',
    popular: false,
    type: 'performance',
  },
];

export default function Software() {
  const [selectedSoftware, setSelectedSoftware] = useState<string>('Paper');
  const [selectedVersion, setSelectedVersion] = useState<string>('1.20.4');

  const currentSoftware = software.find(s => s.name === selectedSoftware);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Server Software</h1>
        <p className="text-text-secondary text-sm mt-1">Choose your server software and version</p>
      </div>

      {/* Current Software */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bg-card border border-border rounded-xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">Current Software</h3>
              <p className="text-xs text-text-muted">Paper 1.20.4</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-mc-green/10 text-mc-green text-xs font-medium rounded-full">
            Installed
          </span>
        </div>
      </motion.div>

      {/* Software Selection */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3">Available Software</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {software.map((sw, index) => (
            <motion.button
              key={sw.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => {
                setSelectedSoftware(sw.name);
                setSelectedVersion(sw.versions[0]);
              }}
              className={`relative bg-bg-card border rounded-xl p-5 text-left transition-all hover:border-border-light ${
                selectedSoftware === sw.name
                  ? 'border-mc-green/50 ring-1 ring-mc-green/20'
                  : 'border-border'
              }`}
            >
              {sw.popular && (
                <div className="absolute -top-2 right-3">
                  <span className="bg-mc-green text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${sw.color} flex items-center justify-center`}>
                    <span className="text-xl">{sw.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{sw.name}</h3>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      sw.type === 'vanilla'
                        ? 'bg-mc-green/10 text-mc-green'
                        : sw.type === 'modded'
                        ? 'bg-amber/10 text-amber'
                        : 'bg-blue/10 text-blue'
                    }`}>
                      {sw.type}
                    </span>
                  </div>
                </div>
                {selectedSoftware === sw.name && (
                  <Check size={20} className="text-mc-green" />
                )}
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">{sw.description}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Version Selection */}
      {currentSoftware && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-text-primary mb-4">Select Version</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {currentSoftware.versions.map((version) => (
              <button
                key={version}
                onClick={() => setSelectedVersion(version)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedVersion === version
                    ? 'bg-mc-green text-white'
                    : 'bg-bg-tertiary text-text-secondary hover:bg-bg-hover'
                }`}
              >
                {version}
              </button>
            ))}
          </div>

          <div className="p-4 bg-bg-tertiary rounded-lg mb-4">
            <p className="text-sm text-text-secondary mb-2">
              You are about to install <span className="text-mc-green font-medium">{selectedSoftware} {selectedVersion}</span>
            </p>
            <p className="text-xs text-text-muted">
              This will replace your current server software. Your worlds and configurations will be preserved.
            </p>
          </div>

          <button className="w-full py-2.5 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <Package size={18} />
            Install {selectedSoftware} {selectedVersion}
          </button>
        </motion.div>
      )}
    </div>
  );
}
