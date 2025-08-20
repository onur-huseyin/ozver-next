import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim - Özver Mekatronik",
  description: "Özver Mekatronik ile iletişime geçin. Tekstil boya ve terbiye makineleri için profesyonel çözümler.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
