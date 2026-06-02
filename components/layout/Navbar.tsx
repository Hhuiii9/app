"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "What We Offer", href: "/what-we-offer" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-[99] border-b border-white/5 bg-[#03131d]/70 backdrop-blur-2xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        
        {/* BRAND LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-lg sm:h-13 sm:w-13 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Dive Hub & Marine Services"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col items-start text-left select-none">
            <h1 className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white group-hover:text-cyan-300 transition-colors duration-300 leading-none">
              DIVE HUB
            </h1>
            <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-semibold mt-1 leading-none">
              AND MARINE SERVICES
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-2.5 left-0 h-[2px] w-full rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP ACTION BUTTON */}
        <a
          href="https://wa.me/916235107072"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-slate-950 lg:inline-flex"
        >
          Contact Now
        </a>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-md lg:hidden"
        >
          <Menu className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* MOBILE SCREEN CURTAIN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#020b10]/95 backdrop-blur-3xl lg:hidden flex flex-col px-6 py-5"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 group"
              >
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Dive Hub & Marine Services"
                    fill
                    className="object-cover"
                  />
                </div>

                  <div className="flex flex-col items-start text-left select-none">
                    <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-white leading-none">
                      DIVE HUB
                    </h2>
                    <p className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.25em] text-cyan-400 font-semibold mt-1 leading-none">
                      AND MARINE SERVICES
                    </p>
                  </div>
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-md"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* MOBILE NAV LINKS LIST */}
            <div className="mt-12 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative rounded-2xl px-5 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                        : "bg-white/[0.02] text-white/70 hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span className="relative inline-block">
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cyan-400" />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            <a
              href="https://wa.me/916235107072"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-4 text-xs font-black uppercase tracking-[0.25em] text-slate-950 shadow-lg shadow-cyan-500/20"
            >
              Contact Now
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-auto rounded-3xl border border-white/5 bg-white/[0.01] p-6 text-center">
              <p className="text-xs leading-relaxed text-slate-400 font-light">
                Professional scuba diving certification, specialized commercial diving education, ROV data surveys and offshore solutions.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}