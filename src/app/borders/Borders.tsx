import React from "react";

const Borders = () => {
  return (
    <div>
      <h3>borders</h3>
      <h4>border</h4>
      <br />
      <div className="h-52 w-52 border-2 border-purple-500 rounded-full border-dotted"></div>
      <h4>divide</h4>
      <br />
      <div className="grid grid-cols-3 divide-x divide-red-600">
        <div className="bg-sky-500">01</div>
        <div className="bg-sky-500">02</div>
        <div className="bg-sky-500">03</div>
      </div>
      <br />
      <h4>outline</h4>
      <button className="outline outline-offset-2 outline-1 outline-blue-500 ...">
        Button A
      </button>
      <br />
      <br />
      <button className="outline outline-offset-2 outline-2 outline-cyan-500 ...">
        Button B
      </button>
      <br />
      <br />
      <button className="outline outline-offset-2 outline-4 outline-pink-500  ...">
        Button C
      </button>
      <br />
      <h4>ring</h4>
      <button className="... ring-offset-4 ring-4">Button A</button>
      <br /><br />
      <button className="... ring-offset-2 ring">Button B</button>
      <br /><br />
      <button className="... ring-offset-4 ring-4 ring-offset-slate-50 dark:ring-offset-slate-900">Button C</button>
    </div>
  );
};

export default Borders;
