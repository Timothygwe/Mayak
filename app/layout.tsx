import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayak-podderzhki.ru"),
  title: { default: "Маяк поддержки — сообщество взаимопомощи при депрессии", template: "%s | Маяк поддержки" },
  description: "Бесплатные онлайн-группы взаимопомощи при депрессии, встречи в Gem Space и профессиональные программы психолога Лидии Гуринович.",
  keywords: ["анонимные депрессивные", "поддержка при депрессии", "группа взаимопомощи", "анонимная помощь", "сообщество депрессия", "Маяк поддержки"],
  alternates: { canonical: "/" },
  openGraph: { title: "Маяк поддержки", description: "Бесплатное сообщество взаимопомощи при депрессии. Мы держим свет включённым специально для вас.", type: "website", locale: "ru_RU", url: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
