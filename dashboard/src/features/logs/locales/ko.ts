import type { TranslationEntry } from "@/i18n";

const koLogs: Record<string, TranslationEntry> = {
  "logs.typeLabel": {
    message: "로그 유형",
    description: "Accessible label for the log-type filter dropdown",
  },
  "logs.typeAll": {
    message: "모든 로그",
    description: "Log-type filter option: no type filter",
  },
  "logs.typeApplication": {
    message: "애플리케이션 로그",
    description: "Log-type filter option: application (app) logs",
  },
  "logs.typeRequest": {
    message: "요청 로그",
    description:
      "Log-type filter option: request logs (empty on bex — no backend)",
  },
  "logs.searchPlaceholder": {
    message: "로그 검색",
    description: "Placeholder for the log search box (text filter)",
  },
  "logs.live": {
    message: "실시간",
    description: "Label for the live-tail on/off toggle",
  },
  "logs.jumpToLatest": {
    message: "최신으로 이동",
    description: "Button to re-pin autoscroll to the newest log line",
  },
  "logs.loading": {
    message: "로그 불러오는 중…",
    description: "Shown while the first historical page is loading",
  },
  "logs.streaming": {
    message: "실시간 — 새 로그 스트리밍 중",
    description: "Status under the log list when the SSE tail is connected",
  },
  "logs.paused": {
    message: "실시간 로그 일시 중지됨",
    description: "Status under the log list when live tail is toggled off",
  },
  "logs.disconnected": {
    message: "실시간 로그 연결이 끊어졌습니다 — 재연결 중…",
    description: "Banner when the SSE stream drops",
  },
  "logs.emptyTitle": {
    message: "아직 로그가 없습니다",
    description: "Empty-state title when the service has produced no logs",
  },
  "logs.emptyBody": {
    message: "이 서비스는 아직 로그를 생성하지 않았습니다.",
    description: "Empty-state body with no filters applied",
  },
  "logs.emptyFilteredBody": {
    message:
      "이 필터와 일치하는 로그가 없습니다. bex는 애플리케이션 로그만 제공하며 요청 로그는 비어 있습니다.",
    description:
      "Empty-state body when a type/text filter yields nothing (honest about bex's app-only contract)",
  },
  "logs.errorTitle": {
    message: "로그를 불러오지 못했습니다",
    description: "Error-state title when the logs query fails",
  },
};

export default koLogs;
