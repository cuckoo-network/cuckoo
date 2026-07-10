import type { TranslationEntry } from "@/i18n";

const koServices: Record<string, TranslationEntry> = {
  "services.statTotal": {
    message: "전체 서비스",
    description: "Services page stat card label",
  },
  "services.statRunning": {
    message: "실행 중",
    description: "Services page stat card label",
  },
  "services.statSuspended": {
    message: "일시 중지됨",
    description: "Services page stat card label",
  },
  "services.cardTitle": {
    message: "서비스",
    description:
      "Services table card title, also used as the metrics page back-link",
  },
  "services.colName": {
    message: "이름",
    description: "Services table column header",
  },
  "services.colStatus": {
    message: "상태",
    description: "Services table column header",
  },
  "services.colUrl": {
    message: "URL",
    description: "Services table column header",
  },
  "services.colInstances": {
    message: "인스턴스",
    description: "Services table column header (replica count — bex-native)",
  },
  "services.colRevision": {
    message: "리비전",
    description: "Services table column header (active revision — bex-native)",
  },
  "services.colCreated": {
    message: "생성일",
    description: "Services table column header (relative age from createdAt)",
  },
  "services.colActions": {
    message: "작업",
    description: "Services table actions column header (screen-reader only)",
  },
  "services.statusRunning": {
    message: "실행 중",
    description: "Services table status badge",
  },
  "services.statusSuspended": {
    message: "일시 중지됨",
    description: "Services table status badge",
  },
  "services.statusSleeping": {
    message: "휴면 중",
    description:
      "Services status badge: a free-tier App auto-hibernated after idle (bex extension)",
  },
  "services.statusSleepingHint": {
    message: "리소스 절약을 위해 휴면 중입니다 — 다음 요청 시 깨어납니다.",
    description:
      "Hint next to the Sleeping badge explaining free-tier auto-sleep + wake-on-request",
  },
  "services.statusPending": {
    message: "대기 중",
    description: "Services table status badge",
  },
  "services.statusBuilding": {
    message: "빌드 중",
    description: "Services table status badge",
  },
  "services.statusDeploying": {
    message: "배포 중",
    description: "Services table status badge",
  },
  "services.statusFailed": {
    message: "실패",
    description: "Services table status badge",
  },
  "services.statusUnknown": {
    message: "알 수 없음",
    description: "Services table status badge for an unrecognized phase",
  },
  "services.actionsMenu": {
    message: "작업 메뉴 열기",
    description: "Accessible label for the per-row actions trigger",
  },
  "services.actionSuspend": {
    message: "일시 중지",
    description: "Row action: park the service",
  },
  "services.actionResume": {
    message: "재개",
    description: "Row action: bring a suspended service back",
  },
  "services.actionRestart": {
    message: "재시작",
    description: "Row action: roll the service's pods",
  },
  "services.confirmSuspendTitle": {
    message: "{name}을(를) 일시 중지하시겠습니까?",
    description: "Suspend confirmation dialog title",
  },
  "services.confirmSuspendBody": {
    message:
      "서비스가 0으로 축소되어 트래픽 처리를 중단합니다. URL과 인증서는 유지되며 언제든 다시 재개할 수 있습니다.",
    description: "Suspend confirmation dialog body",
  },
  "services.confirmRestartTitle": {
    message: "{name}을(를) 재시작하시겠습니까?",
    description: "Restart confirmation dialog title",
  },
  "services.confirmRestartBody": {
    message:
      "서비스의 파드가 다운타임 없이 순차적으로 교체됩니다. 진행 중인 요청은 기존 인스턴스가 교체되기 전에 완료됩니다.",
    description: "Restart confirmation dialog body",
  },
  "services.confirmCancel": {
    message: "취소",
    description: "Confirmation dialog cancel button",
  },
  "services.toastSuspendSuccess": {
    message: "{name} 일시 중지 중…",
    description: "Toast shown after a suspend request is accepted",
  },
  "services.toastResumeSuccess": {
    message: "{name} 재개 중…",
    description: "Toast shown after a resume request is accepted",
  },
  "services.toastRestartSuccess": {
    message: "{name} 재시작 중…",
    description: "Toast shown after a restart request is accepted",
  },
  "services.toastError": {
    message: "{name}을(를) 업데이트하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast shown when a lifecycle action fails",
  },
  "services.errorTitle": {
    message: "서비스를 불러오지 못했습니다",
    description: "Services list error card title",
  },
  "services.errorBody": {
    message: "bex-api 요청이 실패했습니다. 연결을 확인하고 다시 시도하세요.",
    description: "Services list error card body",
  },
  "services.emptyTitle": {
    message: "아직 서비스가 없습니다",
    description: "Services list empty state title",
  },
  "services.emptyBody": {
    message: "첫 번째 앱을 배포하면 여기에 표시됩니다.",
    description: "Services list empty state body",
  },
  "services.navLabel": {
    message: "서비스 탐색",
    description: "Accessible label for the service-detail tab nav",
  },
  "services.navOverview": {
    message: "개요",
    description: "Service-detail nav item + overview panel title",
  },
  "services.navLogs": {
    message: "로그",
    description: "Service-detail nav item (logs tab)",
  },
  "services.navMetrics": {
    message: "지표",
    description: "Service-detail nav item (metrics tab)",
  },
  "services.overviewPhase": {
    message: "단계",
    description: "Overview panel field label (operator phase, verbatim)",
  },
  "services.overviewSuspended": {
    message: "일시 중지됨",
    description: "Overview panel field label (suspend state)",
  },
  "services.overviewYes": {
    message: "예",
    description: "Overview panel value for a true boolean field",
  },
  "services.overviewNo": {
    message: "아니요",
    description: "Overview panel value for a false boolean field",
  },
  "services.notFoundTitle": {
    message: "서비스를 찾을 수 없습니다",
    description: "Overview page state when server(id) returns nothing",
  },
  "services.notFoundBody": {
    message: "{name} 이름의 서비스가 없거나 접근 권한이 없습니다.",
    description: "Overview page not-found body",
  },
  "services.notFoundBackToList": {
    message: "서비스 목록으로 돌아가기",
    description:
      "Link on the service-detail not-found state back to the services list",
  },
  "services.navEnvironment": {
    message: "환경 변수",
    description: "Service-detail nav item (environment variables tab)",
  },
  "services.envTitle": {
    message: "환경 변수",
    description: "Environment tab card title",
  },
  "services.envDescription": {
    message:
      "환경별 설정과 비밀 값을 지정한 뒤 코드에서 해당 값을 읽어 사용하세요.",
    description: "Environment tab card description",
  },
  "services.envColKey": {
    message: "키",
    description: "Environment table column header (variable name)",
  },
  "services.envColValue": {
    message: "값",
    description: "Environment table column header (variable value)",
  },
  "services.envShowSecret": {
    message: "값 표시",
    description: "Environment row button to reveal a masked value",
  },
  "services.envHideSecret": {
    message: "값 숨기기",
    description: "Environment row button to re-mask a revealed value",
  },
  "services.envRevealError": {
    message: "값을 불러오지 못했습니다.",
    description: "Environment row inline error when a value reveal fails",
  },
  "services.envEmptyTitle": {
    message: "환경 변수가 없습니다",
    description: "Environment tab empty-state title",
  },
  "services.envEmptyBody": {
    message: "이 서비스를 구성하려면 변수를 추가하세요.",
    description: "Environment tab empty-state body",
  },
  "services.envUnavailableTitle": {
    message: "환경 변수를 사용할 수 없습니다",
    description:
      "Environment tab state when the secret store is unconfigured (503)",
  },
  "services.envUnavailableBody": {
    message: "이 배포에는 비밀 저장소가 구성되어 있지 않습니다.",
    description: "Environment tab unavailable-state body",
  },
  "services.envForbiddenTitle": {
    message: "권한 없음",
    description: "Environment tab state when the caller lacks permission (403)",
  },
  "services.envForbiddenBody": {
    message: "이 서비스의 환경 변수를 볼 권한이 없습니다.",
    description: "Environment tab forbidden-state body",
  },
  "services.envErrorTitle": {
    message: "환경 변수를 불러오지 못했습니다",
    description: "Environment tab generic error title",
  },
  "services.envErrorBody": {
    message: "문제가 발생했습니다. 다시 시도해 주세요.",
    description: "Environment tab generic error body",
  },
  "services.envAdd": {
    message: "변수 추가",
    description: "Environment tab button to open the add-variable form",
  },
  "services.envEdit": {
    message: "수정",
    description: "Environment row button to edit a variable's value",
  },
  "services.envDelete": {
    message: "삭제",
    description: "Environment row button to remove a variable",
  },
  "services.envSave": {
    message: "저장",
    description: "Environment add/edit form save button",
  },
  "services.envCancel": {
    message: "취소",
    description: "Environment add/edit form cancel button",
  },
  "services.envKeyPlaceholder": {
    message: "변수_이름",
    description: "Environment add-variable key input placeholder",
  },
  "services.envValuePlaceholder": {
    message: "값",
    description: "Environment value input placeholder",
  },
  "services.envInvalidKey": {
    message: "문자, 숫자, 밑줄을 사용하세요. 숫자로 시작할 수 없습니다.",
    description:
      "Environment add-variable validation message for an invalid key",
  },
  "services.envDeleteConfirmTitle": {
    message: "{key}를 제거하시겠습니까?",
    description: "Environment delete-confirmation dialog title",
  },
  "services.envDeleteConfirmBody": {
    message: "이 변수 없이 서비스가 다시 배포됩니다.",
    description: "Environment delete-confirmation dialog body",
  },
  "services.envRolloutNote": {
    message: "변경 사항을 적용하기 위해 서비스가 다시 배포되고 있습니다.",
    description:
      "Toast description after an env-var write (bex rolls the pods)",
  },
  "services.envSaveSuccess": {
    message: "{key} 저장됨",
    description: "Toast on a successful env-var add/update",
  },
  "services.envSaveError": {
    message: "{key} 저장하지 못했습니다",
    description: "Toast on a failed env-var add/update",
  },
  "services.envDeleteSuccess": {
    message: "{key} 제거됨",
    description: "Toast on a successful env-var delete",
  },
  "services.envDeleteError": {
    message: "{key} 제거하지 못했습니다",
    description: "Toast on a failed env-var delete",
  },
  "services.secretFilesTitle": {
    message: "비밀 파일",
    description: "Environment tab secret-files section title",
  },
  "services.secretFilesDescription": {
    message:
      "배포 시 이 서비스에 마운트되는 비밀 내용(인증서, 자격 증명)을 담은 파일을 저장하세요.",
    description: "Environment tab secret-files section description",
  },
  "services.secretFileColName": {
    message: "파일 이름",
    description: "Secret-files table column header (file name)",
  },
  "services.secretFileColContent": {
    message: "내용",
    description: "Secret-files table column header (file body)",
  },
  "services.secretFilesEmptyTitle": {
    message: "비밀 파일이 없습니다",
    description: "Secret-files empty-state title",
  },
  "services.secretFilesEmptyBody": {
    message: "이 서비스에 비밀 내용을 마운트하려면 파일을 추가하세요.",
    description: "Secret-files empty-state body",
  },
  "services.secretFilesUnavailableTitle": {
    message: "비밀 파일을 사용할 수 없습니다",
    description:
      "Secret-files state when the secret store is unconfigured (503)",
  },
  "services.secretFilesUnavailableBody": {
    message: "이 배포에는 비밀 저장소가 구성되어 있지 않습니다.",
    description: "Secret-files unavailable-state body",
  },
  "services.secretFilesForbiddenTitle": {
    message: "권한 없음",
    description: "Secret-files state when the caller lacks permission (403)",
  },
  "services.secretFilesForbiddenBody": {
    message: "이 서비스의 비밀 파일을 볼 권한이 없습니다.",
    description: "Secret-files forbidden-state body",
  },
  "services.secretFilesErrorTitle": {
    message: "비밀 파일을 불러오지 못했습니다",
    description: "Secret-files generic error title",
  },
  "services.secretFilesErrorBody": {
    message: "문제가 발생했습니다. 다시 시도해 주세요.",
    description: "Secret-files generic error body",
  },
  "services.secretFileAdd": {
    message: "비밀 파일 추가",
    description: "Secret-files button to open the add-file form",
  },
  "services.secretFileNamePlaceholder": {
    message: "파일명.확장자",
    description: "Secret-files add-file name input placeholder",
  },
  "services.secretFileContentPlaceholder": {
    message: "파일 내용",
    description: "Secret-files content input placeholder",
  },
  "services.secretFileInvalidName": {
    message:
      "문자, 숫자, 점, 하이픈, 밑줄을 사용하세요. '.'이나 '..'은 사용할 수 없습니다.",
    description: "Secret-files add-file validation message for an invalid name",
  },
  "services.secretFileDeleteConfirmTitle": {
    message: "{name}을(를) 제거하시겠습니까?",
    description: "Secret-file delete-confirmation dialog title",
  },
  "services.secretFileDeleteConfirmBody": {
    message: "이 파일 없이 서비스가 다시 배포됩니다.",
    description: "Secret-file delete-confirmation dialog body",
  },
  "services.secretFileSaveSuccess": {
    message: "{name} 저장됨",
    description: "Toast on a successful secret-file add/update",
  },
  "services.secretFileSaveError": {
    message: "{name} 저장하지 못했습니다",
    description: "Toast on a failed secret-file add/update",
  },
  "services.secretFileDeleteSuccess": {
    message: "{name} 제거됨",
    description: "Toast on a successful secret-file delete",
  },
  "services.secretFileDeleteError": {
    message: "{name} 제거하지 못했습니다",
    description: "Toast on a failed secret-file delete",
  },
  "services.envGroupsTitle": {
    message: "환경 그룹",
    description: "Environment tab env-groups section title",
  },
  "services.envGroupsDescription": {
    message:
      "이 서비스와 다른 서비스에 연결할 수 있는 재사용 가능한 환경 변수 및 비밀 파일 묶음입니다.",
    description: "Environment tab env-groups section description",
  },
  "services.envGroupsEmptyTitle": {
    message: "환경 그룹이 없습니다",
    description: "Env-groups empty-state title",
  },
  "services.envGroupsEmptyBody": {
    message: "서비스 간에 설정을 공유하려면 그룹을 만드세요.",
    description: "Env-groups empty-state body",
  },
  "services.envGroupsUnavailableTitle": {
    message: "환경 그룹을 사용할 수 없습니다",
    description: "Env-groups state when the secret store is unconfigured (503)",
  },
  "services.envGroupsUnavailableBody": {
    message: "이 배포에는 비밀 저장소가 구성되어 있지 않습니다.",
    description: "Env-groups unavailable-state body",
  },
  "services.envGroupsForbiddenTitle": {
    message: "권한 없음",
    description: "Env-groups state when the caller lacks permission (403)",
  },
  "services.envGroupsForbiddenBody": {
    message: "환경 그룹을 볼 권한이 없습니다.",
    description: "Env-groups forbidden-state body",
  },
  "services.envGroupsErrorTitle": {
    message: "환경 그룹을 불러오지 못했습니다",
    description: "Env-groups generic error title",
  },
  "services.envGroupsErrorBody": {
    message: "문제가 발생했습니다. 다시 시도해 주세요.",
    description: "Env-groups generic error body",
  },
  "services.envGroupCreate": {
    message: "그룹 생성",
    description: "Env-groups button to open the create-group form",
  },
  "services.envGroupCreateSubmit": {
    message: "생성",
    description: "Env-groups create-group form submit button",
  },
  "services.envGroupNamePlaceholder": {
    message: "group-name",
    description: "Env-groups create-group name input placeholder",
  },
  "services.envGroupNameLabel": {
    message: "그룹 이름",
    description: "Env-groups create-group name input accessible label",
  },
  "services.envGroupInvalidName": {
    message: "문자, 숫자, 점, 하이픈, 밑줄을 사용하세요.",
    description:
      "Env-groups create-group validation message for an invalid name",
  },
  "services.envGroupLinked": {
    message: "연결됨",
    description:
      "Env-groups badge: this group is linked to the current service",
  },
  "services.envGroupEmptyContents": {
    message: "아직 변수나 파일이 없습니다.",
    description: "Env-groups: shown when a group has no vars or secret files",
  },
  "services.envGroupLink": {
    message: "연결",
    description: "Env-groups button: attach this group to the current service",
  },
  "services.envGroupUnlink": {
    message: "연결 해제",
    description:
      "Env-groups button: detach this group from the current service",
  },
  "services.envGroupDelete": {
    message: "삭제",
    description: "Env-groups action: delete the group",
  },
  "services.envGroupDeleteConfirmTitle": {
    message: "{name}을(를) 삭제하시겠습니까?",
    description: "Env-group delete-confirmation dialog title",
  },
  "services.envGroupDeleteConfirmBody": {
    message: "이 그룹은 연결된 모든 서비스에서 제거됩니다. 되돌릴 수 없습니다.",
    description: "Env-group delete-confirmation dialog body",
  },
  "services.envGroupCreateSuccess": {
    message: "{name} 생성됨",
    description: "Toast on a successful env-group create",
  },
  "services.envGroupCreateError": {
    message: "{name} 생성하지 못했습니다",
    description: "Toast on a failed env-group create",
  },
  "services.envGroupDeleteSuccess": {
    message: "그룹이 삭제되었습니다",
    description: "Toast on a successful env-group delete",
  },
  "services.envGroupDeleteError": {
    message: "그룹을 삭제하지 못했습니다",
    description: "Toast on a failed env-group delete",
  },
  "services.envGroupLinkSuccess": {
    message: "그룹이 연결되었습니다",
    description: "Toast on a successful env-group link",
  },
  "services.envGroupLinkError": {
    message: "그룹을 연결하지 못했습니다",
    description: "Toast on a failed env-group link",
  },
  "services.envGroupUnlinkSuccess": {
    message: "그룹 연결이 해제되었습니다",
    description: "Toast on a successful env-group unlink",
  },
  "services.envGroupUnlinkError": {
    message: "그룹 연결을 해제하지 못했습니다",
    description: "Toast on a failed env-group unlink",
  },
  "services.navSettings": {
    message: "설정",
    description: "Service-detail nav item (settings tab)",
  },
  "services.settingsTitle": {
    message: "설정",
    description: "Settings tab card title",
  },
  "services.settingsDescription": {
    message: "이 서비스의 인스턴스 크기 및 기타 설정을 구성하세요.",
    description: "Settings tab card description",
  },
  "services.settingsInstanceType": {
    message: "인스턴스 유형",
    description: "Settings tab row label for the App's current plan/tier",
  },
  "services.settingsNoInstanceType": {
    message: "설정된 인스턴스 유형이 없습니다",
    description: "Settings tab state for an untiered (bare-CR) App",
  },
  "services.settingsUpdate": {
    message: "업데이트",
    description: "Settings tab link to the instance-type picker",
  },
  "services.settingsIdleTimeout": {
    message: "유휴 시간 제한",
    description:
      "Settings tab: label for the free-tier auto-sleep window control",
  },
  "services.settingsIdleTimeoutHint": {
    message:
      "무료 서비스는 이 유휴 시간이 지나면 휴면 상태가 되며, 다음 요청 시 다시 깨어납니다.",
    description: "Settings tab: idle-timeout control help text (bex extension)",
  },
  "services.settingsIdleTimeoutPaid": {
    message: "유료 서비스는 항상 켜져 있으며 절대 휴면 상태가 되지 않습니다.",
    description: "Settings tab: shown instead of the control on a paid plan",
  },
  "services.idleTimeoutDefault": {
    message: "플랫폼 기본값",
    description: "Idle-timeout option: 0 seconds = the operator's own window",
  },
  "services.idleTimeoutMinutes": {
    message: "{minutes}분",
    description: "Idle-timeout option label in minutes",
  },
  "services.idleTimeoutHours": {
    message: "{hours}시간",
    description: "Idle-timeout option label in hours",
  },
  "services.idleTimeoutSeconds": {
    message: "{seconds}초",
    description: "Idle-timeout option label in seconds (non-round values)",
  },
  "services.idleTimeoutSuccess": {
    message: "유휴 시간 제한이 업데이트되었습니다.",
    description: "Toast after setIdleTimeout succeeds",
  },
  "services.idleTimeoutError": {
    message: "유휴 시간 제한을 업데이트하지 못했습니다.",
    description: "Toast after setIdleTimeout fails",
  },
  "services.planPickerTitle": {
    message: "인스턴스 유형 선택",
    description: "Plan-picker page heading",
  },
  "services.planPickerFreeGroup": {
    message: "무료",
    description:
      "Plan-picker section label separating the Free tier from paid tiers",
  },
  "services.planPickerPaidGroup": {
    message: "유료",
    description: "Plan-picker section label for the paid tier ladder",
  },
  "services.planPickerCancel": {
    message: "취소",
    description: "Plan-picker footer button: discard the selection",
  },
  "services.planPickerSave": {
    message: "변경 사항 저장",
    description: "Plan-picker footer button: confirm the plan change",
  },
  "services.planPickerConfirmTitle": {
    message: "인스턴스 유형을 {name}(으)로 변경하시겠습니까?",
    description: "Plan-change confirm dialog title",
  },
  "services.planPickerConfirmBody": {
    message:
      "서비스가 다운타임 없이 크기를 조정하고 순차적으로 교체됩니다 — 진행 중인 요청은 기존 인스턴스가 교체되기 전에 완료됩니다.",
    description: "Plan-change confirm dialog body",
  },
  "services.planPickerSuccess": {
    message: "인스턴스 유형이 {name}(으)로 업데이트되었습니다",
    description: "Toast on a successful plan change",
  },
  "services.planPickerError": {
    message: "인스턴스 유형을 업데이트하지 못했습니다. 다시 시도해 주세요.",
    description: "Toast on a failed plan change",
  },
  "services.planPickerErrorTitle": {
    message: "인스턴스 유형을 불러오지 못했습니다",
    description: "Plan-picker error state title (instanceTypes query failed)",
  },
  "services.planPickerErrorBody": {
    message: "bex-api 요청이 실패했습니다. 연결을 확인하고 다시 시도하세요.",
    description: "Plan-picker error state body",
  },
  "services.domainsTitle": {
    message: "커스텀 도메인",
    description: "Settings tab custom-domains section title",
  },
  "services.domainsDescription": {
    message: "소유한 커스텀 도메인을 이 서비스로 연결하세요.",
    description: "Settings tab custom-domains section description",
  },
  "services.domainColName": {
    message: "이름",
    description: "Custom-domains table column header (the FQDN)",
  },
  "services.domainColVerified": {
    message: "확인 상태",
    description:
      "Custom-domains table column header (DNS/ownership verification)",
  },
  "services.domainColCertificate": {
    message: "인증서 상태",
    description:
      "Custom-domains table column header (TLS certificate serving state)",
  },
  "services.domainColActions": {
    message: "작업",
    description:
      "Custom-domains table actions column header (screen-reader only)",
  },
  "services.domainVerified": {
    message: "확인됨",
    description: "Custom-domains status badge: TLS certificate has been issued",
  },
  "services.domainCertActive": {
    message: "활성",
    description:
      "Custom-domains status badge: certificate issued and serving traffic",
  },
  "services.domainPending": {
    message: "대기 중",
    description:
      "Custom-domains status badge: certificate not yet issued/serving",
  },
  "services.domainActionsMenu": {
    message: "도메인 작업 메뉴 열기",
    description: "Accessible label for the per-domain actions trigger",
  },
  "services.domainDelete": {
    message: "삭제",
    description: "Custom-domains row action: remove the domain",
  },
  "services.domainCancel": {
    message: "취소",
    description: "Custom-domains dialog cancel button",
  },
  "services.domainDeleteConfirmTitle": {
    message: "{name}을(를) 삭제하시겠습니까?",
    description: "Custom-domain delete-confirmation dialog title",
  },
  "services.domainDeleteConfirmBody": {
    message:
      "서비스가 이 도메인에 대한 처리를 중단합니다. Ingress 규칙이 제거되고 TLS 인증서는 만료되도록 방치됩니다. 되돌릴 수 없습니다.",
    description: "Custom-domain delete-confirmation dialog body",
  },
  "services.domainAdd": {
    message: "커스텀 도메인 추가",
    description: "Custom-domains button to open the add-domain dialog",
  },
  "services.domainAddTitle": {
    message: "커스텀 도메인 추가",
    description: "Add-domain dialog title",
  },
  "services.domainAddDescription": {
    message:
      "소유한 도메인을 입력하세요. DNS를 이 서비스로 연결하면 bex가 자동으로 TLS 인증서를 발급합니다.",
    description: "Add-domain dialog description",
  },
  "services.domainPlaceholder": {
    message: "www.example.com",
    description: "Add-domain FQDN input placeholder",
  },
  "services.domainInvalid": {
    message: "유효한 도메인을 입력하세요. 예: www.example.com",
    description: "Add-domain validation message for a malformed hostname",
  },
  "services.domainAddButton": {
    message: "도메인 추가",
    description: "Add-domain dialog submit button",
  },
  "services.domainAddSuccess": {
    message: "{name} 추가됨",
    description: "Toast on a successful custom-domain add",
  },
  "services.domainAddError": {
    message: "{name} 추가하지 못했습니다",
    description: "Toast on a failed custom-domain add",
  },
  "services.domainDeleteSuccess": {
    message: "{name} 제거됨",
    description: "Toast on a successful custom-domain delete",
  },
  "services.domainDeleteError": {
    message: "{name} 제거하지 못했습니다",
    description: "Toast on a failed custom-domain delete",
  },
  "services.domainPropagateNote": {
    message: "DNS와 TLS 인증서가 백그라운드에서 전파됩니다.",
    description:
      "Toast description after a custom-domain add (async convergence)",
  },
  "services.domainDnsToggle": {
    message: "DNS 설정 표시",
    description:
      "aria-label for the per-domain DNS-instructions disclosure toggle",
  },
  "services.domainDnsTitle": {
    message: "DNS 설정",
    description: "Heading of the per-domain DNS-instructions panel",
  },
  "services.domainDnsSubdomainGuidance": {
    message:
      "DNS 공급자에서 다음 레코드를 생성한 뒤 다시 확인하세요. 확인이 완료되면 bex가 자동으로 TLS 인증서를 발급합니다.",
    description: "Guidance line above the DNS record for a subdomain",
  },
  "services.domainDnsApexGuidance": {
    message:
      "최상위(apex) 도메인은 일반 CNAME을 사용할 수 없습니다. 공급자가 ALIAS/ANAME(또는 CNAME 플래트닝)을 지원하면 이 레코드를 생성하고, 그렇지 않다면 등록기관에서 apex를 www 서브도메인으로 리디렉션하세요.",
    description: "Guidance line above the DNS record for an apex domain",
  },
  "services.domainRecordType": {
    message: "유형",
    description: "Label for the DNS record type field (CNAME/ALIAS)",
  },
  "services.domainRecordHost": {
    message: "호스트",
    description: "Label for the DNS record host/name field",
  },
  "services.domainRecordTarget": {
    message: "대상",
    description: "Label for the DNS record target/value field",
  },
  "services.domainDnsUnavailable": {
    message:
      "DNS 대상을 아직 사용할 수 없습니다 — 서비스가 실행되면 다시 확인하세요.",
    description: "Shown when the backend couldn't derive the DNS record target",
  },
  "services.domainRecheck": {
    message: "다시 확인",
    description: "Button that re-checks a domain's DNS/certificate status",
  },
  "services.domainCopied": {
    message: "클립보드에 복사됨",
    description: "Toast when a DNS record value is copied",
  },
  "services.domainCopyError": {
    message: "클립보드에 복사하지 못했습니다",
    description: "Toast when copying a DNS record value fails",
  },
  "services.domainAddedTitle": {
    message: "도메인이 추가되었습니다 — DNS를 설정하세요",
    description: "Title of the post-add DNS-record step in the add dialog",
  },
  "services.domainAddedDescription": {
    message: "도메인 연결을 완료하려면 DNS 공급자에서 이 레코드를 생성하세요.",
    description: "Subtitle of the post-add DNS-record step in the add dialog",
  },
  "services.domainDone": {
    message: "완료",
    description: "Button closing the post-add DNS-record step",
  },
  "services.domainVerifySuccess": {
    message: "{name} 확인됨",
    description: "Toast when a re-check finds the domain verified",
  },
  "services.domainVerifyPending": {
    message:
      "{name}이(가) 아직 확인되지 않았습니다 — DNS가 전파되는 중일 수 있습니다.",
    description: "Toast when a re-check finds the domain still pending",
  },
  "services.domainVerifyError": {
    message: "{name}을(를) 다시 확인하지 못했습니다.",
    description: "Toast when the re-check request fails",
  },
  "services.domainsEmptyTitle": {
    message: "커스텀 도메인이 없습니다",
    description: "Custom-domains empty-state title",
  },
  "services.domainsEmptyBody": {
    message: "이 서비스에서 제공하려면 소유한 도메인을 추가하세요.",
    description: "Custom-domains empty-state body",
  },
  "services.domainsErrorTitle": {
    message: "커스텀 도메인을 불러오지 못했습니다",
    description: "Custom-domains generic error title",
  },
  "services.domainsErrorBody": {
    message: "bex-api 요청이 실패했습니다. 연결을 확인하고 다시 시도하세요.",
    description: "Custom-domains generic error body",
  },
  "services.platformSubdomainTitle": {
    message: "플랫폼 서브도메인",
    description: "Settings tab platform-subdomain section title",
  },
  "services.platformSubdomainDescription": {
    message:
      "이 서비스는 커스텀 도메인 외에도 항상 bex 플랫폼 서브도메인으로 접근할 수 있습니다.",
    description: "Settings tab platform-subdomain section description",
  },
  "services.platformSubdomainEnabled": {
    message: "항상 활성화됨",
    description: "Platform-subdomain badge: the subdomain can't be turned off",
  },
  "services.platformSubdomainPending": {
    message: "서비스가 실행되면 플랫폼 URL이 할당됩니다.",
    description: "Platform-subdomain state when the service has no URL yet",
  },
  "services.deployTitle": {
    message: "배포",
    description: "Cron job Settings tab: Deploy section title (Render parity)",
  },
  "services.deployDescription": {
    message: "이 크론 작업이 실행되는 방식입니다 — 현재는 읽기 전용입니다.",
    description: "Cron job Settings tab: Deploy section description",
  },
  "services.deployScheduleLabel": {
    message: "일정",
    description: "Cron job Settings tab: Deploy section schedule field label",
  },
  "services.deployScheduleHint": {
    message: "이 일정(5필드 crontab)에 따라 이 명령을 실행합니다.",
    description: "Cron job Settings tab: Deploy section schedule help text",
  },
  "services.deployCommandLabel": {
    message: "명령어",
    description: "Cron job Settings tab: Deploy section command field label",
  },
  "services.deployCommandEmpty": {
    message: "이미지 자체의 기본 명령을 사용합니다.",
    description:
      "Cron job Settings tab: shown when spec.command is unset (no override)",
  },
  "services.colType": {
    message: "유형",
    description: "Services table column header (service type)",
  },
  "services.typeWeb": {
    message: "웹 서비스",
    description: "Service-type badge: an HTTP service exposed at a URL",
  },
  "services.typePrivate": {
    message: "비공개 서비스",
    description:
      "Service-type badge: an HTTP service reachable only in-cluster",
  },
  "services.typeWorker": {
    message: "백그라운드 워커",
    description: "Service-type badge: runs with no HTTP port/URL",
  },
  "services.typeCron": {
    message: "크론 작업",
    description: "Service-type badge: runs a command on a schedule",
  },
  "services.typeUnknown": {
    message: "서비스",
    description: "Service-type badge fallback for an unrecognized type",
  },
  "services.overviewType": {
    message: "유형",
    description: "Overview tab row label for the service type",
  },
  "services.overviewSchedule": {
    message: "일정",
    description: "Overview tab row label for a cron job's schedule",
  },
  "services.cronRunsTitle": {
    message: "최근 실행 내역",
    description: "Cron job overview: recent-runs section title",
  },
  "services.cronRunsEmpty": {
    message: "아직 실행 내역이 없습니다.",
    description: "Cron job overview: shown when a cron has no run history",
  },
  "services.cronRunColStarted": {
    message: "시작 시각",
    description: "Cron runs table column header (run start time)",
  },
  "services.cronRunColStatus": {
    message: "상태",
    description: "Cron runs table column header (run outcome)",
  },
  "services.cronRunStatusRunning": {
    message: "실행 중",
    description: "Cron run status badge",
  },
  "services.cronRunStatusSucceeded": {
    message: "성공",
    description: "Cron run status badge",
  },
  "services.cronRunStatusFailed": {
    message: "실패",
    description: "Cron run status badge",
  },
};

export default koServices;
