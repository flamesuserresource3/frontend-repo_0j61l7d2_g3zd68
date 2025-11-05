import React from 'react';
import { LogOut, Menu } from 'lucide-react';

export default function HeaderBar({ onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-white/70 px-4 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100">
          <Menu size={20} />
        </button>
        <h1 className="text-sm font-medium text-slate-600">Welcome back 👋</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500" />
          <span>you@agency.com</span>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-indigo-700">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </header>
  );
}
