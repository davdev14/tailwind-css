import React from "react";

const Effects = () => {
  return (
    <div>
      <br />
      <h3>Effects</h3>
      <br />
      <h4>box shadow</h4>
      <div className="flex gap-6 flex-wrap">
        <div className="shadow-md border-2 h-32 w-32 text-center">
          shadow-md
        </div>
        <div className="shadow-lg border-2 h-32 w-32 text-center">
          shadow-lg
        </div>
        <div className="shadow-xl border-2 h-32 w-32 text-center">
          shadow-xl
        </div>
        <div className="shadow-2xl border-2 h-32 w-32 text-center">
          shadow-2xl
        </div>
        <div className="shadow-inner border-2 h-32 w-32 text-center">
          shadow-inner
        </div>
        <div className="shadow-none border-2 h-32 w-32 text-center">
          shadow-none
        </div>
      </div>
      <br />
      <div className="flex gap-6 flex-wrap">
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">
          Subscribe
        </button>
        <button className="bg-blue-500 shadow-lg shadow-blue-500/50 ...">
          Subscribe
        </button>
        <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...">
          Subscribe
        </button>
      </div>
      <br />
      <h4>mix blend mode</h4>
      <div className="flex justify-center -space-x-14">
        <div className="mix-blend-multiply bg-blue-400 border-2 h-32 w-32 text-center rounded-full"></div>
        <div className="bg-pink-400 border-2 h-32 w-32 text-center rounded-full bg-blend-multiply"></div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Effects;
