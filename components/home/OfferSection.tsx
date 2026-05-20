// src/components/home/OfferSection.tsx

import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  Camera,
  Anchor,
  Fish,
  Compass,
  ArrowRight,
} from "lucide-react";

const offers = [
  {
    icon: Waves,
    title: "Underwater Services",
    desc: "Marine inspections and underwater operations.",
  },
  {
    icon: ShieldCheck,
    title: "Diving Courses",
    desc: "Expert-led diving training with safety standards.",
  },
  {
    icon: Fish,
    title: "Scuba Experiences",
    desc: "Guided scuba sessions for all skill levels.",
  },
  {
    icon: Camera,
    title: "Specialty Training",
    desc: "Deep, night, rescue and photography training.",
  },
  {
    icon: Anchor,
    title: "Commercial Diving",
    desc: "Career-focused training for offshore industries.",
  },
  {
    icon: Compass,
    title: "ROV Survey Support",
    desc: "Marine survey and technical assistance.",
  },
];

export default function OfferSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-24 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* TOP */}
        <div className="mb-9 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
              What We Offer
            </p>

            <h2 className="mt-4 max-w-3xl text-[30px] font-black leading-[1.08] text-slate-950 sm:text-5xl md:text-6xl">
              Diving Training &
              <span className="text-cyan-600">
                {" "}
                Marine Services
              </span>
            </h2>
          </div>

          <Link
            href="/what-we-offer"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-cyan-200
              bg-cyan-50
              px-5
              py-3
              text-[10px]
              font-black
              uppercase
              tracking-[0.18em]
              text-cyan-700
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-white
              sm:px-7
              sm:py-4
              sm:text-xs
            "
          >
            View All Services

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cyan-100
                  bg-white
                  p-3
                  shadow-[0_10px_30px_rgba(6,182,212,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-300
                  hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]
                  sm:rounded-[2rem]
                  sm:p-7
                "
              >
                {/* INSIDE CARD BLUE EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-cyan-50/10 to-cyan-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  
                  {/* ICON */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 sm:mb-5 sm:h-16 sm:w-16 sm:rounded-2xl">
                    <Icon className="h-5 w-5 text-cyan-600 sm:h-7 sm:w-7" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[13px] font-black leading-tight text-slate-950 sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
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