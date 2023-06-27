import React from "react";

const Responsive = () => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">Responsive design</h3>
      <h1 className="text-3xl font-bold text-gray-500 sm:text-violet-500 md:text-green-500 lg:text-red-500 xl:text-yellow-500 2xl:text-blue-500">
        Responsive in action
      </h1>
      <br />
      <hr />
      <h3>targeting mobile screens</h3>
      <br />
      <p>
        to target mobile device dont use sm, you dont need to target a
        breakpoint to style for mobile because tailwind uses a mobile first
        system. However to target the breakpoints larger than mobile you have to
        target the breakpoint md: tablet, lg: laptop, xl: large laptop, 2xl: tv
      </p>
      <br />
      <hr />
      <h3>targeting a breakpoint range</h3>
      <br />
      <div className="md:max-xl:text-red-500">
        <p>
          this text will be red between tablet and laptop. the style will not
          apply on viewport of xl: large laptop and above and also below md:
          tablet viewport.
        </p>
      </div>
      <br />
      <hr />
      <h3>targeting a single breakpoint</h3>
      <br />
      <div className="md:max-xl:text-orange-400">
        <p>
          this text will be orange only at viewport md: tablet. To target a
          single breakpoint, target the range for that breakpoint by stacking a
          responsive modifier like md with the max-* modifier for the next
          breakpoint:
        </p>
      </div>
      <br />
      <hr />
      <h3>customizing your theme</h3>
      <br />
      <p>
        you can completely customize your breakpoints in your tailwind.config.js
      </p>
      <br />
      <hr />
      <h3>Arbitrary values</h3>
      <br />
      <div className="min-[320px]:text-center max-[600px]:bg-sky-300">
        <p>
        at breakpoint above 320px the text is center and at breakpoint below 600px the background color is sky blue.
        </p>
        <br />
        <p>
        If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the min or max modifiers to generate a custom breakpoint on the fly using any arbitrary value.
        </p>
      </div>
      <hr />
      <br />
    </div>
  );
};

export default Responsive;
