import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import { Header, LayoutRenderer } from 'layout';
import { TopicConfigProvider } from 'topic';
import 'styles/reset.css';
import 'styles/global.css';

const components = {
  wrapper: ({ children }) => {
    console.log(children);
    return <>{children}</>;
  },
};

function MyApp({ Component, pageProps }) {
  const mainSection = Component.isMDXComponent ? (
    <MDXProvider components={components}></MDXProvider>
  ) : (
    <Component {...pageProps} />
  );

  return (
    <>
      <Head>
        <title>My page title</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:wght@400;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <TopicConfigProvider topic="css">
        <Header />
        <div id="mainContainer">{mainSection}</div>
      </TopicConfigProvider>

      <style jsx>{`
        #mainContainer {
          display: flex;
        }
      `}</style>
    </>
  );
}

export default MyApp;
