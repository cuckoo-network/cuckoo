"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n-client-use-translation";

export const GetCaiBanner = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("components_need_more_cai")}</p>
      <div className="flex flex-row align-baseline gap-4">
        <a
          className={"flex justify-end"}
          target={"_blank"}
          href={"https://ave.ai/token/0x9e3c88e95811db0db93b675f9985faff3972c615-arbitrum"}
        >
          <Image
            width={240}
            height={30}
            src={"https://cuckoo-network.b-cdn.net/ave.ai.webp"}
            alt={t("components_cuckoo_bridge_alt")}
          />
        </a>
        <a
          target={"_blank"}
          href={
            "https://app.uniswap.org/explore/pools/arbitrum/0x7DD5e64E46b3218aa6B8327eED8fD267fcF8C10c"
          }
        >
          <Image
            width={250.25}
            height={62.75}
            src={
              "https://cuckoo-network.b-cdn.net/Uniswap_horizontallogo_pink.svg"
            }
            alt={t("components_uniswap_alt")}
          />
        </a>
        <a
          className={"flex justify-end"}
          target={"_blank"}
          href={"https://bridge.cuckoo.network"}
        >
          <Image
            width={284.466667}
            height={41.8333333}
            src={"https://cuckoo-network.b-cdn.net/cuckoo-bridge.svg"}
            alt={t("components_cuckoo_bridge_alt")}
          />
        </a>
      </div>
    </>
  );
};
