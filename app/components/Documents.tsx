import React, { useState } from 'react';
import {
  Archive,
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  FolderGit2,
  Presentation,
  type LucideIcon
} from 'lucide-react';

const GithubIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

type TabId = 'docs' | 'research' | 'slides' | 'code';

type ResourceItem = {
  title: string;
  path: string;
  description: string;
  status?: string;
};

type TabItem = {
  id: TabId;
  label: string;
  eyebrow: string;
  icon: LucideIcon;
  items: ResourceItem[];
};

const Documents = () => {
  const projectDocs: ResourceItem[] = [
    {
      title: 'Proposal Report',
      path: '/documents/proposal.pdf',
      description: 'Formal proposal report outlining the SafeDriver research problem, objectives, scope, and planned methodology.'
    },
    {
      title: 'Progress Report 1',
      path: '/documents/progress1.pdf',
      description: 'First progress report covering early research direction, system planning, and initial implementation work.'
    },
    {
      title: 'Progress Report 2',
      path: '/documents/progress2.pdf',
      description: 'Second progress report covering developed modules, platform integrations, and testing updates.'
    },
    {
      title: 'Progress Report 3',
      path: '/documents/progress3.pdf',
      description: 'Third progress report covering final implementation refinements, validation, and project outcomes.'
    },
    {
      title: 'Final Report',
      path: '/documents/final.pdf',
      description: 'Complete final report documenting the SafeDriver research, implementation, evaluation, and conclusions.'
    }
  ];

  const researchDocs: ResourceItem[] = [
    {
      title: 'Research Paper',
      path: '/research/rp.pdf',
      description: 'Research publication document summarizing SafeDriver background, design, implementation, and findings.'
    }
  ];

  const presentations: ResourceItem[] = [
    {
      title: 'Proposal Presentation',
      path: '/presentation/proposal.pdf',
      description: 'Slide deck used to present the SafeDriver research proposal and system direction.'
    },
    {
      title: 'Progress Presentation 1',
      path: '/presentation/pp1.pdf',
      description: 'First progress review covering early design, research background, and implementation planning.'
    },
    {
      title: 'Progress Presentation 2',
      path: '/presentation/pp2.pdf',
      description: 'Second progress review covering developed modules, integrations, and updated outcomes.'
    },
    {
      title: 'Progress Presentation 3',
      path: '',
      status: 'Coming soon',
      description: 'Third progress review presentation will be added once the slide deck is available.'
    },
    {
      title: 'Final Presentation',
      path: '/presentation/final.pdf',
      description: 'Final project presentation covering the complete SafeDriver platform and results.'
    }
  ];

  const sourceCodes: ResourceItem[] = [
    {
      title: 'Driver Monitoring System',
      path: 'https://github.com/safe-driver-cluster/safe-driver-backend',
      description: 'Embedded AI monitoring backend for driver fatigue, distraction detection, alerts, and cloud communication.'
    },
    {
      title: 'Passenger Mobile Application',
      path: 'https://github.com/safe-driver-cluster/safe-driver-passenger-app',
      description: 'Flutter passenger app for safety status, feedback, emergency assistance, QR scanning, and rewards.'
    },
    {
      title: 'Driver Mobile Application',
      path: 'https://github.com/safe-driver-cluster/safedriver-driver-app',
      description: 'Flutter driver app for attendance, assigned buses, safety alerts, complaints, and driver support.'
    },
    {
      title: 'Authority Web',
      path: 'https://github.com/safe-driver-cluster/safe-driver-web',
      description: 'Next.js authority dashboard for fleet monitoring, alerts, drivers, hazards, reports, and analytics.'
    },
    {
      title: 'SafeDriver Simulation',
      path: 'https://github.com/safe-driver-cluster/safe-driver-simulations',
      description: 'Simulation workspace for testing SafeDriver workflows, monitoring behavior, and system scenarios.'
    }
  ];

  const tabs: TabItem[] = [
    { id: 'docs', label: 'Project Documentation', eyebrow: 'Documentation', icon: FileText, items: projectDocs },
    { id: 'research', label: 'Research Paper', eyebrow: 'Publication', icon: BookOpen, items: researchDocs },
    { id: 'slides', label: 'Presentations', eyebrow: 'Slide Decks', icon: Presentation, items: presentations },
    { id: 'code', label: 'Source Codes', eyebrow: 'Repositories', icon: FolderGit2, items: sourceCodes }
  ];

  const [activeTab, setActiveTab] = useState<TabId>('docs');
  const activeMeta = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const ActiveIcon = activeMeta.icon;
  const isCodeTab = activeTab === 'code';

  return (
    <section id="documents" className="bg-[#F8FBFF] py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B63CE]/15 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0B63CE]">
              <Archive size={16} />
              Resource Hub
            </div>
            <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#0B1220] md:text-4xl">Resources</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#0B63CE]"></div>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Access SafeDriver project documents, research material, presentation slides, and implementation repositories from one organized section.
            </p>
          </div>

          <div className="mt-10 rounded-[28px] border border-[#B7D4FF] bg-white p-3 shadow-xl shadow-[#0B63CE]/10">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex min-h-[92px] items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#0B63CE] bg-[#0B63CE] text-white shadow-lg shadow-[#0B63CE]/20'
                      : 'border-slate-200 bg-[#F8FAFC] text-[#0B1220] hover:border-[#0B63CE]/45 hover:bg-[#EFF6FF]'
                  }`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? 'bg-white/15 text-white' : 'bg-white text-[#0B63CE]'
                  }`}>
                    <TabIcon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] font-extrabold uppercase tracking-[0.16em] opacity-70">
                      {tab.eyebrow}
                    </span>
                    <span className="mt-1 block text-sm font-extrabold leading-snug">{tab.label}</span>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-extrabold ${
                    isActive ? 'bg-white/15 text-white' : 'bg-white text-slate-500'
                  }`}>
                    {tab.items.length} items
                  </span>
                </button>
              );
            })}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#B7D4FF] bg-white p-4 shadow-xl shadow-[#0B63CE]/10 md:p-7">
          <div className="mb-7 flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#0B63CE]">
                <ActiveIcon size={26} />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0B63CE]">{activeMeta.eyebrow}</p>
                <h3 className="mt-1 text-2xl font-extrabold text-[#0B1220]">{activeMeta.label}</h3>
              </div>
            </div>
            <span className="w-fit rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-extrabold text-slate-600">
              {activeMeta.items.length} available resources
            </span>
          </div>

          <div className={`grid gap-5 ${
            activeMeta.items.length === 1
              ? 'mx-auto max-w-md grid-cols-1'
              : isCodeTab
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}>
            {activeMeta.items.map((item) => (
              <article
                key={item.title}
                className="group flex min-h-[260px] flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition-all hover:-translate-y-1 hover:border-[#0B63CE]/60 hover:bg-white hover:shadow-xl hover:shadow-[#0B63CE]/10"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0B63CE] shadow-sm ring-1 ring-slate-200 group-hover:bg-[#0B63CE] group-hover:text-white">
                    {isCodeTab ? (
                      <GithubIcon size={24} />
                    ) : activeTab === 'research' ? (
                      <BookOpen size={24} />
                    ) : activeTab === 'slides' ? (
                      <Presentation size={24} />
                    ) : (
                      <FileText size={24} />
                    )}
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400 ring-1 ring-slate-200">
                    {isCodeTab ? 'GitHub' : 'PDF'}
                  </span>
                </div>

                <h4 className="text-base font-extrabold leading-snug text-[#0B1220]">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>

                {item.path ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0B63CE] ring-1 ring-slate-200 transition-colors group-hover:bg-[#0B63CE] group-hover:text-white cursor-pointer"
                  >
                    {isCodeTab ? 'Open Repo' : 'View File'}
                    {isCodeTab ? <ExternalLink size={14} /> : <Download size={14} />}
                  </a>
                ) : (
                  <span className="mt-auto inline-flex w-fit rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400 ring-1 ring-slate-200">
                    {item.status || 'Unavailable'}
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
