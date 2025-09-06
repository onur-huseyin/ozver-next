"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogs } from "@/lib/supabaseClient";
import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { useLanguage } from "@/contexts/LanguageContext";

interface Blog {
  id: string;
  title: string;
  content: string;
  published_at: string;
  image_url: string;
  image_path: string;
  created_at: string;
}

// Navbar verileri - bu artık component içinde tanımlanacak

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  // Navbar verileri
  const navItems = [
    { name: t('nav.home'), link: "/" },
    { name: t('nav.about'), link: "/about" },
    { name: t('nav.products'), link: "/products" },
    { name: t('nav.contact'), link: "/contact" },
  ];

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await getBlogs();
        const foundBlog = blogs.find(b => b.id === params.id);
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog bulunamadı");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Blog yüklenirken bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        {/* Desktop Navbar */}
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ShimmerButton 
                className="shadow-2xl transition-all duration-300 ease-in-out"
                style={{ 
                  opacity: 'calc(1 - var(--navbar-visible, 0))',
                  transform: 'scale(calc(1 - var(--navbar-visible, 0)))',
                }}
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                  {t('nav.quality')}
                </span>
              </ShimmerButton>
            </div>
          </NavBody>
        </Navbar>

        {/* Mobile Menu */}
        <MobileMenu />

        <div className="pt-32 md:pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Loading skeleton */}
              <div className="animate-pulse">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
                <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen">
        {/* Desktop Navbar */}
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ShimmerButton 
                className="shadow-2xl transition-all duration-300 ease-in-out"
                style={{ 
                  opacity: 'calc(1 - var(--navbar-visible, 0))',
                  transform: 'scale(calc(1 - var(--navbar-visible, 0)))',
                }}
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                  {t('nav.quality')}
                </span>
              </ShimmerButton>
            </div>
          </NavBody>
        </Navbar>

        {/* Mobile Menu */}
        <MobileMenu />

        <div className="pt-32 md:pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                {error || t('blog.empty')}
              </h1>
              <button
                onClick={() => router.push("/")}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('blog.backToHome')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Desktop Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center space-x-2">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-md">
                Kalite ve Güven
              </span>
            </ShimmerButton>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Menu */}
      <MobileMenu />

      <div className="pt-32 md:pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('blog.back')}
            </button>
            <h2 className="text-2xl lg:text-6xl font-bold pb-4 text-[#858585]  mb-4">{t('blog.detail.title')}</h2>
            {/* Back button */}


            {/* Blog content */}
            <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Blog image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={blog.image_url}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Blog header */}
              <div className="p-6 md:p-8 bg-[#272727]">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {blog.title}
                </h1>

                {/* Meta information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(blog.published_at)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {formatTime(blog.published_at)}
                  </div>
                </div>

                {/* Blog content */}
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {blog.content}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
