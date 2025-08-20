import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    body: "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "/fuar1.webp",
  },
  {
    body: "I don't know what to say. I'm speechless. This is amazing. I've never seen anything like this before. It's amazing. I love it.",
    img: "/fuar2.jpg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "/fuar3.jpg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "/fuar4.jpg",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "/fuar1.webp",
  },
  {
    body: "I'm at a loss for words. This is amazing. I love it. I've never seen anything like this before. It's amazing. I love it.",
    img: "/fuar3.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  body,
}: {
  img: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Next.js Image component for optimized images */}
        {/* If not using Next.js, fallback to <img /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rounded-xl w-full h-32 object-cover"
          alt="User avatar"
          src={img}
          loading="lazy"
        />
      </div>
      <h2 className="text-sm bg-blue-300  text-start text-blue-800 mt-2 w-fit px-2 py-1 rounded-lg font-bold">Fuar 2025</h2>
      <blockquote className="mt-2 text-sm text-start text-[#828282]">{body}</blockquote>
    </figure>
  );
};

export function Blogs() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={`first-row-${idx}-${review.img}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={`second-row-${idx}-${review.img}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
