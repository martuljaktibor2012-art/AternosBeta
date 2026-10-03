import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Server,
  CreditCard,
  Activity,
  HeadphonesIcon,
  Settings,
  Shield,
  Globe,
  Database,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/servers', icon: Server, label: 'Servers' },
  { to: '/monitoring', icon: Activity, label: 'Monitoring' },
  { to: '/pricing', icon: CreditCard, label: 'Pricing' },
  { to: '/support', icon: HeadphonesIcon, label: 'Support' },
];

const secondaryItems = [
  { icon: Globe, label: 'Domains' },
  { icon: Database, label: 'Databases' },
  { icon: Shield, label: 'Firewall' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-dark-800 border-r border-dark-700 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      }`}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex-1">
          <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider px-3 mb-3">
            Main Menu
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
                      : 'text-dark-300 hover:bg-dark-700 hover:text-dark-100'
                  }`
                }
                end={item.to === '/'}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <p className="text-xs font-semibold text-dark-400 uppercase tracking-wider px-3 mb-3 mt-8">
            Resources
          </p>
          <nav className="space-y-1">
            {secondaryItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-dark-300 hover:bg-dark-700 hover:text-dark-100 transition-all w-full text-left"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-br from-primary-900/50 to-purple-900/50 rounded-xl border border-primary-700/30">
          <p className="text-sm font-semibold text-primary-200">Pro Plan Active</p>
          <p className="text-xs text-dark-400 mt-1">Next billing: Jan 15, 2026</p>
          <div className="mt-3 w-full bg-dark-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-primary-400 to-purple-400 h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-xs text-dark-400 mt-1">75% resources used</p>
        </div>
      </div>
    </aside>
  );
}
