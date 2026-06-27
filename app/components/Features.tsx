import React from 'react';
import { BellRing, BrainCircuit, Cloud, Eye, FileCheck2, Gauge, LayoutDashboard, MapPinned, ScanFace, ShieldAlert, Smartphone, TabletSmartphone } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      title: "AI Driver Monitoring", 
      label: "Driver Safety",
      desc: "Continuously monitors driver alertness using AI-powered computer vision to detect fatigue, prolonged eye closure, yawning, and abnormal head movements in real time.", 
      icon: <Eye size={32} /> 
    },
    { 
      title: "Drowsiness Detection", 
      label: "Vision AI",
      desc: "Uses Eye Aspect Ratio (EAR), blink frequency, PERCLOS analysis, and facial landmark tracking to identify early signs of driver fatigue before accidents occur.", 
      icon: <ScanFace size={32} /> 
    },
    { 
      title: "Distraction Detection", 
      label: "Computer Vision",
      desc: "Detects unsafe driver behaviors including mobile phone usage, head-turn distraction, and inattentiveness using YOLO and MediaPipe running directly on the embedded device.", 
      icon: <ShieldAlert size={32} /> 
    },
    { 
      title: "Smoking Detection", 
      label: "AI Detection",
      desc: "Recognizes smoking behavior inside the vehicle cabin using deep learning models, helping improve driver discipline and passenger safety.", 
      icon: <BrainCircuit size={32} /> 
    },
    { 
      title: "Multi-Level Alert System", 
      label: "Smart Alerts",
      desc: "Provides intelligent safety interventions through voice guidance, buzzer alarms, vibration alerts, driver mobile notifications, cloud notifications, and authority escalation based on event severity.", 
      icon: <BellRing size={32} /> 
    },
    { 
      title: "Embedded Edge AI", 
      label: "Edge Computing",
      desc: "Runs AI inference locally on Raspberry Pi 4 using TensorFlow Lite and OpenCV, ensuring low-latency detection even without continuous internet connectivity.", 
      icon: <Gauge size={32} /> 
    },
    { 
      title: "Driver Mobile Application", 
      label: "Driver App",
      desc: "Provides drivers with live safety notifications, trip information, vibration alerts, driving history, emergency assistance, and performance summaries.", 
      icon: <Smartphone size={32} /> 
    },
    { 
      title: "Passenger Mobile Application", 
      label: "Passenger App",
      desc: "Allows passengers to monitor bus safety status, submit driver and bus feedback, scan QR codes, earn reward points, and access emergency SOS services.", 
      icon: <TabletSmartphone size={32} /> 
    },
    { 
      title: "Authority Dashboard", 
      label: "Fleet Monitoring",
      desc: "A centralized Next.js dashboard enabling transport authorities to monitor buses, drivers, live alerts, routes, passenger feedback, and fleet performance in real time.", 
      icon: <LayoutDashboard size={32} /> 
    },
    { 
      title: "GPS Hazard Mapping", 
      label: "Navigation",
      desc: "Tracks vehicle location, identifies accident-prone areas, visualizes hazard zones, and assists authorities in improving transport safety through location intelligence.", 
      icon: <MapPinned size={32} /> 
    },
    { 
      title: "Cloud Synchronization", 
      label: "Cloud Platform",
      desc: "Leverages Firebase Authentication, Firestore, Cloud Functions, and Cloud Messaging to securely synchronize alerts, driver data, analytics, and notifications across all connected devices.", 
      icon: <Cloud size={32} /> 
    },
    { 
      title: "Analytics & Compliance", 
      label: "Reporting",
      desc: "Generates comprehensive reports on driver behavior, alert history, passenger feedback, safety trends, and regulatory compliance to support transport authorities in decision-making.", 
      icon: <FileCheck2 size={32} /> 
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex rounded-full border border-[#BFDBFE] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#0B63CE] shadow-sm">
            Platform capabilities
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B1220] uppercase tracking-wide sm:text-4xl">Key Features</h2>
          <div className="h-1 w-20 bg-[#0B63CE] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-5 leading-7">Discover the AI-powered safety technologies that make SafeDriver an intelligent driver monitoring and accident prevention platform.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat, i) => (
            <div key={i} className="group relative flex min-h-[270px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B63CE]/50 hover:shadow-2xl hover:shadow-[#0B63CE]/10">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#EFF6FF] transition-colors group-hover:bg-[#DBEAFE]"></div>
              <div className="relative mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B63CE]/10 text-[#0B63CE] transition-colors group-hover:bg-[#0B63CE] group-hover:text-white">
                  {feat.icon}
                </div>
                <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#64748B]">
                  {feat.label}
                </span>
              </div>
              <h3 className="relative text-xl font-extrabold text-[#0B1220] mb-3">{feat.title}</h3>
              <p className="relative text-gray-600 text-sm leading-7 flex-grow">{feat.desc}</p>
              <div className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-bold text-[#0B63CE]">SafeDriver module</span>
                <span className="text-xs font-extrabold text-gray-300">{String(i + 1).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
