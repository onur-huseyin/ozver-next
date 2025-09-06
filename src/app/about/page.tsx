"use client";
import { motion } from "framer-motion";
import {
      Navbar,
      NavBody,
      NavItems,
      NavbarLogo,
    } from "@/components/ui/resizable-navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/ui/language-selector";

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
import { Comments } from "@/components/ui/comments";
import MobileMenu from "@/components/ui/mobile-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { name: "nav.home", link: "/" },
  { name: "nav.about", link: "/about" },
  { name: "nav.products", link: "/products" },
  { name: "nav.contact", link: "/contact" },
];

export default function AboutPage() {
  const { t } = useLanguage();
  const stats = [
    { label: t('about.stats.experience'), value: t('about.stats.experience.value'), icon: IconAward },
    { label: t('about.stats.customers'), value: t('about.stats.customers.value'), icon: IconUsers },
    { label: t('about.stats.countries'), value: t('about.stats.countries.value'), icon: IconGlobe },
    { label: t('about.stats.projects'), value: t('about.stats.projects.value'), icon: IconTarget },
  ];

  const values = [
    {
      icon: IconHeart,
      title: t('about.values.customer.title'),
      description: t('about.values.customer.description')
    },
    {
      icon: IconShield,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: IconTools,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: IconTarget,
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Resizable Navbar */}
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
        {/* Animated Lines */}
        <div className="absolute top-20 left-10 w-72 h-72 border border-gray-600/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 border border-gray-700/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 border border-gray-800/30 rounded-full animate-pulse delay-500" />

        {/* Floating Dots */}
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
        <div className="absolute top-64 left-1/3 w-1 h-1 bg-gray-600 rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-32 right-1/4 w-1.5 h-1.5 bg-gray-700 rounded-full animate-bounce delay-700" />
      </div>

      {/* Desktop Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                {t('nav.quality')}
              </span>
            </ShimmerButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Menu */}
      <MobileMenu />  
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            {t('about.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6  text-[#2C308D]">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
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
          <Comments />
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.values.title')}</h2>
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
          <div className="fixed bottom-10 right-10 z-999">
          <a 
          href="https://wa.me/905558596555" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer bg-[#0F0F0F] shadow-2xl backdrop-blur-md rounded-full px-3 py-2 gap-2 flex items-center justify-center border hover:bg-[#1a1a1a] transition-colors"
        >
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Color-"
                transform="translate(-700.000000, -360.000000)"
                fill="#67C15E"
              >
                <path
                  d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                  id="Whatsapp"
                ></path>
              </g>
            </g>
          </svg>
          <span className="text-white text-md">{t('home.whatsapp')}</span>
        </a>
      </div>
    </div>
  );
}
