import { useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface BlurGradientConfig {
  dom: string;
  colors: string[];
  loop?: boolean;
}

declare global {
  interface Window {
    Color4Bg: {
      BlurGradientBg: new (config: BlurGradientConfig) => any;
    };
  }
}

export function useBlurGradient(config: BlurGradientConfig) {
  const scriptSrc = useBaseUrl("/BlurGradientBg.min.js");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;

    script.onload = () => {
      new window.Color4Bg.BlurGradientBg(config);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [config.dom, ...config.colors, config.loop]);
}
