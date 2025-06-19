import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
