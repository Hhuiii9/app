// src/components/home/WhyChooseUs.tsx

import {
  ShieldCheck,
  Award,
  Waves,
  Anchor,
  Fish,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Strict safety standards and professional underwater protocols.",
  },
  {
    icon: Award,
    title: "Certified Instructors",
    desc: "Learn from trained and experienced diving professionals.",
  },
  {
    icon: Waves,
    title: "Modern Equipment",
    desc: "Advanced diving gear for safe underwater operations.",
  },
  {
    icon: Anchor,
    title: "Commercial Expertise",
    desc: "Marine inspection, offshore, and underwater service support.",
  },
  {
    icon: Fish,
    title: "Marine Passion",
    desc: "Ocean awareness and responsible underwater exploration.",
  },
  {
    icon: LifeBuoy,
    title: "Custom Training",
    desc: "Programs for beginners, advanced and commercial diving careers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-24 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
            Why Choose Dive Hub
          </p>

          <h2 className="mt-4 text-[30px] font-black leading-[1.08] text-slate-950 sm:text-5xl md:text-6xl">
            Trusted Diving &
            <span className="text-cyan-600"> Marine Experts</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-slate-600 sm:mt-7 sm:text-[16px] sm:leading-8">
            Dive Hub & Marine Services delivers professional underwater
            experiences, commercial diving expertise, and advanced diving
            training with safety and quality at the core.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(6,182,212,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,182,212,0.14)] sm:rounded-[2rem] sm:p-7"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-cyan-50/10 to-cyan-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}