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

          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />

          {/* From realfavicongenerator.net */}

          <link rel="shortcut icon" href="/img/manifest/favicon.ico" />

          <link rel="icon" type="image/png" sizes="32x32" href="/img/manifest/favicon-32x32.png" />

          <link rel="icon" type="image/png" sizes="16x16" href="/img/manifest/favicon-16x16.png" />

          <link rel="mask-icon" href="/img/manifest/safari-pinned-tab.svg" color="#5bbad5" />

          <meta name="msapplication-config" content="/img/manifest/browserconfig.xml" />

          <meta name="msapplication-square150x150logo" content="/img/manifest/mstile-150x150.png" />

          {/* From PWA asset generator CLI */}

          <link rel="icon" type="image/png" sizes="196x196" href="/img/manifest/favicon-196.png" />

          <meta name="msapplication-square70x70logo" content="/img/manifest/mstile-icon-128.png" />

          <meta
            content="/img/manifest/mstile-icon-270.png"
            name="msapplication-square150x150logo"
          />

          <meta
            content="/img/manifest/mstile-icon-558.png"
            name="msapplication-square310x310logo"
          />

          <meta
            content="/img/manifest/mstile-icon-558-270.png"
            name="msapplication-wide310x150logo"
          />

          <link rel="apple-touch-icon" href="/img/manifest/apple-touch-icon.png" />

          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link
            href="/img/manifest/apple-splash-dark-2048-2732.png"
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2732-2048.png"
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1668-2388.png"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2388-1668.png"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1536-2048.png"
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2048-1536.png"
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1668-2224.png"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2224-1668.png"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1620-2160.png"
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2160-1620.png"
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            rel="apple-touch-startup-image"
            href="/img/manifest/apple-splash-dark-1284-2778.png"
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />

          <link
            href="/img/manifest/apple-splash-dark-2778-1284.png"
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1170-2532.png"
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2532-1170.png"
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1125-2436.png"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2436-1125.png"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1242-2688.png"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2688-1242.png"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-828-1792.png"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1792-828.png"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1242-2208.png"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-2208-1242.png"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-750-1334.png"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1334-750.png"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-640-1136.png"
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            rel="apple-touch-startup-image"
          />

          <link
            href="/img/manifest/apple-splash-dark-1136-640.png"
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            rel="apple-touch-startup-image"
          />
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
