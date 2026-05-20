// src/app/courses/page.tsx

import Image from "next/image";
import {
  Waves,
  ShieldCheck,
  Camera,
  Anchor,
  LifeBuoy,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const whatsappNumber = "916235106062";

const courses = [
  {
    icon: Waves,
    title: "Beginner Diving",
    desc: "Learn scuba diving fundamentals with safety-focused training.",
    image: "/images/course-1.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Diving",
    desc: "Advanced underwater techniques and deep diving sessions.",
    image: "/images/course-2.jpg",
  },
  {
    icon: Camera,
    title: "Underwater Photography",
    desc: "Capture underwater moments using professional techniques.",
    image: "/images/course-3.jpg",
  },
  {
    icon: LifeBuoy,
    title: "Rescue Diving",
    desc: "Emergency response and underwater rescue training programs.",
    image: "/images/course-4.jpg",
  },
  {
    icon: Anchor,
    title: "Commercial Diving",
    desc: "Career-focused industrial and offshore diving training.",
    image: "/images/course-5.jpg",
  },
  {
    icon: BadgeCheck,
    title: "Marine Inspection",
    desc: "Professional underwater inspection and marine operations.",
    image: "/images/course-6.jpg",
  },
];

const stats = [
  { number: "500+", label: "Students Trained" },
  { number: "25+", label: "Professional Courses" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Safety Focused" },
];

export default function CoursesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
            Professional Diving Courses
          </p>

          <h1 className="mx-auto mt-4 max-w-5xl text-[32px] font-black leading-[1.08] text-slate-950 sm:text-5xl md:text-6xl">
            Explore Our
            <span className="text-cyan-600"> Diving Programs</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[14px] leading-7 text-slate-600 sm:mt-7 sm:text-[16px] sm:leading-8">
            Dive Hub & Marine Services offers beginner to advanced scuba diving
            programs, commercial diving training, underwater rescue, and
            professional marine certification courses with global safety
            standards.
          </p>
        </div>
      </section>

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

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
              Our Courses
            </p>

            <h2 className="mt-4 text-[30px] font-black text-slate-950 sm:text-5xl">
              Learn From Experts
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => {
              const Icon = course.icon;
              const message = `Hello Dive Hub & Marine Services, I want to enroll in the ${course.title} course. Please share more details.`;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(6,182,212,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,182,212,0.14)] sm:rounded-[2rem]"
                >
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={500}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-[140px] w-full object-cover sm:h-[240px]"
                    />

                    <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur-xl sm:left-5 sm:top-5 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon className="h-5 w-5 text-cyan-600 sm:h-7 sm:w-7" />
                    </div>
                  </div>

                  <div className="p-3 sm:p-7">
                    <h3 className="text-[13px] font-black leading-tight text-slate-950 sm:text-2xl">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                      {course.desc}
                    </p>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        message
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-cyan-600 transition-all hover:text-cyan-700 sm:mt-7 sm:gap-2 sm:text-sm sm:tracking-widest"
                    >
                      Enroll Now
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-5 text-white sm:p-10 md:p-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
                Start Your Journey
              </p>

              <h2 className="mt-4 text-[30px] font-black leading-[1.1] sm:text-5xl">
                Become A Skilled
                <span className="text-cyan-400"> Professional Diver</span>
              </h2>
            </div>

            <div>
              <p className="text-[14px] leading-7 text-slate-300 sm:text-[16px] sm:leading-8">
                Join Dive Hub & Marine Services to experience internationally
                focused diving education, commercial diving skills, and
                advanced underwater exploration programs designed for real-world
                marine careers.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello Dive Hub & Marine Services, I want to know more about your diving courses."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 transition-all duration-300 hover:bg-cyan-400 sm:text-xs"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}