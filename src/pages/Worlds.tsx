import { motion } from 'framer-motion';
import { Globe, Download, Upload, Trash2, Clock, HardDrive, MoreVertical, Plus } from 'lucide-react';

interface World {
  name: string;
  type: 'overworld' | 'nether' | 'end';
  size: string;
  lastPlayed: string;
  seed: string;
}

const worlds: World[] = [
  { name: 'world', type: 'overworld', size: '1.2 GB', lastPlayed: 'Just now', seed: '-4172144976738932455' },
  { name: 'world_nether', type: 'nether', size: '342 MB', lastPlayed: 'Just now', seed: '-4172144976738932455' },
  { name: 'world_the_end', type: 'end', size: '128 MB', lastPlayed: '2 hours ago', seed: '-4172144976738932455' },
  { name: 'creative_world', type: 'overworld', size: '856 MB', lastPlayed: '3 days ago', seed: '78234987234987234' },
];

const backups = [
  { name: 'Auto Backup', date: 'Today, 12:00', size: '2.1 GB', type: 'auto' },
  { name: 'Manual Backup', date: 'Yesterday, 18:30', size: '2.0 GB', type: 'manual' },
  { name: 'Auto Backup', date: 'Yesterday, 12:00', size: '1.9 GB', type: 'auto' },
  { name: 'Auto Backup', date: '2 days ago, 12:00', size: '1.8 GB', type: 'auto' },
];

export default function Worlds() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Worlds</h1>
          <p className="text-text-secondary text-sm mt-1">Manage your server worlds and backups</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-bg-card border border-border text-text-secondary hover:bg-bg-hover rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Upload size={16} />
            Upload World
          </button>
          <button className="px-4 py-2 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Plus size={16} />
            Create Backup
          </button>
        </div>
      </div>

      {/* Worlds Grid */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3">Worlds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {worlds.map((world, index) => (
            <motion.div
              key={world.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-light transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    world.type === 'overworld'
                      ? 'bg-mc-green/20'
                      : world.type === 'nether'
                      ? 'bg-red/20'
                      : 'bg-purple/20'
                  }`}>
                    <Globe size={24} className={
                      world.type === 'overworld'
                        ? 'text-mc-green'
                        : world.type === 'nether'
                        ? 'text-red'
                        : 'text-purple'
                    } />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{world.name}</h3>
                    <p className="text-xs text-text-muted capitalize">{world.type}</p>
                  </div>
                </div>
                <button className="p-1.5 rounded hover:bg-bg-hover transition-colors">
                  <MoreVertical size={16} className="text-text-muted" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <HardDrive size={14} className="text-text-muted" />
                  <span className="text-xs text-text-secondary">{world.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-text-muted" />
                  <span className="text-xs text-text-secondary">{world.lastPlayed}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-1.5 bg-bg-tertiary hover:bg-bg-hover text-text-secondary rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1">
                  <Download size={12} />
                  Download
                </button>
                <button className="flex-1 px-3 py-1.5 bg-bg-tertiary hover:bg-bg-hover text-text-secondary rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1">
                  <Upload size={12} />
                  Replace
                </button>
                <button className="px-3 py-1.5 bg-red/10 hover:bg-red/20 text-red rounded-lg text-xs font-medium transition-colors">
                  <Trash2 size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Backups */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3">Backups</h2>
        <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
          <div className="divide-y divide-border">
            {backups.map((backup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 hover:bg-bg-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${
                    backup.type === 'auto' ? 'bg-blue/20' : 'bg-mc-green/20'
                  }`}>
                    <Download size={16} className={backup.type === 'auto' ? 'text-blue' : 'text-mc-green'} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-text-primary">{backup.name}</span>
                    <p className="text-xs text-text-muted">{backup.date} • {backup.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-bg-tertiary hover:bg-bg-hover text-text-secondary rounded-lg text-xs font-medium transition-colors">
                    Restore
                  </button>
                  <button className="px-3 py-1.5 bg-bg-tertiary hover:bg-bg-hover text-text-secondary rounded-lg text-xs font-medium transition-colors">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
