// src/components/home/CTASection.tsx

import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[220px] w-[220px] rounded-full bg-[#0D3B66]/10 blur-3xl sm:h-[320px] sm:w-[320px]" />

        <div className="absolute -right-24 bottom-0 h-[220px] w-[220px] rounded-full bg-[#D4A017]/10 blur-3xl sm:h-[320px] sm:w-[320px]" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#0D3B66] shadow-2xl shadow-[#0D3B66]/10 sm:rounded-[40px]">
        <div className="grid gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:px-16 lg:py-20">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/80 backdrop-blur sm:text-sm">
              Start Your Swimming Journey
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:mt-6 sm:text-5xl">
              Learn Swimming With
              <span className="block text-[#D4A017]">
                Confidence & Safety
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
              Join Dive Hub & Marine Services and experience premium swimming
              training with expert coaches, flexible schedules, and safe
              learning environments for kids and adults.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A017] px-7 py-4 text-sm font-bold text-white shadow-xl transition hover:scale-105 sm:w-auto sm:text-base"
              >
                Book Free Trial
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="https://wa.me/916235106062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto sm:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0D3B66]">
                  <Phone className="h-5 w-5" />
                </div>

                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#D4A017]">
                  Call Us
                </p>

                <a
                  href="tel:+916235106062"
                  className="mt-2 block text-sm font-bold text-white sm:text-base"
                >
                  +91 6235106062
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0D3B66]">
                  <Mail className="h-5 w-5" />
                </div>

                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#D4A017]">
                  Email
                </p>

                <a
                  href="mailto:Divehubmarineservices@gmail.com"
                  className="mt-2 block break-all text-sm font-bold text-white"
                >
                  Divehubmarineservices@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0D3B66]">
                  <MapPin className="h-5 w-5" />
                </div>

                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#D4A017]">
                  Location
                </p>

                <p className="mt-2 text-sm font-bold text-white sm:text-base">
                  Ernakulam, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE GOOGLE MAP */}
          <div className="flex items-center justify-center">
            <div className="h-[420px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-2 shadow-2xl backdrop-blur-2xl sm:h-[520px]">
              <iframe
                title="Dive Hub & Marine Services Location"
                src="https://www.google.com/maps?q=Ernakulam,Kerala,India&output=embed"
                className="h-full w-full rounded-[22px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}