import "./globals.css";

export const metadata = {
  title: "WhiteCoatAs - Your Gateway to Global Medical Education",
  description:
    "Trusted partner for affordable, quality MBBS abroad. Expert guidance for medical education in Russia, Georgia, Kazakhstan, and more. Start your doctor journey today!",
  keywords:
    "MBBS abroad, medical education, study medicine abroad, MBBS in Russia, MBBS in Georgia, medical university, WhiteCoatAs",
  authors: [{ name: "WhiteCoatAs" }],
  creator: "WhiteCoatAs",
  publisher: "WhiteCoatAs",
  robots: "index, follow",
  openGraph: {
    title: "WhiteCoatAs - Your Gateway to Global Medical Education",
    description:
      "Trusted partner for affordable, quality MBBS abroad. Expert guidance for medical education worldwide.",
    url: "https://whitecoatas.com",
    siteName: "WhiteCoatAs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhiteCoatAs - Your Gateway to Global Medical Education",
    description:
      "Trusted partner for affordable, quality MBBS abroad. Expert guidance for medical education worldwide.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Varela Round', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
