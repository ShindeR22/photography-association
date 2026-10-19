import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IPPA | भारतीय व्यावसायिक छायाचित्रकार संघटना",
  description: "भारतातील छायाचित्रकारांना एकत्र आणणारे, अनुभव वाटून घेणारे आणि प्रत्येक फ्रेममधून नवी दृष्टी घडवणारे व्यासपीठ.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
