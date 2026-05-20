// src/components/home/CoursesSection.tsx

import Link from "next/link";
import {
  Waves,
  ShieldCheck,
  Camera,
  Anchor,
  LifeBuoy,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    icon: Waves,
    title: "Beginner Diving",
    desc: "Learn scuba diving fundamentals with safety training.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Diving",
    desc: "Upgrade underwater skills with advanced sessions.",
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Capture beautiful underwater moments professionally.",
  },
  {
    icon: LifeBuoy,
    title: "Rescue Diving",
    desc: "Emergency response and underwater safety training.",
  },
  {
    icon: Anchor,
    title: "Commercial Diving",
    desc: "Career-focused training for offshore operations.",
  },
  {
    icon: BadgeCheck,
    title: "Marine Inspection",
    desc: "Underwater inspection and marine support training.",
  },
];

export default function CoursesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 md:py-28">
      
      {/* LIGHT EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.14),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* TOP */}
        <div className="mb-9 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
              Professional Courses
            </p>

            <h2 className="mt-4 max-w-4xl text-[30px] font-black leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Diving Training
              <span className="text-cyan-400">
                {" "}
                Programs
              </span>
            </h2>
          </div>

          <Link
            href="/courses"
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/30
              px-5
              py-3
              text-[10px]
              font-black
              uppercase
              tracking-[0.18em]
              text-cyan-300
              transition-all
              duration-300
              hover:bg-cyan-500
              hover:text-slate-950
              sm:px-7
              sm:py-4
              sm:text-xs
            "
          >
            View All Courses

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* COURSES */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-white/5
                  p-3
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.07]
                  sm:rounded-[2rem]
                  sm:p-7
                "
              >
                {/* CARD EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  
                  {/* ICON */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 sm:mb-5 sm:h-16 sm:w-16 sm:rounded-2xl">
                    <Icon className="h-5 w-5 text-cyan-400 sm:h-7 sm:w-7" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[13px] font-black leading-tight text-white sm:text-2xl">
                    {course.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 text-[11px] leading-5 text-slate-400 sm:mt-4 sm:text-[15px] sm:leading-7">
                    {course.desc}
                  </p>

                  {/* BUTTON */}
                  <Link
                    href="/courses"
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wide
                      text-cyan-300
                      transition-all
                      hover:text-cyan-400
                      sm:mt-8
                      sm:gap-2
                      sm:text-sm
                      sm:tracking-widest
                    "
                  >
                    Explore

                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}