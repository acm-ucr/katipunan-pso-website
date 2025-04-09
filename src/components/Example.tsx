const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="w-2/3 flex-col flex-wrap items-center gap-4 bg-red-200 p-10">
      <div className="flex flex-col gap-2">
        <div className="w-1/2 gap-10 bg-blue-100 p-3 text-center">
          {props.text1}
        </div>
        <div className="w-full rounded-2xl bg-red-200 p-3 text-center"></div>
      </div>

      <div className="flex w-1/2 flex-row gap-2">
        <div className="w-full rounded-2xl bg-blue-300 p-3 text-center">
          {props.text2}
        </div>
        <div className="w-full rounded-2xl bg-blue-300 p-3 text-center">
          {props.text2}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-full rounded-2xl bg-red-200 p-3 text-center"></div>
        <div className="w-1/2 flex-col gap-3 bg-blue-400 p-3 text-center">
          {props.text3}
        </div>
      </div>
    </div>
  );
};

export default Example;
