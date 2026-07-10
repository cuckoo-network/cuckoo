import type { TranslationEntry } from "@/i18n";

const koDatabases: Record<string, TranslationEntry> = {
  // --- List page stat tiles ---
  "databases.statTotal": {
    message: "전체 데이터베이스",
    description: "Databases page stat card label",
  },
  "databases.statAvailable": {
    message: "사용 가능",
    description: "Databases page stat card label (healthy databases)",
  },
  "databases.statCreating": {
    message: "생성 중",
    description: "Databases page stat card label (provisioning databases)",
  },
  // --- List table ---
  "databases.cardTitle": {
    message: "데이터베이스",
    description: "Databases table card title",
  },
  "databases.colName": {
    message: "이름",
    description: "Databases table column header",
  },
  "databases.colStatus": {
    message: "상태",
    description: "Databases table column header",
  },
  "databases.colPlan": {
    message: "플랜",
    description: "Databases table column header (instance type / tier)",
  },
  "databases.colVersion": {
    message: "버전",
    description: "Databases table column header (PostgreSQL major version)",
  },
  "databases.colStorage": {
    message: "스토리지",
    description: "Databases table column header (disk size)",
  },
  "databases.colCreated": {
    message: "생성일",
    description: "Databases table column header (relative age from createdAt)",
  },
  "databases.colActions": {
    message: "작업",
    description: "Databases table actions column header (screen-reader only)",
  },
  // --- Status badges ---
  "databases.statusAvailable": {
    message: "사용 가능",
    description: "Database status badge (CNPG cluster healthy)",
  },
  "databases.statusCreating": {
    message: "생성 중",
    description: "Database status badge (provisioning)",
  },
  "databases.statusUnavailable": {
    message: "사용 불가",
    description: "Database status badge (provisioning failed)",
  },
  "databases.statusUnknown": {
    message: "알 수 없음",
    description: "Database status badge for an unrecognized status",
  },
  // --- List states ---
  "databases.errorTitle": {
    message: "데이터베이스를 불러오지 못했습니다",
    description: "Databases list error card title",
  },
  "databases.errorBody": {
    message: "bex-api 요청이 실패했습니다. 연결을 확인하고 다시 시도하세요.",
    description: "Databases list error card body",
  },
  "databases.emptyTitle": {
    message: "아직 데이터베이스가 없습니다",
    description: "Databases list empty state title",
  },
  "databases.emptyBody": {
    message: "첫 번째 관리형 Postgres를 만들면 여기에 표시됩니다.",
    description: "Databases list empty state body",
  },
  // --- Row actions / delete ---
  "databases.actionsMenu": {
    message: "작업 메뉴 열기",
    description: "Accessible label for the per-row actions trigger",
  },
  "databases.actionDelete": {
    message: "삭제",
    description: "Row action: permanently delete the database",
  },
  "databases.deleteConfirmTitle": {
    message: "{name}을(를) 삭제하시겠습니까?",
    description: "Delete-confirmation dialog title",
  },
  "databases.deleteConfirmBody": {
    message:
      "이 작업은 데이터베이스와 모든 데이터 — Postgres 클러스터, 스토리지, 연결 자격 증명 —를 영구적으로 삭제합니다. 되돌릴 수 없습니다.",
    description: "Delete-confirmation dialog body",
  },
  "databases.deleteConfirmPrompt": {
    message: "확인하려면 {name}을(를) 입력하세요.",
    description: "Delete-confirmation typed-name prompt label",
  },
  "databases.deleteCancel": {
    message: "취소",
    description: "Delete-confirmation dialog cancel button",
  },
  "databases.deleteConfirm": {
    message: "데이터베이스 삭제",
    description: "Delete-confirmation dialog confirm button",
  },
  "databases.deleteSuccess": {
    message: "{name} 삭제 중…",
    description: "Toast after a delete request is accepted",
  },
  "databases.deleteError": {
    message: "{name} 삭제하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast when a delete request fails",
  },
  // --- Create dialog ---
  "databases.createButton": {
    message: "새 데이터베이스",
    description: "Button that opens the create-database dialog",
  },
  "databases.createTitle": {
    message: "Postgres 데이터베이스 생성",
    description: "Create-database dialog title",
  },
  "databases.createDescription": {
    message: "관리형 PostgreSQL 인스턴스를 프로비저닝합니다.",
    description: "Create-database dialog description",
  },
  "databases.fieldName": {
    message: "이름",
    description: "Create-database form field label (database name)",
  },
  "databases.fieldNamePlaceholder": {
    message: "my-database",
    description: "Create-database name input placeholder",
  },
  "databases.fieldNameError": {
    message: "소문자, 숫자, 하이픈만 사용하세요. 문자로 시작해야 합니다.",
    description: "Create-database name validation message",
  },
  "databases.fieldPlan": {
    message: "인스턴스 유형",
    description: "Create-database form field label (plan / tier)",
  },
  "databases.fieldPlanPlaceholder": {
    message: "인스턴스 유형 선택",
    description: "Create-database plan select placeholder",
  },
  "databases.fieldVersion": {
    message: "PostgreSQL 버전",
    description: "Create-database form field label (major version)",
  },
  "databases.fieldVersionDefault": {
    message: "기본값(최신)",
    description: "Create-database version select default option",
  },
  "databases.fieldDisk": {
    message: "디스크 크기 (GB)",
    description: "Create-database form field label (storage size)",
  },
  "databases.fieldPublic": {
    message: "공개 액세스",
    description: "Create-database form field label (external endpoint toggle)",
  },
  "databases.fieldPublicHint": {
    message: "TLS를 통해 클러스터 외부에서의 연결을 허용합니다.",
    description: "Create-database public toggle helper text",
  },
  "databases.createCancel": {
    message: "취소",
    description: "Create-database dialog cancel button",
  },
  "databases.createSubmit": {
    message: "데이터베이스 생성",
    description: "Create-database dialog submit button",
  },
  "databases.createSuccess": {
    message: "{name} 생성 중…",
    description:
      "Toast after a create request is accepted (provisioning is async)",
  },
  "databases.createError": {
    message: "{name} 생성하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast when a create request fails",
  },
  // --- Detail metadata ---
  "databases.metaTitle": {
    message: "상세 정보",
    description: "Database detail metadata card title",
  },
  "databases.metaStatus": {
    message: "상태",
    description: "Database detail metadata row label",
  },
  "databases.metaPlan": {
    message: "인스턴스 유형",
    description: "Database detail metadata row label",
  },
  "databases.metaVersion": {
    message: "버전",
    description: "Database detail metadata row label",
  },
  "databases.metaDatabaseName": {
    message: "데이터베이스",
    description: "Database detail metadata row label (the normalized db name)",
  },
  "databases.metaDatabaseUser": {
    message: "사용자",
    description: "Database detail metadata row label (owner role)",
  },
  "databases.metaStorage": {
    message: "스토리지",
    description: "Database detail metadata row label (disk size)",
  },
  "databases.metaHighAvailability": {
    message: "고가용성",
    description:
      "Database detail metadata row label (HA — single-instance MVP is No)",
  },
  "databases.metaPublic": {
    message: "공개 액세스",
    description: "Database detail metadata row label (external endpoint)",
  },
  "databases.metaExternalHost": {
    message: "외부 호스트",
    description: "Database detail metadata row label (SNI hostname)",
  },
  "databases.metaCreated": {
    message: "생성일",
    description: "Database detail metadata row label (relative age)",
  },
  "databases.yes": {
    message: "예",
    description: "Metadata value for a true boolean field",
  },
  "databases.no": {
    message: "아니요",
    description: "Metadata value for a false boolean field",
  },
  "databases.notFoundTitle": {
    message: "데이터베이스를 찾을 수 없습니다",
    description: "Detail page state when database(id) returns nothing",
  },
  "databases.notFoundBody": {
    message: "{name} 이름의 데이터베이스가 없거나 접근 권한이 없습니다.",
    description: "Detail page not-found body",
  },
  // --- Connection info panel ---
  "databases.connTitle": {
    message: "연결",
    description: "Connection-info panel card title",
  },
  "databases.connDescription": {
    message:
      "연결 문자열과 데이터베이스 비밀번호입니다. 요청할 때만 표시되며 자동으로 노출되지 않습니다.",
    description: "Connection-info panel card description",
  },
  "databases.connReveal": {
    message: "연결 정보 표시",
    description: "Button that fetches the connection info on demand",
  },
  "databases.connHide": {
    message: "연결 정보 숨기기",
    description: "Button that clears the revealed connection info",
  },
  "databases.connPassword": {
    message: "비밀번호",
    description: "Connection-info field label (database password)",
  },
  "databases.connShowPassword": {
    message: "비밀번호 표시",
    description: "Accessible label to unmask the password",
  },
  "databases.connHidePassword": {
    message: "비밀번호 숨기기",
    description: "Accessible label to re-mask the password",
  },
  "databases.connInternal": {
    message: "내부 연결 문자열",
    description: "Connection-info field label (in-cluster URL)",
  },
  "databases.connExternal": {
    message: "외부 연결 문자열",
    description: "Connection-info field label (public URL, TLS)",
  },
  "databases.connPsql": {
    message: "psql 명령어",
    description: "Connection-info field label (ready-to-run psql command)",
  },
  "databases.connErrorTitle": {
    message: "연결 정보를 불러오지 못했습니다",
    description: "Connection-info panel error title",
  },
  "databases.connErrorBody": {
    message:
      "데이터베이스가 아직 프로비저닝 중이거나 자격 증명을 볼 권한이 없을 수 있습니다.",
    description: "Connection-info panel error body",
  },
  "databases.copied": {
    message: "클립보드에 복사됨",
    description: "Toast after copying a connection field",
  },
  "databases.copyError": {
    message: "클립보드에 복사하지 못했습니다",
    description: "Toast when clipboard copy fails",
  },
};

export default koDatabases;
