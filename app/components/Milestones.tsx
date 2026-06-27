import React, { useState } from 'react';
import { ChevronDown, Calendar, Award, CheckCircle2, BarChart3 } from 'lucide-react';

const Milestones = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const milestones = [
    {
      title: "Project Proposal",
      desc: "Defining the scope, objectives, and architecture of SafeDriver. This initial phase involves brainstorming, feasibility analysis, and drafting the project charter.",
      date: "September 2025",
      marks: "12%",
      completion: "10%"
    },
    {
      title: "Progress Presentation-1",
      desc: "Showcasing the backend structure, UI designs, initial Flutter development, and full frontend completion. Verification of technical feasibility and initial module integration.",
      date: "January 2026",
      marks: "15%",
      completion: "50%"
    },
    {
      title: "Progress Presentation-2",
      desc: "Demonstrating ML/CV integration, real-time Socket.io testing, system integration, and the finalized platform. Focus on core algorithm performance and system stability.",
      date: "March 2026",
      marks: "18%",
      completion: "90%"
    },
    {
      title: "Final Assessment",
      desc: "Comprehensive system review and hardware/software quality assessment. Final bug fixing, performance optimization, and user acceptance testing.",
      date: "May 2026",
      marks: "19%",
      completion: "100%"
    },
    {
      title: "Viva and Project Completion",
      desc: "Final project presentation, viva, and Q&A session with the examiner panel. Submission of final documentation and deployment of the solution.",
      date: "May 2026",
      marks: "20%",
      completion: "100%"
    },
  ];

  return (
    <section id="milestones" className="py-24 bg-[#F8FAFC] scroll-mt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0B63CE]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0B63CE]/5 rounded-full blur-3xl"></div>

        <div className="text-center mb-16 relative">
          <h2 className="text-3xl font-bold text-[#0B1220] uppercase tracking-wide">Project Milestones</h2>
          <div className="h-1.5 w-20 bg-[#0B63CE] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Detailed breakdown of our project timeline, deliverables, and assessment criteria.
          </p>
        </div>

        <div className="space-y-4 relative">
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${activeIndex === i
                ? 'border-[#0B63CE] bg-white shadow-xl shadow-[#0B63CE]/5'
                : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
                }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${activeIndex === i
                    ? 'bg-[#0B63CE] text-white scale-110 shadow-lg shadow-[#0B63CE]/30'
                    : 'bg-gray-100 text-gray-400 group-hover:bg-[#0B63CE]/10 group-hover:text-[#0B63CE]'
                    }`}>
                    {activeIndex === i ? <CheckCircle2 size={24} /> : <span className="font-bold text-lg">{i + 1}</span>}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold transition-colors ${activeIndex === i ? 'text-[#0B63CE]' : 'text-[#0B1220]'
                      }`}>
                      {m.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar size={12} /> {m.date}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Award size={12} /> {m.marks}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <BarChart3 size={12} /> {m.completion}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-[#0B63CE]/10 rotate-180' : 'bg-gray-50'
                  }`}>
                  <ChevronDown
                    size={20}
                    className={`transition-colors ${activeIndex === i ? 'text-[#0B63CE]' : 'text-gray-400'}`}
                  />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${activeIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 pt-2 ml-16">
                  <div className="h-px w-full bg-gray-100 mb-6"></div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {m.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Scheduled Date</span>
                      <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-[#0B1220] border border-gray-100">
                        {m.date}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Weightage</span>
                      <div className="bg-[#0B63CE]/5 px-4 py-2 rounded-xl text-sm font-bold text-[#0B63CE] border border-[#0B63CE]/10">
                        {m.marks}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Completion</span>
                      <div className="bg-green-50 px-4 py-2 rounded-xl text-sm font-bold text-green-600 border border-green-100">
                        {m.completion}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
