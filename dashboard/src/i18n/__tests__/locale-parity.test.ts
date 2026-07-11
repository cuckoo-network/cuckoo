import { describe, it, expect } from "vitest";
import enCommon from "@/common/locales/en";
import zhCommon from "@/common/locales/zh";
import koCommon from "@/common/locales/ko";
import enAuth from "@/features/auth/locales/en";
import zhAuth from "@/features/auth/locales/zh";
import koAuth from "@/features/auth/locales/ko";
import enMetrics from "@/features/metrics/locales/en";
import zhMetrics from "@/features/metrics/locales/zh";
import koMetrics from "@/features/metrics/locales/ko";
import enServices from "@/features/services/locales/en";
import zhServices from "@/features/services/locales/zh";
import koServices from "@/features/services/locales/ko";

const NAMESPACES = [
  { name: "common", en: enCommon, zh: zhCommon, ko: koCommon },
  { name: "auth", en: enAuth, zh: zhAuth, ko: koAuth },
  { name: "metrics", en: enMetrics, zh: zhMetrics, ko: koMetrics },
  { name: "services", en: enServices, zh: zhServices, ko: koServices },
];

describe("locale key parity", () => {
  it.each(NAMESPACES)("$name: en and zh have the same keys", ({ en, zh }) => {
    const enKeys = Object.keys(en).sort();
    const zhKeys = Object.keys(zh).sort();

    expect(zhKeys).toEqual(enKeys);
  });

  it.each(NAMESPACES)("$name: en and ko have the same keys", ({ en, ko }) => {
    const enKeys = Object.keys(en).sort();
    const koKeys = Object.keys(ko).sort();

    expect(koKeys).toEqual(enKeys);
  });

  it.each(NAMESPACES)(
    "$name: every key is namespace-prefixed",
    ({ name, en }) => {
      for (const key of Object.keys(en)) {
        expect(key.startsWith(`${name}.`)).toBe(true);
      }
    },
  );

  it.each(NAMESPACES)(
    "$name: every entry has a non-empty message",
    ({ en, zh, ko }) => {
      for (const entry of [
        ...Object.values(en),
        ...Object.values(zh),
        ...Object.values(ko),
      ]) {
        expect(entry.message.length).toBeGreaterThan(0);
      }
    },
  );
});
