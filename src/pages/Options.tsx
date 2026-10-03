import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, RotateCw } from 'lucide-react';

interface ServerProperty {
  key: string;
  label: string;
  value: string | number | boolean;
  type: 'text' | 'number' | 'select' | 'boolean';
  options?: string[];
  description: string;
  category: string;
}

const properties: ServerProperty[] = [
  { key: 'gamemode', label: 'Game Mode', value: 'survival', type: 'select', options: ['survival', 'creative', 'adventure', 'spectator'], description: 'Default game mode for players', category: 'Gameplay' },
  { key: 'difficulty', label: 'Difficulty', value: 'normal', type: 'select', options: ['peaceful', 'easy', 'normal', 'hard'], description: 'Server difficulty level', category: 'Gameplay' },
  { key: 'pvp', label: 'PvP', value: true, type: 'boolean', description: 'Allow player vs player combat', category: 'Gameplay' },
  { key: 'allow-flight', label: 'Allow Flight', value: false, type: 'boolean', description: 'Allow players to fly (requires creative or plugin)', category: 'Gameplay' },
  { key: 'force-gamemode', label: 'Force Game Mode', value: false, type: 'boolean', description: 'Force players to join in default game mode', category: 'Gameplay' },
  { key: 'max-players', label: 'Max Players', value: 20, type: 'number', description: 'Maximum number of players', category: 'Server' },
  { key: 'view-distance', label: 'View Distance', value: 10, type: 'number', description: 'Server-side view distance in chunks', category: 'Server' },
  { key: 'spawn-protection', label: 'Spawn Protection', value: 16, type: 'number', description: 'Spawn protection radius in blocks', category: 'Server' },
  { key: 'motd', label: 'MOTD', value: 'A Minecraft Server', type: 'text', description: 'Message of the day shown in server list', category: 'Server' },
  { key: 'online-mode', label: 'Online Mode', value: true, type: 'boolean', description: 'Verify player accounts with Mojang', category: 'Server' },
  { key: 'white-list', label: 'Whitelist', value: false, type: 'boolean', description: 'Enable server whitelist', category: 'Server' },
  { key: 'spawn-monsters', label: 'Spawn Monsters', value: true, type: 'boolean', description: 'Allow hostile mobs to spawn', category: 'World' },
  { key: 'spawn-animals', label: 'Spawn Animals', value: true, type: 'boolean', description: 'Allow animals to spawn', category: 'World' },
  { key: 'spawn-npcs', label: 'Spawn NPCs', value: true, type: 'boolean', description: 'Allow villagers and NPCs to spawn', category: 'World' },
  { key: 'generate-structures', label: 'Generate Structures', value: true, type: 'boolean', description: 'Generate structures in new chunks', category: 'World' },
];

export default function Options() {
  const [settings, setSettings] = useState<Record<string, any>>(
    properties.reduce((acc, prop) => ({ ...acc, [prop.key]: prop.value }), {})
  );

  const handleChange = (key: string, value: any) => {
    setSettings({ ...settings, [key]: value });
  };

  const handleSave = () => {
    alert('Settings saved! Server restart required for some changes.');
  };

  const handleReset = () => {
    setSettings(properties.reduce((acc, prop) => ({ ...acc, [prop.key]: prop.value }), {}));
  };

  const categories = Array.from(new Set(properties.map(p => p.category)));

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Server Options</h1>
          <p className="text-text-secondary text-sm mt-1">Configure server.properties</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-bg-card border border-border text-text-secondary hover:bg-bg-hover rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <RotateCw size={16} />
            Reset
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Settings by Category */}
      {categories.map((category, catIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: catIndex * 0.1 }}
          className="bg-bg-card border border-border rounded-xl overflow-hidden"
        >
          <div className="px-5 py-3 border-b border-border bg-bg-tertiary">
            <h2 className="text-sm font-semibold text-text-primary">{category}</h2>
          </div>
          <div className="divide-y divide-border">
            {properties.filter(p => p.category === category).map((prop) => (
              <div key={prop.key} className="px-5 py-4 hover:bg-bg-hover transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <label className="text-sm font-medium text-text-primary">{prop.label}</label>
                    <p className="text-xs text-text-muted mt-0.5">{prop.description}</p>
                  </div>
                  <div className="ml-4">
                    {prop.type === 'select' && (
                      <select
                        value={settings[prop.key]}
                        onChange={(e) => handleChange(prop.key, e.target.value)}
                        className="bg-bg-tertiary border border-border rounded-lg px-3 py-1.5 text-sm text-text-primary outline-none focus:border-mc-green/50 transition-colors"
                      >
                        {prop.options?.map((option) => (
                          <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </option>
                        ))}
                      </select>
                    )}
                    {prop.type === 'number' && (
                      <input
                        type="number"
                        value={settings[prop.key]}
                        onChange={(e) => handleChange(prop.key, parseInt(e.target.value))}
                        className="bg-bg-tertiary border border-border rounded-lg px-3 py-1.5 text-sm text-text-primary outline-none focus:border-mc-green/50 transition-colors w-24"
                      />
                    )}
                    {prop.type === 'text' && (
                      <input
                        type="text"
                        value={settings[prop.key]}
                        onChange={(e) => handleChange(prop.key, e.target.value)}
                        className="bg-bg-tertiary border border-border rounded-lg px-3 py-1.5 text-sm text-text-primary outline-none focus:border-mc-green/50 transition-colors w-64"
                      />
                    )}
                    {prop.type === 'boolean' && (
                      <button
                        onClick={() => handleChange(prop.key, !settings[prop.key])}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          settings[prop.key] ? 'bg-mc-green' : 'bg-bg-tertiary border border-border'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            settings[prop.key] ? 'translate-x-6' : ''
                          }`}
                        ></span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
