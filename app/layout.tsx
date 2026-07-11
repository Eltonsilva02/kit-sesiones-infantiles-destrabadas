import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Kit Sesiones Infantiles Destrabadas | +80 Recursos Lúdicos',
  description:
    '+80 recursos lúdicos para psicólogas infantiles listos para imprimir y aplicar. Material 100% práctico organizado por demandas clínicas reales.',
  openGraph: {
    title: 'Kit Sesiones Infantiles Destrabadas',
    description:
      '+80 recursos lúdicos para psicólogas infantiles listos para imprimir y aplicar.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen">
        <main className="max-w-md mx-auto">{children}</main>
      </body>
    </html>
  );
}
