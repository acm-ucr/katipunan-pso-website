import Image from "next/image";

const How = () => {
  return (
    <div className="flex w-full justify-end p-4">
      <div className="flex h-103 w-3xl items-center justify-center border-4 border-blue-400">
        <Image
          src="/Katipunan Logo.png"
          alt="Katipunan Logo"
          width={732}
          height={412}
        />
      </div>

      <div className="flex w-1/2 flex-col p-10">
        <p className="text-kpso-blue font-inria-serif text-center text-5xl">
          HOW TO JOIN
        </p>
        <div className="font-inria-serif flex flex-col gap-4 p-10 text-center text-3xl">
          <p>Interested in joining Katipunan? It's easy! </p>
          <p>
            Just venmo our Treasurer, Ava Boado, the general member fee of $32.
          </p>
          <p>And just like that, you're now an official Katipunero!</p>
          <p>Ava's Venmo: @pompu</p>
        </div>
      </div>
    </div>
  );
};

export default How;
