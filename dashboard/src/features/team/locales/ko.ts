import type { TranslationEntry } from "@/i18n";

const koTeam: Record<string, TranslationEntry> = {
  "team.title": {
    message: "팀",
    description: "Settings Team section card title",
  },
  "team.description": {
    message:
      "이 워크스페이스에 속한 사람들과 그들이 할 수 있는 작업입니다. 이메일로 팀원을 초대하고 역할을 지정하세요. 역할은 모든 리소스에 걸쳐 적용됩니다.",
    description: "Settings Team section card description",
  },
  "team.colMember": {
    message: "멤버",
    description: "Team table column header — the member identity",
  },
  "team.colRole": {
    message: "역할",
    description: "Team table column header — the member's role",
  },
  "team.colEmail": {
    message: "이메일",
    description: "Pending invites table column header",
  },
  "team.pendingTitle": {
    message: "대기 중인 초대",
    description: "Heading above the pending-invites table",
  },
  "team.invite": {
    message: "초대",
    description: "Button that opens the invite dialog",
  },
  "team.inviteTitle": {
    message: "팀원 초대",
    description: "Invite dialog title",
  },
  "team.inviteDescription": {
    message:
      "이메일을 받게 되며, 해당 주소로 처음 로그인하면 이 워크스페이스에 합류합니다.",
    description: "Invite dialog description",
  },
  "team.fieldEmail": {
    message: "이메일 주소",
    description: "Invite dialog email field label",
  },
  "team.fieldEmailPlaceholder": {
    message: "teammate@example.com",
    description: "Invite dialog email field placeholder",
  },
  "team.fieldRole": {
    message: "역할",
    description: "Invite dialog role field label",
  },
  "team.inviteCancel": {
    message: "취소",
    description: "Invite dialog cancel button",
  },
  "team.inviteSubmit": {
    message: "초대 보내기",
    description: "Invite dialog submit button",
  },
  "team.inviteSuccess": {
    message: "{email}에게 초대를 보냈습니다",
    description: "Toast after a successful invite",
  },
  "team.inviteError": {
    message: "{email}을(를) 초대하지 못했습니다",
    description: "Toast after a failed invite",
  },
  "team.inviteErrorPlan": {
    message:
      "워크스페이스 플랜의 멤버 한도에 도달했습니다 — 더 초대하려면 업그레이드하세요.",
    description: "Toast when the workspace plan's member cap blocks an invite",
  },
  "team.remove": {
    message: "제거",
    description: "Remove-member button / confirm label",
  },
  "team.removeTitle": {
    message: "멤버를 제거하시겠습니까?",
    description: "Remove-member confirmation dialog title",
  },
  "team.removeConfirm": {
    message:
      "{subject}은(는) 이 워크스페이스에 대한 접근 권한을 즉시 잃게 됩니다.",
    description: "Remove-member confirmation dialog body",
  },
  "team.removeCancel": {
    message: "취소",
    description: "Remove-member confirmation cancel button",
  },
  "team.removeSuccess": {
    message: "멤버가 제거되었습니다",
    description: "Toast after a successful remove",
  },
  "team.removeError": {
    message: "해당 멤버를 제거하지 못했습니다",
    description: "Toast after a failed remove",
  },
  "team.roleChanged": {
    message: "역할이 업데이트되었습니다",
    description: "Toast after a successful role change",
  },
  "team.roleChangeError": {
    message: "해당 역할을 변경하지 못했습니다",
    description: "Toast after a failed role change",
  },
  "team.lastAdminError": {
    message: "워크스페이스에는 최소 한 명의 관리자가 있어야 합니다.",
    description: "Toast when the last-admin guard refuses a demote/remove",
  },
  "team.revokeInvite": {
    message: "취소",
    description: "Revoke pending-invite button",
  },
  "team.revokeInviteSuccess": {
    message: "초대가 취소되었습니다",
    description: "Toast after a successful invite revoke",
  },
  "team.revokeInviteError": {
    message: "해당 초대를 취소하지 못했습니다",
    description: "Toast after a failed invite revoke",
  },
  "team.errorTitle": {
    message: "팀을 불러오지 못했습니다",
    description: "Team panel generic error title",
  },
  "team.errorBody": {
    message:
      "이 워크스페이스의 멤버를 불러오는 중 문제가 발생했습니다. 다시 시도해 주세요.",
    description: "Team panel generic error body",
  },
  "team.role.VIEWER": {
    message: "뷰어",
    description: "Role label — read-only",
  },
  "team.role.CONTRIBUTOR": {
    message: "컨트리뷰터",
    description: "Role label — works on resources, no sensitive fields",
  },
  "team.role.DEVELOPER": {
    message: "개발자",
    description: "Role label — full resource access",
  },
  "team.role.ADMIN": {
    message: "관리자",
    description: "Role label — full access incl. settings, members, billing",
  },
  "team.role.BILLING": {
    message: "결제 담당자",
    description: "Role label — billing only",
  },
};

export default koTeam;
