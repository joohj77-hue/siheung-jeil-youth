import { WorshipStaff, PraiseSong, SermonInfo } from "@/types";

export const currentWorshipWeek = {
  dateString: "2026년 10월 18일 (주일)",
  title: "세상을 이기는 믿음의 비밀",
  scripture: "요한일서 5장 1절 ~ 5절",
  preacher: "김하늘 전도사",
  worshipTime: "오전 10:30 ~ 11:45",
  place: "교육관 3층 소예배실",
};

// *PRD 명세: 방송팀 제외 (인도, 대표기도, 사회, 찬양팀, 예배 담당 반)
export const worshipStaffList: WorshipStaff[] = [
  { role: "예배 인도", name: "김하늘 전도사", note: "담당 교역자" },
  { role: "사회자", name: "박시은 선생님", note: "고등부 부장교사" },
  { role: "대표 기도", name: "최민준 학생", note: "고2 대표 학생" },
  { role: "찬양 인도", name: "샤인 청소년 찬양팀", note: "보컬/건반/드럼/베이스/어쿠스틱" },
  { role: "예배 담당 반", name: "중등 2부 사랑반", note: "안내위원 및 헌금위원 섬김" },
];

export const praiseSongs: PraiseSong[] = [
  {
    order: 1,
    title: "꽃들도 (花も)",
    artist: "JWorship",
    lyricsSummary: "이곳에 생명샘 솟아나 눈물골짝 지나갈 때에 머잖아 열매 맺히고 웃음소리 넘쳐나리라",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EA%BD%83%EB%93%A4%EB%8F%84+%EC%B0%AC%EC%96%91",
    scoreUrl: "https://www.google.com/search?q=%EA%BD%83%EB%93%A4%EB%8F%84+%EC%95%85%EB%B3%B4",
  },
  {
    order: 2,
    title: "은혜 (Grace)",
    artist: "손경민",
    lyricsSummary: "내가 누려왔던 모든 것들이 내가 지나왔던 모든 시간이 내가 걸어왔던 모든 순간이 당연한 것 아니라 은혜였소",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EC%9D%80%ED%98%9C+%EC%86%90%EA%B2%BD%EB%民",
    scoreUrl: "https://www.google.com/search?q=%EC%9D%80%ED%98%9C+%EC%86%90%EA%B2%BD%EB%民+%EC%95%85%EB%B3%B4",
  },
  {
    order: 3,
    title: "원하고 바라고 기도합니다",
    artist: "민호기",
    lyricsSummary: "이 세상을 살아가는 동안에 나의 힘을 의지할 수 없으니 기도하고 낙심하지 말 것은 주께서 참 소망이 되심이라",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EC%9B%90%ED%95%98%EA%B3%A0+%EB%B0%94%EB%9D%BC%EA%B3%A0+%EA%B8%B0%EB%8F%84%ED%95%A9%EB%8B%88%EB%8B%A4",
    scoreUrl: "https://www.google.com/search?q=%EC%9B%90%ED%95%98%EA%B3%A0+%EB%B0%94%EB%9D%BC%EA%B3%A0+%EA%B8%B0%EB%8F%84%ED%95%A9%EB%8B%88%EB%8B%A4+%EC%95%85%EB%B3%B4",
  },
  {
    order: 4,
    title: "주의 자비가 내려와",
    artist: "예수전도단",
    lyricsSummary: "주의 자비가 내려와 내려와 주의 자비가 봄비 같이 주의 자비가 내려와 나를 덮네",
    youtubeUrl: "https://www.youtube.com/results?search_query=%EC%A3%BC%EC%9D%98+%EC%9E%90%EB%B9%84%EA%B0%80+%EB%82%B4%EB%87%A4%EC%99%80",
    scoreUrl: "https://www.google.com/search?q=%EC%A3%BC%EC%9D%98+%EC%9E%90%EB%B9%84%EA%B0%80+%EB%82%B4%EB%87%A4%EC%99%80+%EC%95%85%EB%B3%B4",
  },
];

export const currentSermon: SermonInfo = {
  date: "2026. 10. 18",
  title: "세상을 이기는 믿음의 비밀",
  scripture: "요한일서 5장 1절 ~ 5절",
  preacher: "김하늘 전도사",
  youtubeVideoId: "dQw4w9WgXcQ", // 실제 사용 시 교역자가 최신 영상 ID로 대체
  fullYoutubeUrl: "https://www.youtube.com",
  summary: [
    "세상은 끊임없이 성적, 외모, 타인의 시선으로 우리를 규정하려 하지만, 우리의 진짜 정체성은 하나님의 사랑받는 자녀입니다.",
    "하나님을 향한 참된 사랑은 하나님의 계명을 지키는 것이며, 주님의 말씀은 결코 무거운 짐이 아닌 참된 자유의 길입니다.",
    "우리가 세상의 불안과 두려움을 이길 수 있는 유일한 승리의 비결은 '예수께서 하나님의 아들이심을 믿는 믿음'뿐입니다.",
    "이번 한 주간 시험과 일상 속에서 나를 정죄하는 세상의 기준보다, 나와 동행하시는 예수님을 바라보며 담대히 살아갑시다.",
  ],
};

export const pastSermons: SermonInfo[] = [
  {
    date: "2026. 10. 11",
    title: "흔들릴 때 붙드는 십자가",
    scripture: "로마서 8장 31절 ~ 39절",
    preacher: "김하늘 전도사",
    youtubeVideoId: "dQw4w9WgXcQ",
    fullYoutubeUrl: "https://www.youtube.com",
    summary: [
      "인생의 어려움과 고난 앞에서도 우리를 위하시는 하나님이 계시기에 결코 포기하지 않습니다.",
      "사망이나 생명이나 어떤 피조물도 우리를 그리스도의 사랑에서 끊을 수 없습니다.",
    ],
  },
  {
    date: "2026. 10. 04",
    title: "다니엘의 뜻을 정한 믿음",
    scripture: "다니엘 1장 8절 ~ 16절",
    preacher: "김하늘 전도사",
    youtubeVideoId: "dQw4w9WgXcQ",
    fullYoutubeUrl: "https://www.youtube.com",
    summary: [
      "세상 문화와 타협하지 않고 하나님 앞에서 뜻을 정하는 용기가 필요합니다.",
      "작은 타협을 멈추고 거룩함을 선택할 때 하나님께서 지혜와 능력을 부어주십니다.",
    ],
  },
];
