import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Shield, Ban, Search, MoreVertical, Crown, Trash2 } from 'lucide-react';

interface Player {
  name: string;
  uuid: string;
  online: boolean;
  operator: boolean;
  joinedAt: string;
  playtime: string;
}

const onlinePlayers: Player[] = [
  { name: 'Steve', uuid: '1234-5678-9012', online: true, operator: true, joinedAt: '14:25', playtime: '2h 15m' },
  { name: 'Notch', uuid: '2345-6789-0123', online: true, operator: false, joinedAt: '14:32', playtime: '1h 48m' },
  { name: 'Herobrine', uuid: '3456-7890-1234', online: true, operator: false, joinedAt: '14:45', playtime: '1h 35m' },
];

const offlinePlayers: Player[] = [
  { name: 'Alex', uuid: '4567-8901-2345', online: false, operator: false, joinedAt: 'Yesterday', playtime: '12h 30m' },
  { name: 'CreeperSlayer', uuid: '5678-9012-3456', online: false, operator: false, joinedAt: '2 days ago', playtime: '8h 15m' },
  { name: 'DiamondMiner', uuid: '6789-0123-4567', online: false, operator: true, joinedAt: '3 days ago', playtime: '25h 40m' },
  { name: 'EnderDragon', uuid: '7890-1234-5678', online: false, operator: false, joinedAt: '1 week ago', playtime: '45h 20m' },
];

const bannedPlayers = ['Griefer123', 'ToxicPlayer', 'Hacker99'];

export default function Players() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'online' | 'offline' | 'whitelist' | 'banned'>('online');

  const allPlayers = [...onlinePlayers, ...offlinePlayers];
  const filteredPlayers = allPlayers.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Players</h1>
          <p className="text-text-secondary text-sm mt-1">Manage players, whitelist, and bans</p>
        </div>
        <button className="px-4 py-2 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <UserPlus size={16} />
          Add Player
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Online', value: onlinePlayers.length, color: 'text-mc-green' },
          { label: 'Total Players', value: allPlayers.length, color: 'text-blue' },
          { label: 'Operators', value: 2, color: 'text-yellow' },
          { label: 'Banned', value: bannedPlayers.length, color: 'text-red' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-bg-card border border-border rounded-xl p-4"
          >
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        {['online', 'offline', 'whitelist', 'banned'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors border-b-2 ${
              activeTab === tab
                ? 'border-mc-green text-mc-green'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            {tab}
            {tab === 'online' && <span className="ml-2 text-xs bg-mc-green/20 text-mc-green px-1.5 py-0.5 rounded">{onlinePlayers.length}</span>}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center bg-bg-card border border-border rounded-lg px-3 py-2">
        <Search size={16} className="text-text-muted mr-2" />
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-sm text-text-primary placeholder-text-muted outline-none w-full"
        />
      </div>

      {/* Player List */}
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        {(activeTab === 'online' || activeTab === 'offline') && (
          <div className="divide-y divide-border">
            {(activeTab === 'online' ? onlinePlayers : offlinePlayers).map((player, index) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 hover:bg-bg-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  {/* Minecraft-style head */}
                  <div className="w-10 h-10 bg-gradient-to-br from-mc-green to-mc-green-dark rounded-sm flex items-center justify-center pixel-border">
                    <span className="text-white font-bold text-sm">{player.name[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-text-primary">{player.name}</span>
                      {player.operator && <Crown size={14} className="text-yellow" />}
                    </div>
                    <p className="text-xs text-text-muted">
                      {player.online ? `Joined at ${player.joinedAt} • ${player.playtime}` : `Last seen: ${player.joinedAt}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    player.online
                      ? 'bg-mc-green/10 text-mc-green'
                      : 'bg-text-muted/10 text-text-muted'
                  }`}>
                    {player.online ? 'Online' : 'Offline'}
                  </span>
                  <button className="p-1.5 rounded hover:bg-bg-tertiary transition-colors">
                    <MoreVertical size={16} className="text-text-muted" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'whitelist' && (
          <div className="p-8 text-center">
            <Shield size={48} className="text-text-muted mx-auto mb-3" />
            <p className="text-text-secondary">Whitelist is disabled</p>
            <button className="mt-4 px-4 py-2 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-sm font-medium transition-colors">
              Enable Whitelist
            </button>
          </div>
        )}

        {activeTab === 'banned' && (
          <div className="divide-y divide-border">
            {bannedPlayers.map((player, index) => (
              <motion.div
                key={player}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 hover:bg-bg-hover transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red/20 rounded-sm flex items-center justify-center">
                    <Ban size={20} className="text-red" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-text-primary">{player}</span>
                    <p className="text-xs text-text-muted">Banned permanently</p>
                  </div>
                </div>
                <button className="p-1.5 rounded hover:bg-bg-tertiary transition-colors text-red">
                  <Trash2 size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
