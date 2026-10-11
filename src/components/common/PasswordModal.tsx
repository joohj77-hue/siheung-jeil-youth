"use client";

import React, { useState } from "react";
import { Lock, X, AlertCircle } from "lucide-react";

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (pin: string) => boolean; // return true if correct
  title?: string;
  description?: string;
}

export default function PasswordModal({
  isOpen,
  onClose,
  onSubmit,
  title = "비밀글 열람",
  description = "작성 시 설정한 4자리 비밀번호를 입력해주세요.",
}: PasswordModalProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin.trim()) return;

    const isSuccess = onSubmit(pin);
    if (isSuccess) {
      setPin("");
      setError(false);
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-brand-green-50 text-brand-green-800 flex items-center justify-center mb-3">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500 mt-1 mb-5">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              maxLength={10}
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError(false);
              }}
              placeholder="비밀번호 입력"
              className="w-full text-center tracking-widest text-lg font-bold px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-green-700 focus:border-transparent transition"
              autoFocus
            />
            {error && (
              <p className="text-xs text-red-500 flex items-center justify-center gap-1 mt-2">
                <AlertCircle className="w-3.5 h-3.5" /> 비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-brand-green-800 hover:bg-brand-green-900 text-white text-sm font-semibold shadow-md transition"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
