import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { CompareProvider } from "@/components/compare/CompareProvider";
import { CompareFloatingBar } from "@/components/compare/CompareFloatingBar";

export const metadata: Metadata = {
  title: "SUV 구매 가이드 2026",
  description:
    "7천만원 예산으로 1~2인 가구에 맞는 SUV 10대를 비교하세요. 전기차 보조금·세제혜택 자동 계산 포함.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CompareProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CompareFloatingBar />
        </CompareProvider>
      </body>
    </html>
  );
}
