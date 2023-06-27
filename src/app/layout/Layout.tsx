import React from "react";

const Layout = () => {
  return (
    <div>
      <h3 className="font-bold">Layout</h3>
      <br />
      <div>
        <h4>aspect ratio</h4>
        <br />
        <iframe
          className="w-full aspect-video ..."
          src="https://www.youtube.com/..."
        ></iframe>
      </div>
      <div>
        <br />
        <hr />
        <h4>container</h4>
        <br />
        <div className="container mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          quibusdam voluptatum, ea animi voluptatem voluptatibus esse nihil est
          blanditiis qui rerum saepe nulla? Nemo veritatis, cumque voluptas
          molestiae adipisci reiciendis.
        </div>
      </div>
      <div>
        <br />
        <hr />
        <h4>columns, break after, break before and break inside</h4>
        <br />
        <div className="gap-x-4 columns-3">
          <div className="w-full aspect-square border-black dark:border-white border-2 text-center break-after-column">
            box A
          </div>
          <div className="w-full aspect-square border-black dark:border-white border-2 text-center">
            box B
          </div>
          <div className="w-full aspect-square border-black dark:border-white border-2 text-center break-after-column">
            box c
          </div>
          <div className="w-full aspect-square border-black dark:border-white border-2 text-center">
            box d
          </div>
          <div className="w-full aspect-square border-black dark:border-white border-2 text-center">
            box e
          </div>
          <div className="w-full aspect-square border-black dark:border-white border-2 text-center">
            box f
          </div>
        </div>
      </div>
      <br />
      <hr />
      <h4>Display</h4>
      <br />
      <div>
        When controlling the flow of text, using the CSS property
        <span className="inline bg-sky-500">display: inline</span>
        will cause the text inside the element to wrap normally. While using the
        property <span className="inline-block bg-sky-500">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond
        its parent. Lastly, using the property{" "}
        <span className="block bg-sky-500">display: block</span>
        will put the element on its own line and fill its parent.
      </div>
    </div>
  );
};

export default Layout;
