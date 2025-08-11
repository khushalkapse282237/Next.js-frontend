"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import courseData from "@/data/music_courses.json";
import { Button } from "./ui/moving-border";
import { p } from "motion/react-client";

interface Course {
  // this is way to defined the type of the data
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
export default function Card() {
  const data: Course[] = courseData.courses.filter((i: Course) => i.isFeatured);
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Featured Courses</h2>
          <p className="text-gray-400 py-2">Learned With The Best</p>
        </div>
      </div>
      <div className="mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-3 gap-8 justify-items-center"
        >
          {data.map((i: Course) => {
            return (
              <BackgroundGradient key={i.id} className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {i.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {i.description}
                  </p>
                  <Link
                    href={`/courses/${i.slug}`}
                    className="text-black dark:text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          borderRadius="3.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="text-black dark:text-white">
            <Link href="/courses">View All Courses</Link>
          </div>
        </Button>
      </div>
    </div>
  );
}
