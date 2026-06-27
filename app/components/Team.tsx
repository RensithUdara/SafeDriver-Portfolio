import React from 'react';
import NextImage from 'next/image';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Team = () => {
  const members = [
    { 
      name: "Shaleel Sandeepa", 
      role: "AI Model Developer", 
      image: "/team/member1.jpeg",
      email: "s92084563@ousl.lk"
    },
    { 
      name: "Rensith Udara Gonalagoda", 
      role: "Passenger Mobile App Developer", 
      image: "/team/member2.png",
      email: "s92069318@ousl.lk"
    },
    { 
      name: "Pulindu Ekanayake", 
      role: "Web Developer", 
      image: "/team/member3.jpeg",
      email: "s92069276@ousl.lk"
    },
    { 
      name: "Jayali Perera", 
      role: "Driver App Developer | QA Engineer", 
      image: "/team/member4.png",
      email: "s92069815@ousl.lk"
    },
    { 
      name: "Tharushi Denagamage", 
      role: "UX Designer | QA Engineer", 
      image: "/team/member5.jpg",
      email: "s92069305@ousl.lk"
    },
  ];

  return (
    <section id="team" className="py-20 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0B1220] uppercase tracking-wide">Our Team</h2>
          <div className="h-1 w-20 bg-[#0B63CE] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">Meet the individuals behind SafeDriver.</p>
        </div>

        <div className="mb-16">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#D7E6FF] bg-white shadow-xl shadow-[#0B63CE]/10">
            <div className="grid gap-0 md:grid-cols-[260px_1fr]">
              <div className="flex flex-col items-center justify-center bg-[#0B1220] p-8 text-center text-white">
                <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-[#38BDF8] bg-white/10 shadow-xl shadow-black/20">
                  <NextImage
                    src="/team/supervisor.jpg"
                    alt="Dr.(Ms.) D.D.M. Ranasinghe"
                    width={128}
                    height={128}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#38BDF8]">Supervisor</p>
                <h3 className="mt-2 text-xl font-extrabold leading-tight">Dr.(Ms.) D.D.M. Ranasinghe</h3>
              </div>
              <div className="p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <a
                      href="https://ou.ac.lk/staff/dr-ms-d-d-m-ranasinghe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-2xl font-extrabold text-[#0B1220] hover:text-[#0B63CE]"
                    >
                      Dr.(Ms.) D.D.M. Ranasinghe
                      <ExternalLink size={18} />
                    </a>
                    <p className="mt-2 text-sm font-bold text-[#0B63CE]">B.Sc. (Hons) (Colombo), Ph.D (OUSL)</p>
                    <p className="mt-1 text-sm text-gray-600">Senior Lecturer (Grade I)</p>
                    <p className="text-sm text-gray-600">Department of Electrical and Computer Engineering</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#F8FAFC] p-4">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Office Location</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[#0B1220]">CRC, 2nd intermediate floor, Science and Technology building, Room No : W5</p>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] p-4">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">Contact</p>
                    <div className="mt-2 space-y-2 text-sm font-semibold text-[#0B1220]">
                      <p className="flex items-center gap-2"><Phone size={14} className="text-[#0B63CE]" /> Office: 112881481, Ext: 481</p>
                      <p className="flex items-center gap-2"><Phone size={14} className="text-[#0B63CE]" /> Mobile: 0716388014</p>
                      <a href="mailto:ddran@ou.ac.lk" className="flex items-center gap-2 text-[#0B63CE] hover:text-[#084A99]">
                        <Mail size={14} /> ddran@ou.ac.lk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1220px] grid-cols-1 gap-5 text-center sm:grid-cols-2 lg:grid-cols-5">
          {members.map((m, i) => (
            <div
              key={i}
              className="group flex min-h-[334px] cursor-pointer flex-col rounded-xl border border-gray-200 bg-white px-5 py-7 shadow-md shadow-slate-200/60 transition-all hover:-translate-y-1 hover:border-[#0B63CE] hover:shadow-xl hover:shadow-[#0B63CE]/10 first:border-[#7DB7FF]"
            >
              <div className="mx-auto mb-7 flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#006BEE] bg-[#EFF6FF]">
                <NextImage src={m.image} alt={m.name} width={96} height={96} unoptimized className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="min-h-12 text-base font-extrabold leading-tight text-black sm:text-lg">{m.name}</h3>
              
              <div className="mt-auto space-y-3 border-t border-gray-100 pt-5">
                <div>
                  <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.22em] text-gray-400">Role</p>
                  <p className="min-h-9 text-[11px] font-bold leading-5 text-black">{m.role}</p>
                </div>
                <a 
                  href={`mailto:${m.email}`} 
                  className="flex items-center justify-center gap-1 truncate px-1 text-[9px] font-medium italic text-gray-400 transition-colors hover:text-[#0B63CE]"
                >
                  <Mail size={10} className="shrink-0" /> {m.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
