import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saumyakumar.dev"),
  title: "Saumya Kumar | Cloud & SRE",
  description:
    "Cloud & SRE focused on AWS, Terraform, Docker, Kubernetes, CI/CD, cloud infrastructure, and reliability engineering.",
  keywords: [
    "Cloud Engineer",
    "DevOps Engineer",
    "SRE",
    "AWS",
    "Azure",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "CloudWatch",
    "Infrastructure as Code",
    "Saumya Kumar",
  ],
  authors: [{ name: "Saumya Kumar" }],
  creator: "Saumya Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saumyakumar.dev",
    title: "Saumya Kumar | Cloud & SRE",
    description:
      "Cloud & SRE focused on AWS, Terraform, Docker, Kubernetes, CI/CD, cloud infrastructure, and reliability engineering.",
    siteName: "Saumya Kumar Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Saumya Kumar — Cloud & SRE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saumya Kumar | Cloud & SRE",
    description:
      "Cloud & SRE focused on AWS, Terraform, Docker, Kubernetes, CI/CD, cloud infrastructure, and reliability engineering.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
