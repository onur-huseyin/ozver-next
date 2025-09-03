"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { getBlogs } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Blog interface
interface Blog {
  id: string;
  title: string;
  content: string;
  published_at: string;
  image_url: string;
  image_path: string;
  created_at: string;
}

const BlogCard = ({
  blog,
}: {
  blog: Blog;
}) => {
  const router = useRouter();

  // Tarih formatını düzenle
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleClick = () => {
    router.push(`/blog/${blog.id}`);
  };

  return (
    <figure
      onClick={handleClick}
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-200",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] hover:scale-105",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-xl w-full h-32 object-cover"
          alt={blog.title}
          src={blog.image_url}
          width={256}
          height={128}
          unoptimized
        />
      </div>
      <h2 className="text-sm bg-blue-300 text-start text-blue-800 mt-2 w-fit px-2 py-1 rounded-lg font-bold">
        {formatDate(blog.published_at)}
      </h2>
      <h3 className="mt-2 text-sm font-semibold text-start text-gray-800 dark:text-gray-200 line-clamp-2">
        {blog.title}
      </h3>
      <blockquote className="mt-2 text-sm text-start text-[#828282] line-clamp-3">
        {blog.content}
      </blockquote>
    </figure>
  );
};

export function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from Supabase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogs();
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="flex space-x-4">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="w-64 h-48 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  // Show empty state
  if (blogs.length === 0) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <p className="text-gray-400">Blog yazısı bulunamadı</p>
      </div>
    );
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
