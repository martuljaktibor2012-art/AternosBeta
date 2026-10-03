import { useState } from 'react';
import {
  Server,
  Cpu,
  HardDrive,
  MemoryStick,
  Wifi,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  TrendingUp,
  Globe,
  Shield,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { motion } from 'framer-motion';

const cpuData = [
  { time: '00:00', usage: 35 },
  { time: '04:00', usage: 28 },
  { time: '08:00', usage: 55 },
  { time: '12:00', usage: 72 },
  { time: '16:00', usage: 65 },
  { time: '20:00', usage: 48 },
  { time: '23:59', usage: 42 },
];

const trafficData = [
  { day: 'Mon', inbound: 2.4, outbound: 1.8 },
  { day: 'Tue', inbound: 3.1, outbound: 2.2 },
  { day: 'Wed', inbound: 2.8, outbound: 2.5 },
  { day: 'Thu', inbound: 3.5, outbound: 2.9 },
  { day: 'Fri', inbound: 4.2, outbound: 3.1 },
  { day: 'Sat', inbound: 3.8, outbound: 2.7 },
  { day: 'Sun', inbound: 2.9, outbound: 2.1 },
];

const stats = [
  {
    label: 'Active Servers',
    value: '12',
    change: '+2',
    trend: 'up',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'CPU Usage',
    value: '67%',
    change: '+5%',
    trend: 'up',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Storage Used',
    value: '1.2 TB',
    change: '-3%',
    trend: 'down',
    icon: HardDrive,
    color: 'from-amber-500 to-orange-500',
  },
  {
    label: 'Uptime',
    value: '99.98%',
    change: '+0.02%',
    trend: 'up',
    icon: Clock,
    color: 'from-emerald-500 to-green-500',
  },
];

const recentEvents = [
  { type: 'success', message: 'Server US-East-1 deployed successfully', time: '2 min ago' },
  { type: 'warning', message: 'High CPU usage on EU-West-2 (89%)', time: '15 min ago' },
  { type: 'success', message: 'SSL certificate renewed for api.example.com', time: '1 hour ago' },
  { type: 'error', message: 'Connection timeout on DB-Replica-3', time: '2 hours ago' },
  { type: 'success', message: 'Backup completed for all servers', time: '3 hours ago' },
  { type: 'warning', message: 'Disk usage at 85% on storage-node-01', time: '5 hours ago' },
];

const servers = [
  { name: 'web-prod-01', location: 'US East', status: 'running', cpu: 45, ram: 62 },
  { name: 'api-prod-01', location: 'EU West', status: 'running', cpu: 78, ram: 81 },
  { name: 'db-primary', location: 'US West', status: 'running', cpu: 34, ram: 55 },
  { name: 'cache-01', location: 'Asia Pacific', status: 'running', cpu: 22, ram: 38 },
  { name: 'worker-01', location: 'US East', status: 'stopped', cpu: 0, ram: 0 },
];

export default function Dashboard() {
  const [chartPeriod, setChartPeriod] = useState('24h');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dark-100">Dashboard</h1>
          <p className="text-dark-400 text-sm mt-1">Welcome back! Here's your server overview.</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <Server size={16} />
          Deploy Server
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800 border border-dark-700 rounded-xl p-5 hover:border-dark-600 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                <stat.icon size={20} className="text-white" />
              </div>
              <span
                className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === 'up' ? 'text-emerald-400' : 'text-amber-400'
                }`}
              >
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-dark-100">{stat.value}</p>
            <p className="text-sm text-dark-400 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CPU Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-dark-800 border border-dark-700 rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-dark-100">CPU Usage</h3>
              <p className="text-xs text-dark-400 mt-0.5">Average across all servers</p>
            </div>
            <div className="flex gap-1">
              {['24h', '7d', '30d'].map((period) => (
                <button
                  key={period}
                  onClick={() => setChartPeriod(period)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    chartPeriod === period
                      ? 'bg-primary-600 text-white'
                      : 'text-dark-400 hover:bg-dark-700'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={cpuData}>
              <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
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
                labelStyle={{ color: '#94a3b8' }}
              />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="#6366f1"
                strokeWidth={2}
                fill="url(#cpuGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-800 border border-dark-700 rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-dark-100">Network Traffic</h3>
              <p className="text-xs text-dark-400 mt-0.5">Inbound vs Outbound (GB/s)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <span className="text-xs text-dark-400">Inbound</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                <span className="text-xs text-dark-400">Outbound</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Bar dataKey="inbound" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="outbound" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Server Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-dark-800 border border-dark-700 rounded-xl p-5 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-dark-100">Server Status</h3>
            <button className="text-xs text-primary-400 hover:text-primary-300">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-dark-400 border-b border-dark-700">
                  <th className="pb-3 font-medium">Server</th>
                  <th className="pb-3 font-medium">Location</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">CPU</th>
                  <th className="pb-3 font-medium">RAM</th>
                </tr>
              </thead>
              <tbody>
                {servers.map((server) => (
                  <tr key={server.name} className="border-b border-dark-700/50 last:border-0">
                    <td className="py-3 text-sm font-medium text-dark-200">{server.name}</td>
                    <td className="py-3 text-sm text-dark-400">{server.location}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                          server.status === 'running'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            server.status === 'running' ? 'bg-emerald-400' : 'bg-red-400'
                          }`}
                        ></span>
                        {server.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-dark-700 rounded-full">
                          <div
                            className={`h-1.5 rounded-full ${
                              server.cpu > 70
                                ? 'bg-red-500'
                                : server.cpu > 40
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                            }`}
                            style={{ width: `${server.cpu}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-dark-400">{server.cpu}%</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-dark-700 rounded-full">
                          <div
                            className={`h-1.5 rounded-full ${
                              server.ram > 70
                                ? 'bg-red-500'
                                : server.ram > 40
                                ? 'bg-amber-500'
                                : 'bg-emerald-500'
                            }`}
                            style={{ width: `${server.ram}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-dark-400">{server.ram}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recent Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-dark-800 border border-dark-700 rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-dark-100 mb-4">Recent Events</h3>
          <div className="space-y-3">
            {recentEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5">
                  {event.type === 'success' && (
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  )}
                  {event.type === 'warning' && (
                    <AlertTriangle size={16} className="text-amber-400" />
                  )}
                  {event.type === 'error' && <XCircle size={16} className="text-red-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-dark-200 leading-relaxed">{event.message}</p>
                  <p className="text-xs text-dark-500 mt-0.5">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {[
          { icon: Server, label: 'New Server', color: 'from-blue-500 to-cyan-500' },
          { icon: MemoryStick, label: 'Scale Up', color: 'from-purple-500 to-pink-500' },
          { icon: Shield, label: 'Firewall Rules', color: 'from-amber-500 to-orange-500' },
          { icon: TrendingUp, label: 'Analytics', color: 'from-emerald-500 to-green-500' },
        ].map((action) => (
          <button
            key={action.label}
            className="bg-dark-800 border border-dark-700 rounded-xl p-4 hover:border-dark-600 transition-all hover:scale-[1.02] flex flex-col items-center gap-2"
          >
            <div className={`p-3 rounded-lg bg-gradient-to-br ${action.color}`}>
              <action.icon size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium text-dark-300">{action.label}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
