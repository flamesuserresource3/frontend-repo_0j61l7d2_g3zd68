import React, { useState } from 'react';
import SidebarNav from './components/SidebarNav';
import HeaderBar from './components/HeaderBar';
import HeroSpline from './components/HeroSpline';
import ModuleCards from './components/ModuleCards';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [current, setCurrent] = useState('Mission Control');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar for desktop */}
        <div className="hidden md:block">
          <SidebarNav current={current} onSelect={setCurrent} />
        </div>

        {/* Content */}
        <div className="flex min-h-screen flex-1 flex-col">
          <HeaderBar onToggleSidebar={() => setSidebarOpen((v) => !v)} />

          {/* Mobile sidebar sheet */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-30 bg-black/30 md:hidden" onClick={() => setSidebarOpen(false)}>
              <div className="absolute left-0 top-0 h-full w-64" onClick={(e) => e.stopPropagation()}>
                <SidebarNav current={current} onSelect={(label) => { setCurrent(label); setSidebarOpen(false); }} />
              </div>
            </div>
          )}

          <main className="flex-1 space-y-6 p-4 md:p-6">
            <HeroSpline />
            <section className="space-y-3">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Quick Modules</h3>
                  <p className="text-sm text-slate-600">Access the most important areas of your internal OS.</p>
                </div>
                <div className="text-xs text-slate-500">Role-based access coming next</div>
              </div>
              <ModuleCards />
            </section>
          </main>

          <footer className="border-t bg-white/60 p-4 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Agency OS. Built with React + Tailwind.
          </footer>
        </div>
      </div>
    </div>
  );
}
