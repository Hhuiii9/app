"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="fixed top-0 z-[9999] w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-white px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-200 bg-white shadow-sm sm:h-14 sm:w-14">
            <Image
              src="/logo.png"
              alt="Dive Hub & Marine Services"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-sm font-black uppercase tracking-wide text-slate-900 sm:text-lg">
              Dive Hub
            </h1>
            <p className="text-[9px] uppercase tracking-[0.2em] text-cyan-600 sm:text-[11px]">
              Marine Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-cyan-600"
                    : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://wa.me/916235106062"
          target="_blank"
          className="hidden rounded-full bg-cyan-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-cyan-600 lg:inline-flex"
        >
          Contact Now
        </a>

        <button
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm lg:hidden"
        >
          <Menu className="h-5 w-5 text-slate-900" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[10000] bg-white lg:hidden">
          <div className="flex h-full w-full flex-col bg-white px-5 py-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-cyan-200 bg-white shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Dive Hub"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-sm font-black uppercase tracking-wide text-slate-900">
                    Dive Hub
                  </h2>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-cyan-600">
                    Marine Services
                  </p>
                </div>
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
              >
                <X className="h-5 w-5 text-slate-900" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative rounded-2xl px-4 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-50 text-cyan-700"
                        : "bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="relative inline-block">
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cyan-500" />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            <a
              href="https://wa.me/916235106062"
              target="_blank"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-cyan-600"
            >
              Contact Now
            </a>

            <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm leading-relaxed text-slate-600">
                Professional scuba diving training, underwater services,
                commercial diving, and marine solutions.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}