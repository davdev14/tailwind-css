import React from "react";
import image1 from "../../../assets/pexels-line-knipst-16933469.jpg";
import { url } from "inspector";

const Filters = () => {
  return (
    <div>
      <br />
      <h3>Filters</h3>
      <br />
      <h4>blur</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="blur-none border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="blur-sm border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="blur-lg border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="blur-2xl border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>brithness</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="brightness-50 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="brightness-100 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="brightness-125 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="brightness-200 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>contrast</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="contrast-50 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="contrast-100 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="contrast-125 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="contrast-200 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>gray scale</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="border-2 w-48 h-48 bg-center bg-cover grayscale-0"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="border-2 w-48 h-48 bg-center bg-cover grayscale"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>hue rotate</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="hue-rotate-15 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="hue-rotate-90 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="hue-rotate-180 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="-hue-rotate-60 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>gray scale</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="border-2 w-48 h-48 bg-center bg-cover invert-0"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="border-2 w-48 h-48 bg-center bg-cover invert"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>saturate</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="saturate-50 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="saturate-100 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="saturate-150 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="saturate-200 border-2 w-48 h-48 bg-center bg-cover"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>sepia</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="border-2 w-48 h-48 bg-center bg-cover sepia-0"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
        <div
          className="border-2 w-48 h-48 bg-center bg-cover sepia"
          style={{ backgroundImage: `url(${image1.src})` }}
        ></div>
      </div>
      <h4>backdrop blur</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="border-2 w-48 h-48 bg-center bg-cover backdrop-blur-sm flex justify-center items-center"
          style={{ backgroundImage: `url(${image1.src})` }}
        >
          <p className="border-2 w-24 h-24 backdrop-blur-sm"></p>
        </div>
        <div
          className="border-2 w-48 h-48 bg-center bg-cover backdrop-blur-sm flex justify-center items-center"
          style={{ backgroundImage: `url(${image1.src})` }}
        >
          <p className="border-2 w-24 h-24 backdrop-blur-md"></p>
        </div>
        <div
          className="border-2 w-48 h-48 bg-center bg-cover backdrop-blur-sm flex justify-center items-center"
          style={{ backgroundImage: `url(${image1.src})` }}
        >
          <p className="border-2 w-24 h-24 backdrop-blur-xl"></p>
        </div>
      </div>
      <h4>backdrop brightness</h4>
      <br />
      <div className="flex flex-wrap space-x-4">
        <div
          className="border-2 w-48 h-48 bg-center bg-cover backdrop-blur-sm flex justify-center items-center"
          style={{ backgroundImage: `url(${image1.src})` }}
        >
          <p className="border-2 w-24 h-24 backdrop-brightness-50"></p>
        </div>
        <div
          className="border-2 w-48 h-48 bg-center bg-cover backdrop-blur-sm flex justify-center items-center"
          style={{ backgroundImage: `url(${image1.src})` }}
        >
          <p className="border-2 w-24 h-24 backdrop-brightness-125"></p>
        </div>
        <div
          className="border-2 w-48 h-48 bg-center bg-cover backdrop-blur-sm flex justify-center items-center"
          style={{ backgroundImage: `url(${image1.src})` }}
        >
          <p className="border-2 w-24 h-24 backdrop-brightness-200"></p>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Filters;
