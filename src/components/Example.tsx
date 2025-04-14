const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-10 rounded-xl bg-red-200 p-10">
      <div className="w-2/3 bg-blue-200 p-5 text-center text-xl">{"Some"}</div>
      <div className="flex-center flex w-2/3 gap-3">
        <div className="w-full rounded-4xl bg-blue-400 p-5 text-center text-xl">
          {props.text3}
        </div>
        <div className="w-full rounded-4xl bg-blue-400 p-5 text-center text-xl">
          {props.text3}
        </div>
      </div>
      <div className="w-2/3 bg-blue-600 p-5 text-center text-xl text-white">
        {"Here"}
      </div>
    </div>
  );
};

export default Example;
