import Questions from "@/components/Questions";
import Link from "next/link";

const Page = async () => {
  const response = await fetch("https://opentdb.com/api.php?amount=10&category=18")
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
      return [];
    });
  const questions = response?.results;

  return (
    <div
      className="flex-center min-h-screen flex-col gap-8 bg-cover bg-center p-8"
      style={{ backgroundImage: "url(/quiz.avif)" }}
    >
      {questions && questions.length > 0 ? (
        <Questions questions={questions} />
      ) : (
        <>
          <p className="text-xl font-bold text-white sm:text-4xl lg:text-5xl">No questions available.</p>
          <Link
            href="/"
            className="text-xl font-bold text-white underline decoration-4 underline-offset-2 sm:text-4xl lg:text-5xl"
          >
            Return to Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Page;
