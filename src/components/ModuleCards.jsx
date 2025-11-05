import React from 'react';
import { LayoutDashboard, Briefcase, Calendar, Wallet, Users, MessageSquare, BookOpen, Image } from 'lucide-react';

const cards = [
  { title: 'Mission Control', desc: 'Overview of systems and quick actions.', icon: LayoutDashboard, color: 'from-indigo-500 to-blue-500' },
  { title: 'Projects', desc: 'Plan, track, and deliver client work.', icon: Briefcase, color: 'from-emerald-500 to-teal-500' },
  { title: 'Calendar', desc: 'Events, deadlines, and schedules.', icon: Calendar, color: 'from-amber-500 to-orange-500' },
  { title: 'Finance', desc: 'Income, expenses, and balance.', icon: Wallet, color: 'from-rose-500 to-pink-500' },
  { title: 'Clients', desc: 'Directory of clients and contacts.', icon: Users, color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Inbox', desc: 'Incoming client inquiries.', icon: MessageSquare, color: 'from-cyan-500 to-sky-500' },
  { title: 'Knowledge Base', desc: 'Internal docs and SOPs.', icon: BookOpen, color: 'from-lime-500 to-green-500' },
  { title: 'DAM', desc: 'Assets, logos, and brand files.', icon: Image, color: 'from-slate-500 to-slate-700' },
];

export default function ModuleCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map(({ title, desc, icon: Icon, color }) => (
        <div key={title} className="group rounded-xl border bg-white/60 p-4 shadow-sm transition hover:shadow-md">
          <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-white shadow`}> 
            <Icon size={18} />
          </div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="text-sm text-slate-600">{desc}</div>
          <button className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">
            Open →
          </button>
        </div>
      ))}
    </div>
  );
}
