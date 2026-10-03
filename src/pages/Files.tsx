import { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, File, ChevronRight, Upload, Plus, Trash2, Download, Edit3, Home } from 'lucide-react';

interface FileItem {
  name: string;
  type: 'folder' | 'file';
  size?: string;
  modified: string;
  extension?: string;
}

const files: FileItem[] = [
  { name: 'plugins', type: 'folder', modified: '2 hours ago' },
  { name: 'world', type: 'folder', modified: 'Just now' },
  { name: 'world_nether', type: 'folder', modified: 'Just now' },
  { name: 'world_the_end', type: 'folder', modified: '2 hours ago' },
  { name: 'logs', type: 'folder', modified: 'Just now' },
  { name: 'config', type: 'folder', modified: '1 day ago' },
  { name: 'server.properties', type: 'file', size: '1.2 KB', modified: '3 hours ago', extension: 'properties' },
  { name: 'banned-players.json', type: 'file', size: '245 B', modified: '2 days ago', extension: 'json' },
  { name: 'banned-ips.json', type: 'file', size: '128 B', modified: '5 days ago', extension: 'json' },
  { name: 'ops.json', type: 'file', size: '512 B', modified: '1 day ago', extension: 'json' },
  { name: 'whitelist.json', type: 'file', size: '89 B', modified: '3 days ago', extension: 'json' },
  { name: 'eula.txt', type: 'file', size: '156 B', modified: '1 week ago', extension: 'txt' },
  { name: 'paper.jar', type: 'file', size: '42.3 MB', modified: '1 week ago', extension: 'jar' },
];

export default function Files() {
  const [currentPath, setCurrentPath] = useState<string[]>(['/']);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const breadcrumbs = currentPath;

  const getFileIcon = (file: FileItem) => {
    if (file.type === 'folder') return <Folder size={20} className="text-yellow" />;
    
    switch (file.extension) {
      case 'properties':
      case 'txt':
        return <File size={20} className="text-blue" />;
      case 'json':
        return <File size={20} className="text-mc-green" />;
      case 'jar':
        return <File size={20} className="text-purple" />;
      default:
        return <File size={20} className="text-text-muted" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Files</h1>
          <p className="text-text-secondary text-sm mt-1">Manage your server files</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-bg-card border border-border text-text-secondary hover:bg-bg-hover rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Upload size={16} />
            Upload
          </button>
          <button className="px-4 py-2 bg-mc-green hover:bg-mc-green-dark text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <Plus size={16} />
            New File
          </button>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 bg-bg-card border border-border rounded-lg px-4 py-2">
        <button
          onClick={() => setCurrentPath(['/'])}
          className="text-text-muted hover:text-text-primary transition-colors"
        >
          <Home size={16} />
        </button>
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-text-muted" />
            <button
              onClick={() => setCurrentPath(breadcrumbs.slice(0, index + 1))}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {crumb === '/' ? 'root' : crumb}
            </button>
          </div>
        ))}
      </div>

      {/* File List */}
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-border text-xs font-medium text-text-muted">
          <div className="col-span-6">Name</div>
          <div className="col-span-2">Size</div>
          <div className="col-span-3">Modified</div>
          <div className="col-span-1">Actions</div>
        </div>

        {/* Files */}
        <div className="divide-y divide-border">
          {files.map((file, index) => (
            <motion.div
              key={file.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
              className={`grid grid-cols-12 gap-4 px-4 py-3 hover:bg-bg-hover transition-colors cursor-pointer ${
                selectedFile === file.name ? 'bg-bg-hover' : ''
              }`}
              onClick={() => setSelectedFile(file.name)}
            >
              <div className="col-span-6 flex items-center gap-3">
                {getFileIcon(file)}
                <span className="text-sm text-text-primary">{file.name}</span>
              </div>
              <div className="col-span-2 flex items-center">
                <span className="text-xs text-text-secondary">{file.size || '-'}</span>
              </div>
              <div className="col-span-3 flex items-center">
                <span className="text-xs text-text-secondary">{file.modified}</span>
              </div>
              <div className="col-span-1 flex items-center gap-1">
                {file.type === 'file' && (
                  <>
                    <button className="p-1 rounded hover:bg-bg-tertiary text-text-muted hover:text-text-primary transition-colors">
                      <Edit3 size={14} />
                    </button>
                    <button className="p-1 rounded hover:bg-bg-tertiary text-text-muted hover:text-text-primary transition-colors">
                      <Download size={14} />
                    </button>
                  </>
                )}
                <button className="p-1 rounded hover:bg-red/10 text-text-muted hover:text-red transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected File Info */}
      {selectedFile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-bg-card border border-border rounded-xl p-4"
        >
          <h3 className="text-sm font-semibold text-text-primary mb-2">Selected: {selectedFile}</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-bg-tertiary hover:bg-bg-hover text-text-secondary rounded-lg text-xs font-medium transition-colors flex items-center gap-1">
              <Edit3 size={12} />
              Edit
            </button>
            <button className="px-3 py-1.5 bg-bg-tertiary hover:bg-bg-hover text-text-secondary rounded-lg text-xs font-medium transition-colors flex items-center gap-1">
              <Download size={12} />
              Download
            </button>
            <button className="px-3 py-1.5 bg-red/10 hover:bg-red/20 text-red rounded-lg text-xs font-medium transition-colors flex items-center gap-1">
              <Trash2 size={12} />
              Delete
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
