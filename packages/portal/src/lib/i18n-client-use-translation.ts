"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, cookieName } from "./i18n-settings";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: [
        // 'htmlTag',
        "cookie",
        "navigator",
      ],
    },
    preload: [],
  });

export function useTranslation(
  lng: string = "",
  ns: string = "common",
  options?: Record<string, unknown>,
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (cookies.locale === lng) return;
    if (lng) {
      setCookie(cookieName, lng, { path: "/" });
    }
  }, [lng, cookies.locale, setCookie, cookies]);

  return ret;
}
