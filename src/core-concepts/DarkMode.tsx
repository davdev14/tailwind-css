import React from 'react'
import { useTheme } from "next-themes"

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
      <h3 className="mb-4 font-bold">Dark mode</h3>
      <br />
      <h3>Basic usage</h3>
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
      <br />
      <hr />
      <br />
      <h3>Toggling dark mode manually</h3>
      <br />
      <p>
      If you want to support toggling dark mode manually instead of relying on the operating system preference, use the class strategy instead of the media strategy:
      </p>
      <br />
      <hr />
      <h3>toggle ligth and dark mode</h3>
      <br />
      <button onClick={() => theme == "dark" ? setTheme('light') :setTheme("dark")} className='bg-blue-700 p-2'>click to toggle ligth/dark mode</button>
      <hr />
    </div>
  )
}

export default DarkMode
