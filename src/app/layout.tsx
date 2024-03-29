import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clínica Rigatti',
  description:
    'Agende sua consulta com Dr. Rigatti. Especialista em emagrecimento saudável, e nutrição. A clínica Rigatti oferece planos de dieta personalizados, em nutrição e emagrecimento.',
};

import Providers from '@/providers/providers';
import { Poppins, Playfair_Display, Montserrat } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  style: ['normal', 'italic'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='pt-BR'
      className={`${poppins.variable} ${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#fff' />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
