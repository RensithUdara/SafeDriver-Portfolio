import React from 'react';
import NextImage from 'next/image';
import { AlertTriangle, BrainCircuit, Bus, Cloud, Eye, Gauge, LayoutDashboard, MapPinned, MessageSquareWarning, Smartphone } from 'lucide-react';

const Domain = () => {
  const imageDomains = [
    {
      title: "Research Background",
      icon: Bus,
      image: "/domain/background.png",
      content: "Road traffic accidents remain a major safety challenge in Sri Lanka, particularly in public transportation where driver fatigue, distraction, and unsafe driving behaviors contribute to many preventable incidents. Existing monitoring approaches rely heavily on manual supervision and post-accident investigations, creating a need for an intelligent system capable of continuously monitoring drivers and preventing accidents before they occur."
    },
    {
      title: "Research Problem",
      icon: AlertTriangle,
      image: "/domain/problem.png",
      content: "Public transport authorities currently lack a reliable real-time solution to detect driver drowsiness, mobile phone usage, smoking, and other dangerous behaviors while buses are in operation. Without immediate alerts and centralized monitoring, unsafe driving conditions often go unnoticed until accidents occur, putting both passengers and drivers at significant risk."
    },
    {
      title: "Methodology",
      icon: BrainCircuit,
      image: "/domain/methodology.png",
      content: "SafeDriver utilizes an AI-powered edge-cloud architecture built with Raspberry Pi 4, OpenCV, MediaPipe, TensorFlow Lite, and YOLO to detect driver fatigue and distractions in real time. The system integrates GPS tracking, Firebase cloud services, a Next.js authority dashboard, and Flutter mobile applications to provide intelligent alerts, fleet monitoring, passenger feedback, and comprehensive transport safety management."
    }
  ];

  const researchGap = [
    "Many existing systems concentrate primarily on drowsiness detection while overlooking unsafe driving behaviors such as mobile phone usage, smoking, head-turn distraction, and prolonged inattentiveness.",
    "Most commercial driver monitoring solutions rely on expensive proprietary hardware or cloud-based processing, increasing deployment costs and reducing performance in environments with limited network connectivity.",
    "Current solutions rarely provide a complete ecosystem connecting drivers, passengers, and transport authorities. Driver mobile assistance, passenger feedback, GPS hazard mapping, centralized fleet monitoring, and compliance reporting are often unavailable within a unified platform.",
    "There is a lack of affordable AI-powered driver monitoring systems specifically designed for Sri Lanka's public transport environment, supporting right-hand-drive vehicles, multilingual interfaces, real-time edge processing, and intelligent multi-level alert mechanisms."
  ];

  const objectives = [
    {
      title: "AI-Based Driver Monitoring",
      icon: Eye,
      content: "Develop an embedded AI system capable of continuously monitoring driver behavior and detecting drowsiness using Eye Aspect Ratio (EAR), blink frequency, yawning detection, and head pose estimation."
    },
    {
      title: "Intelligent Distraction Detection",
      icon: BrainCircuit,
      content: "Implement computer vision and deep learning models using YOLO, OpenCV, and TensorFlow Lite to identify unsafe behaviors including mobile phone usage, smoking, head-turn distraction, and driver inattentiveness in real time."
    },
    {
      title: "Multi-Level Alert System",
      icon: MessageSquareWarning,
      content: "Develop an intelligent alert mechanism that delivers graduated responses through buzzer alarms, voice guidance, vibration alerts, driver mobile notifications, cloud alerts, and authority notifications."
    },
    {
      title: "GPS-Based Hazard Monitoring",
      icon: MapPinned,
      content: "Integrate GPS technology to identify accident-prone locations, monitor bus routes, support hazard mapping, and improve transport safety through location-aware analytics."
    },
    {
      title: "Driver Mobile Application",
      icon: Smartphone,
      content: "Develop a Flutter-based driver application that provides real-time safety alerts, trip information, driving performance insights, emergency notifications, and communication with the cloud platform."
    },
    {
      title: "Passenger Mobile Application",
      icon: Bus,
      content: "Develop a cross-platform Flutter application enabling passengers to monitor bus safety status, submit driver and bus feedback, access emergency SOS services, scan QR codes, and earn reward points for active participation."
    },
    {
      title: "Authority Dashboard",
      icon: LayoutDashboard,
      content: "Build a centralized Next.js web dashboard that enables transport authorities to monitor drivers and buses in real time, manage alerts, visualize fleet activity, review passenger feedback, and generate compliance reports and analytics."
    },
    {
      title: "Cloud-Based Data Management",
      icon: Cloud,
      content: "Implement Firebase Authentication, Firestore, Cloud Functions, Cloud Messaging, and secure cloud synchronization to support real-time communication, notifications, analytics, and centralized data management."
    }
  ];

  return (
    <section id="domain" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B1220] uppercase tracking-wide">Our Domain</h2>
          <div className="h-1 w-20 bg-[#0B63CE] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-3xl mx-auto leading-7">
            Discover how SafeDriver is improving public transport safety through AI-powered real-time driver monitoring and intelligent accident prevention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {imageDomains.map((d, i) => {
            const Icon = d.icon;

            return (
              <div
                key={i}
                className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#0B63CE]/10 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="h-56 overflow-hidden relative">
                  <NextImage
                    src={d.image}
                    alt={d.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70"></div>
                  <div className="absolute left-6 bottom-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0B63CE] shadow-lg">
                    <Icon size={30} />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0B63CE] mb-4 group-hover:text-[#0B1220] transition-colors duration-300">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 leading-7 text-sm text-justify">
                    {d.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#D7E6FF] bg-[#F8FAFC] p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B63CE] text-white">
              <Gauge size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B1220]">Literature Survey</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 text-justify">
              <p>
                The literature survey indicates that although numerous AI-based Driver Monitoring Systems (DMS) have been developed worldwide, many existing solutions primarily target luxury or commercial vehicles and rely on expensive proprietary hardware or cloud-based processing. Most systems focus only on detecting driver drowsiness while providing limited support for distraction detection, real-time intervention, passenger engagement, and transport authority monitoring.
              </p>
              <p>
                Recent studies demonstrate that computer vision techniques such as MediaPipe, OpenCV, YOLO, and TensorFlow Lite can accurately detect fatigue indicators including prolonged eye closure, yawning, head pose, smoking, and mobile phone usage. However, many solutions require high-performance hardware or continuous internet connectivity, making them less suitable for large-scale deployment in Sri Lanka&apos;s public transportation sector.
              </p>
              <p>
                Modern research also emphasizes edge AI, embedded computing, GPS integration, and cloud analytics for improving road safety. Nevertheless, there remains a lack of affordable, locally adaptable systems that integrate embedded AI, intelligent alerting, authority dashboards, driver mobile applications, passenger applications, and real-time fleet monitoring into a single platform.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl shadow-[#0B63CE]/5">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1220] text-white">
              <AlertTriangle size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0B1220]">Research Gap</h3>
            <p className="mt-4 text-sm leading-7 text-gray-600 text-justify">
              Despite significant advances in intelligent transportation systems, several important research gaps remain in existing driver monitoring solutions.
            </p>
            <div className="mt-5 space-y-3">
              {researchGap.map((gap, index) => (
                <div key={gap} className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B63CE] text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-gray-600">{gap}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-extrabold text-[#0B1220]">Research Objectives</h3>
            <div className="h-1 w-20 bg-[#0B63CE] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((objective) => {
              const Icon = objective.icon;

              return (
                <div key={objective.title} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#0B63CE]/40 hover:shadow-xl hover:shadow-[#0B63CE]/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#0B63CE]">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-base font-extrabold leading-snug text-[#0B1220]">{objective.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{objective.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;
