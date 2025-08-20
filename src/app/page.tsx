"use client";

import { useState, Suspense, lazy } from "react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { CarouselDemo } from "@/components/ui/home-slider";
import { Comments } from "@/components/ui/comments";

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

const Icons = {
  gitHub: () => (
    <svg
      fill="#FFFFFF"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      id="settings-alt"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <circle
        id="secondary"
        cx={12}
        cy={12}
        r={3}
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        id="primary"
        d="M19.29,9.39l1.9,1.9a1,1,0,0,1,0,1.42l-1.9,1.9a1,1,0,0,0-.29.7V18a1,1,0,0,1-1,1H15.31a1,1,0,0,0-.7.29l-1.9,1.9a1,1,0,0,1-1.42,0l-1.9-1.9a1,1,0,0,0-.7-.29H6a1,1,0,0,1-1-1V15.31a1,1,0,0,0-.29-.7l-1.9-1.9a1,1,0,0,1,0-1.42l1.9-1.9A1,1,0,0,0,5,8.69V6A1,1,0,0,1,6,5H8.69a1,1,0,0,0,.7-.29l1.9-1.9a1,1,0,0,1,1.42,0l1.9,1.9a1,1,0,0,0,.7.29H18a1,1,0,0,1,1,1V8.69A1,1,0,0,0,19.29,9.39Z"
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  ),
  notion: () => (
    <svg
      fill="#FFFFFF"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      id="settings-alt"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <circle
        id="secondary"
        cx={12}
        cy={12}
        r={3}
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        id="primary"
        d="M19.29,9.39l1.9,1.9a1,1,0,0,1,0,1.42l-1.9,1.9a1,1,0,0,0-.29.7V18a1,1,0,0,1-1,1H15.31a1,1,0,0,0-.7.29l-1.9,1.9a1,1,0,0,1-1.42,0l-1.9-1.9a1,1,0,0,0-.7-.29H6a1,1,0,0,1-1-1V15.31a1,1,0,0,0-.29-.7l-1.9-1.9a1,1,0,0,1,0-1.42l1.9-1.9A1,1,0,0,0,5,8.69V6A1,1,0,0,1,6,5H8.69a1,1,0,0,0,.7-.29l1.9-1.9a1,1,0,0,1,1.42,0l1.9,1.9a1,1,0,0,0,.7.29H18a1,1,0,0,1,1,1V8.69A1,1,0,0,0,19.29,9.39Z"
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  ),
  openai: () => (
    <svg
      fill="#FFFFFF"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      id="settings-alt-2"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color"
    >
      <path
        id="primary"
        d="M20.5,20.5h0a2,2,0,0,1-2.83,0l-5.21-5.21A6.59,6.59,0,0,1,8,15.84a6.5,6.5,0,0,1-5-5.76,6.42,6.42,0,0,1,.65-3.47L8,11l2.5-.5L11,8,6.61,3.68A6.42,6.42,0,0,1,10.08,3a6.5,6.5,0,0,1,5.76,5,6.59,6.59,0,0,1-.55,4.42l5.21,5.21A2,2,0,0,1,20.5,20.5Z"
        style={{
          fill: "none",
          stroke: "rgb(255, 255, 255)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      ></path>
    </svg>
  ),
  googleDrive: () => (
    <svg
      fill="#FFFFFF"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      id="Layer_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path d="M79.898,44.439c-1.405,0-2.548,1.144-2.548,2.549v24.179c0,1.405,1.143,2.549,2.548,2.549s2.549-1.144,2.549-2.549V46.988   C82.447,45.583,81.303,44.439,79.898,44.439z M80.447,71.167c0,0.303-0.246,0.549-0.549,0.549c-0.302,0-0.548-0.246-0.548-0.549   V46.988c0-0.303,0.246-0.549,0.548-0.549c0.303,0,0.549,0.246,0.549,0.549V71.167z" />

        <path d="M86.16,73.837V44.322c4.161-2.282,6.72-6.57,6.72-11.338c0-4.236-2.09-8.211-5.591-10.632   c-0.306-0.212-0.704-0.235-1.033-0.063c-0.329,0.173-0.536,0.514-0.536,0.886v8.38l-4.78,3.468V23.175   c0-0.005-0.003-0.009-0.003-0.015V5.016c0-0.553-0.448-1-1-1H8.123c-0.552,0-1,0.447-1,1V23.16c0,0.005-0.003,0.009-0.003,0.015   v71.81c0,0.553,0.448,1,1,1h65.03h6.79c0.552,0,1-0.447,1-1V83.136l4.78,3.468v8.38c0,0.372,0.206,0.713,0.536,0.886   c0.146,0.076,0.305,0.114,0.464,0.114c0.2,0,0.398-0.06,0.568-0.178c3.501-2.419,5.591-6.397,5.591-10.642   C92.88,80.403,90.321,76.119,86.16,73.837z M74.15,24.175h4.79v10.85l-4.79-3.471V24.175z M9.123,6.016h69.814v16.155H9.123V6.016z    M9.12,93.984v-69.81h61.352c-0.047,0.051-0.088,0.106-0.134,0.158c-0.098,0.108-0.188,0.221-0.282,0.333   c-0.215,0.256-0.421,0.517-0.615,0.788c-0.091,0.127-0.182,0.254-0.269,0.385c-0.199,0.299-0.383,0.607-0.556,0.921   c-0.054,0.098-0.115,0.193-0.166,0.292c-0.214,0.413-0.405,0.838-0.574,1.272c-0.041,0.106-0.073,0.216-0.111,0.323   c-0.121,0.337-0.229,0.679-0.322,1.026c-0.04,0.151-0.076,0.303-0.11,0.456c-0.074,0.327-0.135,0.657-0.183,0.991   c-0.021,0.144-0.046,0.288-0.062,0.433C67.035,32.026,67,32.503,67,32.984c0,4.77,2.555,9.059,6.71,11.338v29.515   C69.555,76.116,67,80.401,67,85.165c0,0.482,0.035,0.96,0.088,1.433c0.016,0.145,0.041,0.288,0.062,0.433   c0.049,0.335,0.109,0.666,0.184,0.994c0.035,0.153,0.07,0.305,0.11,0.456c0.093,0.349,0.202,0.693,0.323,1.032   c0.038,0.106,0.069,0.214,0.109,0.319c0.169,0.436,0.36,0.861,0.574,1.275c0.051,0.098,0.11,0.191,0.164,0.288   c0.174,0.316,0.359,0.626,0.559,0.927c0.086,0.129,0.176,0.255,0.266,0.381c0.196,0.272,0.402,0.536,0.619,0.793   c0.093,0.11,0.182,0.221,0.278,0.328c0.047,0.052,0.088,0.108,0.135,0.16H9.12z M78.94,93.984h-4.79v-7.379l4.79-3.471V93.984z    M87.72,92.846v-6.751c0-0.32-0.153-0.621-0.413-0.81l-6.78-4.92c-0.019-0.014-0.042-0.019-0.061-0.031   c-0.025-0.016-0.045-0.036-0.071-0.05c-0.027-0.014-0.057-0.018-0.086-0.029c-0.039-0.016-0.078-0.03-0.119-0.041   c-0.055-0.014-0.11-0.021-0.166-0.026c-0.028-0.002-0.056-0.013-0.084-0.013c-0.013,0-0.026,0.006-0.039,0.006   c-0.06,0.002-0.118,0.015-0.176,0.028c-0.036,0.008-0.073,0.011-0.109,0.023c-0.092,0.032-0.182,0.074-0.263,0.133l-6.79,4.92   c-0.259,0.188-0.413,0.489-0.413,0.81v6.722c-0.081-0.083-0.167-0.161-0.245-0.246c-0.098-0.106-0.195-0.212-0.288-0.322   c-0.185-0.217-0.358-0.442-0.525-0.673c-0.07-0.096-0.145-0.189-0.211-0.288c-0.224-0.331-0.432-0.671-0.618-1.024   c-0.026-0.049-0.046-0.102-0.071-0.151c-0.156-0.307-0.298-0.622-0.425-0.943c-0.048-0.123-0.089-0.248-0.133-0.372   c-0.091-0.259-0.174-0.52-0.246-0.786c-0.037-0.138-0.072-0.276-0.104-0.415c-0.062-0.273-0.112-0.55-0.153-0.829   c-0.019-0.126-0.042-0.251-0.056-0.378C69.029,85.985,69,85.577,69,85.165c0-0.526,0.037-1.044,0.109-1.553   c0.503-3.563,2.722-6.647,6.04-8.269c0.343-0.168,0.561-0.517,0.561-0.898V43.715c0-0.382-0.218-0.73-0.561-0.898   c-3.318-1.622-5.537-4.709-6.04-8.277C69.037,34.03,69,33.511,69,32.984c0-0.411,0.029-0.818,0.075-1.222   c0.014-0.126,0.037-0.251,0.056-0.376c0.041-0.279,0.091-0.556,0.154-0.83c0.032-0.138,0.066-0.275,0.103-0.412   c0.072-0.267,0.156-0.53,0.247-0.79c0.043-0.122,0.083-0.246,0.131-0.367c0.129-0.326,0.273-0.645,0.432-0.957   c0.023-0.044,0.04-0.091,0.064-0.135c0.187-0.354,0.396-0.696,0.621-1.029c0.064-0.095,0.136-0.184,0.203-0.276   c0.169-0.234,0.346-0.463,0.534-0.684c0.091-0.107,0.186-0.211,0.282-0.315c0.079-0.086,0.166-0.166,0.249-0.25v6.722   c0,0.32,0.154,0.622,0.413,0.81l6.79,4.92c0.087,0.063,0.182,0.111,0.281,0.143c0.085,0.027,0.173,0.037,0.261,0.041   c0.015,0.001,0.029,0.007,0.045,0.007c0,0,0,0,0,0c0.139,0,0.273-0.039,0.402-0.097c0.017-0.007,0.036-0.004,0.052-0.013   c0.026-0.013,0.047-0.034,0.071-0.05c0.02-0.012,0.042-0.017,0.061-0.031l6.78-4.92c0.259-0.188,0.413-0.489,0.413-0.81v-6.751   c2.005,2.029,3.16,4.777,3.16,7.671c0,4.208-2.36,7.976-6.159,9.832c-0.343,0.168-0.561,0.517-0.561,0.898v30.729   c0,0.382,0.218,0.73,0.561,0.898c3.799,1.856,6.159,5.62,6.159,9.822C90.88,88.063,89.726,90.816,87.72,92.846z" />

        <path d="M44.03,32.239c-14.799,0-26.838,12.04-26.838,26.839s12.04,26.838,26.838,26.838s26.838-12.039,26.838-26.838   S58.829,32.239,44.03,32.239z M44.03,83.916c-13.696,0-24.838-11.143-24.838-24.838c0-13.696,11.143-24.839,24.838-24.839   s24.838,11.143,24.838,24.839C68.868,72.773,57.726,83.916,44.03,83.916z" />

        <path d="M27.326,54.887c-0.552,0-1,0.447-1,1v6.382c0,0.553,0.448,1,1,1s1-0.447,1-1v-6.382   C28.326,55.334,27.878,54.887,27.326,54.887z" />

        <path d="M20.174,9.189c-2.704,0-4.904,2.199-4.904,4.903s2.2,4.903,4.904,4.903s4.904-2.199,4.904-4.903S22.878,9.189,20.174,9.189   z M20.174,16.996c-1.601,0-2.904-1.303-2.904-2.903s1.303-2.903,2.904-2.903s2.904,1.303,2.904,2.903S21.775,16.996,20.174,16.996z   " />

        <path d="M36.078,9.189c-2.704,0-4.904,2.199-4.904,4.903s2.2,4.903,4.904,4.903c2.704,0,4.903-2.199,4.903-4.903   S38.782,9.189,36.078,9.189z M36.078,16.996c-1.601,0-2.904-1.303-2.904-2.903s1.303-2.903,2.904-2.903s2.903,1.303,2.903,2.903   S37.679,16.996,36.078,16.996z" />

        <path d="M51.982,9.189c-2.704,0-4.903,2.199-4.903,4.903s2.2,4.903,4.903,4.903c2.704,0,4.904-2.199,4.904-4.903   S54.686,9.189,51.982,9.189z M51.982,16.996c-1.601,0-2.903-1.303-2.903-2.903s1.302-2.903,2.903-2.903s2.904,1.303,2.904,2.903   S53.583,16.996,51.982,16.996z" />

        <path d="M67.886,9.189c-2.704,0-4.904,2.199-4.904,4.903s2.2,4.903,4.904,4.903c2.704,0,4.903-2.199,4.903-4.903   S70.59,9.189,67.886,9.189z M67.886,16.996c-1.601,0-2.904-1.303-2.904-2.903s1.303-2.903,2.904-2.903s2.903,1.303,2.903,2.903   S69.487,16.996,67.886,16.996z" />

        <path d="M44.03,36.482c-12.459,0-22.595,10.137-22.595,22.596S31.571,81.673,44.03,81.673s22.595-10.136,22.595-22.595   S56.489,36.482,44.03,36.482z M44.03,79.673c-11.356,0-20.595-9.238-20.595-20.595s9.239-20.596,20.595-20.596   c11.356,0,20.595,9.239,20.595,20.596S55.386,79.673,44.03,79.673z" />
      </g>
    </svg>
  ),
  whatsapp: () => (
    <svg
      fill="#FFFFFF"
      width="100px"
      height="100px"
      viewBox="0 0 512 512"
      id="_61_Screen"
      data-name="61 Screen"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Path_79"
        data-name="Path 79"
        d="M480,0H32A31.991,31.991,0,0,0,0,32V384a31.991,31.991,0,0,0,32,32H224v32H128a31.991,31.991,0,0,0-32,32v32H416V480a31.991,31.991,0,0,0-32-32H288V416H480a31.991,31.991,0,0,0,32-32V32A31.991,31.991,0,0,0,480,0ZM448,352H64V64H448Z"
        fillRule="evenodd"
      />
    </svg>
  ),
};

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
      <section
        id="home"
        className="container mx-auto px-4 py-4 lg:py-20 lg:mt-12"
      >
        <div className="relative flex h-[100px] mt-16 lg:mt-0 w-full flex-col items-center justify-center overflow-hidden">
          <Meteors number={30} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center mt-8 lg:mt-0 text-3xl lg:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Tekstil ve Boyama Makineleri
          </span>
        </div>
      </section>
      <section className="container mx-auto px-4">
        <Suspense
          fallback={
            <div className="h-64 flex items-center justify-center">
              Yükleniyor...
            </div>
          }
        >
          <CarouselDemo />
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
        <div className="relative  flex  h-[500px] w-full lg:w-1/2  items-center justify-center overflow-hidden">
          <OrbitingCircles iconSize={40}>
            <Icons.whatsapp />
            <Icons.notion />
            <Icons.openai />
            <Icons.googleDrive />
            <Icons.whatsapp />
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
            <Icons.whatsapp />
            <Icons.notion />
            <Icons.openai />
            <Icons.googleDrive />
          </OrbitingCircles>
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
