import Link from "next/link";

const Subscribe = ({ NewsLink }: { NewsLink: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-inria-serif text-md text-center text-wrap sm:text-xl xl:text-2xl">
        Subscribe to our newsletter
      </div>
      <div className="font-inria-serif text-md text-center text-wrap sm:text-xl xl:text-2xl">
        to see what we're up to!
      </div>
      <div className="bg-kpso-blue m-7 flex max-w-fit rounded-xl xl:p-6">
        <Link href={NewsLink}>
          <div className="font-inria-serif text-md text-center text-neutral-50 sm:text-xl xl:text-2xl">
            Subscribe
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
