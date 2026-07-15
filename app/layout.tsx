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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2820618941647942');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2820618941647942&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "6a53c2ffd58c135c54567af0";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids=""
          async
          defer
        ></script>
        <script src="https://t.contentsquare.net/uxa/d1b192a270c5d.js" defer></script>
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen">
        <main className="max-w-md mx-auto">{children}</main>
      </body>
    </html>
  );