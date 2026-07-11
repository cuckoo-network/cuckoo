import type { TranslationEntry } from "@/i18n";

const koApiKeys: Record<string, TranslationEntry> = {
  "apiKeys.title": {
    message: "API 키",
    description: "Settings API Keys section card title",
  },
  "apiKeys.description": {
    message:
      "스크립트와 에이전트를 위한 머신 자격 증명입니다. 워크스페이스 전체에서 공유되며, 키를 관리할 수 있는 사람은 자신의 키뿐 아니라 모든 키를 볼 수 있습니다.",
    description: "Settings API Keys section card description",
  },
  "apiKeys.colName": {
    message: "이름",
    description: "API Keys table column header",
  },
  "apiKeys.colCreated": {
    message: "생성일",
    description: "API Keys table column header",
  },
  "apiKeys.colCreatedBy": {
    message: "생성자",
    description: "API Keys table column header — who minted the key",
  },
  "apiKeys.colLastUsed": {
    message: "마지막 사용",
    description:
      "API Keys table column header — when a token for the key was last used",
  },
  "apiKeys.neverUsed": {
    message: "없음",
    description: "API Keys last-used cell when the key has never been used",
  },
  "apiKeys.emptyTitle": {
    message: "API 키가 없습니다",
    description: "API Keys empty-state title",
  },
  "apiKeys.emptyBody": {
    message: "스크립트나 에이전트를 인증할 키를 생성하세요.",
    description: "API Keys empty-state body",
  },
  "apiKeys.forbiddenTitle": {
    message: "권한 없음",
    description: "API Keys state when the caller lacks permission (403)",
  },
  "apiKeys.forbiddenBody": {
    message: "이 워크스페이스의 API 키를 관리할 권한이 없습니다.",
    description: "API Keys forbidden-state body",
  },
  "apiKeys.errorTitle": {
    message: "API 키를 불러오지 못했습니다",
    description: "API Keys generic error title",
  },
  "apiKeys.errorBody": {
    message: "문제가 발생했습니다. 다시 시도해 주세요.",
    description: "API Keys generic error body",
  },
  "apiKeys.create": {
    message: "API 키 생성",
    description: "Button that opens the mint dialog",
  },
  "apiKeys.createTitle": {
    message: "API 키 생성",
    description: "Mint dialog title (name step)",
  },
  "apiKeys.createDescription": {
    message: "나중에 알아볼 수 있도록 이 키의 이름을 지정하세요.",
    description: "Mint dialog description (name step)",
  },
  "apiKeys.fieldName": {
    message: "이름",
    description: "Mint dialog name field label",
  },
  "apiKeys.fieldNamePlaceholder": {
    message: "예: deploy-agent",
    description: "Mint dialog name field placeholder",
  },
  "apiKeys.createCancel": {
    message: "취소",
    description: "Mint dialog cancel button (name step)",
  },
  "apiKeys.createSubmit": {
    message: "생성",
    description: "Mint dialog submit button (name step)",
  },
  "apiKeys.createdTitle": {
    message: "API 키가 생성되었습니다",
    description: "Mint dialog title (secret-shown step)",
  },
  "apiKeys.createdWarning": {
    message: "지금 이 키를 복사하세요 — 다시 볼 수 없습니다.",
    description: "Mint dialog warning (secret-shown step)",
  },
  "apiKeys.createdDone": {
    message: "완료",
    description: "Mint dialog close button (secret-shown step)",
  },
  "apiKeys.copy": {
    message: "복사",
    description: "Copy-to-clipboard icon button label",
  },
  "apiKeys.copied": {
    message: "클립보드에 복사됨",
    description: "Toast on a successful secret copy",
  },
  "apiKeys.copyError": {
    message: "클립보드에 복사하지 못했습니다",
    description: "Toast on a failed secret copy",
  },
  "apiKeys.createSuccess": {
    message: "{name} 생성됨",
    description: "Toast on a successful mint",
  },
  "apiKeys.createError": {
    message: "{name} 생성하지 못했습니다",
    description: "Toast on a failed mint",
  },
  "apiKeys.revoke": {
    message: "폐기",
    description: "Row action / confirmation button to revoke a key",
  },
  "apiKeys.revokeConfirmTitle": {
    message: "{name}을(를) 폐기하시겠습니까?",
    description: "Revoke-confirmation dialog title",
  },
  "apiKeys.revokeConfirmBody": {
    message:
      "이 키로 인증하는 모든 것이 즉시 작동을 멈춥니다. 이 작업은 되돌릴 수 없습니다.",
    description: "Revoke-confirmation dialog body",
  },
  "apiKeys.revokeCancel": {
    message: "취소",
    description: "Revoke-confirmation dialog cancel button",
  },
  "apiKeys.revokeSuccess": {
    message: "{name} 폐기됨",
    description: "Toast on a successful revoke",
  },
  "apiKeys.revokeError": {
    message: "{name} 폐기하지 못했습니다",
    description: "Toast on a failed revoke",
  },
};

export default koApiKeys;
