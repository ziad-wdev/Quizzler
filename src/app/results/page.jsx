import Link from "next/link";

const Page = async ({ searchParams }) => {
  const { score, total } = await searchParams;

  return (
    <div
      className="flex-center min-h-screen flex-col gap-8 bg-cover bg-center p-8 font-bold"
      style={{ backgroundImage: "url(/results.avif)" }}
    >
      {score && total ? (
        <>
          <p className="text-xl sm:text-4xl lg:text-5xl">Bravo! you have Scored</p>
          <h1 className="text-8xl leading-none text-white text-shadow-[5px_5px_10px_rgba(0,0,0,0.1)] sm:text-[10rem] lg:text-[14rem]">
            {score}/{total}
          </h1>
          <Link href="/" className="text-xl underline decoration-4 underline-offset-2 sm:text-4xl lg:text-5xl">
            Wanna Play Again?
          </Link>
        </>
      ) : (
        <>
          <p className="text-xl sm:text-4xl lg:text-5xl">No score available</p>
          <Link href="/" className="text-xl underline decoration-4 underline-offset-2 sm:text-4xl lg:text-5xl">
            Return to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Page;
