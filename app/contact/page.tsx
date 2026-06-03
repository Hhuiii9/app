// src/app/contact/page.tsx

"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Animation Presets
const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const, staggerChildren: 0.08 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50, scale: 0.96, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ContactPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageTransition}
      className="bg-[#03131d] text-white min-h-screen overflow-hidden relative"
    >
      {/* Luxury layout depth and very subtle ocean glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.03)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.02)_0%,transparent_50%)] pointer-events-none z-0" />

      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-28 z-10">
        <div className="mx-auto max-w-7xl text-center">
          <motion.p
            variants={fadeInUp}
            className="text-[10px] font-black uppercase tracking-[0.28em] text-[#67e8f9] sm:text-xs flex items-center justify-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Contact Dive Hub & Marine Services
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-5xl text-[32px] font-black leading-[1.08] text-white sm:text-5xl md:text-6xl tracking-tight"
          >
            Let’s Start Your
            <span className="text-[#67e8f9]"> Diving Journey</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-3xl text-[14px] leading-7 text-white/72 font-light sm:mt-7 sm:text-[16px] sm:leading-8"
          >
            Contact Dive Hub & Marine Services for scuba diving
            courses, commercial diving training, marine solutions,
            underwater operations, and professional certifications.
          </motion.p>
        </div>
      </section>

      {/* CONTACT CARDS */}
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
            className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
          >
            
            {/* PHONE */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)] cursor-pointer flex flex-col justify-between h-full transition-all duration-500 sm:rounded-[2rem] sm:p-7"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a2b40]/60 border border-[#123b57]/80 text-[#67e8f9] sm:h-16 sm:w-16 sm:rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#123b57] group-hover:text-white">
                  <Phone className="h-5 w-5 sm:h-7 sm:w-7 transition-transform duration-700 group-hover:rotate-6" />
                </div>

                <h3 className="mt-4 text-[13px] font-black text-white sm:mt-6 sm:text-2xl tracking-tight uppercase group-hover:text-[#67e8f9] transition-colors duration-300">
                  Phone
                </h3>

                <div className="mt-2 text-[11px] leading-5 text-white/72 font-light sm:mt-4 sm:text-[14px] sm:leading-7 flex flex-col space-y-1 sm:space-y-1.5">
                  <a href="tel:04842989390" className="hover:text-[#67e8f9] transition-colors flex items-center gap-1">
                    <span className="opacity-60">Landline:</span> 0484 2989390
                  </a>
                  <a href="tel:+916235107072" className="hover:text-[#67e8f9] transition-colors flex items-center gap-1">
                    <span className="opacity-60">Mobile:</span> +91 6235107072
                  </a>
                  <a href="tel:+916235106062" className="hover:text-[#67e8f9] transition-colors flex items-center gap-1">
                    <span className="opacity-60">Mobile:</span> +91 6235106062
                  </a>
                </div>
              </div>
            </motion.div>

            {/* EMAIL */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)] cursor-pointer flex flex-col justify-between h-full transition-all duration-500 sm:rounded-[2rem] sm:p-7"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a2b40]/60 border border-[#123b57]/80 text-[#67e8f9] sm:h-16 sm:w-16 sm:rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#123b57] group-hover:text-white">
                  <Mail className="h-5 w-5 sm:h-7 sm:w-7 transition-transform duration-700 group-hover:rotate-6" />
                </div>

                <h3 className="mt-4 text-[13px] font-black text-white sm:mt-6 sm:text-2xl tracking-tight uppercase group-hover:text-[#67e8f9] transition-colors duration-300">
                  Email
                </h3>

                <p className="mt-2 break-all text-[11px] leading-5 text-white/72 font-light sm:mt-4 sm:text-[15px] sm:leading-7">
                  Divehubmarineservices@gmail.com
                </p>
              </div>
            </motion.div>

            {/* LOCATION */}
            <a
              href="https://www.google.com/maps/place/10%C2%B010'59.4%22N+76%C2%B022'45.7%22E/@10.183175,76.379349,17z/data=!4m4!3m3!8m2!3d10.1831751!4d76.3793488?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-2xl bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)] cursor-pointer flex flex-col justify-between h-full transition-all duration-500 sm:rounded-[2rem] sm:p-7"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a2b40]/60 border border-[#123b57]/80 text-[#67e8f9] sm:h-16 sm:w-16 sm:rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#123b57] group-hover:text-white">
                    <MapPin className="h-5 w-5 sm:h-7 sm:w-7 transition-transform duration-700 group-hover:rotate-6" />
                  </div>

                  <h3 className="mt-4 text-[13px] font-black text-white sm:mt-6 sm:text-2xl tracking-tight uppercase group-hover:text-[#67e8f9] transition-colors duration-300">
                    Location
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/72 font-light sm:mt-4 sm:text-[15px] sm:leading-7">
                    Angamaly, Ernakulam<br />
                    Kerala, India
                  </p>
                </div>
              </motion.div>
            </a>

            {/* HOURS */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)] cursor-pointer flex flex-col justify-between h-full transition-all duration-500 sm:rounded-[2rem] sm:p-7"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a2b40]/60 border border-[#123b57]/80 text-[#67e8f9] sm:h-16 sm:w-16 sm:rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#123b57] group-hover:text-white">
                  <Clock3 className="h-5 w-5 sm:h-7 sm:w-7 transition-transform duration-700 group-hover:rotate-6" />
                </div>

                <h3 className="mt-4 text-[13px] font-black text-white sm:mt-6 sm:text-2xl tracking-tight uppercase group-hover:text-[#67e8f9] transition-colors duration-300">
                  Working Hours
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/72 font-light sm:mt-4 sm:text-[15px] sm:leading-7">
                  Mon - Sat : 9AM - 7PM
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            
            {/* CONTACT FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
              className="rounded-[2rem] bg-[#062232]/30 border border-white/10 p-5 text-white sm:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Atmospheric slow background glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06)_0%,transparent_80%)] pointer-events-none"
              />

              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#67e8f9] sm:text-xs">
                  Send Message
                </span>

                <h2 className="mt-4 text-[30px] font-black leading-[1.08] sm:text-5xl text-white tracking-tight uppercase">
                  Get In Touch
                </h2>

                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const name = (
                      document.getElementById("name") as HTMLInputElement
                    ).value;

                    const email = (
                      document.getElementById("email") as HTMLInputElement
                    ).value;

                    const phone = (
                      document.getElementById("phone") as HTMLInputElement
                    ).value;

                    const message = (
                      document.getElementById("message") as HTMLTextAreaElement
                    ).value;

                    const contactNumber = (
                      document.getElementById("contactNumber") as HTMLSelectElement
                    ).value;

                    const whatsappMessage = `Hello Dive Hub & Marine Services,

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

                    const whatsappUrl = `https://wa.me/${contactNumber}?text=${encodeURIComponent(
                      whatsappMessage
                    )}`;

                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#03131d]/60 px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#03131d]/60 px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                  />

                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#03131d]/60 px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                  />

                  <div className="relative w-full">
                    <select
                      id="contactNumber"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#03131d]/60 px-5 py-4 text-sm text-white/70 outline-none focus:border-cyan-400 focus:text-white focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="916235107072" className="bg-[#03131d] text-white">Representative 1 (+91 6235107072)</option>
                      <option value="916235106062" className="bg-[#03131d] text-white">Representative 2 (+91 6235106062)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-cyan-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#03131d]/60 px-5 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                  />

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#67e8f9] hover:bg-cyan-300 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 transition-all duration-300 hover:scale-103 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] sm:text-xs cursor-pointer"
                  >
                    Send WhatsApp Message
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* MAP */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="overflow-hidden rounded-[2rem] bg-[#062232]/30 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center gap-2 bg-[#0a2b40]/60 border-b border-white/10 px-5 py-4">
                <MapPin className="h-5 w-5 text-[#67e8f9]" />

                <p className="text-sm font-black uppercase tracking-wide text-white">
                  Our Location
                </p>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=10.1831751,76.3793488&z=17&hl=en&output=embed"
                className="h-[350px] w-full sm:h-[620px] opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

          </div>
        </div>
      </section>
    </motion.main>
  );
}