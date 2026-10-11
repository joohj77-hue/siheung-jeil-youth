"use client";

import React, { useState, useEffect } from "react";
import { initialCounselList } from "@/data/counsel";
import { CounselItem } from "@/types";
import PasswordModal from "@/components/common/PasswordModal";
import { 
  Lock, 
  Unlock, 
  Plus, 
  MessageCircle, 
  HeartHandshake, 
  ShieldCheck, 
  AlertCircle,
  X,
  Send,
  UserCheck
} from "lucide-react";

export default function PrayerCounsel() {
  const [items, setItems] = useState<CounselItem[]>([]);
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());
  
  // 비밀번호 입력 모달 상태
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [targetItem, setTargetItem] = useState<CounselItem | null>(null);

  // 글쓰기 모달 상태
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState<"기도제목" | "고민상담">("기도제목");
  const [content, setContent] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [pinCode, setPinCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 클라이언트 로컬스토리지 또는 기본 데이터 로드
  useEffect(() => {
    const saved = localStorage.getItem("siheung_youth_counsel_list");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        setItems(initialCounselList);
      }
    } else {
      setItems(initialCounselList);
    }
  }, []);

  const saveItems = (newItems: CounselItem[]) => {
    setItems(newItems);
    localStorage.setItem("siheung_youth_counsel_list", JSON.stringify(newItems));
  };

  // 비밀글 클릭 시
  const handleItemClick = (item: CounselItem) => {
    if (!item.isPrivate || unlockedIds.has(item.id)) {
      return; // 이미 열려있거나 공개글임
    }
    setTargetItem(item);
    setIsPasswordModalOpen(true);
  };

  // 비밀번호 확인 검증
  const handlePasswordSubmit = (inputPin: string): boolean => {
    if (!targetItem) return false;
    // 작성자가 지정한 핀번호이거나 관리자 마스터키(9999)인 경우 통과
    if (targetItem.pinCode === inputPin || inputPin === "9999") {
      setUnlockedIds((prev) => {
        const nextSet = new Set(prev);
        nextSet.add(targetItem.id);
        return nextSet;
      });
      return true;
    }
    return false;
  };

  // 새 글 등록
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim()) {
      setErrorMsg("이름(닉네임), 제목, 내용을 모두 입력해 주세요.");
      return;
    }
    if (isPrivate && (!pinCode.trim() || pinCode.length < 4)) {
      setErrorMsg("비밀글은 4자리 이상의 비밀번호를 설정해야 합니다.");
      return;
    }

    const newItem: CounselItem = {
      id: "counsel-" + Date.now(),
      title: title.trim(),
      author: author.trim(),
      category,
      content: content.trim(),
      isPrivate,
      pinCode: isPrivate ? pinCode.trim() : undefined,
      createdAt: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).replace(/\. /g, ". ").replace(/\.$/, ""),
    };

    const updated = [newItem, ...items];
    saveItems(updated);

    // 내가 쓴 비밀글은 즉시 볼 수 있게 열어둠
    if (isPrivate) {
      setUnlockedIds((prev) => {
        const nextSet = new Set(prev);
        nextSet.add(newItem.id);
        return nextSet;
      });
    }

    // 초기화 및 닫기
    setTitle("");
    setAuthor("");
    setContent("");
    setIsPrivate(false);
    setPinCode("");
    setErrorMsg("");
    setIsWriteModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* 안내 & 글쓰기 버튼 바 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 text-base">
              기도제목 & 고민상담 나눔터
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
              비밀글 안심 보호
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            혼자 끙끙 앓지 말고 말씀과 기도로 함께 동역해요. 4자리 비밀번호를 걸면 교역자/선생님과 나만 볼 수 있습니다.
          </p>
        </div>

        <button
          onClick={() => setIsWriteModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-green-800 hover:bg-brand-green-900 text-white text-xs sm:text-sm font-bold shadow-md transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          기도 & 고민 글쓰기
        </button>
      </div>

      {/* 게시글 목록 */}
      <div className="space-y-3.5">
        {items.map((item) => {
          const isLocked = item.isPrivate && !unlockedIds.has(item.id);

          return (
            <div
              key={item.id}
              onClick={() => isLocked && handleItemClick(item)}
              className={`p-5 rounded-2xl border transition-all ${
                isLocked
                  ? "bg-slate-50/90 border-slate-200 hover:border-slate-300 cursor-pointer"
                  : "bg-white border-slate-200 shadow-xs"
              }`}
            >
              {/* 상단 메타 정보 */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                      item.category === "기도제목"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {item.category}
                  </span>

                  {item.isPrivate ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                      {isLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                      {isLocked ? "비밀글 (잠김)" : "비밀글 (열림)"}
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400 font-medium">공개글</span>
                  )}
                </div>

                <span className="text-xs text-slate-400">{item.createdAt}</span>
              </div>

              {/* 제목 */}
              <h4 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                {item.title}
              </h4>

              {/* 작성자 */}
              <p className="text-xs text-slate-500 mb-3">
                작성자: <span className="font-semibold text-slate-700">{item.author}</span>
              </p>

              {/* 본문 (비밀글 잠김 상태일 경우 마스킹) */}
              {isLocked ? (
                <div className="py-4 px-4 bg-slate-100/80 rounded-xl text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4 text-slate-400" />
                  <span>비밀글입니다. 클릭하여 4자리 비밀번호를 입력하면 확인할 수 있습니다.</span>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 rounded-xl text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                  {item.content}
                </div>
              )}

              {/* 담당 교역자/교사 답변 영역 */}
              {!isLocked && item.reply && (
                <div className="mt-4 pt-4 border-t border-slate-100 bg-brand-green-50/50 p-4 rounded-xl border border-brand-green-100/60">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-green-900 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-brand-green-700" />
                      {item.reply.author}의 따뜻한 답글
                    </span>
                    <span className="text-[11px] text-slate-400 font-normal">
                      {item.reply.createdAt}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-green-950 leading-relaxed font-normal">
                    {item.reply.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 비밀번호 확인 모달 */}
      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => {
          setIsPasswordModalOpen(false);
          setTargetItem(null);
        }}
        onSubmit={handlePasswordSubmit}
        title="비밀글 열람 비밀번호"
        description="이 글을 작성할 때 등록한 4자리 비밀번호를 입력해 주세요."
      />

      {/* 새 글 작성 모달 */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              기도제목 & 고민상담 작성
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              마음속 진솔한 이야기나 기도가 필요한 내용을 자유롭게 적어주세요.
            </p>

            <form onSubmit={handleCreatePost} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    구분
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                  >
                    <option value="기도제목">기도제목</option>
                    <option value="고민상담">고민상담</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    작성자 (닉네임/이름)
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="예: 고2 은혜, 익명"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  제목
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  나눌 내용
                </label>
                <textarea
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="기도제목이나 고민 내용을 상세히 적어주세요."
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                />
              </div>

              {/* 비밀글 설정 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isPrivate}
                    onChange={(e) => setIsPrivate(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-green-800 focus:ring-brand-green-700"
                  />
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-amber-700" />
                    비밀글로 작성하기 (추천)
                  </span>
                </label>

                {isPrivate && (
                  <div className="animate-in fade-in duration-150">
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      열람 비밀번호 (4자리 숫자)
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      value={pinCode}
                      onChange={(e) => setPinCode(e.target.value)}
                      placeholder="예: 1234"
                      className="w-full max-w-[160px] px-3 py-2 rounded-lg border border-slate-300 text-sm text-center font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      * 이 번호는 글을 다시 확인할 때 필요하니 기억해 주세요.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-brand-green-800 hover:bg-brand-green-900 text-white text-xs sm:text-sm font-bold shadow-md transition"
                >
                  등록하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
