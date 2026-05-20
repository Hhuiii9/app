// src/app/contact/page.tsx

"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      
      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-600 sm:text-xs">
            Contact Dive Hub
          </p>

          <h1 className="mx-auto mt-4 max-w-5xl text-[32px] font-black leading-[1.08] text-slate-950 sm:text-5xl md:text-6xl">
            Let’s Start Your
            <span className="text-cyan-600">
              {" "}
              Diving Journey
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-[14px] leading-7 text-slate-600 sm:mt-7 sm:text-[16px] sm:leading-8">
            Contact Dive Hub & Marine Services for scuba diving
            courses, commercial diving training, marine solutions,
            underwater operations, and professional certifications.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            
            {/* PHONE */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(6,182,212,0.08)] sm:rounded-[2rem] sm:p-7">
              
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 sm:h-16 sm:w-16 sm:rounded-2xl">
                <Phone className="h-5 w-5 text-cyan-600 sm:h-7 sm:w-7" />
              </div>

              <h3 className="mt-4 text-[13px] font-black text-slate-950 sm:mt-6 sm:text-2xl">
                Phone
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                +91 6235106062
              </p>
            </div>

            {/* EMAIL */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(6,182,212,0.08)] sm:rounded-[2rem] sm:p-7">
              
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 sm:h-16 sm:w-16 sm:rounded-2xl">
                <Mail className="h-5 w-5 text-cyan-600 sm:h-7 sm:w-7" />
              </div>

              <h3 className="mt-4 text-[13px] font-black text-slate-950 sm:mt-6 sm:text-2xl">
                Email
              </h3>

              <p className="mt-2 break-all text-[11px] leading-5 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                Divehubmarineservices@gmail.com
              </p>
            </div>

            {/* LOCATION */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(6,182,212,0.08)] sm:rounded-[2rem] sm:p-7">
              
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 sm:h-16 sm:w-16 sm:rounded-2xl">
                <MapPin className="h-5 w-5 text-cyan-600 sm:h-7 sm:w-7" />
              </div>

              <h3 className="mt-4 text-[13px] font-black text-slate-950 sm:mt-6 sm:text-2xl">
                Location
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                Kerala, India
              </p>
            </div>

            {/* HOURS */}
            <div className="rounded-2xl bg-white p-4 shadow-[0_10px_30px_rgba(6,182,212,0.08)] sm:rounded-[2rem] sm:p-7">
              
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 sm:h-16 sm:w-16 sm:rounded-2xl">
                <Clock3 className="h-5 w-5 text-cyan-600 sm:h-7 sm:w-7" />
              </div>

              <h3 className="mt-4 text-[13px] font-black text-slate-950 sm:mt-6 sm:text-2xl">
                Working Hours
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                Mon - Sat : 9AM - 7PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            
            {/* CONTACT FORM */}
            <div className="rounded-[2rem] bg-slate-950 p-5 text-white sm:p-10">
              
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
                Send Message
              </p>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] sm:text-5xl">
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

                  const whatsappMessage = `Hello Dive Hub & Marine Services,

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

                  const whatsappUrl = `https://wa.me/916235106062?text=${encodeURIComponent(
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
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />

                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 transition-all duration-300 hover:bg-cyan-400 sm:text-xs"
                >
                  Send WhatsApp Message

                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(6,182,212,0.12)]">
              
              <div className="flex items-center gap-2 bg-cyan-50 px-5 py-4">
                <MapPin className="h-5 w-5 text-cyan-600" />

                <p className="text-sm font-black uppercase tracking-wide text-slate-950">
                  Our Location
                </p>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=Kerala&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="h-[350px] w-full sm:h-[620px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}