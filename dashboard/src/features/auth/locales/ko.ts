import type { TranslationEntry } from "@/i18n";

const koAuth: Record<string, TranslationEntry> = {
  "auth.loginTitle": {
    message: "다시 오신 것을 환영합니다",
    description: "Login page hero title",
  },
  "auth.loginSubtitle": {
    message: "계정에 로그인하세요",
    description: "Login page hero subtitle",
  },
  "auth.registerTitle": {
    message: "계정 만들기",
    description: "Registration page hero title",
  },
  "auth.registerSubtitle": {
    message: "시작하려면 정보를 입력하세요",
    description: "Registration page hero subtitle",
  },
  "auth.forgotPasswordTitle": {
    message: "비밀번호 재설정",
    description: "Forgot-password page hero title",
  },
  "auth.forgotPasswordSubtitle": {
    message: "복구 코드를 받으려면 이메일을 입력하세요",
    description: "Forgot-password page hero subtitle",
  },
  "auth.settingsTitle": {
    message: "설정",
    description: "Account settings page heading",
  },
  "auth.settingsSubtitle": {
    message: "계정 프로필과 비밀번호를 관리하세요.",
    description: "Account settings page subheading",
  },
  "auth.loggingOutTitle": {
    message: "로그아웃 중...",
    description: "Logout page heading while the logout request is in flight",
  },
  "auth.loggingOutSubtitle": {
    message: "세션을 종료하는 중입니다. 잠시만 기다려 주세요.",
    description: "Logout page subtext while the logout request is in flight",
  },
  "auth.loggedOutTitle": {
    message: "로그아웃되었습니다",
    description: "Logout page heading once logout has completed",
  },
  "auth.loggedOutSubtitle": {
    message: "로그인 페이지로 이동합니다…",
    description: "Logout page subtext once logout has completed",
  },
  "auth.featureSecureTitle": {
    message: "기본적으로 안전합니다",
    description: "Auth hero feature bullet title",
  },
  "auth.featureSecureDescription": {
    message:
      "세션은 Ory Kratos가 관리합니다 — 직접 만든 인증 시스템이 아닌, 검증된 아이덴티티 인프라입니다.",
    description: "Auth hero feature bullet description",
  },
  "auth.featureDashboardTitle": {
    message: "모든 서비스를 위한 하나의 대시보드",
    description: "Auth hero feature bullet title",
  },
  "auth.featureDashboardDescription": {
    message: "bex에서 실행되는 모든 것을 한 곳에서 배포, 모니터링, 관리하세요.",
    description: "Auth hero feature bullet description",
  },
  "auth.featureOpenSourceTitle": {
    message: "오픈소스로 만들어졌습니다",
    description: "Auth hero feature bullet title",
  },
  "auth.featureOpenSourceDescription": {
    message: "bex는 오픈소스 Render 대안입니다.",
    description: "Auth hero feature bullet description",
  },
};

export default koAuth;
