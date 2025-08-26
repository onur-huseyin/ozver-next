"use client";

import { useState, Suspense, lazy } from "react";
import { WavyBackgroundDemo } from "@/components/ui/home-slider";
import { Comments } from "@/components/ui/comments";
import Image from "next/image";

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
import { Meteors } from "@/components/magicui/meteors";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Ripple } from "@/components/magicui/ripple";
import { Ripple2 } from "@/components/magicui/ripple2";

// Lazy load heavy components
const LazyFooter = lazy(() =>
  import("@/components/ui/footer").then((module) => ({
    default: module.Footer,
  }))
);
const LazyHomeWord = lazy(() =>
  import("@/components/ui/home-word").then((module) => ({
    default: module.HomeWord,
  }))
);
const LazyBlogs = lazy(() =>
  import("@/components/ui/blogs").then((module) => ({ default: module.Blogs }))
);

// Navbar verileri
const navItems = [
  { name: "Ana Sayfa", link: "/" },
  { name: "Hakkımızda", link: "/about" },
  { name: "Ürünler", link: "/products" },
  { name: "İletişim", link: "/contact" },
];
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
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
      <section className="container mx-auto px-4">
        <Suspense
          fallback={
            <div className="h-64 flex items-center justify-center">
              Yükleniyor...
            </div>
          }
        >
          <WavyBackgroundDemo />
        </Suspense>
      </section>
      {/* Apple Card Carousel Section */}
      <section className="lg:container w-full mx-auto lg:px-4 px-0 ">
        <div className="flex flex-col mt-12 lg:mt-0 lg:flex-row gap-4 w-full items-center justify-center ">
          <div className="relative py-32 lg:py-90 flex w-full flex-col items-center justify-center overflow-hidden bg-background">
            <p className="z-10 whitespace-pre-wrap text-center lg:text-5xl text-3xl font-medium tracking-tighter text-white ">
              Doğru renk
            </p>
            <Ripple />
          </div>
          <div className="relative py-32 lg:py-90  w-full flex-col items-center justify-center overflow-hidden bg-background">
            <p className="z-10 whitespace-pre-wrap text-center lg:text-5xl text-3xl font-medium tracking-tighter text-white">
              Fark yaratır
            </p>
            <Ripple2 />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-4 flex-col lg:flex-row flex items-center justify-center">
        <div className="relative  flex flex-col  w-full lg:w-1/2  items-start justify-start overflow-hidden">
        <p className="text-2xl  text-[#6B6B6B] font-normal inter-var text-start mb-4">Özver Boyama Pompası</p>
          <Image src="/factory2.png" alt="Özver Mekatronik" width={500} height={500} className="rounded-2xl w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 text-[#969696] text-2xl font-light ">
          <TextReveal>
            Özver Mekatronik 1980’li yıllardan günümüze gelen tecrübesine ve
            yapmış olduğu arge çalışmalarına dayanarak Tekstil Boya ve Terbiye
            sektörü için HT Kumaş Boyama, Atmosferik Boyama, İplik Boyama
            Makineleri ve İplik Boya ekipmanları imalatının ( Kilit, Taşıyıcı,
            Perfore) yanı sıra gıda, kimya, ilaç sanayi ve diğer sektörlerde de
            ihtiyaç duyulan paslanmaz ünitelerin proje, imalat ve montaj
            taleplerine de yanıt vermektedir.
          </TextReveal>
        </div>
      </section>
      <section className="pb-24 mt-12 lg:mt-0 container mx-auto px-4">
        <Comments />
        <Suspense
          fallback={
            <div className="h-32 flex items-center justify-center">
              Yükleniyor...
            </div>
          }
        >
          <LazyBlogs />
        </Suspense>
      </section>
      <Suspense
        fallback={
          <div className="h-32 flex items-center justify-center">
            Yükleniyor...
          </div>
        }
      >
        <LazyHomeWord />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-32 flex items-center justify-center">
            Yükleniyor...
          </div>
        }
      >
        <LazyFooter />
      </Suspense>

      <div className="fixed bottom-10 right-10 z-999">
        <button className="cursor-pointer bg-[#0F0F0F] shadow-2xl backdrop-blur-md rounded-full px-3 py-2 gap-2 flex items-center justify-center  border">
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
          <span className="text-white text-md">Konuşalım</span>
        </button>
      </div>
    </div>
  );
}
