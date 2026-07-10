import type { TranslationEntry } from "@/i18n";

const koUsage: Record<string, TranslationEntry> = {
  "usage.pageTitle": {
    message: "사용량",
    description: "Usage page heading and browser title",
  },
  "usage.pageSubtitle": {
    message: "이번 달 워크스페이스 사용량",
    description: "Usage page subtitle beneath the heading",
  },
  "usage.computeTitle": {
    message: "컴퓨팅",
    description: "Compute section heading on the Usage page",
  },
  "usage.computeDescription": {
    message: "서비스 및 플랜별 인스턴스 시간",
    description: "Compute section description",
  },
  "usage.bandwidthTitle": {
    message: "대역폭",
    description: "Bandwidth section heading on the Usage page",
  },
  "usage.bandwidthDescription": {
    message: "Traefik에서 계측한 아웃바운드 트래픽",
    description: "Bandwidth section description",
  },
  "usage.buildTitle": {
    message: "빌드 시간",
    description: "Build minutes section heading on the Usage page",
  },
  "usage.buildDescription": {
    message: "빌드에 소요된 파이프라인 시간(분)",
    description: "Build section description",
  },
  "usage.colService": {
    message: "서비스",
    description: "Table column header: service name",
  },
  "usage.colPlan": {
    message: "플랜",
    description: "Table column header: service plan/tier",
  },
  "usage.colHours": {
    message: "시간",
    description: "Table column header: compute hours",
  },
  "usage.colBandwidth": {
    message: "대역폭",
    description: "Table column header: egress bandwidth",
  },
  "usage.colMinutes": {
    message: "분",
    description: "Table column header: build minutes",
  },
  "usage.totalRow": {
    message: "합계",
    description: "Summary row label in usage tables",
  },
  "usage.empty": {
    message: "이번 달 기록된 사용량이 없습니다.",
    description: "Empty-state message when a section has no data",
  },
  "usage.errorTitle": {
    message: "사용량을 불러오지 못했습니다",
    description: "Error state heading on the Usage page",
  },
};

export default koUsage;
