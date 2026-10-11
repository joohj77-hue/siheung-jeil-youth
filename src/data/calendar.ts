import { CalendarEvent, StudentBirthday } from "@/types";

export const calendarEvents: CalendarEvent[] = [
  // 10월
  {
    id: "evt-10-01",
    date: "2026-10-03",
    title: "개천절 휴일",
    type: "school",
    description: "국경일 공휴일",
  },
  {
    id: "evt-10-02",
    date: "2026-10-09",
    title: "한글날 공휴일",
    type: "school",
    description: "국경일 공휴일",
  },
  {
    id: "evt-10-03",
    date: "2026-10-15",
    endDate: "2026-10-17",
    title: "중·고교 2학기 중간고사 기간",
    type: "school",
    description: "시흥 관내 중고등학교 2학기 1차 지필평가",
    isImportant: true,
  },
  {
    id: "evt-10-04",
    date: "2026-10-18",
    title: "중간고사 격려 간식 데이 🥪",
    type: "church",
    description: "예배 후 전교인 사랑의 토스트 & 음료 나눔",
    isImportant: true,
  },
  {
    id: "evt-10-05",
    date: "2026-10-25",
    title: "찬양과 기도의 밤 (청소년 워십나잇)",
    type: "church",
    description: "금요 심야 청소년 찬양 기도 모임 (저녁 8:00)",
  },
  {
    id: "evt-10-06",
    date: "2026-10-31",
    title: "홀리윈(Holy-Win) 성경 페스티벌",
    type: "church",
    description: "말씀 암송 및 친교 레크리에이션",
  },

  // 11월
  {
    id: "evt-11-01",
    date: "2026-11-15",
    title: "추수감사주일 & 친구초청 잔치",
    type: "church",
    description: "한 해 동안 베풀어주신 은혜를 기억하는 감사예배",
    isImportant: true,
  },
  {
    id: "evt-11-02",
    date: "2026-11-19",
    title: "2027학년도 대학수학능력시험",
    type: "school",
    description: "고3 수험생을 위한 특별 중보기도의 날",
    isImportant: true,
  },
  {
    id: "evt-11-03",
    date: "2026-11-22",
    title: "수험생 위로 및 격려의 시간",
    type: "church",
    description: "수능을 마친 고3 학생 축복 기도회",
  },

  // 12월
  {
    id: "evt-12-01",
    date: "2026-12-10",
    endDate: "2026-12-14",
    title: "2학기 기말고사 지필평가",
    type: "school",
    description: "학기말 지필평가 기간",
  },
  {
    id: "evt-12-02",
    date: "2026-12-24",
    title: "성탄전야 축제 🎄",
    type: "church",
    description: "청소년교회 찬양 & 워십 발표회",
    isImportant: true,
  },
  {
    id: "evt-12-03",
    date: "2026-12-25",
    title: "성탄 감사예배",
    type: "church",
    description: "아기 예수님의 탄생을 축하하는 성탄 연합예배",
  },
  {
    id: "evt-12-04",
    date: "2026-12-28",
    title: "겨울방학 시작 ⛄",
    type: "school",
    description: "초·중·고교 겨울방학 시작",
  },

  // 1월 & 2월
  {
    id: "evt-01-01",
    date: "2027-01-15",
    endDate: "2027-01-17",
    title: "2027 청소년교회 동계수련회 ❄️",
    type: "church",
    description: "강화도 수양관 (주제: 복음으로 비상하라)",
    isImportant: true,
  },
];

// 학생 생일 데이터 (원본 데이터는 성함으로 등록되나, 화면 렌더링 시 반드시 maskStudentName을 통해 마스킹됨)
export const studentBirthdays: StudentBirthday[] = [
  // 1월
  { id: "b-01", name: "김하람", month: 1, day: 5, grade: "중1" },
  { id: "b-02", name: "이지호", month: 1, day: 19, grade: "고2" },
  // 2월
  { id: "b-03", name: "박서연", month: 2, day: 14, grade: "중2" },
  { id: "b-04", name: "최은우", month: 2, day: 27, grade: "고1" },
  // 3월
  { id: "b-05", name: "정다은", month: 3, day: 8, grade: "중3" },
  { id: "b-06", name: "강민재", month: 3, day: 22, grade: "고3" },
  // 4월
  { id: "b-07", name: "윤도현", month: 4, day: 12, grade: "중1" },
  { id: "b-08", name: "임서아", month: 4, day: 30, grade: "고2" },
  // 5월
  { id: "b-09", name: "한지우", month: 5, day: 4, grade: "중2" },
  { id: "b-10", name: "송예준", month: 5, day: 18, grade: "고1" },
  // 6월
  { id: "b-11", name: "오시후", month: 6, day: 11, grade: "중3" },
  { id: "b-12", name: "배수아", month: 6, day: 25, grade: "고3" },
  // 7월
  { id: "b-13", name: "유건우", month: 7, day: 7, grade: "중1" },
  { id: "b-14", name: "권채원", month: 7, day: 21, grade: "고2" },
  // 8월
  { id: "b-15", name: "신하은", month: 8, day: 9, grade: "중2" },
  { id: "b-16", name: "황시원", month: 8, day: 23, grade: "고1" },
  // 9월
  { id: "b-17", name: "안서준", month: 9, day: 14, grade: "중3" },
  { id: "b-18", name: "서유나", month: 9, day: 29, grade: "고3" },
  // 10월
  { id: "b-19", name: "김진우", month: 10, day: 6, grade: "중2" },
  { id: "b-20", name: "이예진", month: 10, day: 14, grade: "고1" },
  { id: "b-21", name: "박도윤", month: 10, day: 23, grade: "고3" },
  { id: "b-22", name: "최민서", month: 10, day: 28, grade: "중1" },
  // 11월
  { id: "b-23", name: "정우진", month: 11, day: 3, grade: "중3" },
  { id: "b-24", name: "강채은", month: 11, day: 17, grade: "고2" },
  // 12월
  { id: "b-25", name: "조현우", month: 12, day: 10, grade: "중2" },
  { id: "b-26", name: "윤아린", month: 12, day: 25, grade: "고1" },
];
