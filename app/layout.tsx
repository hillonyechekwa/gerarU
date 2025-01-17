import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
// import Footer from ""
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gerar University Of Medical Sciences",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col`}
      >
        <Nav />
        <main className="flex-1 min-h-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
