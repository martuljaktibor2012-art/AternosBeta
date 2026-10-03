import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Cpu,
  HardDrive,
  MemoryStick,
  Wifi,
  Clock,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  Minus,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

const cpuHistory = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  'web-prod-01': Math.floor(30 + Math.random() * 40),
  'api-prod-01': Math.floor(50 + Math.random() * 35),
  'db-primary': Math.floor(20 + Math.random() * 30),
}));

const memoryHistory = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  'web-prod-01': Math.floor(50 + Math.random() * 25),
  'api-prod-01': Math.floor(65 + Math.random() * 25),
  'db-primary': Math.floor(40 + Math.random() * 30),
}));

const networkHistory = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  inbound: +(1 + Math.random() * 3).toFixed(1),
  outbound: +(0.5 + Math.random() * 2.5).toFixed(1),
}));

const alerts = [
  {
    severity: 'critical',
    message: 'CPU usage exceeded 90% on api-prod-01',
    time: '5 min ago',
    server: 'api-prod-01',
  },
  {
    severity: 'warning',
    message: 'Disk usage at 85% on db-primary',
    time: '22 min ago',
    server: 'db-primary',
  },
  {
    severity: 'warning',
    message: 'Memory usage above 80% on api-prod-01',
    time: '1 hour ago',
    server: 'api-prod-01',
  },
  {
    severity: 'info',
    message: 'Server web-prod-01 auto-scaled up',
    time: '2 hours ago',
    server: 'web-prod-01',
  },
  {
    severity: 'info',
    message: 'SSL certificate renewed for *.example.com',
    time: '5 hours ago',
    server: 'all',
  },
];

const serverMetrics = [
  {
    name: 'web-prod-01',
    cpu: 45,
    cpuTrend: 'up',
    ram: 62,
    ramTrend: 'up',
    disk: 38,
    diskTrend: 'down',
    network: 2.4,
    networkTrend: 'up',
    latency: 12,
    latencyTrend: 'stable',
  },
  {
    name: 'api-prod-01',
    cpu: 78,
    cpuTrend: 'up',
    ram: 81,
    ramTrend: 'up',
    disk: 55,
    diskTrend: 'up',
    network: 4.1,
    networkTrend: 'up',
    latency: 8,
    latencyTrend: 'stable',
  },
  {
    name: 'db-primary',
    cpu: 34,
    cpuTrend: 'down',
    ram: 55,
    ramTrend: 'stable',
    disk: 72,
    diskTrend: 'up',
    network: 1.8,
    networkTrend: 'down',
    latency: 3,
    latencyTrend: 'stable',
  },
];

export default function Monitoring() {
  const [selectedMetric, setSelectedMetric] = useState<'cpu' | 'memory' | 'network'>('cpu');
  const [timeRange, setTimeRange] = useState('24h');

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={14} className="text-red-400" />;
      case 'down':
        return <TrendingDown size={14} className="text-emerald-400" />;
      default:
        return <Minus size={14} className="text-dark-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">Monitoring</h1>
          <p className="text-dark-400 text-sm mt-1">Real-time server performance metrics</p>
        </div>
        <div className="flex gap-1 bg-dark-800 border border-dark-700 rounded-lg p-1">
          {['1h', '6h', '24h', '7d', '30d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                timeRange === range
                  ? 'bg-primary-600 text-white'
                  : 'text-dark-400 hover:text-dark-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Selector */}
      <div className="flex gap-2">
        {[
          { key: 'cpu', icon: Cpu, label: 'CPU' },
          { key: 'memory', icon: MemoryStick, label: 'Memory' },
          { key: 'network', icon: Wifi, label: 'Network' },
        ].map((metric) => (
          <button
            key={metric.key}
            onClick={() => setSelectedMetric(metric.key as 'cpu' | 'memory' | 'network')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedMetric === metric.key
                ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
                : 'bg-dark-800 border border-dark-700 text-dark-300 hover:bg-dark-700'
            }`}
          >
            <metric.icon size={16} />
            {metric.label}
          </button>
        ))}
      </div>

      {/* Main Chart */}
      <motion.div
        key={selectedMetric}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-dark-800 border border-dark-700 rounded-xl p-5"
      >
        <h3 className="text-sm font-semibold text-dark-100 mb-4">
          {selectedMetric === 'cpu'
            ? 'CPU Usage Over Time'
            : selectedMetric === 'memory'
            ? 'Memory Usage Over Time'
            : 'Network Traffic Over Time'}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          {selectedMetric === 'network' ? (
            <AreaChart data={networkHistory}>
              <defs>
                <linearGradient id="inboundGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="outboundGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} unit=" GB/s" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="inbound"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#inboundGrad)"
              />
              <Area
                type="monotone"
                dataKey="outbound"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#outboundGrad)"
              />
            </AreaChart>
          ) : (
            <LineChart data={selectedMetric === 'cpu' ? cpuHistory : memoryHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} unit="%" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Line
                type="monotone"
                dataKey="web-prod-01"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="api-prod-01"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="db-primary"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
        {selectedMetric !== 'network' && (
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-blue-500 rounded"></div>
              <span className="text-xs text-dark-400">web-prod-01</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-purple-500 rounded"></div>
              <span className="text-xs text-dark-400">api-prod-01</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-emerald-500 rounded"></div>
              <span className="text-xs text-dark-400">db-primary</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Server Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {serverMetrics.map((server, index) => (
          <motion.div
            key={server.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800 border border-dark-700 rounded-xl p-5"
          >
            <h4 className="text-sm font-semibold text-dark-100 mb-4">{server.name}</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-dark-400" />
                  <span className="text-xs text-dark-400">CPU</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-dark-200">{server.cpu}%</span>
                  {getTrendIcon(server.cpuTrend)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MemoryStick size={14} className="text-dark-400" />
                  <span className="text-xs text-dark-400">RAM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-dark-200">{server.ram}%</span>
                  {getTrendIcon(server.ramTrend)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDrive size={14} className="text-dark-400" />
                  <span className="text-xs text-dark-400">Disk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-dark-200">{server.disk}%</span>
                  {getTrendIcon(server.diskTrend)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi size={14} className="text-dark-400" />
                  <span className="text-xs text-dark-400">Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-dark-200">{server.network} GB/s</span>
                  {getTrendIcon(server.networkTrend)}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-dark-400" />
                  <span className="text-xs text-dark-400">Latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-dark-200">{server.latency}ms</span>
                  {getTrendIcon(server.latencyTrend)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-dark-800 border border-dark-700 rounded-xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-dark-100 flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-400" />
            Active Alerts
          </h3>
          <button className="text-xs text-primary-400 hover:text-primary-300">View All</button>
        </div>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg border ${
                alert.severity === 'critical'
                  ? 'bg-red-500/5 border-red-500/20'
                  : alert.severity === 'warning'
                  ? 'bg-amber-500/5 border-amber-500/20'
                  : 'bg-blue-500/5 border-blue-500/20'
              }`}
            >
              <div className="mt-0.5">
                {alert.severity === 'critical' && (
                  <AlertTriangle size={16} className="text-red-400" />
                )}
                {alert.severity === 'warning' && (
                  <AlertTriangle size={16} className="text-amber-400" />
                )}
                {alert.severity === 'info' && (
                  <CheckCircle2 size={16} className="text-blue-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-dark-200">{alert.message}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-dark-400">{alert.server}</span>
                  <span className="text-xs text-dark-500">{alert.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
