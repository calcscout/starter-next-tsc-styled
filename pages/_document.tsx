import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={this.props.__NEXT_DATA__.locale ? this.props.__NEXT_DATA__.locale : 'en'}>
        <Head>
          {/* PWA primary color */}

          <link rel="manifest" href="/img/manifest/site.webmanifest" />

          <meta name="theme-color" content="hsl(233 13% 13%)" />

          <meta name="apple-mobile-web-app-status-bar-style" content="black" />

          {/* From realfavicongenerator.net */}

          <link rel="apple-touch-icon" sizes="76x76" href="/img/manifest/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/manifest/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/manifest/favicon-16x16.png" />
          <link rel="manifest" href="/img/manifest/site.webmanifest" />
          <link rel="mask-icon" href="/img/manifest/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/img/manifest/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Apecessories" />
          <meta name="application-name" content="Apecessories" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/img/manifest/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body className="dark-mode">
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
