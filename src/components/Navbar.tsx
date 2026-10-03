import { Menu, Bell, Search, User, Cloud } from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <nav className="bg-dark-800 border-b border-dark-700 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-dark-700 transition-colors"
        >
          <Menu size={20} className="text-dark-300" />
        </button>
        <div className="flex items-center gap-2">
          <Cloud size={28} className="text-primary-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
            CloudForge
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center bg-dark-700 rounded-lg px-4 py-2 w-96">
        <Search size={16} className="text-dark-400 mr-2" />
        <input
          type="text"
          placeholder="Search servers, domains, services..."
          className="bg-transparent text-sm text-dark-200 placeholder-dark-400 outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-dark-700 transition-colors">
          <Bell size={20} className="text-dark-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 bg-dark-700 rounded-lg px-3 py-2 cursor-pointer hover:bg-dark-600 transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <span className="text-sm text-dark-200 hidden sm:block">Admin</span>
        </div>
      </div>
    </nav>
  );
}
