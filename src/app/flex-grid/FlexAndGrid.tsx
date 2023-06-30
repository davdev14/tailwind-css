import React from "react";

const flexAndGrid = () => {
  return (
    <div>
      <br />
      <hr />
      <h3>Flex and Grid</h3>
      <h4>flex basis & flex direction</h4>
      <div className="flex flex-row gap-4">
        <div className="basis-1/4 bg-pink-500">01</div>
        <div className="basis-1/4 bg-pink-500">02</div>
        <div className="basis-1/2 bg-pink-500">03</div>
      </div>
      <br />
      <hr />
      <h4>flex wrap & order</h4>
      <div className="flex flex-wrap gap-8">
        <div className="basis-1/2 bg-green-500 text-center">01</div>
        <div className="basis-1/2 bg-green-500 order-last text-center">02</div>
        <div className="basis-1/2 bg-green-500 text-center">03</div>
      </div>
      <br />
      <hr />
      <h4>flex(flex-grow, flex-shrink, flex-basis)</h4>
      <div className="flex gap-4">
        <div className="flex-none w-14 h-14 dark:bg-white bg-black dark:text-black text-white ">01</div>
        <div className="flex-auto w-64 dark:bg-white bg-black dark:text-black text-white">02</div>
        <div className="flex-initial w-32 dark:bg-white bg-black dark:text-black text-white">03</div>
      </div>
      <br />
      <hr />
      <h4>grid properties</h4>
      <div className="grid grid-cols-4 gap-4 grid-rows-4 grid-flow-dense auto-cols-auto">
        <div className="bg-yellow-500 row-span-3 text-center">01</div>
        <div className="bg-yellow-500 text-center">02</div>
        <div className="bg-yellow-500 text-center">03</div>
        <div className="bg-yellow-500 justify-self-end text-center">04</div>
        <div className="bg-yellow-500 col-span-2 text-center">05</div>
        <div className="bg-yellow-500 text-center">07</div>
        <div className="bg-yellow-500 text-center">08</div>
        <div className="bg-yellow-500 text-center">09</div>
        <div className="bg-yellow-500 col-start-3 col-end-5 text-center">10</div>
      </div>
      <br />
      <hr />
      <h4>flex-box properties</h4>
      <div className="flex gap-4 border-red-600 border-2 p-4 h-52 place-content-center">
        <div className="bg-yellow-500 self-start">01</div>
        <div className="bg-yellow-500">02</div>
        <div className="bg-yellow-500">03</div>
        <div className="bg-yellow-500">04</div>
        <div className="bg-yellow-500">05</div>
        <div className="bg-yellow-500">07</div>
        <div className="bg-yellow-500">08</div>
        <div className="bg-yellow-500">09</div>
        <div className="bg-yellow-500">10</div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default flexAndGrid;
