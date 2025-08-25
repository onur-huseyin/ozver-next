import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler - Ozver",
  description: "Yüksek kaliteli pompa sistemleri ve endüstriyel çözümler. Ozver pompa ürünlerini keşfedin.",
  keywords: ["pompa", "endüstriyel", "ozver", "3d model", "teknik çizim"],
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
