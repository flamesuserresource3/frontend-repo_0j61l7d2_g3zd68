import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-white/50 p-0">
      <div className="h-[360px] w-full">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-white/0 to-blue-600/10" />
      <div className="absolute inset-0 flex items-center p-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Internal Agency Management System</h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            A clean, modern control center for projects, people, finance, and knowledge — built with React and Tailwind.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 shadow">RBAC Ready</span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 shadow">Modules: Projects, Tasks, Clients</span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 shadow">Calendar & Finance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
