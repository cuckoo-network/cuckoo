import type { TranslationEntry } from "@/i18n";

const koWorkspaces: Record<string, TranslationEntry> = {
  "workspaces.switcherEmpty": {
    message: "워크스페이스 선택",
    description: "Switcher trigger label before any workspace is selected",
  },
  "workspaces.switcherLabel": {
    message: "워크스페이스",
    description: "Switcher dropdown label above the workspace list",
  },
  "workspaces.switcherSettings": {
    message: "워크스페이스 설정",
    description: "Switcher menu item linking to /workspace/settings",
  },
  "workspaces.switcherNew": {
    message: "+ 새 워크스페이스",
    description: "Switcher menu item linking to /new/workspace",
  },
  "workspaces.planPickerLabel": {
    message: "플랜",
    description: "Accessible label for the plan-card radiogroup",
  },
  "workspaces.planHobbyName": {
    message: "Hobby",
    description: "Workspace plan card name",
  },
  "workspaces.planHobbyPrice": {
    message: "무료",
    description: "Workspace plan card price",
  },
  "workspaces.planHobbyDescription": {
    message: "멤버 1명, 최대 25개 서비스, 사용자당 Hobby 워크스페이스 5개.",
    description: "Workspace plan card description",
  },
  "workspaces.planProName": {
    message: "Pro",
    description: "Workspace plan card name",
  },
  "workspaces.planProPrice": {
    message: "월 $25",
    description: "Workspace plan card price",
  },
  "workspaces.planProDescription": {
    message: "무제한 멤버 및 서비스.",
    description: "Workspace plan card description",
  },
  "workspaces.planScaleName": {
    message: "Scale",
    description: "Workspace plan card name",
  },
  "workspaces.planScalePrice": {
    message: "월 $499",
    description: "Workspace plan card price",
  },
  "workspaces.planScaleDescription": {
    message: "무제한 멤버 및 서비스, 추가 역할.",
    description: "Workspace plan card description",
  },
  "workspaces.planEnterpriseName": {
    message: "Enterprise",
    description: "Workspace plan card name",
  },
  "workspaces.planEnterprisePrice": {
    message: "맞춤형",
    description: "Workspace plan card price",
  },
  "workspaces.planEnterpriseDescription": {
    message: "맞춤형 제한 및 지원.",
    description: "Workspace plan card description",
  },
  "workspaces.createTitle": {
    message: "워크스페이스 생성",
    description: "/new/workspace card title",
  },
  "workspaces.createDescription": {
    message: "이름을 지정하고 플랜을 선택하세요.",
    description: "/new/workspace card description",
  },
  "workspaces.fieldName": {
    message: "이름",
    description: "Workspace name field label (shared by create + settings)",
  },
  "workspaces.fieldNamePlaceholder": {
    message: "예: acme-staging",
    description: "Workspace name field placeholder",
  },
  "workspaces.fieldNameError": {
    message:
      "소문자, 숫자, 하이픈만 사용하며 1~30자여야 합니다. 하이픈으로 시작하거나 끝날 수 없습니다.",
    description: "Workspace name validation error",
  },
  "workspaces.fieldPlan": {
    message: "플랜",
    description: "Workspace plan field label (create picker + settings badge)",
  },
  "workspaces.createErrorTitle": {
    message: "워크스페이스를 생성하지 못했습니다",
    description: "/new/workspace inline error alert title",
  },
  "workspaces.createCancel": {
    message: "취소",
    description: "/new/workspace cancel button",
  },
  "workspaces.createSubmit": {
    message: "워크스페이스 생성",
    description: "/new/workspace submit button",
  },
  "workspaces.createSuccess": {
    message: "{name} 생성됨",
    description: "Toast on a successful workspace create",
  },
  "workspaces.createError": {
    message: "워크스페이스를 생성하지 못했습니다",
    description: "Fallback toast/inline message on a failed create",
  },
  "workspaces.settingsTitle": {
    message: "워크스페이스",
    description: "Workspace settings card title",
  },
  "workspaces.settingsDescription": {
    message:
      "이 워크스페이스의 이름을 바꾸거나 플랜과 메타데이터를 확인하세요.",
    description: "Workspace settings card description",
  },
  "workspaces.settingsEmpty": {
    message: "선택된 워크스페이스가 없습니다.",
    description: "Workspace settings page empty state",
  },
  "workspaces.renameSubmit": {
    message: "저장",
    description: "Workspace rename form submit button",
  },
  "workspaces.renameErrorTitle": {
    message: "워크스페이스 이름을 변경하지 못했습니다",
    description: "Workspace rename inline error alert title",
  },
  "workspaces.renameSuccess": {
    message: "{name}(으)로 이름이 변경되었습니다",
    description: "Toast on a successful rename",
  },
  "workspaces.renameError": {
    message: "워크스페이스 이름을 변경하지 못했습니다",
    description: "Fallback toast/inline message on a failed rename",
  },
  "workspaces.fieldId": {
    message: "워크스페이스 ID",
    description: "Workspace settings metadata field label",
  },
  "workspaces.fieldCreatedAt": {
    message: "생성일",
    description: "Workspace settings metadata field label",
  },
  "workspaces.dangerZoneTitle": {
    message: "위험 구역",
    description: "Workspace settings delete section title",
  },
  "workspaces.dangerZoneDescription": {
    message:
      "워크스페이스를 삭제하면 서비스, 데이터베이스, 환경 변수가 영구적으로 제거됩니다. 되돌릴 수 없습니다.",
    description: "Workspace settings delete section description",
  },
  "workspaces.deleteConfirmLabel": {
    message: "확인하려면 {name}을(를) 입력하세요",
    description: "Delete-guard input label naming the exact workspace name",
  },
  "workspaces.deleteErrorTitle": {
    message: "워크스페이스를 삭제하지 못했습니다",
    description: "Delete danger-zone inline error alert title",
  },
  "workspaces.deleteSubmit": {
    message: "워크스페이스 삭제",
    description: "Delete danger-zone submit button",
  },
  "workspaces.deleteSuccess": {
    message: "{name} 삭제됨",
    description: "Toast on a successful delete",
  },
  "workspaces.deleteError": {
    message: "워크스페이스를 삭제하지 못했습니다",
    description: "Fallback toast/inline message on a failed delete",
  },
};

export default koWorkspaces;
