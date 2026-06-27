import React from 'react';
import NextImage from 'next/image';
import { ArrowRight, BellRing, BrainCircuit, Navigation, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: 'Live telemetry', value: '24/7' },
    { label: 'Route confidence', value: 'AI' },
    { label: 'Safety alerts', value: 'Real-time' }
  ];

  const signals = [
    { icon: Navigation, title: 'Live route visibility', body: 'Location updates and journey context for safer public transport.' },
    { icon: BrainCircuit, title: 'AI risk detection', body: 'Fatigue, distraction, and behavior cues analyzed in real time.' },
    { icon: BellRing, title: 'Instant safety alerts', body: 'Fast notifications help operators respond before risk escalates.' }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-24 sm:pt-28">
      <div className="absolute inset-0 z-0">
        <NextImage
          src="/coverimage.png"
          alt="SafeDriver route safety background"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,18,32,0.95)_0%,rgba(11,18,32,0.84)_44%,rgba(11,99,206,0.42)_100%)] backdrop-blur-[1px]"></div>
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-4xl text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#BAE6FD] shadow-lg shadow-black/10 backdrop-blur-md">
            <ShieldCheck size={18} />
            Safety-first mobility intelligence
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Safer Journeys with <span className="text-[#38BDF8]">SafeDriver</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
            SafeDriver helps passengers, drivers, and operators make every journey more predictable and secure with real-time driver telemetry, live route tracking, AI predictions, and Google Maps integration.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#features" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B63CE] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#0B63CE]/30 transition-all hover:bg-[#084A99] hover:-translate-y-1 cursor-pointer">
              Discover Features
              <ArrowRight size={20} />
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#0B1220] cursor-pointer">
              View Implementation
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 overflow-hidden rounded-2xl border border-white/15 bg-[#0B1220]/35 backdrop-blur-md sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="w-full max-w-md space-y-4">
              {signals.map((signal, index) => {
                const Icon = signal.icon;

                return (
                  <div
                    key={signal.title}
                    className={`flex items-start gap-4 rounded-2xl border border-white/15 bg-[#0B1220]/35 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-md ${
                      index === 1 ? 'ml-10' : index === 2 ? 'ml-20' : ''
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#38BDF8]/15 text-[#38BDF8]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold">{signal.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{signal.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
