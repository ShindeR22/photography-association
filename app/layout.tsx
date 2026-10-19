import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pimpri-Chinchwad Photographers Association",
  description: "A community bringing photographers in Pimpri-Chinchwad together and advancing the art of photography.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
