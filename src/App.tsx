import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Console from './pages/Console';
import Players from './pages/Players';
import Worlds from './pages/Worlds';
import Software from './pages/Software';
import Plugins from './pages/Plugins';
import Files from './pages/Files';
import Options from './pages/Options';

function AppContent() {
  const location = useLocation();
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'starting'>('online');

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Navbar serverStatus={serverStatus} setServerStatus={setServerStatus} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPath={location.pathname} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard serverStatus={serverStatus} setServerStatus={setServerStatus} />} />
            <Route path="/console" element={<Console serverStatus={serverStatus} />} />
            <Route path="/players" element={<Players />} />
            <Route path="/worlds" element={<Worlds />} />
            <Route path="/software" element={<Software />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/files" element={<Files />} />
            <Route path="/options" element={<Options />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
