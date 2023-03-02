import Link from "next/link";
import Head from "next/head";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";
import { Heading } from "../components/Heading";

import "../styles/globals.css";
import "../styles/styles.scss";


import { IBM_Plex_Mono, Inter, PT_Serif } from '@next/font/google';
import { Forum, Plus_Jakarta_Sans } from '@next/font/google';


const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700','100','200','300','400'],
})

const sans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300','500','600', '700', '800'],
})

const serif = Forum({
  variable: '--font-serif',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400'],
})




const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h1" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="mb-7 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <>
     <Head>
         <link rel="icon" href="/static/images/logo/favicon.png" type="image/png" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
     </Head>
          <style jsx global>
      {`
        :root {
          --font-mono: ${mono.style.fontFamily};
          --font-sans: ${sans.style.fontFamily};
           --font-serif: ${serif.style.fontFamily};
       }
      `}
      </style>


    <PrismicProvider
      internalLinkComponent={Link}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
       
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
    </>
  );
}
