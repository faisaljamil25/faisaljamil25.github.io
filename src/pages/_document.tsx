import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          ></link>
          <link rel='icon' type='image/png' href='/FJ.png' />
          <link rel='alternate icon' href='/FJ.png' />
          <meta name='theme-color' content='#ffffff'></meta>
        </Head>
        <body className='transition-colors duration-200 bg-white dark:bg-dark-mode'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
