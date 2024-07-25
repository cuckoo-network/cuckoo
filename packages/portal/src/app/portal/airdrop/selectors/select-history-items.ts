export enum AirdropType {
  LOGIN = "LOGIN",
  REFER = "REFER",
  ADD_EMAIL = "ADD_EMAIL",
  DAILY_CLAIM = "DAILY_CLAIM",
  FOLLOW_X = "FOLLOW_X",
  JOIN_DISCORD = "JOIN_DISCORD",
  JOIN_TELEGRAM = "JOIN_TELEGRAM",
  CREATE_1ST_IMAGE = "CREATE_1ST_IMAGE",
  STAKE_CAI = "STAKE_CAI",
  MINE_FIRST_GPU = "MINE_FIRST_GPU",
}

function isWithinLast24Hours(date: Date): boolean {
  const now = new Date();
  const timeDifference = now.getTime() - date.getTime();
  const hoursDifference = timeDifference / (1000 * 60 * 60);
  return hoursDifference <= 24;
}

export function selectHistoryItems(historyItems: any) {
  return {
    login: historyItems?.some((item: any) => item.type === AirdropType.LOGIN),
    refer: historyItems?.some((item: any) => item.type === AirdropType.REFER),
    addEmail: historyItems?.some(
      (item: any) => item.type === AirdropType.ADD_EMAIL,
    ),
    dailyClaim: historyItems?.some(
      (item: any) =>
        item.type === AirdropType.DAILY_CLAIM &&
        isWithinLast24Hours(new Date(item.createdAt)),
    ),
    followX: historyItems?.some(
      (item: any) => item.type === AirdropType.FOLLOW_X,
    ),
    create1stImage: historyItems?.some(
      (item: any) => item.type === AirdropType.CREATE_1ST_IMAGE,
    ),
    stakeCai: historyItems?.some(
      (item: any) => item.type === AirdropType.STAKE_CAI,
    ),
    mineFirstGpu: historyItems?.some(
      (item: any) => item.type === AirdropType.MINE_FIRST_GPU,
    ),
    joinDiscord: historyItems?.some(
      (item: any) => item.type === AirdropType.JOIN_DISCORD,
    ),
    joinTelegram: historyItems?.some(
      (item: any) => item.type === AirdropType.JOIN_TELEGRAM,
    ),
  };
}

export function selectSumAmount(historyItems: any): number {
  return (
    historyItems?.reduce((sum: any, item: any) => {
      return Number(sum) + Number(item.rewards);
    }, 0) || 0
  );
}
