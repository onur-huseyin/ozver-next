"use client";

import { WavyBackgroundDemo } from "@/components/ui/home-slider";
import { Comments } from "@/components/ui/comments";
import Image from "next/image";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import MobileMenu from "@/components/ui/mobile-menu";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Ripple } from "@/components/magicui/ripple";
import { Ripple2 } from "@/components/magicui/ripple2";
import { Footer } from "@/components/ui/footer";
import { HomeWord } from "@/components/ui/home-word";
import { Blogs } from "@/components/ui/blogs";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";
export default function Home() {
  const { t } = useLanguage();

  // Navbar verileri
  const navItems = [
    { name: t('nav.home'), link: "/" },
    { name: t('nav.about'), link: "/about" },
    { name: t('nav.products'), link: "/products" },
    { name: t('nav.contact'), link: "/contact" },
  ];

  return (
    <div className="min-h-screen">
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
      <section className="container mx-auto px-4 pt-20 md:pt-0">
        <WavyBackgroundDemo />
      </section>
      {/* Apple Card Carousel Section */}
      <section className="lg:container w-full mx-auto lg:px-4 px-0 ">
        <div className="flex flex-col mt-12 lg:mt-0 lg:flex-row gap-4 w-full items-center justify-center ">
          <div className="relative py-32 lg:py-90 flex w-full flex-col items-center justify-center overflow-hidden bg-background">
            <p className="z-10 whitespace-pre-wrap text-center lg:text-7xl text-3xl font-medium tracking-tighter text-white ">
              {t('home.ripple1')}
            </p>
            <Ripple />
          </div>
          <div className="relative py-32 lg:py-90  w-full flex-col items-center justify-center overflow-hidden bg-background">
            <p className="z-10 whitespace-pre-wrap text-center lg:text-7xl text-3xl font-medium tracking-tighter text-white">
              {t('home.ripple2')}
            </p>
            <Ripple2 />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4 flex-col lg:flex-row flex items-center justify-center">
        <div className="relative  flex flex-col  w-full lg:w-1/2  items-center lg:items-start justify-start overflow-hidden">
          <Image src="/factory2.png" alt="Özver Mekatronik" width={400} height={400} className="rounded-2xl w-[85%] h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 text-[#969696] text-3xl font-light pt-4 lg:pt-0">
          <TextReveal className="lg:block hidden">
            {t('home.about.description')}
          </TextReveal>
          <p className="text-[#969696] w-full text-xl block lg:hidden">
            {t('home.about.description')}
          </p>
        </div>
      </section>
      <section className="pb-24 mt-12 lg:mt-0 container mx-auto px-4">
        <Comments />
        <Blogs />
      </section>
      <HomeWord />
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
