import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default function UpcomingWebinars() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold dark:text-white py-10">
          Upcoming Webinars
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      <div className="flex justify-center mt-10 pb-10">
        <Button
          borderRadius="3.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="text-black dark:text-white">
            <Link href="/courses">View All Courses</Link>
          </div>
        </Button>
      </div>
    </>
  );
}
