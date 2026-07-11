import type { TranslationEntry } from "@/i18n";

const koMetrics: Record<string, TranslationEntry> = {
  "metrics.subtitle": {
    message: "지표 — bex-api에서 실시간으로 제공",
    description: "Subtitle on the service metrics page",
  },
  "metrics.networkTitle": {
    message: "네트워크 지표",
    description: "Network metrics card title",
  },
  "metrics.networkDescription": {
    message: "모든 인스턴스에서 집계됨",
    description: "Network metrics card description",
  },
  "metrics.totalRequests": {
    message: "총 요청 수",
    description: "Network metrics chart section title",
  },
  "metrics.responseTimes": {
    message: "응답 시간 ({quantile})",
    description:
      "Network metrics chart section title, with the selected quantile",
  },
  "metrics.outboundBandwidth": {
    message: "아웃바운드 대역폭",
    description: "Network metrics chart section title",
  },
  "metrics.monthToDateBandwidth": {
    message: "이번 달 사용량 {amount}",
    description:
      "Footer under the Outbound Bandwidth chart, showing month-to-date egress",
  },
  "metrics.sourceNotConfigured": {
    message: "지표 소스가 구성되지 않았습니다",
    description: "Shown when bex-api reports no metrics backend is wired up",
  },
  "metrics.applicationTitle": {
    message: "애플리케이션 지표",
    description: "Application metrics card title",
  },
  "metrics.applicationDescription": {
    message: "선택한 기간 동안의 인스턴스별 리소스 사용량",
    description: "Application metrics card description",
  },
  "metrics.limitLabel": {
    message: "제한 {value}",
    description:
      "Resource limit annotation on the Memory/CPU chart headers, e.g. 'Limit 512 MiB'",
  },
  "metrics.noLimitConfigured": {
    message: "설정된 제한이 없습니다 — 백분율을 정의할 수 없습니다",
    description:
      "Shown instead of a percentage chart when the App's pods declare no resource limit",
  },
  "metrics.statusCode": {
    message: "상태 코드",
    description: "Toolbar filter label for HTTP status code",
  },
  "metrics.statusCodeAll": {
    message: "전체",
    description: "Status-code filter option meaning no filtering",
  },
  "metrics.groupBy": {
    message: "그룹화 기준",
    description: "Total Requests chart control label",
  },
  "metrics.groupByAllRequests": {
    message: "모든 요청",
    description: "Group-by option: one aggregate series",
  },
  "metrics.groupByStatus": {
    message: "상태 코드",
    description: "Group-by option: one series per HTTP status code",
  },
  "metrics.groupByMethod": {
    message: "메서드",
    description: "Group-by option: one series per HTTP method",
  },
  "metrics.memory": {
    message: "메모리",
    description: "Application metrics stat tile label",
  },
  "metrics.cpu": {
    message: "CPU",
    description: "Application metrics stat tile label",
  },
  "metrics.totalInstances": {
    message: "전체 인스턴스",
    description: "Application metrics stat tile label",
  },
  "metrics.filterPercentage": {
    message: "백분율",
    description: "Metrics filter tab: show values as a percentage",
  },
  "metrics.filterTotal": {
    message: "합계",
    description: "Metrics filter tab: show values as an absolute total",
  },
  "metrics.rangeLast30Minutes": {
    message: "최근 30분",
    description: "Metrics time-range filter option",
  },
  "metrics.rangeLastHour": {
    message: "최근 1시간",
    description: "Metrics time-range filter option",
  },
  "metrics.rangeLast3Hours": {
    message: "최근 3시간",
    description: "Metrics time-range filter option",
  },
  "metrics.rangeLast6Hours": {
    message: "최근 6시간",
    description: "Metrics time-range filter option",
  },
  "metrics.rangeLast12Hours": {
    message: "최근 12시간",
    description: "Metrics time-range filter option",
  },
  "metrics.rangeLastDay": {
    message: "최근 하루",
    description: "Metrics time-range filter option",
  },
};

export default koMetrics;
