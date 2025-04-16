const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-1 gap-8 rounded-xl bg-red-200 p-10">
      <div className="w-1/2 bg-sky-200 p-5 text-center font-sans text-2xl">
        {"Some"}
      </div>
      <div className="flex w-1/2 flex-col flex-row gap-x-8">
        <div className="w-full rounded-full bg-blue-400 p-5 text-center font-sans text-2xl">
          {"Props"}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center font-sans text-2xl">
          {"Props"}
        </div>
      </div>
      {
        <div className="w-1/2 bg-blue-500 p-5 text-center font-sans text-2xl text-stone-50">
          {"Here"}
        </div>
      }
    </div>
  );
};

export default Example;
