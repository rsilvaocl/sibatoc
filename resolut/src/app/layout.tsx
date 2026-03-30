import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resolut | Soluciones Reales para Problemas Reales",
  description: "Encuentra soluciones estructuradas a problemas cotidianos de hogar, tecnología y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen antialiased`}>
        <Header />
        <main className="pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
