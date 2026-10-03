import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Play,
  Square,
  RotateCw,
  Trash2,
  Plus,
  MapPin,
  Cpu,
  HardDrive,
  MemoryStick,
  MoreVertical,
  Filter,
  Search,
  Globe,
  Shield,
  Terminal,
} from 'lucide-react';

interface ServerData {
  id: string;
  name: string;
  location: string;
  region: string;
  status: 'running' | 'stopped' | 'starting' | 'error';
  plan: string;
  cpu: number;
  ram: number;
  storage: number;
  ip: string;
  os: string;
  uptime: string;
}

const serversData: ServerData[] = [
  {
    id: '1',
    name: 'web-prod-01',
    location: 'Virginia, US',
    region: 'us-east-1',
    status: 'running',
    plan: 'Pro 4vCPU',
    cpu: 45,
    ram: 62,
    storage: 38,
    ip: '10.0.1.45',
    os: 'Ubuntu 22.04',
    uptime: '45d 12h',
  },
  {
    id: '2',
    name: 'api-prod-01',
    location: 'Frankfurt, DE',
    region: 'eu-west-1',
    status: 'running',
    plan: 'Pro 8vCPU',
    cpu: 78,
    ram: 81,
    storage: 55,
    ip: '10.0.2.12',
    os: 'Debian 12',
    uptime: '30d 8h',
  },
  {
    id: '3',
    name: 'db-primary',
    location: 'Oregon, US',
    region: 'us-west-2',
    status: 'running',
    plan: 'Enterprise 16vCPU',
    cpu: 34,
    ram: 55,
    storage: 72,
    ip: '10.0.3.8',
    os: 'Ubuntu 22.04',
    uptime: '90d 4h',
  },
  {
    id: '4',
    name: 'cache-redis-01',
    location: 'Tokyo, JP',
    region: 'ap-northeast-1',
    status: 'running',
    plan: 'Basic 2vCPU',
    cpu: 22,
    ram: 38,
    storage: 15,
    ip: '10.0.4.22',
    os: 'Alpine Linux',
    uptime: '15d 6h',
  },
  {
    id: '5',
    name: 'worker-01',
    location: 'Virginia, US',
    region: 'us-east-1',
    status: 'stopped',
    plan: 'Pro 4vCPU',
    cpu: 0,
    ram: 0,
    storage: 42,
    ip: '10.0.1.89',
    os: 'Ubuntu 22.04',
    uptime: '-',
  },
  {
    id: '6',
    name: 'staging-web',
    location: 'London, UK',
    region: 'eu-west-2',
    status: 'running',
    plan: 'Basic 2vCPU',
    cpu: 12,
    ram: 28,
    storage: 25,
    ip: '10.0.5.11',
    os: 'Ubuntu 24.04',
    uptime: '7d 2h',
  },
];

export default function Servers() {
  const [servers, setServers] = useState<ServerData[]>(serversData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedServer, setSelectedServer] = useState<string | null>(null);

  const filteredServers = servers.filter((server) => {
    const matchesSearch =
      server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || server.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleAction = (serverId: string, action: string) => {
    setServers((prev) =>
      prev.map((s) => {
        if (s.id === serverId) {
          switch (action) {
            case 'start':
              return { ...s, status: 'running' as const, cpu: 15, ram: 20 };
            case 'stop':
              return { ...s, status: 'stopped' as const, cpu: 0, ram: 0 };
            case 'restart':
              return { ...s, status: 'running' as const };
            default:
              return s;
          }
        }
        return s;
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'stopped':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'starting':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'error':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-dark-500/10 text-dark-400 border-dark-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">Servers</h1>
          <p className="text-dark-400 text-sm mt-1">
            Manage and monitor your cloud servers
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Plus size={16} />
          Deploy New
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center bg-dark-800 border border-dark-700 rounded-lg px-3 py-2 flex-1">
          <Search size={16} className="text-dark-400 mr-2" />
          <input
            type="text"
            placeholder="Search servers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-sm text-dark-200 placeholder-dark-400 outline-none w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-dark-400" />
          {['all', 'running', 'stopped'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors capitalize ${
                filterStatus === status
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 border border-dark-700 text-dark-300 hover:bg-dark-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Server Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredServers.map((server, index) => (
          <motion.div
            key={server.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`bg-dark-800 border rounded-xl p-5 transition-all cursor-pointer ${
              selectedServer === server.id
                ? 'border-primary-500/50 ring-1 ring-primary-500/20'
                : 'border-dark-700 hover:border-dark-600'
            }`}
            onClick={() => setSelectedServer(selectedServer === server.id ? null : server.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dark-700">
                  <Server size={20} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-dark-100">{server.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-dark-400" />
                    <span className="text-xs text-dark-400">{server.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                    server.status
                  )}`}
                >
                  {server.status}
                </span>
                <button className="p-1 rounded hover:bg-dark-700">
                  <MoreVertical size={16} className="text-dark-400" />
                </button>
              </div>
            </div>

            {/* Resource Bars */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <Cpu size={14} className="text-dark-400" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-dark-400">CPU</span>
                    <span className="text-xs text-dark-300">{server.cpu}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-dark-700 rounded-full">
                    <div
                      className={`h-1.5 rounded-full transition-all ${
                        server.cpu > 70
                          ? 'bg-red-500'
                          : server.cpu > 40
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                      style={{ width: `${server.cpu}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MemoryStick size={14} className="text-dark-400" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-dark-400">RAM</span>
                    <span className="text-xs text-dark-300">{server.ram}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-dark-700 rounded-full">
                    <div
                      className={`h-1.5 rounded-full transition-all ${
                        server.ram > 70
                          ? 'bg-red-500'
                          : server.ram > 40
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                      style={{ width: `${server.ram}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HardDrive size={14} className="text-dark-400" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs text-dark-400">Storage</span>
                    <span className="text-xs text-dark-300">{server.storage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-dark-700 rounded-full">
                    <div
                      className={`h-1.5 rounded-full transition-all ${
                        server.storage > 70
                          ? 'bg-red-500'
                          : server.storage > 40
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                      style={{ width: `${server.storage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Server Info */}
            <div className="flex items-center gap-4 text-xs text-dark-400 mb-4">
              <span className="flex items-center gap-1">
                <Globe size={12} />
                {server.ip}
              </span>
              <span>{server.os}</span>
              <span>{server.uptime}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-3 border-t border-dark-700">
              {server.status === 'running' ? (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction(server.id, 'stop');
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors text-xs font-medium"
                  >
                    <Square size={12} />
                    Stop
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAction(server.id, 'restart');
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors text-xs font-medium"
                  >
                    <RotateCw size={12} />
                    Restart
                  </button>
                </>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction(server.id, 'start');
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors text-xs font-medium"
                >
                  <Play size={12} />
                  Start
                </button>
              )}
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 transition-colors text-xs font-medium ml-auto">
                <Terminal size={12} />
                Console
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700 text-dark-300 hover:bg-dark-600 transition-colors text-xs font-medium">
                <Shield size={12} />
                Firewall
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServers((prev) => prev.filter((s) => s.id !== server.id));
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-700 text-red-400 hover:bg-red-500/10 transition-colors text-xs font-medium"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredServers.length === 0 && (
        <div className="text-center py-12">
          <Server size={48} className="text-dark-600 mx-auto mb-4" />
          <p className="text-dark-400">No servers found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
