import { motion } from 'framer-motion';
import { Users, Clock, Cpu, HardDrive, Wifi, Shield, Zap, Globe, Package } from 'lucide-react';

interface DashboardProps {
  serverStatus: 'online' | 'offline' | 'starting';
  setServerStatus: (status: 'online' | 'offline' | 'starting') => void;
}

export default function Dashboard({ serverStatus, setServerStatus }: DashboardProps) {
  const handleStart = () => {
    setServerStatus('starting');
    setTimeout(() => setServerStatus('online'), 3000);
  };

  const handleStop = () => {
    setServerStatus('offline');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Server Dashboard</h1>
          <p className="text-text-secondary text-sm mt-1">Manage your Minecraft server</p>
        </div>
      </div>

      {/* Server Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bg-card border border-border rounded-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
              serverStatus === 'online'
                ? 'bg-mc-green/20'
                : serverStatus === 'starting'
                ? 'bg-yellow/20'
                : 'bg-red/20'
            }`}>
              <Globe size={32} className={
                serverStatus === 'online'
                  ? 'text-mc-green'
                  : serverStatus === 'starting'
                  ? 'text-yellow'
                  : 'text-red'
              } />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-primary">MyMinecraftServer</h2>
              <p className="text-text-secondary text-sm">Minecraft Java Edition 1.20.4</p>
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-2 h-2 rounded-full ${
                  serverStatus === 'online'
                    ? 'bg-mc-green animate-pulse-green'
                    : serverStatus === 'starting'
                    ? 'bg-yellow animate-pulse'
                    : 'bg-red'
                }`}></div>
                <span className={`text-sm font-medium capitalize ${
                  serverStatus === 'online'
                    ? 'text-mc-green'
                    : serverStatus === 'starting'
                    ? 'text-yellow'
                    : 'text-red'
                }`}>
                  {serverStatus === 'starting' ? 'Starting...' : serverStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {serverStatus === 'offline' ? (
              <button
                onClick={handleStart}
                className="px-6 py-2.5 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Zap size={18} />
                Start Server
              </button>
            ) : (
              <button
                onClick={handleStop}
                className="px-6 py-2.5 bg-red hover:bg-red/80 text-white rounded-lg font-medium transition-colors"
              >
                Stop Server
              </button>
            )}
          </div>
        </div>

        {serverStatus === 'starting' && (
          <div className="mt-4 p-4 bg-yellow/5 border border-yellow/20 rounded-lg">
            <div className="flex items-center gap-2 text-yellow">
              <div className="animate-spin w-4 h-4 border-2 border-yellow border-t-transparent rounded-full"></div>
              <span className="text-sm font-medium">Server is starting... Estimated time: ~30 seconds</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Players Online', value: '3/20', icon: Users, color: 'text-blue' },
          { label: 'Uptime', value: '4h 23m', icon: Clock, color: 'text-mc-green' },
          { label: 'CPU Usage', value: '23%', icon: Cpu, color: 'text-purple' },
          { label: 'RAM Usage', value: '1.2/4 GB', icon: HardDrive, color: 'text-orange' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-bg-card border border-border rounded-xl p-4 hover:border-border-light transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon size={20} className={stat.color} />
            </div>
            <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
            <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Server Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-text-primary mb-4">Server Information</h3>
          <div className="space-y-3">
            {[
              { label: 'Server Address', value: 'play.myserver.net', icon: Wifi },
              { label: 'Version', value: '1.20.4', icon: Package },
              { label: 'Game Mode', value: 'Survival', icon: Shield },
              { label: 'Difficulty', value: 'Normal', icon: Zap },
            ].map((info) => (
              <div key={info.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-2">
                  <info.icon size={16} className="text-text-muted" />
                  <span className="text-sm text-text-secondary">{info.label}</span>
                </div>
                <span className="text-sm font-medium text-text-primary">{info.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-bg-card border border-border rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-text-primary mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'Steve joined the server', time: '2 min ago', type: 'join' },
              { action: 'Alex left the server', time: '5 min ago', type: 'leave' },
              { action: 'Server started successfully', time: '4h 23m ago', type: 'system' },
              { action: 'Backup completed', time: '6h ago', type: 'system' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                <div className={`w-2 h-2 rounded-full mt-1.5 ${
                  activity.type === 'join'
                    ? 'bg-mc-green'
                    : activity.type === 'leave'
                    ? 'bg-red'
                    : 'bg-blue'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-text-primary">{activity.action}</p>
                  <p className="text-xs text-text-muted mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
