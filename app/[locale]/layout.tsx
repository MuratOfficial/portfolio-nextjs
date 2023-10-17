import "./globals.css";

import { Inter } from "next/font/google";
import "@fontsource/poppins";
import Navbar from "@/components/ui/navbar";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Favicon from "@/public/favicon.ico";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "kk" }, { locale: "ru" }];
}

export const metadata: Metadata = {
  title: "toimetm Portfolio",
  description: "Toimet Murat's Portfolio",
  icons: [{ rel: "icon", url: Favicon.src }],
};

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="overflow-x-hidden">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
