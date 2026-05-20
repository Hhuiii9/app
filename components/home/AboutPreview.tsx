// src/components/home/AboutPreview.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Waves } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Safety First" },
  { icon: Award, title: "Certified Trainers" },
  { icon: Waves, title: "Modern Equipment" },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-24 md:py-28">
      <div className="absolute left-1/2 top-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-1">
          <div className="absolute inset-0 rounded-[2rem] bg-cyan-100/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-[0_20px_60px_rgba(6,182,212,0.15)]">
            <Image
              src="/images/about-diver.jpg"
              alt="About Dive Hub"
              width={800}
              height={800}
              className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:px-5 sm:py-4">
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-cyan-600 sm:text-[11px]">
                Underwater Excellence
              </p>

              <h3 className="mt-1 text-lg font-black text-slate-950 sm:mt-2 sm:text-2xl">
                Dive Beyond Limits
              </h3>
            </div>
          </div>
        </div>

        <div className="order-2">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-600 sm:text-xs">
            About Dive Hub
          </p>

          <h2 className="mt-4 text-[30px] font-black leading-[1.08] text-slate-950 sm:mt-5 sm:text-5xl md:text-6xl">
            Trusted Diving &
            <span className="text-cyan-600"> Marine Experts</span>
          </h2>

          <p className="mt-5 text-[14px] leading-7 text-slate-600 sm:mt-6 sm:text-[16px] sm:leading-8">
            Dive Hub & Marine Services provides professional scuba diving
            training, commercial diving education, underwater operations, and
            marine support services for beginners and experienced divers.
          </p>

          <p className="mt-4 text-[14px] leading-7 text-slate-500 sm:text-[16px] sm:leading-8">
            Our experienced instructors focus on safety, professionalism,
            advanced training methods, and unforgettable underwater experiences.
          </p>

          <div className="mt-7 grid max-w-[420px] grid-cols-1 gap-2.5 sm:mt-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="grid min-h-[48px] w-full grid-cols-[34px_1fr] items-center gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 px-3 py-2 shadow-sm transition-all duration-300 hover:bg-cyan-100"
                >
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon className="h-4 w-4 text-cyan-600" />
                  </div>

                  <h3 className="text-[10px] font-black uppercase tracking-wide text-slate-800 sm:text-[11px]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600 sm:px-7 sm:py-4 sm:text-xs"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}