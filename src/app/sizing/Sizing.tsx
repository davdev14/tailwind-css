import React from "react";

const Sizing = () => {
  return (
    <div>
      <h3>sizing</h3>
      <h4>height(max-height, min-height)</h4>
      <br />
      <div className="flex space-x-4">
      <div className="h-96 bg-slate-500 w-4"></div>
      <div className="h-80 bg-slate-500 w-4"></div>
      <div className="h-44 bg-slate-500 w-4"></div>
      <div className="h-72 bg-slate-500 w-4"></div>
      <div className="min-h-max bg-slate-500 w-4 vertical-text">Lorem ipsum dolor sit amet.</div>
      <div className="max-h-fit bg-slate-500 w-4 vertical-text">Lorem ipsum dolor sit amet.</div>
      </div>
      <br />
      <h4>weight(max-weight, min-weight)</h4>
      <div className="flex flex-col space-y-4">
      <div className="w-96 bg-slate-500 h-4"></div>
      <div className="w-80 bg-slate-500 h-4"></div>
      <div className="w-1/2 bg-slate-500 h-4"></div>
      <div className="w-2/4 bg-slate-500 h-4"></div>
      <div className="w-1/4 bg-slate-500 h-4"></div>
      </div>
      <br />
    </div>
  );
};

export default Sizing;
