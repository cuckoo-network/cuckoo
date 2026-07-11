import type { TranslationEntry } from "@/i18n";

const koCommon: Record<string, TranslationEntry> = {
  "common.appName": {
    message: "bex",
    description: "Product name shown in the dashboard chrome",
  },
  "common.loading": {
    message: "로딩 중…",
    description: "Generic loading state label",
  },
  "common.navDashboardGroup": {
    message: "대시보드",
    description: "Sidebar nav section label",
  },
  "common.navServices": {
    message: "서비스",
    description: "Sidebar nav link to the services list page",
  },
  "common.navDatabases": {
    message: "데이터베이스",
    description: "Sidebar nav link to the databases list page",
  },
  "common.navKeyValue": {
    message: "키-값 저장소",
    description: "Sidebar nav link to the Key Value list page",
  },
  "common.navUsage": {
    message: "사용량",
    description: "Sidebar nav link to the workspace usage page",
  },
  "common.navSettings": {
    message: "설정",
    description: "Sidebar nav link to the account settings page",
  },
  "common.changeLanguage": {
    message: "언어 변경",
    description: "Accessible label for the language switcher button",
  },
  "common.userMenuSettings": {
    message: "설정",
    description: "User menu item that navigates to account settings",
  },
  "common.userMenuTheme": {
    message: "테마",
    description: "User menu submenu label for theme selection",
  },
  "common.userMenuThemeLight": {
    message: "라이트",
    description: "Light theme option label",
  },
  "common.userMenuThemeDark": {
    message: "다크",
    description: "Dark theme option label",
  },
  "common.userMenuThemeSystem": {
    message: "시스템",
    description: "System theme option label",
  },
  "common.userMenuLogOut": {
    message: "로그아웃",
    description: "User menu item that signs the user out",
  },
  "common.goHome": {
    message: "홈으로",
    description: "Button label that navigates back to the home page",
  },
  "common.goBack": {
    message: "뒤로 가기",
    description: "Button label that navigates to the previous page",
  },
  "common.tryAgain": {
    message: "다시 시도",
    description: "Button label that retries after an error",
  },
  "common.notFoundTitle": {
    message: "페이지를 찾을 수 없습니다",
    description: "404 page heading",
  },
  "common.notFoundDescription": {
    message: "찾으시는 페이지가 존재하지 않거나 이동되었습니다.",
    description: "404 page explanatory text",
  },
  "common.errorTitle": {
    message: "문제가 발생했습니다",
    description: "Generic error page heading",
  },
  "common.errorDefaultMessage": {
    message: "문제가 발생했습니다.",
    description: "Fallback error message when none is provided",
  },
};

export default koCommon;
