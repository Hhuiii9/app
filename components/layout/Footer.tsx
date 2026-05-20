// src/components/layout/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "What We Offer",
    href: "/what-we-offer",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      
      {/* BG GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.12),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        
        <div className="grid gap-12 lg:grid-cols-4">
          
          {/* COMPANY */}
          <div className="lg:col-span-2">
            
            {/* LOGO */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* LOGO IMAGE */}
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-cyan-400/20 bg-white/5 sm:h-16 sm:w-16">
                <Image
                  src="/logo.png"
                  alt="Dive Hub Logo"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-xl font-black uppercase tracking-wide sm:text-2xl">
                  Dive Hub
                </h2>

                <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
                  Marine Services
                </p>
              </div>
            </div>

            {/* DESC */}
            <p className="mt-6 max-w-xl text-[14px] leading-7 text-slate-400 sm:mt-8 sm:text-[15px] sm:leading-relaxed">
              Dive Hub & Marine Services provides professional diving
              training, underwater services, commercial diving support,
              marine solutions, and advanced diving certifications with
              a strong focus on safety and professionalism.
            </p>

            {/* SOCIAL */}
            <div className="mt-7 flex items-center gap-3 sm:mt-8 sm:gap-4">
              
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 sm:h-12 sm:w-12"
              >
                <Instagram className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 sm:h-12 sm:w-12"
              >
                <Facebook className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-black uppercase sm:text-xl">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] text-slate-400 transition-all duration-300 hover:text-cyan-400 sm:text-[15px]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-black uppercase sm:text-xl">
              Contact Info
            </h3>

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              
              {/* PHONE */}
              <div className="flex items-start gap-3 sm:gap-4">
                
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Phone className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-sm">
                    Phone
                  </p>

                  <p className="mt-1 text-[14px] text-slate-300 sm:text-base">
                    +91 6235106062
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3 sm:gap-4">
                
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Mail className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-sm">
                    Email
                  </p>

                  <p className="mt-1 break-all text-[14px] text-slate-300 sm:text-base">
                    Divehubmarineservices@gmail.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-3 sm:gap-4">
                
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <MapPin className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 sm:text-sm">
                    Location
                  </p>

                  <p className="mt-1 text-[14px] text-slate-300 sm:text-base">
                    Ernakulam, Kerala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-16 sm:pt-8">
          
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
            
            <p className="text-[12px] text-slate-500 sm:text-sm">
              © {new Date().getFullYear()} Dive Hub & Marine Services.
              All Rights Reserved.
            </p>

            <p className="text-[12px] text-slate-500 sm:text-sm">
              Designed with premium marine aesthetics.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}