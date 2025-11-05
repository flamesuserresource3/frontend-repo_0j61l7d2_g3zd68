import React from 'react';
import { LayoutDashboard, Calendar, Briefcase, Users, MessageSquare, Wallet, BookOpen, Image, Settings } from 'lucide-react';

const navItems = [
  { label: 'Mission Control', icon: LayoutDashboard },
  { label: 'Projects', icon: Briefcase },
  { label: 'Tasks', icon: Settings },
  { label: 'Clients', icon: Users },
  { label: 'Inbox', icon: MessageSquare },
  { label: 'Finance', icon: Wallet },
  { label: 'Calendar', icon: Calendar },
  { label: 'Knowledge Base', icon: BookOpen },
  { label: 'DAM', icon: Image },
];

export default function SidebarNav({ current, onSelect }) {
  return (
    <aside className="h-full w-64 shrink-0 border-r bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-xl font-bold tracking-tight">Agency OS</div>
          <div className="text-xs text-slate-500">Internal Management</div>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = current === item.label;
            return (
              <button
                key={item.label}
                onClick={() => onSelect(item.label)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-indigo-50 ${
                  active ? 'bg-indigo-100 text-indigo-700' : 'text-slate-700'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
