"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
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

// Premium animation configs
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const, staggerChildren: 0.08 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function CoursesPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageTransition}
      className="bg-[#03131d] text-white min-h-screen overflow-hidden relative"
    >
      {/* Luxury ocean blue gradients and subtle cyan atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.03)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.02)_0%,transparent_50%)] pointer-events-none z-0" />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-28 z-10">
        <div className="mx-auto max-w-7xl text-center">
          <motion.p
            variants={fadeInUp}
            className="text-[10px] font-black uppercase tracking-[0.28em] text-[#67e8f9] sm:text-xs"
          >
            Professional Diving Courses
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-5xl text-[32px] font-black leading-[1.08] text-white sm:text-5xl md:text-6xl tracking-tight"
          >
            Explore Our
            <span className="text-[#67e8f9]"> Diving Programs</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-3xl text-[14px] leading-7 text-white/75 font-light sm:mt-7 sm:text-[16px] sm:leading-8"
          >
            Dive Hub & Marine Services offers beginner to advanced scuba diving
            programs, commercial diving training, underwater rescue, and
            professional marine certification courses with global safety
            standards.
          </motion.p>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 relative z-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-2xl bg-white/[0.03] hover:bg-[#062232]/50 p-5 text-center border border-white/[0.08] hover:border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.08)] cursor-pointer transition-all duration-300 sm:rounded-[2rem] sm:p-8"
              >
                <h3 className="text-3xl font-black text-[#67e8f9] sm:text-5xl tracking-tight">
                  {item.number}
                </h3>

                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/60 sm:text-xs">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 relative z-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center sm:mb-14"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#67e8f9] sm:text-xs">
              Our Courses
            </p>

            <h2 className="mt-4 text-[30px] font-black text-white sm:text-5xl tracking-tight uppercase">
              Learn From Experts
            </h2>
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {courses.map((course, index) => {
              const Icon = course.icon;
              const message = `Hello Dive Hub & Marine Services, I want to enroll in the ${course.title} course. Please share more details.`;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group overflow-hidden rounded-2xl bg-white/[0.05] border border-white/[0.08] hover:border-cyan-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(6,182,212,0.12)] cursor-pointer flex flex-col justify-between h-full transition-all duration-500 sm:rounded-[2rem]"
                >
                  <div>
                    <div className="relative overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={600}
                        height={500}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-[140px] w-full object-cover sm:h-[240px] transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#062232]/80 backdrop-blur-xl border border-white/10 text-[#67e8f9] sm:left-5 sm:top-5 sm:h-14 sm:w-14 sm:rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#123b57] group-hover:text-white">
                        <Icon className="h-5 w-5 sm:h-7 sm:w-7 transition-transform duration-500 group-hover:rotate-6" />
                      </div>
                    </div>

                    <div className="p-3 sm:p-7">
                      <h3 className="text-[13px] font-black leading-tight text-white sm:text-2xl tracking-tight uppercase group-hover:text-[#67e8f9] transition-colors duration-300">
                        {course.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-5 text-white/75 font-light sm:mt-4 sm:text-[15px] sm:leading-7">
                        {course.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 sm:px-7 sm:pb-7 pt-0">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        message
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-[#67e8f9] transition-all hover:text-cyan-300 hover:scale-102 hover:translate-x-1 duration-300 sm:mt-0 sm:gap-2 sm:text-sm sm:tracking-widest"
                    >
                      Enroll Now
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA DETAILS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="mx-auto max-w-7xl rounded-[2rem] bg-[#062232]/30 border border-white/10 p-5 text-white sm:p-10 md:p-14 relative overflow-hidden"
        >
          {/* Subtle slow breathing background glow */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_80%)] pointer-events-none"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-block text-[10px] font-black uppercase tracking-[0.28em] text-[#67e8f9] sm:text-xs"
              >
                Start Your Journey
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-[30px] font-black leading-[1.1] sm:text-5xl tracking-tight text-white"
              >
                Become A Skilled
                <span className="text-[#67e8f9]"> Professional Diver</span>
              </motion.h2>
            </div>

            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[14px] leading-7 text-white/75 font-light sm:text-[16px] sm:leading-8"
              >
                Join Dive Hub & Marine Services to experience internationally
                focused diving education, commercial diving skills, and
                advanced underwater exploration programs designed for real-world
                marine careers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello Dive Hub & Marine Services, I want to know more about your diving courses."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#67e8f9] hover:bg-cyan-300 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] sm:text-xs"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}