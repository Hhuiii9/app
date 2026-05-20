// src/app/about/page.tsx

import Image from "next/image";
import {
  ShieldCheck,
  Waves,
  Award,
  Fish,
  Anchor,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Professional safety-focused diving practices for every session.",
  },
  {
    icon: Award,
    title: "Certified Trainers",
    desc: "Experienced and internationally trained instructors.",
  },
  {
    icon: Waves,
    title: "Modern Equipment",
    desc: "Advanced diving equipment and underwater technology.",
  },
  {
    icon: Fish,
    title: "Marine Passion",
    desc: "Strong focus on ocean exploration and conservation.",
  },
];

const stats = [
  {
    number: "500+",
    label: "Certified Divers",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "50+",
    label: "Marine Projects",
  },
  {
    number: "100%",
    label: "Safety Focused",
  },
];

const services = [
  {
    icon: Waves,
    title: "Scuba Diving Courses",
  },
  {
    icon: Anchor,
    title: "Commercial Diving",
  },
  {
    icon: LifeBuoy,
    title: "Rescue Diving",
  },
  {
    icon: Fish,
    title: "Marine Exploration",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      
      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            
            {/* LEFT */}
            <div>
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
                About Dive Hub
              </p>

              <h1 className="text-[32px] font-black leading-[1.08] text-slate-950 sm:text-5xl md:text-6xl">
                Professional Diving &
                <span className="text-cyan-600">
                  {" "}
                  Marine Services
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-slate-600 sm:mt-7 sm:text-[16px] sm:leading-8">
                Dive Hub & Marine Services delivers professional
                scuba diving training, underwater services,
                commercial diving solutions, and unforgettable
                marine exploration experiences.
              </p>

              <p className="mt-4 max-w-2xl text-[14px] leading-7 text-slate-500 sm:text-[16px] sm:leading-8">
                Our mission is to create highly skilled divers
                while maintaining international safety standards,
                advanced underwater training, and responsible
                marine practices.
              </p>

              {/* SERVICES */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                {services.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-2xl bg-cyan-50 p-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                        <Icon className="h-4 w-4 text-cyan-600" />
                      </div>

                      <p className="text-[11px] font-black uppercase tracking-wide text-slate-800">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-cyan-100/60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(6,182,212,0.14)]">
                <Image
                  src="/images/about-diver1.jpg"
                  alt="Diving Training"
                  width={700}
                  height={700}
                  className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-cyan-50 p-5 text-center sm:rounded-[2rem] sm:p-8"
              >
                <h3 className="text-3xl font-black text-cyan-600 sm:text-5xl">
                  {item.number}
                </h3>

                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-600 sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-[30px] font-black text-slate-950 sm:text-5xl">
              Trusted Marine Experts
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[16px] sm:leading-8">
              We combine professional expertise, modern diving
              technology, and safety-focused training to create
              premium underwater experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => {
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

      {/* MISSION */}
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
            Our Mission
          </p>

          <h2 className="mt-4 text-[30px] font-black leading-[1.1] sm:text-5xl">
            Building Skilled Divers With
            <span className="text-cyan-400">
              {" "}
              Global Safety Standards
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[14px] leading-7 text-slate-300 sm:text-[17px] sm:leading-8">
            Dive Hub aims to provide high-quality underwater
            education, marine support services, and professional
            diving experiences through innovation, discipline,
            safety awareness, and passion for the ocean.
          </p>
        </div>
      </section>
    </main>
  );
}