import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <div className="flex-center min-h-screen bg-cover bg-center p-8" style={{ backgroundImage: "url(/home.avif)" }}>
      <div className="text-end">
        <h1 className="text-7xl sm:text-9xl lg:text-[12rem]">Quizzler</h1>
        <Link href="/quiz" className="text-md sm:text-2xl lg:text-4xl">
          Let&apos;s start the quiz <ArrowRight className="inline size-4 sm:size-[1em]" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
