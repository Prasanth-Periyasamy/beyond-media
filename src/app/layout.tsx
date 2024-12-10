import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import { Footer } from '../components/Footer/page';
import { Header } from '../components/Header/page';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beyond Media',
  description:
    'We offer a distinctive approach to designing and developing your product, while also providing valuable input based on our ideas and experience.',
};

const proximaNova = localFont({
  src: [
    { path: './fonts/ProximaNovaT-Thin.woff', weight: '100', style: 'normal' },
    { path: './fonts/ProximaNova-Light.woff', weight: '300', style: 'normal' },
    { path: './fonts/ProximaNova-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/ProximaNova-Semibold.woff', weight: '600', style: 'normal' },
    { path: './fonts/ProximaNova-Bold.woff', weight: '700', style: 'normal' },
    { path: './fonts/ProximaNova-Extrabld.woff', weight: '800', style: 'normal' },
    { path: './fonts/ProximaNova-Black.woff', weight: '900', style: 'normal' },
  ],
  variable: '--font-proximaNova',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={proximaNova.variable}>
        <div className="mx-auto max-w-[1400px] bg-[#010101]">
          <Header />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
