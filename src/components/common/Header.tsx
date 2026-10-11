"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Instagram, 
  Youtube, 
  Sparkles, 
  CalendarDays, 
  BookOpen, 
  MessageSquare, 
  KeyRound, 
  Home 
} from "lucide-react";
import { churchInfo } from "@/data/pastor";

const navItems = [
  { name: "홈", href: "/", icon: Home },
  { name: "예배 & 말씀", href: "/worship", icon: BookOpen },
  { name: "통합 달력", href: "/calendar", icon: CalendarDays },
  { name: "소통 게시판", href: "/board", icon: MessageSquare },
  { name: "교사 전용", href: "/teachers", icon: KeyRound },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-brand-green-800 text-white flex items-center justify-center font-bold shadow-md shadow-brand-green-900/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-brand-green-800 tracking-wider">
                시흥제일교회
              </span>
              <span className="text-base font-bold text-slate-900 -mt-0.5 group-hover:text-brand-green-800 transition-colors">
                청소년교회
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand-green-50 text-brand-green-800 font-semibold"
                      : "text-slate-600 hover:text-brand-green-800 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-brand-green-700" : "text-slate-400"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Links (Instagram & Youtube) */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={churchInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="청소년교회 인스타그램"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-pink-600 hover:bg-pink-50 transition-colors"
              title="공식 인스타그램"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={churchInfo.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="청소년교회 유튜브"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              title="유튜브 채널"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={churchInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg"
              title="인스타그램"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-green-800 hover:bg-slate-100 focus:outline-none"
              aria-label="메뉴 열기"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-brand-green-100/70 text-brand-green-900 font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-brand-green-800" : "text-slate-400"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-around text-sm text-slate-500">
            <a
              href={churchInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-pink-600 font-medium py-1"
            >
              <Instagram className="w-4 h-4 text-pink-600" /> 인스타그램 바로가기
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={churchInfo.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-700 hover:text-red-600 font-medium py-1"
            >
              <Youtube className="w-4 h-4 text-red-600" /> 유튜브 채널
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
