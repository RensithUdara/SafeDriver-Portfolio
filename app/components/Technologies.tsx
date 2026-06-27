import React from 'react';
import { BrainCircuit, Cloud, Code2, Cpu, Database, Eye, LayoutDashboard, Smartphone } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    { 
      title: "Artificial Intelligence", 
      desc: "Real-time fatigue intelligence for EAR, PERCLOS, yawning, blink frequency, and head-pose analysis.", 
      tags: ["MediaPipe", "TensorFlow Lite", "EAR", "PERCLOS"],
      icon: <BrainCircuit size={32} /> 
    },
    { 
      title: "Computer Vision", 
      desc: "Detects distraction, phone usage, smoking, facial landmarks, and driver activity on-device.", 
      tags: ["OpenCV", "YOLO", "MediaPipe", "Vision AI"],
      icon: <Eye size={32} /> 
    },
    { 
      title: "Embedded Edge Computing", 
      desc: "Low-latency AI inference and alert hardware for buses without full cloud dependency.", 
      tags: ["Raspberry Pi 4", "NoIR Camera", "GPS", "Buzzer"],
      icon: <Cpu size={32} /> 
    },
    { 
      title: "Mobile Development", 
      desc: "Cross-platform driver and passenger apps for alerts, SOS, QR scanning, feedback, and rewards.", 
      tags: ["Flutter", "Dart", "Driver App", "Passenger App"],
      icon: <Smartphone size={32} /> 
    },
    { 
      title: "Backend & APIs", 
      desc: "Connects devices, dashboards, mobile apps, notifications, and business logic in real time.", 
      tags: ["Node.js", "REST APIs", "FCM", "Cloud Functions"],
      icon: <Code2 size={32} /> 
    },
    { 
      title: "Web Dashboard", 
      desc: "Authority dashboard for fleet monitoring, alerts, GPS tracking, analytics, and reports.", 
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: <LayoutDashboard size={32} /> 
    },
    { 
      title: "Cloud Platform", 
      desc: "Secure user management, alerts, feedback, monitoring records, and live synchronization.", 
      tags: ["Firebase Auth", "Firestore", "Storage", "Messaging"],
      icon: <Cloud size={32} /> 
    },
    { 
      title: "Development & DevOps", 
      desc: "Collaborative development, version control, Linux tooling, and containerized deployment.", 
      tags: ["Git", "GitHub", "Docker", "Linux"],
      icon: <Database size={32} /> 
    }
  ];

  return (
    <section id="technologies" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-[#BFDBFE] bg-[#F8FAFC] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#0B63CE] shadow-sm">
            Technology Stack
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B1220] uppercase tracking-wide sm:text-4xl">Technologies</h2>
          <div className="h-1 w-20 bg-[#0B63CE] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto leading-7">The complete hardware and software ecosystem powering the SafeDriver AI-based driver monitoring and accident prevention platform.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech.title} className="group relative flex min-h-[330px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B63CE]/50 hover:shadow-2xl hover:shadow-[#0B63CE]/10">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#EFF6FF] transition-colors group-hover:bg-[#DBEAFE]"></div>
              <div className="relative mb-5 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B63CE]/10 text-[#0B63CE] transition-colors group-hover:bg-[#0B63CE] group-hover:text-white">
                  {tech.icon}
                </div>
                <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#64748B]">
                  Stack
                </span>
              </div>

              <h3 className="relative text-xl font-extrabold leading-tight text-[#0B1220]">{tech.title}</h3>
              <p className="relative mt-3 text-sm leading-6 text-gray-600">{tech.desc}</p>

              <div className="relative mt-auto pt-6">
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Highlighted Tools</p>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1.5 text-xs font-bold text-[#0B63CE]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
