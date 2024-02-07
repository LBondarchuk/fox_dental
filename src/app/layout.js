import './globals.css';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'FOX DENTAL',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.svg' />
      </head>
      <body>
        <>
          <Header />
          {children}
          <Footer />{' '}
        </>
      </body>
    </html>
  );
}
