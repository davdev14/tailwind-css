import React from "react";

const ReusingStyles = () => {
  return (
    <div>
      <h3 className="mb-4 font-bold">Reusing styles</h3>
      <br />
      <h3>Loops</h3>
      <br />
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 text-slate-50 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
      <br />
      <hr />
    </div>
  );
};

export default ReusingStyles;
