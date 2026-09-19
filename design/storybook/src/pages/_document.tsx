import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="icon" href="/favicon.svg?v=4" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="icon" href="/icon.png?v=4" type="image/png" sizes="1024x1024" />
        <link rel="apple-touch-icon" href="/icon.png?v=4" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
