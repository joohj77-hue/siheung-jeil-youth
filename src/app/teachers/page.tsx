"use client";

import React, { useState } from "react";
import { 
  KeyRound, 
  ExternalLink, 
  FileSpreadsheet, 
  ShieldCheck, 
  AlertCircle, 
  LogOut, 
  CheckCircle2, 
  Users 
} from "lucide-react";

// 기본 설정된 교사 인증 비밀번호 (교회 사정에 맞게 수정 가능)
const TEACHER_PASSWORD = "youth"; 
// 기존 운영 중인 구글 스프레드시트 출석부 URL (실제 교사 출석부 링크로 교체 가능)
const GOOGLE_SHEETS_ATTENDANCE_URL = "https://docs.google.com/spreadsheets";

export default function TeachersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput.trim() === TEACHER_PASSWORD || passwordInput.trim() === "1234") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput("");
  };

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-brand-green-100 text-brand-green-800 flex items-center justify-center mx-auto mb-3 shadow-sm">
          <KeyRound className="w-7 h-7" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          교사 전용 포털
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          청소년교회 부장교사 및 반별 담임선생님을 위한 출석부 링크 페이지입니다.
        </p>
      </div>

      {!isAuthenticated ? (
        /* 1. 교사 비밀번호 인증 폼 */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="text-center pb-2">
              <span className="text-xs font-semibold text-slate-600">
                선생님 전용 접근 비밀번호를 입력해 주세요.
              </span>
            </div>

            <div>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setError(false);
                }}
                placeholder="비밀번호 입력"
                className="w-full text-center text-lg font-bold tracking-widest px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-green-800 focus:border-transparent transition"
                autoFocus
              />
              {error && (
                <p className="text-xs text-red-500 flex items-center justify-center gap-1.5 mt-2 font-medium">
                  <AlertCircle className="w-4 h-4" /> 비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-brand-green-800 hover:bg-brand-green-900 text-white font-bold text-sm shadow-md transition-all"
            >
              인증하고 출석부 열기
            </button>

            <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
              * 비밀번호 분실 시 부장교사 또는 담당 교역자에게 문의하세요.
              <br />
              <span className="text-[11px] text-slate-400/80">(초기 테스트 비밀번호: <strong>youth</strong> 또는 <strong>1234</strong>)</span>
            </div>
          </form>
        </div>
      ) : (
        /* 2. 인증 완료 후 구글 엑셀 출석부 연결 화면 */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-green-200 shadow-sm space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-brand-green-900 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>교사 인증 완료</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 p-1 rounded-md hover:bg-slate-100"
            >
              <LogOut className="w-3.5 h-3.5" /> 로그아웃
            </button>
          </div>

          <div className="text-center py-4 space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <FileSpreadsheet className="w-9 h-9" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              2026 청소년교회 통합 출석부
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              기존에 사용하시던 구글 엑셀(스프레드시트) 출석부로 안전하게 이동합니다. 새 창에서 바로 수정 및 체크가 가능합니다.
            </p>
          </div>

          <a
            href={GOOGLE_SHEETS_ATTENDANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base shadow-md transition-all hover:scale-[1.01]"
          >
            <FileSpreadsheet className="w-5 h-5" />
            구글 엑셀 출석부 열기
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              교사 출석 체크 안내
            </div>
            <p>1. 주일 오전 11:30까지 각 반 담임선생님께서는 출석 현황을 기입해 주세요.</p>
            <p>2. 신규 결석 학생 및 특별 심방이 필요한 학생은 전도사님께 공유 부탁드립니다.</p>
          </div>
        </div>
      )}
    </div>
  );
}
