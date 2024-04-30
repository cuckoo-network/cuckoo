import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../src/styles/globals.css";
import {chainConfig} from "../src/chain-config";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={chainConfig}
      supportedChains={[chainConfig]}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
