import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayak-podderzhki.ru"),
  title: { default: "Маяк поддержки — сообщество взаимопомощи при депрессии", template: "%s | Маяк поддержки" },
  description: "Анонимное сообщество людей, которые делятся опытом, силой и надеждой в борьбе с депрессией. Бережная поддержка без осуждения.",
  keywords: ["анонимные депрессивные", "поддержка при депрессии", "группа взаимопомощи", "анонимная помощь", "сообщество депрессия", "Маяк поддержки"],
  alternates: { canonical: "/" },
  openGraph: { title: "Маяк поддержки", description: "Когда темно — мы рядом. Анонимное сообщество взаимопомощи при депрессии.", type: "website", locale: "ru_RU", url: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
