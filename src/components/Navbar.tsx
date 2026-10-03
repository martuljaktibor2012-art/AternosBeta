import { Power, Users, Clock, Wifi } from 'lucide-react';

interface NavbarProps {
  serverStatus: 'online' | 'offline' | 'starting';
  setServerStatus: (status: 'online' | 'offline' | 'starting') => void;
}

export default function Navbar({ serverStatus, setServerStatus }: NavbarProps) {
  const handlePowerClick = () => {
    if (serverStatus === 'offline') {
      setServerStatus('starting');
      setTimeout(() => setServerStatus('online'), 3000);
    } else if (serverStatus === 'online') {
      setServerStatus('offline');
    }
  };

  return (
    <nav className="bg-bg-secondary border-b border-border px-4 py-2.5 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-mc-green rounded-sm flex items-center justify-center pixel-border">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-lg font-bold text-text-primary hidden sm:block">MineHost</span>
        </div>

        {/* Server Name */}
        <div className="hidden md:flex items-center gap-2 bg-bg-tertiary px-3 py-1.5 rounded-lg border border-border">
          <span className="text-sm text-text-secondary">Server:</span>
          <span className="text-sm font-medium text-text-primary">MyMinecraftServer</span>
        </div>
      </div>

      {/* Server Status */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Users size={14} />
            <span>3/20</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Clock size={14} />
            <span>4h 23m</span>
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Wifi size={14} />
            <span>play.myserver.net</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${
          serverStatus === 'online'
            ? 'bg-mc-green/10 border-mc-green/30 text-mc-green'
            : serverStatus === 'starting'
            ? 'bg-yellow/10 border-yellow/30 text-yellow'
            : 'bg-red/10 border-red/30 text-red'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            serverStatus === 'online'
              ? 'bg-mc-green animate-pulse-green'
              : serverStatus === 'starting'
              ? 'bg-yellow animate-pulse'
              : 'bg-red'
          }`}></div>
          <span className="text-xs font-medium capitalize">{serverStatus}</span>
        </div>

        {/* Power Button */}
        <button
          onClick={handlePowerClick}
          disabled={serverStatus === 'starting'}
          className={`p-2 rounded-lg transition-all ${
            serverStatus === 'online'
              ? 'bg-red/10 hover:bg-red/20 text-red'
              : serverStatus === 'starting'
              ? 'bg-yellow/10 text-yellow cursor-not-allowed'
              : 'bg-mc-green/10 hover:bg-mc-green/20 text-mc-green'
          }`}
        >
          <Power size={20} />
        </button>
      </div>
    </nav>
  );
}
