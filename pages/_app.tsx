import SEO from 'next-seo.config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store/store';

import GlobalStyles from 'components/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { COLORS, QUERIES, WEIGHTS } from 'constants/constants';

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          content="initial-scale=1, width=device-width, viewport-fit=cover, user-scalable=no"
          name="viewport"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={{ queries: QUERIES, colors: COLORS, weights: WEIGHTS }}>
          <GlobalStyles />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
