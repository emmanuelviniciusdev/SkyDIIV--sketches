import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="1024x1024" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
