import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <div className="flex-center h-full bg-cover bg-center px-8" style={{ backgroundImage: "url(/home.avif)" }}>
      <div className="text-end">
        <h1 className="text-9xl sm:text-[10rem] lg:text-[14rem]">Quizzler</h1>
        <Link href="/quiz" className="text-2xl sm:text-3xl lg:text-4xl">
          Let&apos;s start the quiz <ArrowRight className="inline size-4 sm:size-[1em]" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
