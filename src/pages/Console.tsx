import { useState, useEffect, useRef } from 'react';
import { Send, Trash2, Download, Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface ConsoleProps {
  serverStatus: 'online' | 'offline' | 'starting';
}

interface LogEntry {
  time: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
}

const sampleLogs: LogEntry[] = [
  { time: '14:23:01', level: 'info', message: '[Server] Starting minecraft server version 1.20.4' },
  { time: '14:23:02', level: 'info', message: '[Server] Loading properties' },
  { time: '14:23:02', level: 'info', message: '[Server] Default game type: SURVIVAL' },
  { time: '14:23:03', level: 'info', message: '[Server] Generating keypair' },
  { time: '14:23:04', level: 'info', message: '[Server] Starting Minecraft server on *:25565' },
  { time: '14:23:04', level: 'info', message: '[Server] Using epoll channel type' },
  { time: '14:23:05', level: 'info', message: '[Server] Preparing level "world"' },
  { time: '14:23:06', level: 'info', message: '[Server] Preparing start region for dimension minecraft:overworld' },
  { time: '14:23:08', level: 'info', message: '[Server] Time elapsed: 2341 ms' },
  { time: '14:23:08', level: 'info', message: '[Server] Done (4.567s)! For help, type "help"' },
  { time: '14:25:12', level: 'info', message: '[Server] Steve[/192.168.1.100:54321] logged in with entity id 123 at ([world]100.5, 64.0, -200.3)' },
  { time: '14:26:45', level: 'info', message: '[Server] Alex[/192.168.1.101:54322] logged in with entity id 456 at ([world]102.3, 64.0, -198.7)' },
  { time: '14:28:33', level: 'warn', message: '[Server] Can\'t keep up! Is the server overloaded? Running 2034ms behind' },
  { time: '14:30:01', level: 'info', message: '[Server] <Steve> Hello everyone!' },
  { time: '14:30:15', level: 'info', message: '[Server] <Alex> Hi Steve!' },
  { time: '14:32:44', level: 'info', message: '[Server] Notch[/192.168.1.102:54323] logged in with entity id 789 at ([world]98.1, 64.0, -201.5)' },
  { time: '14:35:22', level: 'info', message: '[Server] Alex left the game' },
  { time: '14:38:10', level: 'info', message: '[Server] <Notch> This server is awesome!' },
];

export default function Console({ serverStatus }: ConsoleProps) {
  const [logs, setLogs] = useState<LogEntry[]>(sampleLogs);
  const [command, setCommand] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPaused) {
      consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isPaused]);

  // Simulate new log entries
  useEffect(() => {
    if (serverStatus !== 'online' || isPaused) return;

    const interval = setInterval(() => {
      const randomLogs = [
        { level: 'info' as const, message: '[Server] <Steve> Anyone want to trade?' },
        { level: 'info' as const, message: '[Server] <Notch> Check out my base!' },
        { level: 'info' as const, message: '[Server] Saving chunks for level \'ServerLevel[minecraft:overworld]\'' },
        { level: 'debug' as const, message: '[Server] ThreadedAnvilChunkStorage: Saved chunk (0, 0)' },
        { level: 'info' as const, message: '[Server] <Steve> Found diamonds!' },
      ];

      const randomLog = randomLogs[Math.floor(Math.random() * randomLogs.length)];
      const now = new Date();
      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

      setLogs(prev => [...prev, { time, ...randomLog }]);
    }, 5000);

    return () => clearInterval(interval);
  }, [serverStatus, isPaused]);

  const handleCommand = () => {
    if (!command.trim()) return;

    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    setLogs(prev => [...prev, {
      time,
      level: 'info',
      message: `> ${command}`
    }]);

    // Simulate response
    setTimeout(() => {
      const responseTime = new Date();
      const rTime = `${responseTime.getHours().toString().padStart(2, '0')}:${responseTime.getMinutes().toString().padStart(2, '0')}:${responseTime.getSeconds().toString().padStart(2, '0')}`;
      
      let response = '';
      if (command === 'list') {
        response = '[Server] There are 3/20 players online: Steve, Notch, Herobrine';
      } else if (command === 'help') {
        response = '[Server] Available commands: help, list, stop, save-all, difficulty, gamemode, time, weather';
      } else if (command === 'time query daytime') {
        response = '[Server] The time is 6000';
      } else {
        response = `[Server] Unknown command. Type "help" for available commands.`;
      }

      setLogs(prev => [...prev, { time: rTime, level: 'info', message: response }]);
    }, 500);

    setCommand('');
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case 'warn': return 'text-yellow';
      case 'error': return 'text-red';
      case 'debug': return 'text-text-muted';
      default: return 'text-text-secondary';
    }
  };

  return (
    <div className="p-6 space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Console</h1>
          <p className="text-text-secondary text-sm mt-1">View server logs and send commands</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`p-2 rounded-lg border transition-colors ${
              isPaused
                ? 'bg-yellow/10 border-yellow/30 text-yellow'
                : 'bg-bg-card border-border text-text-secondary hover:bg-bg-hover'
            }`}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:bg-bg-hover transition-colors">
            <Download size={16} />
          </button>
          <button
            onClick={() => setLogs([])}
            className="p-2 rounded-lg bg-bg-card border border-border text-text-secondary hover:bg-bg-hover transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Console Output */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 bg-bg-card border border-border rounded-xl overflow-hidden flex flex-col min-h-[500px]"
      >
        <div className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-2 py-0.5">
              <span className="text-text-muted select-none">[{log.time}]</span>
              <span className={getLogColor(log.level)}>{log.message}</span>
            </div>
          ))}
          {serverStatus === 'online' && !isPaused && (
            <div className="flex gap-2 py-0.5">
              <span className="text-text-muted select-none">[{new Date().toLocaleTimeString()}]</span>
              <span className="text-mc-green animate-console-blink">█</span>
            </div>
          )}
          <div ref={consoleEndRef} />
        </div>

        {/* Command Input */}
        {serverStatus === 'online' && (
          <div className="border-t border-border p-3 flex gap-2">
            <span className="text-mc-green font-mono text-sm select-none">{'>'}</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
              placeholder="Type a command... (try 'list' or 'help')"
              className="flex-1 bg-transparent text-sm text-text-primary font-mono outline-none placeholder-text-muted"
            />
            <button
              onClick={handleCommand}
              className="p-2 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
