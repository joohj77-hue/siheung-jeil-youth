import { CounselItem } from "@/types";

export const initialCounselList: CounselItem[] = [
  {
    id: "counsel-01",
    title: "이번 중간고사 시험 기간 마음의 평안을 위해 기도 부탁드립니다",
    author: "고2 은혜",
    createdAt: "2026. 10. 10",
    category: "기도제목",
    isPrivate: false,
    content: "시험이 다가오니 잠도 잘 안 오고 불안한 마음이 커져요. 시험 결과보다 과정 중에 최선을 다하고 주님을 의지할 수 있도록 기도해 주세요.",
    reply: {
      author: "김하늘 전도사",
      content: "은혜 학생! 그 마음 충분히 공감되고 귀해요. '아무것도 염려하지 말고 오직 모든 일에 기도와 간구로'(빌 4:6) 말씀처럼 주님께서 평강으로 지켜주실 것을 믿고 함께 중보할게요. 힘내요!",
      createdAt: "2026. 10. 10",
    },
  },
  {
    id: "counsel-02",
    title: "친구와의 관계 때문에 고민이 있어요 [비밀글]",
    author: "익명의 친구",
    createdAt: "2026. 10. 08",
    category: "고민상담",
    isPrivate: true,
    pinCode: "1234", // 샘플 테스트용 핀코드
    content: "반 친구와 사소한 일로 오해가 생겨서 서먹해졌는데, 먼저 다가가서 사과하기가 용기가 안 나요. 어떻게 해야 할까요?",
    reply: {
      author: "김하늘 전도사",
      content: "마음이 많이 무겁고 복잡했을 텐데 나눠줘서 고마워요. 먼저 손 내미는 것은 지는 것이 아니라 더 성숙하고 용기 있는 사랑의 모습이에요. 이번 주일에 교회에서 맛있는 음료 마시며 조금 더 이야기 나눠볼까요?",
      createdAt: "2026. 10. 09",
    },
  },
  {
    id: "counsel-03",
    title: "가족 모두가 함께 하나님을 예배할 수 있기를 기도합니다",
    author: "중1 믿음",
    createdAt: "2026. 10. 03",
    category: "기도제목",
    isPrivate: false,
    content: "저희 부모님께서도 교회에 함께 나오셔서 주일날 온 가족이 함께 기쁨으로 예배드리는 가정이 되도록 기도해주세요.",
    reply: {
      author: "박시은 교사",
      content: "믿음이의 기도를 하나님께서 가장 기뻐하실 거예요! 교사들도 주일마다 믿음이 가정의 구원과 화목을 위해 손 모아 기도하겠습니다.",
      createdAt: "2026. 10. 04",
    },
  },
  {
    id: "counsel-04",
    title: "진로와 신앙 사이에서 고민이 있습니다 [비밀글]",
    author: "고3 학생",
    createdAt: "2026. 09. 28",
    category: "고민상담",
    isPrivate: true,
    pinCode: "7777",
    content: "전공 선택을 앞두고 제가 좋아하는 일과 부모님이 원하시는 길 사이에서 갈등이 됩니다. 하나님의 뜻은 어디에 있을까요?",
  },
];
