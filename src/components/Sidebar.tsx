import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Terminal,
  Users,
  Globe,
  Package,
  Puzzle,
  FolderOpen,
  Settings,
} from 'lucide-react';

interface SidebarProps {
  currentPath: string;
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/console', icon: Terminal, label: 'Console' },
  { to: '/players', icon: Users, label: 'Players' },
  { to: '/worlds', icon: Globe, label: 'Worlds' },
  { to: '/software', icon: Package, label: 'Software' },
  { to: '/plugins', icon: Puzzle, label: 'Plugins' },
  { to: '/files', icon: FolderOpen, label: 'Files' },
  { to: '/options', icon: Settings, label: 'Options' },
];

export default function Sidebar({ currentPath }: SidebarProps) {
  return (
    <aside className="w-16 bg-bg-secondary border-r border-border flex flex-col items-center py-4">
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const isActive = currentPath === item.to;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={`group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all ${
                isActive
                  ? 'bg-mc-green/20 text-mc-green'
                  : 'text-text-muted hover:bg-bg-hover hover:text-text-secondary'
              }`}
            >
              <item.icon size={20} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-bg-tertiary border border-border rounded text-xs text-text-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>

              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 w-0.5 h-6 bg-mc-green rounded-r"></div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="flex flex-col gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-mc-green to-mc-green-dark flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-white font-bold text-sm">U</span>
        </div>
      </div>
    </aside>
  );
}
