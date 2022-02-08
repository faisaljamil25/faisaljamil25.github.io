import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <DefaultSeo
        title='Faisal Jamil'
        description='Fullstack Web Developer'
        openGraph={{
          type: 'website',
          description: 'Fullstack Web Developer',
          title: 'Faisal Jamil',
          site_name: 'Faisal Jamil',
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
