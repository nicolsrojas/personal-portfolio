import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Full-stack developer | ES/EN | React, Next.js, TypeScript, Node.js, Laravel | MySQL, PostgreSQL | WordPress, WooCommerce | SEO & Analytics expert" />
        <meta property="og:title" content="Nicols Rojas - Full Stack Web Developer" />
        <meta property="og:description" content="Full-stack developer | ES/EN | React, Next.js, TypeScript, Node.js, Laravel | MySQL, PostgreSQL | WordPress, WooCommerce | SEO & Analytics expert" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
