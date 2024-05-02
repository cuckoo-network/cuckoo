export function shortenAddress(addr: string): string {
  try {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  } catch (err) {
    return "";
  }
}
