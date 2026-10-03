import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeadphonesIcon,
  MessageSquare,
  Mail,
  Phone,
  Book,
  FileText,
  Video,
  ChevronRight,
  Send,
  Search,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      { q: 'How do I deploy my first server?', a: 'Navigate to the Servers page and click "Deploy New". Choose your region, plan, and OS, then confirm.' },
      { q: 'What operating systems are supported?', a: 'We support Ubuntu, Debian, CentOS, Rocky Linux, Alpine Linux, and Windows Server.' },
      { q: 'How do I connect to my server?', a: 'Use SSH for Linux servers or RDP for Windows. Credentials are available in the server details.' },
    ],
  },
  {
    category: 'Billing & Plans',
    items: [
      { q: 'How does billing work?', a: 'You are billed monthly or yearly based on your plan. Additional resources are billed at the end of each cycle.' },
      { q: 'Can I upgrade or downgrade my plan?', a: 'Yes! You can change your plan at any time. Upgrades take effect immediately, downgrades at the next billing cycle.' },
      { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee for all new accounts.' },
    ],
  },
  {
    category: 'Technical',
    items: [
      { q: 'How do I set up a firewall?', a: 'Go to your server settings > Firewall tab. You can create rules for inbound and outbound traffic.' },
      { q: 'What backup options are available?', a: 'We offer daily, weekly, and hourly automated backups. You can also create manual snapshots.' },
      { q: 'How do I scale my resources?', a: 'Click on your server > Scale tab. You can adjust CPU, RAM, and storage independently.' },
    ],
  },
];

const tickets = [
  { id: '#1234', subject: 'Cannot SSH into server', status: 'open', priority: 'high', time: '2 hours ago' },
  { id: '#1233', subject: 'Billing question about add-ons', status: 'resolved', priority: 'low', time: '1 day ago' },
  { id: '#1230', subject: 'Request for additional IP address', status: 'in-progress', priority: 'medium', time: '3 days ago' },
];

export default function Support() {
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark-100">Support Center</h1>
        <p className="text-dark-400 text-sm mt-1">Get help with your servers and services</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: MessageSquare, label: 'Live Chat', desc: 'Chat with our team', color: 'from-blue-500 to-cyan-500' },
          { icon: Mail, label: 'Email Support', desc: 'support@cloudforge.io', color: 'from-purple-500 to-pink-500' },
          { icon: Phone, label: 'Phone Support', desc: '+1 (555) 123-4567', color: 'from-emerald-500 to-green-500' },
          { icon: Book, label: 'Documentation', desc: 'Browse guides & API docs', color: 'from-amber-500 to-orange-500' },
        ].map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800 border border-dark-700 rounded-xl p-4 hover:border-dark-600 transition-all text-left hover:scale-[1.02]"
          >
            <div className={`p-2.5 rounded-lg bg-gradient-to-br ${item.color} w-fit mb-3`}>
              <item.icon size={20} className="text-white" />
            </div>
            <p className="text-sm font-semibold text-dark-100">{item.label}</p>
            <p className="text-xs text-dark-400 mt-0.5">{item.desc}</p>
          </motion.button>
        ))}
      </div>

      {/* Search & FAQ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center bg-dark-800 border border-dark-700 rounded-lg px-4 py-2.5">
            <Search size={16} className="text-dark-400 mr-2" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-dark-200 placeholder-dark-400 outline-none w-full"
            />
          </div>

          <div className="space-y-4">
            {faqs.map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-dark-800 border border-dark-700 rounded-xl overflow-hidden"
              >
                <div className="px-5 py-3 border-b border-dark-700">
                  <h3 className="text-sm font-semibold text-dark-100">{category.category}</h3>
                </div>
                <div className="divide-y divide-dark-700/50">
                  {category.items.map((item) => (
                    <div key={item.q}>
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === item.q ? null : item.q)
                        }
                        className="w-full px-5 py-3 flex items-center justify-between text-left hover:bg-dark-700/50 transition-colors"
                      >
                        <span className="text-sm text-dark-200">{item.q}</span>
                        <ChevronRight
                          size={16}
                          className={`text-dark-400 transition-transform ${
                            expandedFaq === item.q ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === item.q && (
                        <div className="px-5 pb-3">
                          <p className="text-sm text-dark-400 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Submit Ticket */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark-800 border border-dark-700 rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-dark-100 mb-3 flex items-center gap-2">
              <FileText size={16} className="text-primary-400" />
              Submit a Ticket
            </h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your issue..."
              className="w-full bg-dark-700 border border-dark-600 rounded-lg p-3 text-sm text-dark-200 placeholder-dark-400 outline-none resize-none h-24 focus:border-primary-500/50 transition-colors"
            />
            <button className="mt-3 w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
              <Send size={14} />
              Submit Ticket
            </button>
          </motion.div>

          {/* Recent Tickets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-800 border border-dark-700 rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-dark-100 mb-3">Recent Tickets</h3>
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-dark-700/50 transition-colors cursor-pointer"
                >
                  <div className="mt-0.5">
                    {ticket.status === 'open' && (
                      <AlertCircle size={16} className="text-amber-400" />
                    )}
                    {ticket.status === 'resolved' && (
                      <CheckCircle2 size={16} className="text-emerald-400" />
                    )}
                    {ticket.status === 'in-progress' && (
                      <Clock size={16} className="text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-dark-200 truncate">{ticket.subject}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-dark-400">{ticket.id}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded ${
                          ticket.priority === 'high'
                            ? 'bg-red-500/10 text-red-400'
                            : ticket.priority === 'medium'
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'bg-dark-600 text-dark-400'
                        }`}
                      >
                        {ticket.priority}
                      </span>
                      <span className="text-xs text-dark-500">{ticket.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-800 border border-dark-700 rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-dark-100 mb-3">Resources</h3>
            <div className="space-y-2">
              {[
                { icon: Book, label: 'Documentation' },
                { icon: Video, label: 'Video Tutorials' },
                { icon: FileText, label: 'API Reference' },
                { icon: MessageSquare, label: 'Community Forum' },
              ].map((resource) => (
                <button
                  key={resource.label}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-dark-300 hover:bg-dark-700 hover:text-dark-100 transition-colors"
                >
                  <resource.icon size={16} className="text-dark-400" />
                  {resource.label}
                  <ChevronRight size={14} className="text-dark-500 ml-auto" />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
