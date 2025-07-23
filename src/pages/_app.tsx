import type { AppProps } from 'next/app';
import { Space_Grotesk } from 'next/font/google';
import Head from 'next/head';
import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Nicols Rojas</title>
    </Head>
    <div className={spaceGrotesk.variable}>
      <Component {...pageProps} />
    </div> 
    </>
  );
}

export default MyApp;
