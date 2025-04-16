import Image from "next/image";

const How = () => {
  return (
    <div className="flex w-full justify-end p-4">
      <div className="flex w-1/2 items-center justify-center">
        <Image
          src="/Katipunan Logo.png"
          alt="Katipunan Logo"
          width={400}
          height={400}
        />
      </div>

      <div className="flex w-1/2 flex-col p-10">
        <p className="text-kpso-blue font-inria-serif text-center text-5xl">
          HOW TO JOIN
        </p>
        <div className="font-inria-serif flex flex-col gap-8 p-8 text-center text-3xl">
          <p>Interested in joining Katipunan? It's</p>
          <p>easy!</p>
          <p>Just venmo our Treasurer, Ava Boado,</p>
          <p>the general member fee of $32. And</p>
          <p>just like that, you're now an official</p>
          <p>Katipunero!</p>
          <p>Ava's Venmo: @pompu</p>
        </div>
      </div>
    </div>
  );
};

export default How;
