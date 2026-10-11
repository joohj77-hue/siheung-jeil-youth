import React from "react";
import HeroBanner from "@/components/home/HeroBanner";
import PastorIntro from "@/components/home/PastorIntro";
import WeeklyWorship from "@/components/home/WeeklyWorship";
import MediaSection from "@/components/home/MediaSection";
import LocationMap from "@/components/home/LocationMap";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. 비전/슬로건 배너 */}
      <HeroBanner />

      {/* 2. 담당 교역자 소개 카드 */}
      <PastorIntro />

      {/* 3. 이번 주 예배 요약 섹션 */}
      <WeeklyWorship />

      {/* 4. 최신 유튜브 설교 플레이어 & 인스타그램 */}
      <MediaSection />

      {/* 5. 예배장소 안내 (네이버 지도 연동) */}
      <LocationMap />
    </div>
  );
}
