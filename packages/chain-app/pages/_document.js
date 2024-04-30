import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="dark">
        <Head>
          <meta charSet="utf-8" />

          <link
            rel="stylesheet"
            href="https://cuckoo.network/assets/css/styles.9fd45580.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
