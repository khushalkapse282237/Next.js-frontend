import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <h1 className="text-black dark:text-white mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p
          className="text-gray-800 dark:text-gray-300 mt-4 font-normal text-base md:text-lg
            test-neutral-300 max-w-lg mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cumque
          perspiciatis, dignissimos, delectus reiciendis nesciunt ad
          exercitationem ea rerum similique assumenda quia pariatur! Nesciunt
          doloribus provident quis, molestias quisquam veritatis. Harum
          explicabo hic illum ab placeat laudantium sed.{" "}
        </p>
        <Button
          borderRadius="3.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="text-black dark:text-white">
            <Link href="/courses">Explore Courses</Link>
          </div>
        </Button>
      </div>
    </div>
  );
}
