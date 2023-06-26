import React from "react";

const HoverAndOtherStates = () => {
  return (
    <div className="mb-12">
      <h3 className="mb-4 text-xl font-bold">pseudo classes</h3>
      <h4 className="mb-4 text-lg font-bold">form states</h4>
      <div className="bg-black hover:bg-blue-500">hover effect</div>
      <br />
      <input
        type="text"
        placeholder="focus"
        className="border-gray-300 focus:border-blue-400 outline-none border-2"
      />
      <br />
      <br />
      <div className="focus-within:bg-red-400">
        <input type="text" placeholder="focus within" />
      </div>
      <br />
      <button className="bg-blue-500 active:bg-blue-600 mb-4">active</button>
      <br />
      <a
        target="_blank"
        href="https://google.com"
        className="text-blue-600 visited:text-purple-600 "
      >
        Visited
      </a>
      <br />
      <div id="about" className="target:bg-blue-600 ...">
        target
      </div>
      <ul>
        <li className="first:text-red-400 ..."> first child</li>
        <li className="last:text-blue-400 ..."> last child</li>
      </ul>
      <br />
      <ul>
        <li className="only:text-violet-400 ...">only child</li>
      </ul>
      <br />
      <table>
        <tr className="bg-white odd:bg-gray-400 ...">table row with odd</tr>
        <tr className="bg-white odd:bg-gray-400 ...">table row with odd</tr>
        <tr className="bg-white odd:bg-gray-400 ...">table row with odd</tr>
        <tr className="bg-white odd:bg-gray-400 ...">table row with odd</tr>
        <tr className="bg-white odd:bg-gray-400 ...">table row with odd</tr>
      </table>
      <br />
      <table>
        <tr className="bg-white even:bg-gray-400 ...">table row with even</tr>
        <tr className="bg-white even:bg-gray-400 ...">table row with even</tr>
        <tr className="bg-white even:bg-gray-400 ...">table row with even</tr>
        <tr className="bg-white even:bg-gray-400 ...">table row with even</tr>
        <tr className="bg-white even:bg-gray-400 ...">table row with even</tr>
      </table>
      <br />
      <nav>
        <a href="#" className="first-of-type:ml-6 ...">
          first type of
        </a>
        <br />
        <a href="#" className="last-of-type:italic ...">
          last type of
        </a>
      </nav>
      <nav>
        <a href="#" className="only-of-type:ml-6 ...">
          only type of
        </a>
      </nav>
      <br />
      <ul className="borde-2 p-4 border-emerald-400">
        <li className="empty:border-green-400 empty:border-2s ...">empty</li>
      </ul>
      <br />
      <input className="disabled:bg-slate-200 ..." placeholder="disabled" />
      <br />
      <input className="enabled:bg-slate-200 ..." placeholder="disabled" />
      <br />
      <form action="">
        <input
          type="checkbox"
          className="indeterminate:bg-red-400 checked:bg-red-400 ..."
        />
        <input type="checkbox" className="default:ring-2 ..." />
        <br />
        <input
          type="text"
          placeholder="required"
          className="required:border-red-500 outline-none ..."
        />
        <input
          type="email"
          placeholder="valid"
          className="required:border-red-500 outline-none ..."
        />
        <input
          placeholder="in range"
          min="1"
          max="5"
          className="in-range:border-green-500 outline-none ..."
        />

        <input
          type="number"
          placeholder="out of range"
          min="1"
          max="5"
          className="out-of-range:border-red-500 outline-none border-2..."
        />

        <input
          className="placeholder-shown:border-gray-500 outline-none ..."
          placeholder="you@example.com"
        />
        <input placeholder="auto-fill" className="autofill:bg-yellow-200 ..." />
        <input
          readOnly
          placeholder="read-only"
          className="read-only:bg-gray-100 ..."
        />
      </form>
      <br />
      <hr />
      <h4 className="mb-4 text-xl font-bold">style based on parent state</h4>
      <a
        href="#"
        className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div className="flex items-center space-x-3">
          <svg
            className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          ></svg>
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
            New project
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">
          Create a new project from a variety of starting templates.
        </p>
      </a>
      <br />
      <hr />
      <h4 className="mb-4 text-xl font-bold">style based on sibling state</h4>
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            placeholder="enter your email"
            type="email"
            className="peer placeholder:italic placeholder:text-slate-50"
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
      </form>
      <hr />
      <h3 className="mb-4 text-xl font-bold">Psuedo elements</h3>
      <hr />

      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-50">
        after and before
      </span>
      <hr />
      <br />

      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="placeholder text"
        type="text"
        name="search"
      />
      <br />
      <hr />
      <p>file input button</p>
      <input
        type="file"
        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0P
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 file:border-2 file:border-green-500
    "
      />
      <br />
      <hr />
      <ul
        role="list"
        className="marker:text-red-500 list-disc pl-5 space-y-3 text-slate-400"
      >
        <li>5 cups chopped Porcini mushrooms</li>
        <li>1/2 cup of olive oil</li>
        <li>3lb of celery</li>
      </ul>
      <br />
      <hr />
      <p>styling text selection</p>
      <p>try selecting the text</p>
      <br />
      <div className="selection:bg-fuchsia-300 selection:text-yellow-300">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          veritatis, eos adipisci provident perspiciatis in dolore dignissimos
          veniam laborum et, non natus ex. Porro pariatur ipsam animi
          dignissimos unde dolor!
        </p>
      </div>
      <br />
      <hr />
      <p>first line and first letter</p>
      <br />
      <p
        className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left
"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iste
        nostrum ipsam sint labore qui nihil cupiditate impedit architecto
        quaerat.
      </p>
      <br />
      <hr />
      <p>dialog backdrops</p>
      <dialog id="dialog">
        <p>i am a dialog.</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
      <br />
      <hr />
      <p>dark mode</p>
      <br />
      <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            ></svg>
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
      <p>view port orientation</p>
      <br />
      <div>
        <div className="portrait:hidden">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            quaerat dolorem harum totam iste exercitationem.
          </p>
        </div>
        <div className="landscape:hidden">
          <p>
            This experience is designed to be viewed in landscape. Please rotate
            your device to view the site.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <p> aria states</p>
      <input type="checkbox" className="bg-gray-600 aria-checked:bg-sky-700 " />
      <br />
      <hr />
      <p>arbitrary variants and group hover</p>
      <br />
      <ul role="list" className="group">
        <li className="[&:nth-child(3)]:underline group-hover:text-red-500">
          Lorem ipsum dolor sit amet.
        </li>
        <li className="[&:nth-child(3)]:underline">
          Lorem ipsum dolor sit amet.
        </li>
        <li className="[&:nth-child(3)]:underline">
          Lorem ipsum dolor sit amet.
        </li>
      </ul>
      <br />
      <div className="[&_p]:mt-4 [&_p]:text-blue-700 ">
        <p>Lorem ipsum...</p>
        <ul>
          <li>
            <p>Lorem ipsum...</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HoverAndOtherStates;
