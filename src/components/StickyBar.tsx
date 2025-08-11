"use client";
import courseData from "@/data/music_courses.json";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

interface content {
  title: string;
  description: string;
  isFeatured: boolean;
}

export default function StickyBar() {
  const data = courseData.courses.filter((i: content) => i.isFeatured);
  return (
    <div className="w-full ">
      <StickyScroll content={data} />
    </div>
  );
}
