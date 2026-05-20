// src/components/home/ContactCTA.tsx

import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-24 md:py-28">
      
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* BLUE WRAPPER */}
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-4 shadow-[0_20px_60px_rgba(2,12,27,0.25)] sm:p-8 md:p-12">
          
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            
            {/* LEFT */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-400 sm:text-xs">
                Contact Dive Hub
              </p>

              <h2 className="mt-4 text-[30px] font-black leading-[1.08] text-white sm:text-5xl md:text-6xl">
                Start Your
                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Underwater
                </span>
                <br />
                Journey Today
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-slate-300 sm:text-[16px] sm:leading-8">
                Contact Dive Hub & Marine Services for scuba diving
                courses, commercial diving training, underwater
                operations, and marine support services.
              </p>

              {/* CONTACT BOXES */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                
                {/* PHONE */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      +91 6235106062
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-widest text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 break-all text-xs font-black text-white">
                      Divehubmarineservices@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                
                <a
                  href="https://wa.me/916235106062"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 transition-all duration-300 hover:bg-cyan-400 sm:text-xs"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 sm:text-xs"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* GMAP */}
            <div className="overflow-hidden rounded-[1.7rem] bg-white">
              
              {/* TOP BAR */}
              <div className="flex items-center gap-2 bg-cyan-50 px-5 py-4">
                <MapPin className="h-5 w-5 text-cyan-600" />

                <p className="text-sm font-black uppercase tracking-wide text-slate-950">
                  Our Location
                </p>
              </div>

              {/* MAP */}
              <iframe
                src="https://maps.google.com/maps?q=Kerala&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="h-[320px] w-full sm:h-[420px]"
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