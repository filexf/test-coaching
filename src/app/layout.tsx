import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitCoach Pro - Coach Sportif Personnalisé | Transformation Physique",
  description: "Coach sportif professionnel spécialisé dans la perte de poids, prise de muscle et rééquilibrage alimentaire. Programmes personnalisés et suivi individuel pour atteindre vos objectifs fitness.",
  keywords: "coach sportif, personal trainer, perte de poids, prise de muscle, fitness, musculation, nutrition, rééquilibrage alimentaire, transformation physique, coaching en ligne",
  authors: [{ name: "FitCoach Pro" }],
  creator: "FitCoach Pro",
  publisher: "FitCoach Pro",
  openGraph: {
    title: "FitCoach Pro - Votre Coach Sportif Personnalisé",
    description: "Transformez votre corps avec nos programmes de coaching sportif sur mesure. Perte de poids, prise de muscle, nutrition - Résultats garantis !",
    url: "https://fitcoachpro.fr",
    siteName: "FitCoach Pro",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Coach sportif professionnel - FitCoach Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitCoach Pro - Coach Sportif Personnalisé",
    description: "Programmes de coaching sportif sur mesure pour votre transformation physique. Perte de poids, prise de muscle, nutrition.",
    images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Health & Fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
