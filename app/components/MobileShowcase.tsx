'use client';

import React, { useEffect, useMemo, useState } from 'react';
import NextImage from 'next/image';
import { BusFront, ChevronLeft, ChevronRight, Cpu, LayoutDashboard, Smartphone } from 'lucide-react';

const IMAGE_AUTO_PLAY_MS = 2800;

const MobileShowcase = () => {
  const slides = useMemo(
    () => [
      {
        title: 'Monitoring System Implementation',
        label: 'Embedded AI Unit',
        description:
          'Raspberry Pi 4-based monitoring system running real-time driver behavior detection with camera input, local alert devices, GPS data, and Firebase cloud transmission.',
        images: [
          '/ui/model/model1.jpg',
          '/ui/model/model2.jpg',
          '/ui/model/model3.jpg',
          '/ui/model/model4.jpg',
          '/ui/model/model5.jpg',
          '/ui/model/model6.jpg',
          '/ui/model/model7.jpg'
        ],
        icon: Cpu,
        imageMode: 'wide'
      },
      {
        title: 'Authority Dashboard Implementation',
        label: 'Fleet Monitoring',
        description:
          'Next.js authority dashboard for real-time fleet visibility, live safety alerts, driver records, passenger feedback, route monitoring, hazard mapping, and compliance analytics.',
        images: [
          '/ui/authority/authority1.png',
          '/ui/authority/authority2.png',
          '/ui/authority/authority3.png',
          '/ui/authority/authority4.png',
          '/ui/authority/authority5.png',
          '/ui/authority/authority6.png',
          '/ui/authority/authority7.png',
          '/ui/authority/authority8.png'
        ],
        icon: LayoutDashboard,
        imageMode: 'desktop'
      },
      {
        title: 'Passenger Mobile App Implementation',
        label: 'Passenger Safety App',
        description:
          'Flutter passenger application for QR bus scanning, live safety status, feedback submission, emergency SOS, route support, driver profiles, and reward-based participation.',
        images: [
          '/ui/passenger/passenger1.png',
          '/ui/passenger/passenger2.png',
          '/ui/passenger/passenger3.png',
          '/ui/passenger/passenger4.png',
          '/ui/passenger/passenger5.png',
          '/ui/passenger/passenger6.png',
          '/ui/passenger/passenger7.png',
          '/ui/passenger/passenger8.png',
          '/ui/passenger/passenger9.png',
          '/ui/passenger/passenger10.png'
        ],
        icon: Smartphone,
        imageMode: 'phone'
      },
      {
        title: 'Driver App Implementation',
        label: 'Driver Operations App',
        description:
          'Flutter driver application supporting attendance, assigned bus details, safety alert history, complaint management, profile performance, support requests, and multilingual settings.',
        images: [
          '/ui/driver/driver1.png',
          '/ui/driver/driver2.png',
          '/ui/driver/driver3.png',
          '/ui/driver/driver4.png',
          '/ui/driver/driver5.png',
          '/ui/driver/driver6.png',
          '/ui/driver/driver7.png',
          '/ui/driver/driver8.png',
          '/ui/driver/driver9.png',
          '/ui/driver/driver10.png'
        ],
        icon: BusFront,
        imageMode: 'phone'
      }
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const ActiveIcon = activeSlide.icon;

  const goNext = () => {
    setActiveImageIndex(0);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveImageIndex(0);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % activeSlide.images.length);
    }, IMAGE_AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [activeSlide.images.length]);

  return (
    <section id="showcase" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#0B1220] uppercase tracking-wide">Implementation Showcase</h2>
          <div className="h-1 w-20 bg-[#0B63CE] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Visual implementation highlights from the SafeDriver embedded monitoring system, authority dashboard, passenger application, and driver application.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-[#0B63CE]/20 bg-[#F8FBFF] p-4 shadow-xl shadow-[#0B63CE]/10 md:p-7">
          <div className="grid gap-7 lg:grid-cols-2 lg:items-stretch">
            <div className="flex min-h-[560px] flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-extrabold text-[#0B63CE]">
                  <ActiveIcon size={18} />
                  {activeSlide.label}
                </div>
                <h3 className="mb-4 text-2xl font-extrabold leading-tight text-[#0B1220] md:text-3xl">
                  {activeSlide.title}
                </h3>
                <p className="text-base leading-8 text-slate-600">
                  {activeSlide.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1220] transition-colors hover:border-[#0B63CE] hover:text-[#0B63CE] cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B63CE] text-white transition-colors hover:bg-[#084A99] cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="flex min-h-[560px] flex-col rounded-3xl border border-[#B7D4FF] bg-gradient-to-br from-white via-[#EFF6FF] to-[#DBEAFE] p-4 md:p-6">
              <div className="relative flex h-[410px] overflow-hidden rounded-2xl bg-white/70 p-3 ring-1 ring-white/80 md:h-[430px]">
                <div
                  className="flex w-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
                >
                  {activeSlide.images.map((image, index) => (
                    <div key={image} className="flex w-full shrink-0 items-center justify-center">
                      {activeSlide.imageMode === 'phone' ? (
                        <div className="h-full max-h-[390px] overflow-hidden rounded-[2rem] border-[9px] border-[#0B1220] bg-[#0B1220] shadow-2xl md:max-h-[410px]">
                          <div className="relative h-full aspect-[9/19] bg-slate-100">
                            <NextImage
                              src={image}
                              alt={`${activeSlide.title} screen ${index + 1}`}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full max-w-[760px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                          <div className="flex h-9 items-center gap-2 border-b border-slate-200 bg-slate-50 px-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]"></span>
                          </div>
                          <div className="relative h-[330px] bg-slate-100 md:h-[360px]">
                            <NextImage
                              src={image}
                              alt={`${activeSlide.title} image ${index + 1}`}
                              fill
                              unoptimized
                              className="object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid min-h-[78px] grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
                {activeSlide.images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Show ${activeSlide.title} image ${index + 1}`}
                    className={`relative aspect-video overflow-hidden rounded-xl border transition-all cursor-pointer ${
                      index === activeImageIndex ? 'border-[#0B63CE] ring-2 ring-[#0B63CE]/25' : 'border-white/80 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <NextImage
                      src={image}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {slides.map((slide, index) => {
              const SlideIcon = slide.icon;

              return (
                <button
                  key={slide.title}
                  onClick={() => {
                    setActiveImageIndex(0);
                    setActiveIndex(index);
                  }}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all cursor-pointer ${
                    index === activeIndex
                      ? 'border-[#0B63CE] bg-[#0B63CE] text-white shadow-lg shadow-[#0B63CE]/20'
                      : 'border-slate-200 bg-white text-[#0B1220] hover:border-[#0B63CE]/50'
                  }`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    index === activeIndex ? 'bg-white/15' : 'bg-[#EFF6FF] text-[#0B63CE]'
                  }`}>
                    <SlideIcon size={20} />
                  </span>
                  <span className="text-sm font-extrabold leading-snug">{slide.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
