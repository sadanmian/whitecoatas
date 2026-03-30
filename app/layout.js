import { Outfit, Crimson_Pro, DM_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  weight: ["400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "WhiteCoatAs — Your Gateway to Global Medical Education",
    template: "%s | WhiteCoatAs",
  },
  description:
    "Trusted partner for affordable, quality MBBS abroad. Expert guidance for medical education in Russia, Georgia, Kazakhstan, and more. 5,000+ students placed.",
  keywords:
    "MBBS abroad, medical education, study medicine abroad, MBBS in Russia, MBBS in Georgia, medical university, WhiteCoatAs, NMC approved",
  authors: [{ name: "WhiteCoatAs" }],
  creator: "WhiteCoatAs",
  publisher: "WhiteCoatAs",
  robots: "index, follow",
  openGraph: {
    title: "WhiteCoatAs — Your Gateway to Global Medical Education",
    description:
      "Trusted partner for affordable, quality MBBS abroad. Expert guidance for medical education worldwide. 5,000+ students placed.",
    url: "https://whitecoatas.com",
    siteName: "WhiteCoatAs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteCoatAs — Your Gateway to Global Medical Education",
    description:
      "Trusted partner for affordable, quality MBBS abroad. Expert guidance for medical education worldwide.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d9488" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1f36" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${crimsonPro.variable} ${dmMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches) || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
