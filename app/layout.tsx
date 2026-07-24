import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Sin esto las canonicas y las og:image se emiten relativas, y los
  // rastreadores no pueden resolverlas.
  metadataBase: new URL("https://www.360protectivesolutions.com"),
  // Plantilla: cada pagina pone su propio titulo y este sufijo se anyade solo.
  title: {
    default: "Executive Protection NYC | Worldwide Security Options",
    template: "%s",
  },
  description:
    "Veteran-owned executive protection, corporate and residential security across New York City.",
  openGraph: {
    type: "website",
    siteName: "Worldwide Security Options",
    locale: "en_US",
    images: [{ url: "/images/wso32.webp", width: 688, height: 200 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

import { ModalProvider } from "@/context/ModalContext";
import { ContactModal } from "@/components/ContactModal";
import { Preloader } from "@/components/Preloader";
import { StructuredData } from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <StructuredData />
        <Preloader />
        <ModalProvider>
          {children}
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
