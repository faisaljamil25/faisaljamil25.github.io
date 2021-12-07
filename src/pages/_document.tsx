import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' type='image/svg+xml' href='/favicon.ico'></link>
          <link rel='alternate icon' href='/favicon.ico' />
          <meta name='theme-color' content='#ffffff'></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
