"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { chainConfigs } from "@/lib/chain-configs";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Provider } from "jotai";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ApolloProvider client={apolloClient}>
          <ThirdwebProvider
            activeChain={chainConfigs[0]}
            supportedChains={chainConfigs}
            clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <GoogleAnalytics gaId="G-8W6N8HXQ4R" />
              <Provider>{children}</Provider>
            </ThemeProvider>
          </ThirdwebProvider>
        </ApolloProvider>

        <Toaster />
      </body>
    </html>
  );
}
