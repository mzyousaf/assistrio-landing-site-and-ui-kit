import './globals.css';
import { Header, Footer, CookieBanner, LenisProvider } from '@/components/layout';
import ConditionalAnalytics from '@/components/layout/ConditionalAnalytics';
import StructuredData from '@/components/StructuredData';
import FAQSchema from '@/components/FAQSchema';
import ReadingProgress from '@/components/ReadingProgress';
import { FloatingButtonsDemo } from '@/components/FloatingButtonsDemo';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteConfig } from '@/config/site';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'AI Assistant — Smart Support That Never Sleeps',
  description: 'Elevate your customer support with AI-powered assistance. Get instant, intelligent responses 24/7, reduce support costs by 60%, and delight customers with AI that understands your brand.',
  keywords: ['AI customer support', 'chatbot', 'customer service', 'automation', 'AI assistant'],
  authors: [{ name: 'AI Assistant Team' }],
  creator: 'AI Assistant',
  publisher: 'AI Assistant',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'AI Assistant — Smart Support That Never Sleeps',
    description: 'Elevate your customer support with AI-powered assistance. Get instant, intelligent responses 24/7, reduce support costs by 60%, and delight customers with AI that understands your brand.',
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AI Assistant - Smart Customer Support',
      },
    ],
  },
  x: {
    card: 'summary_large_image',
    title: 'AI Assistant — Smart Support That Never Sleeps',
    description: 'Elevate your customer support with AI-powered assistance. Get instant, intelligent responses 24/7, reduce support costs by 60%, and delight customers with AI that understands your brand.',
    images: [`${siteConfig.url}/og-image.png`],
    creator: '@yourcompany',
  },
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/img/favicon/32-removebg-preview.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicon/48-removebg-preview.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/img/favicon/32-removebg-preview.png',
    apple: '/img/favicon/180-removebg-preview.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Created with Assistrio - Professional themes, UI kits, and prebuilt landing pages */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0EA5E9" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  // Default to light mode always, only use saved preference
                  const theme = savedTheme || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <StructuredData />
        <FAQSchema />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        <ThemeProvider>
          <LenisProvider>
            <ReadingProgress />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CookieBanner />
            <FloatingButtonsDemo />
            <ConditionalAnalytics />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
