// src/app/what-we-offer/page.tsx

import {
  Waves,
  ShieldCheck,
  Camera,
  Anchor,
  Fish,
  Compass,
  LifeBuoy,
  BadgeCheck,
} from "lucide-react";

const offers = [
  {
    icon: Waves,
    title: "Underwater Services",
    desc: "Marine inspections, underwater operations, and technical diving support.",
  },
  {
    icon: ShieldCheck,
    title: "Diving Courses",
    desc: "Beginner to advanced diving programs with safety-focused training.",
  },
  {
    icon: Fish,
    title: "Scuba Experiences",
    desc: "Guided scuba sessions for first-time and experienced divers.",
  },
  {
    icon: Camera,
    title: "Specialty Training",
    desc: "Deep diving, night diving, rescue diving, and underwater photography.",
  },
  {
    icon: Anchor,
    title: "Commercial Diving",
    desc: "Career-focused commercial diving training for marine industries.",
  },
  {
    icon: Compass,
    title: "ROV Survey Support",
    desc: "Marine survey support and underwater technical assistance.",
  },
  {
    icon: LifeBuoy,
    title: "Rescue Support",
    desc: "Emergency response training and underwater safety skills.",
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    desc: "Professional certification support for diving career growth.",
  },
];

export default function WhatWeOfferPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
            What We Offer
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-[32px] font-black leading-[1.08] text-slate-950 sm:text-5xl md:text-6xl">
            Diving Training &
            <span className="text-cyan-600"> Marine Services</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[14px] leading-7 text-slate-600 sm:mt-7 sm:text-[16px] sm:leading-8">
            Dive Hub & Marine Services provides professional underwater
            solutions, scuba diving programs, commercial diving support, and
            advanced specialty training for beginners, professionals, and marine
            industries.
          </p>
        </div>
      </section>

      {/* OFFERS GRID */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {offers.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(6,182,212,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,182,212,0.14)] sm:rounded-[2rem] sm:p-7"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 sm:mb-5 sm:h-16 sm:w-16 sm:rounded-2xl">
                    <Icon className="h-5 w-5 text-cyan-600 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="text-[13px] font-black leading-tight text-slate-950 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-5 text-white sm:p-10 md:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
                Professional Support
              </p>

              <h2 className="mt-4 text-[30px] font-black leading-[1.1] sm:text-5xl">
                Complete Underwater
                <span className="text-cyan-400"> Service Solutions</span>
              </h2>
            </div>

            <p className="text-[14px] leading-7 text-slate-300 sm:text-[16px] sm:leading-8">
              From recreational diving to commercial underwater operations, our
              programs are designed with expert instruction, modern equipment,
              safety protocols, and real-world marine service knowledge.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}