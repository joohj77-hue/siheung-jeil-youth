"use client";

import React, { useState, useEffect } from "react";
import { calendarEvents as defaultCalendarEvents } from "@/data/calendar";
import { CalendarEvent } from "@/types";
import { 
  ChevronLeft, 
  ChevronRight, 
  School, 
  Church, 
  Sparkles,
  Plus,
  X,
  Calendar as CalendarIcon,
  Trash2,
  ExternalLink,
  CalendarPlus,
  Check
} from "lucide-react";

interface EventCalendarProps {
  currentYear: number;
  currentMonth: number;
  onMonthChange: (year: number, month: number) => void;
}

export default function EventCalendar({
  currentYear,
  currentMonth,
  onMonthChange,
}: EventCalendarProps) {
  const [filterType, setFilterType] = useState<"all" | "church" | "school">("all");
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [customEventIds, setCustomEventIds] = useState<Set<string>>(new Set());

  // 일정 추가 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");
  const [newType, setNewType] = useState<"church" | "school">("church");
  const [newDescription, setNewDescription] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [formError, setFormError] = useState("");

  // 로컬스토리지 연동 및 초기 데이터 로드
  useEffect(() => {
    // 오늘 날짜로 기본 입력일 설정
    const todayStr = `${currentYear}-${String(currentMonth).padStart(2, "0")}-15`;
    setNewDate(todayStr);

    const saved = localStorage.getItem("siheung_youth_custom_events");
    if (saved) {
      try {
        const parsedCustom: CalendarEvent[] = JSON.parse(saved);
        const ids = new Set(parsedCustom.map((e) => e.id));
        setCustomEventIds(ids);
        setAllEvents([...defaultCalendarEvents, ...parsedCustom]);
        return;
      } catch (err) {
        console.error("Failed to parse custom events", err);
      }
    }
    setAllEvents(defaultCalendarEvents);
  }, [currentYear, currentMonth]);

  const prevMonth = () => {
    if (currentMonth === 1) {
      onMonthChange(currentYear - 1, 12);
    } else {
      onMonthChange(currentYear, currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 12) {
      onMonthChange(currentYear + 1, 1);
    } else {
      onMonthChange(currentYear, currentMonth + 1);
    }
  };

  // 일정 추가 핸들러
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      setFormError("행사 제목을 입력해 주세요.");
      return;
    }
    if (!newDate) {
      setFormError("행사 날짜를 선택해 주세요.");
      return;
    }

    const newEvent: CalendarEvent = {
      id: "custom-evt-" + Date.now(),
      title: newTitle.trim(),
      date: newDate,
      endDate: newEndDate || undefined,
      type: newType,
      description: newDescription.trim() || undefined,
      isImportant,
    };

    const currentCustomSaved = localStorage.getItem("siheung_youth_custom_events");
    let customList: CalendarEvent[] = [];
    if (currentCustomSaved) {
      try {
        customList = JSON.parse(currentCustomSaved);
      } catch {
        customList = [];
      }
    }
    const updatedCustom = [...customList, newEvent];
    localStorage.setItem("siheung_youth_custom_events", JSON.stringify(updatedCustom));

    setCustomEventIds((prev) => {
      const nextSet = new Set(prev);
      nextSet.add(newEvent.id);
      return nextSet;
    });
    setAllEvents((prev) => [...prev, newEvent]);

    // 입력값 초기화 및 닫기
    setNewTitle("");
    setNewDescription("");
    setIsImportant(false);
    setNewEndDate("");
    setFormError("");
    setIsModalOpen(false);
  };

  // 일정 삭제 핸들러 (사용자가 추가한 일정)
  const handleDeleteEvent = (id: string) => {
    if (!confirm("이 일정을 삭제하시겠습니까?")) return;
    const currentCustomSaved = localStorage.getItem("siheung_youth_custom_events");
    if (currentCustomSaved) {
      try {
        const customList: CalendarEvent[] = JSON.parse(currentCustomSaved);
        const filtered = customList.filter((e) => e.id !== id);
        localStorage.setItem("siheung_youth_custom_events", JSON.stringify(filtered));
      } catch (err) {
        console.error(err);
      }
    }
    setAllEvents((prev) => prev.filter((e) => e.id !== id));
    setCustomEventIds((prev) => {
      const nextSet = new Set(prev);
      nextSet.delete(id);
      return nextSet;
    });
  };

  // 구글 캘린더 등록 링크 생성 유틸
  const getGoogleCalendarUrl = (evt: CalendarEvent) => {
    const title = encodeURIComponent(`[시흥제일 청소년교회] ${evt.title}`);
    const details = encodeURIComponent(evt.description || "시흥제일 청소년교회 행사");
    const location = encodeURIComponent("시흥제일교회 교육관 3층");
    
    // YYYYMMDD
    const start = evt.date.replace(/-/g, "");
    let end = start;
    if (evt.endDate) {
      end = evt.endDate.replace(/-/g, "");
    }
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  // 해당 월 이벤트 필터링
  const monthPrefix = `${currentYear}-${String(currentMonth).padStart(2, "0")}`;
  const eventsInMonth = allEvents
    .filter((evt) => {
      const matchesMonth = evt.date.startsWith(monthPrefix);
      if (!matchesMonth) return false;
      if (filterType === "all") return true;
      return evt.type === filterType;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
      {/* 상단 컨트롤러 (연/월 변경, 일정 추가 버튼, 필터) */}
      <div className="flex flex-col gap-4 pb-6 border-b border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* 월 네비게이션 */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevMonth}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
              aria-label="이전 달"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 min-w-[140px] text-center">
              {currentYear}년 {currentMonth}월
            </h3>

            <button
              onClick={nextMonth}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
              aria-label="다음 달"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 일정 추가 버튼 */}
          <button
            onClick={() => {
              setNewDate(`${currentYear}-${String(currentMonth).padStart(2, "0")}-01`);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-green-800 hover:bg-brand-green-900 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all self-start sm:self-auto hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" />
            교회행사 일정 추가
          </button>
        </div>

        {/* 필터 탭 */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-2">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setFilterType("all")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filterType === "all"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              전체 일정 ({allEvents.filter((e) => e.date.startsWith(monthPrefix)).length})
            </button>
            <button
              onClick={() => setFilterType("church")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
                filterType === "church"
                  ? "bg-brand-green-800 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Church className="w-3.5 h-3.5" />
              교회 행사
            </button>
            <button
              onClick={() => setFilterType("school")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
                filterType === "school"
                  ? "bg-brand-blue-800 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <School className="w-3.5 h-3.5" />
              학교/학사일정
            </button>
          </div>

          <span className="text-xs text-slate-400">
            * 구글 캘린더 아이콘을 누르면 내 스마트폰 일정에 바로 저장됩니다.
          </span>
        </div>
      </div>

      {/* 이벤트 목록 / 카드 뷰 */}
      <div className="space-y-3.5">
        {eventsInMonth.length > 0 ? (
          eventsInMonth.map((evt) => {
            const isChurch = evt.type === "church";
            const isCustom = customEventIds.has(evt.id);

            return (
              <div
                key={evt.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isChurch
                    ? "bg-brand-green-50/40 border-brand-green-100 hover:border-brand-green-300"
                    : "bg-blue-50/40 border-blue-100 hover:border-blue-300"
                }`}
              >
                <div className="flex items-start sm:items-center gap-3.5 flex-1">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm ${
                      isChurch
                        ? "bg-brand-green-100 text-brand-green-900"
                        : "bg-blue-100 text-blue-900"
                    }`}
                  >
                    {isChurch ? <Church className="w-5 h-5" /> : <School className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                          isChurch
                            ? "bg-brand-green-200 text-brand-green-900"
                            : "bg-blue-200 text-blue-900"
                        }`}
                      >
                        {isChurch ? "교회 행사" : "학교 학사일정"}
                      </span>
                      {evt.isImportant && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-700" />
                          주요 일정
                        </span>
                      )}
                      {isCustom && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-200 text-slate-700">
                          직접 추가됨
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {evt.title}
                    </h4>

                    {evt.description && (
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {evt.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* 우측 날짜 & 빠른 캘린더 추가/삭제 버튼 */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <span className="text-xs sm:text-sm font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-xs inline-block">
                    {evt.endDate ? `${evt.date} ~ ${evt.endDate}` : evt.date}
                  </span>

                  {/* 내 구글 캘린더에 담기 버튼 */}
                  <a
                    href={getGoogleCalendarUrl(evt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="내 구글 캘린더에 담기"
                    className="p-2 rounded-xl bg-white border border-slate-200/80 text-slate-600 hover:text-brand-green-800 hover:bg-slate-50 transition shadow-xs"
                  >
                    <CalendarPlus className="w-4 h-4" />
                  </a>

                  {/* 직접 추가한 일정인 경우 삭제 버튼 */}
                  {isCustom && (
                    <button
                      onClick={() => handleDeleteEvent(evt.id)}
                      title="일정 삭제"
                      className="p-2 rounded-xl bg-white border border-red-200 text-red-500 hover:bg-red-50 transition shadow-xs"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-sm text-slate-400">
            {currentYear}년 {currentMonth}월에 예정된 {filterType === "all" ? "일정이" : "해당 구분의 일정이"} 없습니다.
          </div>
        )}
      </div>

      {/* 일정 추가 팝업 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-9 h-9 rounded-xl bg-brand-green-100 text-brand-green-800 flex items-center justify-center font-bold">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                새 일정 추가하기
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              교회 행사나 학교 일정을 손쉽게 등록해 보세요.
            </p>

            <form onSubmit={handleAddEvent} className="space-y-4">
              {formError && (
                <p className="text-xs text-red-500 font-medium bg-red-50 p-2.5 rounded-xl">
                  {formError}
                </p>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  행사 구분
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setNewType("church")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                      newType === "church"
                        ? "bg-brand-green-800 text-white border-brand-green-800 shadow-xs"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    교회 행사 ⛪
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewType("school")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                      newType === "school"
                        ? "bg-brand-blue-800 text-white border-brand-blue-800 shadow-xs"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    학교 학사일정 🏫
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  행사명
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="예: 청소년 가을 찬양축제, 수능 중보기도회"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    시작 날짜
                  </label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    종료 날짜 (선택)
                  </label>
                  <input
                    type="date"
                    value={newEndDate}
                    onChange={(e) => setNewEndDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  상세 설명 및 안내 (선택)
                </label>
                <textarea
                  rows={2}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="준비물, 모임 장소, 시간 등 안내 사항"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-700"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isImportant}
                    onChange={(e) => setIsImportant(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-green-800 focus:ring-brand-green-700"
                  />
                  <span className="text-xs font-bold text-slate-800">
                    주요 일정으로 강조 표시하기 (별표 뱃지 부여)
                  </span>
                </label>
              </div>

              <div className="flex gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-brand-green-800 hover:bg-brand-green-900 text-white text-xs sm:text-sm font-bold shadow-md transition"
                >
                  일정 등록하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
