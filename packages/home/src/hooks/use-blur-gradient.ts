import { useEffect } from "react";

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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/BlurGradientBg.min.js";
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
