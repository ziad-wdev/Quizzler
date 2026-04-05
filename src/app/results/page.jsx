import Link from "next/link";

const Page = async ({ searchParams }) => {
  const { score, total } = await searchParams;

  return (
    <div
      className="flex-center h-full flex-col gap-8 bg-cover bg-center px-8"
      style={{ backgroundImage: "url(/results.avif)" }}
    >
      {score && total ? (
        <>
          <p className="text-3xl font-bold sm:text-4xl lg:text-5xl">Bravo! you have Scored</p>
          <p className="text-[14rem] leading-none font-bold text-white text-shadow-[5px_5px_10px_rgba(0,0,0,0.1)] sm:text-[16rem] lg:text-[20rem]">
            {score}/{total}
          </p>
          <Link
            href="/"
            className="text-3xl font-bold underline decoration-4 underline-offset-2 sm:text-4xl lg:text-5xl"
          >
            Wanna Play Again?
          </Link>
        </>
      ) : (
        <>
          <p className="text-3xl font-bold sm:text-4xl lg:text-5xl">No score available</p>
          <Link
            href="/"
            className="text-3xl font-bold underline decoration-4 underline-offset-2 sm:text-4xl lg:text-5xl"
          >
            Return to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Page;
