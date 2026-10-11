/**
 * 학생 개인정보 보호를 위한 이름 마스킹 유틸리티
 * 예시:
 * - '김진우' -> '김*우' (3글자: 가운데 마스킹)
 * - '이지' -> '이*'   (2글자: 끝자리 마스킹)
 * - '남궁민수' -> '남**수' (4글자 이상: 앞뒤 제외 마스킹)
 */
export function maskStudentName(name: string): string {
  if (!name || name.trim().length === 0) return "";
  const trimmed = name.trim();
  const len = trimmed.length;

  if (len === 1) {
    return trimmed;
  }
  if (len === 2) {
    return trimmed[0] + "*";
  }
  if (len === 3) {
    return trimmed[0] + "*" + trimmed[2];
  }
  // 4글자 이상
  return trimmed[0] + "*".repeat(len - 2) + trimmed[len - 1];
}
