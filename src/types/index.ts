export interface PastorInfo {
  name: string;
  role: string;
  message: string;
  subMessage?: string;
  image: string;
}

export interface WorshipStaff {
  role: string;
  name: string;
  note?: string;
}

export interface PraiseSong {
  order: number;
  title: string;
  artist?: string;
  lyricsSummary?: string;
  youtubeUrl?: string;
  scoreUrl?: string;
}

export interface SermonInfo {
  date: string;
  title: string;
  scripture: string;
  preacher: string;
  summary: string[];
  youtubeVideoId: string;
  fullYoutubeUrl?: string;
}

export interface CalendarEvent {
  id: string;
  date: string; // YYYY-MM-DD
  endDate?: string;
  title: string;
  type: 'church' | 'school'; // 교회 행사 or 학교 학사일정
  description?: string;
  isImportant?: boolean;
}

export interface StudentBirthday {
  id: string;
  name: string; // 원래 이름
  month: number; // 1 ~ 12
  day: number;
  grade: '중1' | '중2' | '중3' | '고1' | '고2' | '고3';
}

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: '공지' | '행사' | '모임' | '안내';
  content: string;
  imageUrl?: string;
  isPinned?: boolean;
}

export interface CounselItem {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  category: '기도제목' | '고민상담';
  content: string;
  isPrivate: boolean;
  pinCode?: string; // 4자리 핀번호 (비밀글일 경우)
  reply?: {
    author: string;
    content: string;
    createdAt: string;
  };
}
