import React from "react";
import Link from "next/link";
import { churchInfo } from "@/data/pastor";
import { MapPin, Clock, Phone, ExternalLink, ShieldCheck, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          {/* 교회 소개 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white">시흥제일 청소년교회</span>
              <span className="text-xs bg-brand-green-800 text-brand-green-200 px-2 py-0.5 rounded-full font-medium">
                중·고등부
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {churchInfo.slogan}
              <br />
              말씀으로 훈련받고 기도로 교제하는 다음세대 신앙공동체입니다.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={churchInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:bg-slate-700 transition-colors"
                aria-label="인스타그램"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={churchInfo.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors"
                aria-label="유튜브"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 예배 시간 & 장소 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-sm tracking-wider uppercase">
              예배 및 모임 안내
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">청소년 주일예배:</strong> {churchInfo.worshipTime}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">예배 장소:</strong> {churchInfo.worshipPlace}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">문의:</strong> {churchInfo.contact}
                </span>
              </li>
            </ul>
          </div>

          {/* 오시는 길 & 네이버 지도 버튼 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white text-sm tracking-wider uppercase">
              오시는 길
            </h3>
            <p className="text-sm text-slate-400">
              {churchInfo.address}
            </p>
            <div className="pt-1">
              <a
                href={churchInfo.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                네이버 지도에서 길찾기
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 저작권 & 청소년 안전 보호 정책 안내 */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>본 웹사이트는 청소년 개인정보 보호 수칙에 따라 학생 실명 및 개인 식별 정보를 엄격히 보호합니다.</span>
          </div>
          <p>© {new Date().getFullYear()} 시흥제일교회 청소년교회. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
