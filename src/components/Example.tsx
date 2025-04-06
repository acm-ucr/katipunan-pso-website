const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-8 rounded-2xl bg-red-200 p-10">
      <div className="w-3/4 bg-blue-200 p-5 text-center font-[Arial]">
        {"Some"}
      </div>
      <div className="flex w-3/4 gap-2">
        <div className="w-full rounded-full bg-blue-400 p-5 text-center font-[Arial]">
          {props.text3}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center font-[Arial]">
          {props.text3}
        </div>
      </div>
      {
        <div className="w-3/4 bg-blue-600 p-5 text-center font-[Arial] text-white">
          {"Here"}
        </div>
      }
    </div>
  );
};

export default Example;
