"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import {
      Navbar,
      NavBody,
      NavItems,
      MobileNav,
      MobileNavHeader,
      MobileNavMenu,
      MobileNavToggle,
      NavbarLogo,
      NavbarButton,
    } from "@/components/ui/resizable-navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Badge } from "@/components/ui/badge";

import { 
  IconAward, 
  IconUsers, 
  IconGlobe,
  IconTools,
  IconTarget,
  IconHeart,
  IconShield
} from "@tabler/icons-react";
import { AboutTime } from "@/components/ui/about-time";

const navItems = [
  { name: "Ana Sayfa", link: "/" },
  { name: "Hakkımızda", link: "/about" },
  { name: "Ürünler", link: "/products" },
  { name: "İletişim", link: "/contact" },
];

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { label: "Yıllık Deneyim", value: "40+", icon: IconAward },
    { label: "Müşteri Sayısı", value: "500+", icon: IconUsers },
    { label: "Ülke Sayısı", value: "25+", icon: IconGlobe },
    { label: "Proje Tamamlandı", value: "1000+", icon: IconTarget },
  ];

  const values = [
    {
      icon: IconHeart,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak, onlara özel çözümler sunuyoruz."
    },
    {
      icon: IconShield,
      title: "Kalite Güvencesi",
      description: "Her projede en yüksek kalite standartlarını koruyarak, güvenilir hizmet sağlıyoruz."
    },
    {
      icon: IconTools,
      title: "Teknolojik Yenilik",
      description: "Sürekli gelişen teknolojileri takip ederek, en güncel çözümleri müşterilerimize sunuyoruz."
    },
    {
      icon: IconTarget,
      title: "Sürdürülebilirlik",
      description: "Çevre dostu ve sürdürülebilir teknolojiler geliştirerek geleceğe yatırım yapıyoruz."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Resizable Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center space-x-2">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                Ürünleri incele
              </span>
            </ShimmerButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <NavbarButton variant="secondary" href="#login">
                Giriş Yap
              </NavbarButton>
              <NavbarButton href="#signup">Kayıt Ol</NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            Hakkımızda
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6  text-[#2C308D]">
            Tarihçe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            1980 yılından bu yana tekstil makineleri sektöründe faaliyet gösteren Özver Mekatronik, 
            müşterilerine en kaliteli hizmeti sunmaya devam ediyor.
          </p>
        </motion.div>



        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex justify-center items-center mb-16"
        >
            <AboutTime />
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Değerlerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
                {/* Stats */}
                <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
