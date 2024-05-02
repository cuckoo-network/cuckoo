"use client";

import {ThirdwebProvider} from "@thirdweb-dev/react";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {chainConfig} from "@/lib/chain-config";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "@/lib/apollo-client";

const inter = Inter({subsets: ["latin"]});
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
        activeChain={chainConfig}
        supportedChains={[chainConfig]}
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ThirdwebProvider>
    </ApolloProvider>
    </body>
    </html>
  );
}
