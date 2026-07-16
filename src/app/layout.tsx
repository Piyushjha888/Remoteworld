import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RemoteWard | Healthcare, held together.",
  description: "Stay connected to your care team and family. RemoteWard brings peace of mind, routine management, and instant support right to your fingertips—designed simply, for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
    >
      <body className="font-sans antialiased text-ink text-lg leading-relaxed selection:bg-brand selection:text-white min-h-full flex flex-col">
        {children}
        {/* Lord Icon animated icon library */}
        <Script
          src="https://cdn.lordicon.com/lordicon.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
