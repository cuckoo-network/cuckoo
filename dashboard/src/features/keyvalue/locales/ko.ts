import type { TranslationEntry } from "@/i18n";

const koKeyValue: Record<string, TranslationEntry> = {
  // --- List page stat tiles ---
  "keyvalue.statTotal": {
    message: "전체 키-값 저장소",
    description: "Key Value page stat card label",
  },
  "keyvalue.statAvailable": {
    message: "사용 가능",
    description: "Key Value page stat card label (healthy stores)",
  },
  "keyvalue.statCreating": {
    message: "생성 중",
    description: "Key Value page stat card label (provisioning stores)",
  },
  // --- List table ---
  "keyvalue.cardTitle": {
    message: "키-값 저장소",
    description: "Key Value table card title",
  },
  "keyvalue.colName": {
    message: "이름",
    description: "Key Value table column header",
  },
  "keyvalue.colStatus": {
    message: "상태",
    description: "Key Value table column header",
  },
  "keyvalue.colPlan": {
    message: "인스턴스 유형",
    description: "Key Value table column header (plan / tier)",
  },
  "keyvalue.colVersion": {
    message: "버전",
    description: "Key Value table column header (Valkey version)",
  },
  "keyvalue.colCreated": {
    message: "생성일",
    description: "Key Value table column header (relative age from createdAt)",
  },
  "keyvalue.colActions": {
    message: "작업",
    description: "Key Value table actions column header (screen-reader only)",
  },
  // --- Status badges ---
  "keyvalue.statusAvailable": {
    message: "사용 가능",
    description: "Key Value status badge (Valkey instance healthy)",
  },
  "keyvalue.statusCreating": {
    message: "생성 중",
    description: "Key Value status badge (provisioning)",
  },
  "keyvalue.statusUnavailable": {
    message: "사용 불가",
    description: "Key Value status badge (provisioning failed)",
  },
  "keyvalue.statusUnknown": {
    message: "알 수 없음",
    description: "Key Value status badge for an unrecognized status",
  },
  // --- List states ---
  "keyvalue.errorTitle": {
    message: "키-값 저장소를 불러오지 못했습니다",
    description: "Key Value list error card title",
  },
  "keyvalue.errorBody": {
    message: "bex-api 요청이 실패했습니다. 연결을 확인하고 다시 시도하세요.",
    description: "Key Value list error card body",
  },
  "keyvalue.emptyTitle": {
    message: "아직 키-값 저장소가 없습니다",
    description: "Key Value list empty state title",
  },
  "keyvalue.emptyBody": {
    message: "첫 번째 관리형 키-값 저장소를 만들면 여기에 표시됩니다.",
    description: "Key Value list empty state body",
  },
  // --- Row actions / delete ---
  "keyvalue.actionsMenu": {
    message: "작업 메뉴 열기",
    description: "Accessible label for the per-row actions trigger",
  },
  "keyvalue.actionDelete": {
    message: "삭제",
    description: "Row action: permanently delete the Key Value store",
  },
  "keyvalue.deleteConfirmTitle": {
    message: "{name}을(를) 삭제하시겠습니까?",
    description: "Delete-confirmation dialog title",
  },
  "keyvalue.deleteConfirmBody": {
    message:
      "이 작업은 키-값 저장소와 모든 데이터 — Valkey 인스턴스, 스토리지, 연결 자격 증명 —를 영구적으로 삭제합니다. 되돌릴 수 없습니다.",
    description: "Delete-confirmation dialog body",
  },
  "keyvalue.deleteConfirmPrompt": {
    message: "확인하려면 {name}을(를) 입력하세요.",
    description: "Delete-confirmation typed-name prompt label",
  },
  "keyvalue.deleteCancel": {
    message: "취소",
    description: "Delete-confirmation dialog cancel button",
  },
  "keyvalue.deleteConfirm": {
    message: "키-값 저장소 삭제",
    description: "Delete-confirmation dialog confirm button",
  },
  "keyvalue.deleteSuccess": {
    message: "{name} 삭제 중…",
    description: "Toast after a delete request is accepted",
  },
  "keyvalue.deleteError": {
    message: "{name} 삭제하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast when a delete request fails",
  },
  // --- Create form ---
  "keyvalue.createButton": {
    message: "새 키-값 저장소",
    description: "Button that navigates to the create-Key-Value page",
  },
  "keyvalue.createTitle": {
    message: "키-값 저장소 생성",
    description: "Create-Key-Value page title",
  },
  "keyvalue.createDescription": {
    message: "관리형 Valkey(Redis 호환) 인스턴스를 프로비저닝합니다.",
    description: "Create-Key-Value page description",
  },
  "keyvalue.fieldName": {
    message: "이름",
    description: "Create-Key-Value form field label (store name)",
  },
  "keyvalue.fieldNamePlaceholder": {
    message: "example-key-value-name",
    description: "Create-Key-Value name input placeholder",
  },
  "keyvalue.fieldNameError": {
    message: "소문자, 숫자, 하이픈만 사용하세요. 문자로 시작해야 합니다.",
    description: "Create-Key-Value name validation message",
  },
  "keyvalue.fieldPlan": {
    message: "인스턴스 유형",
    description: "Create-Key-Value form field label (plan / tier)",
  },
  "keyvalue.fieldVersion": {
    message: "Valkey 버전",
    description: "Create-Key-Value form field label (major version)",
  },
  "keyvalue.fieldVersionDefault": {
    message: "기본값(최신)",
    description: "Create-Key-Value version select default option",
  },
  "keyvalue.fieldPublic": {
    message: "공개 액세스",
    description: "Create-Key-Value form field label (external endpoint toggle)",
  },
  "keyvalue.fieldPublicHint": {
    message: "TLS를 통해 클러스터 외부에서의 연결을 허용합니다.",
    description: "Create-Key-Value public toggle helper text",
  },
  "keyvalue.createCancel": {
    message: "취소",
    description: "Create-Key-Value page cancel button",
  },
  "keyvalue.createSubmit": {
    message: "키-값 인스턴스 생성",
    description: "Create-Key-Value page submit button",
  },
  "keyvalue.createSuccess": {
    message: "{name} 생성 중…",
    description:
      "Toast after a create request is accepted (provisioning is async)",
  },
  "keyvalue.createError": {
    message: "{name} 생성하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast when a create request fails",
  },
  // --- Detail metadata ---
  "keyvalue.metaTitle": {
    message: "상세 정보",
    description: "Key Value detail metadata card title",
  },
  "keyvalue.metaStatus": {
    message: "상태",
    description: "Key Value detail metadata row label",
  },
  "keyvalue.metaPlan": {
    message: "인스턴스 유형",
    description: "Key Value detail metadata row label",
  },
  "keyvalue.metaVersion": {
    message: "버전",
    description: "Key Value detail metadata row label",
  },
  "keyvalue.metaPublic": {
    message: "공개 액세스",
    description: "Key Value detail metadata row label (external endpoint)",
  },
  "keyvalue.metaExternalHost": {
    message: "외부 호스트",
    description: "Key Value detail metadata row label (SNI hostname)",
  },
  "keyvalue.metaCreated": {
    message: "생성일",
    description: "Key Value detail metadata row label (relative age)",
  },
  "keyvalue.yes": {
    message: "예",
    description: "Metadata value for a true boolean field",
  },
  "keyvalue.no": {
    message: "아니요",
    description: "Metadata value for a false boolean field",
  },
  "keyvalue.notFoundTitle": {
    message: "키-값 저장소를 찾을 수 없습니다",
    description: "Detail page state when keyValue(id) returns nothing",
  },
  "keyvalue.notFoundBody": {
    message: "{name} 이름의 키-값 저장소가 없거나 접근 권한이 없습니다.",
    description: "Detail page not-found body",
  },
  // --- Connection info panel ---
  "keyvalue.connTitle": {
    message: "연결",
    description: "Connection-info panel card title",
  },
  "keyvalue.connDescription": {
    message:
      "이 키-값 저장소의 연결 문자열입니다. 요청할 때만 표시되며 자동으로 노출되지 않습니다.",
    description: "Connection-info panel card description",
  },
  "keyvalue.connReveal": {
    message: "연결 정보 표시",
    description: "Button that fetches the connection info on demand",
  },
  "keyvalue.connHide": {
    message: "연결 정보 숨기기",
    description: "Button that clears the revealed connection info",
  },
  "keyvalue.connInternal": {
    message: "내부 키-값 URL",
    description: "Connection-info field label (in-cluster redis:// URL)",
  },
  "keyvalue.connExternal": {
    message: "외부 키-값 URL",
    description: "Connection-info field label (public rediss:// URL)",
  },
  "keyvalue.connExternalUnavailable": {
    message:
      "공개되지 않았습니다. 외부 URL을 받으려면 공개 액세스를 활성화하세요.",
    description:
      "Shown instead of the external URL when the store isn't public",
  },
  "keyvalue.connCli": {
    message: "Valkey CLI 명령어",
    description: "Connection-info field label (ready-to-run redis-cli command)",
  },
  "keyvalue.connErrorTitle": {
    message: "연결 정보를 불러오지 못했습니다",
    description: "Connection-info panel error title",
  },
  "keyvalue.connErrorBody": {
    message:
      "저장소가 아직 프로비저닝 중이거나 자격 증명을 볼 권한이 없을 수 있습니다.",
    description: "Connection-info panel error body",
  },
  "keyvalue.copied": {
    message: "클립보드에 복사됨",
    description: "Toast after copying a connection field",
  },
  "keyvalue.copyError": {
    message: "클립보드에 복사하지 못했습니다",
    description: "Toast when clipboard copy fails",
  },
  // --- Suspend / resume ---
  "keyvalue.lifecycleTitle": {
    message: "라이프사이클",
    description: "Suspend/resume card title",
  },
  "keyvalue.lifecycleDescription": {
    message: "이 저장소를 일시 중지하여 규모를 0으로 줄이거나 재개하세요.",
    description: "Suspend/resume card description",
  },
  "keyvalue.actionSuspend": {
    message: "키-값 인스턴스 일시 중지",
    description: "Suspend action button label",
  },
  "keyvalue.actionResume": {
    message: "키-값 인스턴스 재개",
    description: "Resume action button label",
  },
  "keyvalue.confirmSuspendTitle": {
    message: "{name}을(를) 일시 중지하시겠습니까?",
    description: "Suspend-confirmation dialog title",
  },
  "keyvalue.confirmSuspendBody": {
    message:
      "이 작업은 저장소 규모를 0으로 줄이고 활성 연결을 모두 끊습니다. 데이터는 보존되며 언제든 재개할 수 있습니다.",
    description: "Suspend-confirmation dialog body",
  },
  "keyvalue.confirmCancel": {
    message: "취소",
    description: "Suspend-confirmation dialog cancel button",
  },
  "keyvalue.toastSuspendSuccess": {
    message: "{name} 일시 중지 중…",
    description: "Toast after a suspend request is accepted",
  },
  "keyvalue.toastSuspendError": {
    message: "{name} 일시 중지하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast when a suspend request fails",
  },
  "keyvalue.toastResumeSuccess": {
    message: "{name} 재개 중…",
    description: "Toast after a resume request is accepted",
  },
  "keyvalue.toastResumeError": {
    message: "{name} 재개하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast when a resume request fails",
  },
};

export default koKeyValue;
