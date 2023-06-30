"use client"
import React from "react";
import Image from "next/image";
import image1 from "../../../assets/pexels-line-knipst-16933469.jpg"

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
        property{" "}
        <span className="inline-block bg-sky-500">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond
        its parent. Lastly, using the property{" "}
        <span className="block bg-sky-500">display: block</span>
        will put the element on its own line and fill its parent.
      </div>
      <br />
      <hr />
      <h4>box decoration break</h4>
      <p>box decoration slice</p>
      <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Lorem ipsum dolor sit amet.
        <br />
        Lorem ipsum dolor sit amet.
      </span>
      <br />
      <p>box decoration clone</p>
      <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
        Lorem ipsum dolor sit amet.
        <br />
        Lorem ipsum dolor sit amet.
      </span>
      <br />
      <hr />
      <h4>box sizing</h4>
      <p>
        Use box-border to set an element’s box-sizing to border-box, telling the
        browser to include the element’s borders and padding when you give it a
        height or width. This means a 100px × 100px element with a 2px border
        and 4px of padding on all sides will be rendered as 100px × 100px, with
        an internal content area of 88px × 88px.
      </p>
      <div className="box-border h-32 w-32 p-4 border-4 ...">
        box-sizing: border-box
      </div>
      <p>
        Use box-content to set an element’s box-sizing to content-box, telling
        the browser to add borders and padding on top of the element’s specified
        width or height. This means a 100px × 100px element with a 2px border
        and 4px of padding on all sides will actually be rendered as 112px ×
        112px, with an internal content area of 100px × 100px.
      </p>
      <div className="box-content h-32 w-32 p-4 border-4 ...">
        box-sizing: content-box
      </div>
      <br />
      <hr />
      <h4>floats</h4>
      <div className="box-content h-32 w-32 p-4 border-4 float-right ...">
        floating element
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        mollitia commodi repellat consectetur corporis harum iusto nulla! Id,
        cumque neque quasi iure tempore, eos ab eaque nostrum obcaecati qui
        voluptatem accusamus assumenda dolorum repudiandae consectetur
        perferendis maiores fugit culpa vitae vero quibusdam magni, laudantium
        maxime nulla. Nesciunt harum cum est?
      </p>
      <br />
      <hr />
      <h4>clear</h4>
      <div className="box-border h-32 w-32 p-4 border-4 float-leftb ...">
        floating element
      </div>
      <div className="box-content h-32 w-32 p-4 border-4 float-right ...">
        floating element
      </div>
      <p className="clear-left">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        voluptatem est cupiditate sunt possimus ratione magnam provident enim
        necessitatibus, voluptas culpa, laborum illo nesciunt perspiciatis
        maiores! Perferendis architecto impedit quam, molestiae itaque ullam
        provident, cum veniam mollitia soluta culpa excepturi animi, molestias
        dolorem ab officia! Dicta at maxime porro expedita!
      </p>
      <br />
      <hr />
      <h4>object fit & object position</h4>
      <div className="object-cover bg-indigo-300 w-72 border-2 dark:border-white border-black">
      <Image
      src={image1}
      alt="Picture of the author"
    />
    </div>
    <br />
    <hr />
    <h4>overflow & overscroll behaviour</h4>
    <div className="overflow-auto overscroll-auto h-52 border-2 dark:border-white border-black gap-4">
      <Image src={image1} alt="" width={100}/>
      <Image src={image1} alt="" width={100}/>
      <Image src={image1} alt="" width={100}/>
      <Image src={image1} alt="" width={100}/>
      <Image src={image1} alt="" width={100}/>
      <Image src={image1} alt="" width={100}/>
    </div>
    <br />
    <hr />
    <h4>position & z-index & visibility</h4>
    <div className="relative border-2 border-black dark:border-white h-52 w-full bg-blue-400"> relative <span className="invisible">some text</span>
      <div className="absolute top-1/2 left-1/2 border-2 border-black dark:border-white h-14 w-18 p-4 overflow-hidden bg-orange-400 z-50">absolute</div>
      <div className="absolute top-1/2 right-24 border-2 border-black dark:border-white h-14 w-18 p-4 overflow-hidden bg-orange-400 z-10">absolute2</div>
    </div>
    </div>
  );
};

export default Layout;
