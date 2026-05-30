"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "What We Offer", href: "/what-we-offer" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#03131d] text-white">
      
      {/* Immersive bottom glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.06),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        
        <div className="grid gap-12 lg:grid-cols-4 items-start">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 flex flex-col items-start">
            
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-md">
                <Image
                  src="/logo.png"
                  alt="Dive Hub & Marine Services Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white">
                  Dive Hub &
                </h2>
                <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-medium mt-0.5">
                  Marine Services
                </p>
              </div>
            </div>

            {/* Description narrative */}
            <p className="mt-6 max-w-md text-xs sm:text-sm font-light leading-relaxed text-slate-400">
              Dive Hub & Marine Services provides professional scuba certifications, certified commercial diving education, specialized robotic ROV surveys, and industrial marine construction support under supreme safety standards.
            </p>

            {/* Social media list */}
            <div className="mt-8 flex items-center gap-3">
              <motion.a
                whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(34, 211, 238, 0.3)" }}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:text-cyan-300"
              >
                <Instagram className="h-4.5 w-4.5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(34, 211, 238, 0.3)" }}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:text-cyan-300"
              >
                <Facebook className="h-4.5 w-4.5" />
              </motion.a>
            </div>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-light text-slate-400 tracking-wider transition-colors duration-300 hover:text-cyan-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT INFO COLUMN */}
          <div className="flex flex-col items-start">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-white">
              Marine Base
            </h3>

            <div className="mt-6 space-y-6">
              
              {/* Phone contact */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-widest text-slate-500">
                    Phone
                  </span>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-300">
                    0484 2989390
                  </p>
                </div>
              </div>

              {/* Email contact */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[8px] uppercase tracking-widest text-slate-500">
                    Email
                  </span>
                  <p className="mt-0.5 break-all text-xs sm:text-sm font-bold text-slate-300">
                    divehub@gmail.com
                  </p>
                </div>
              </div>

              {/* Location pin */}
              <a
                href="https://www.google.com/maps/place/10%C2%B010'59.4%22N+76%C2%B022'45.7%22E/@10.183175,76.379349,17z/data=!4m4!3m3!8m2!3d10.1831751!4d76.3793488?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 hover:opacity-85 transition-opacity"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 group-hover:border-cyan-300">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-widest text-slate-500">
                    Location
                  </span>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-slate-300 group-hover:text-cyan-300 transition-colors">
                    Eloor, Ernakulam, Kerala
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ATTRIBUTIONS TRACK */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-slate-500 font-light">
            © {new Date().getFullYear()} Dive Hub & Marine Services. All Rights Reserved.
          </p>

          <p className="text-[10px] sm:text-xs text-slate-500 font-light tracking-wide">
            Designed with premium cinematic aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
}