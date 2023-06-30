import React from "react";

const typography = () => {
  return (
    <div>
      <br />
      <hr />
      <h3>typography</h3>
      <br />
      <h4>fonts & letter spacing</h4>
      <br />
      <p className="font-sans text-base subpixel-antialiased font-semibold tracking-tight">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ex
        explicabo architecto quis sapiente dolores voluptatem ullam quo fugiat
        quasi!
      </p>
      <br />
      <p className="font-serif text-lg antialiased italic font-black tracking-normal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ex
        explicabo architecto quis sapiente dolores voluptatem ullam quo fugiat
        quasi!
      </p>
      <br />
      <p className="font-mono text-xl/relaxed font-extrabold tracking-wide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ex
        explicabo architecto quis sapiente dolores voluptatem ullam quo fugiat
        quasi!
      </p>
      <br />
      <h4>line</h4>
      <article>
        <time>Mar 10, 2020</time>
        <h5>Boost your conversion rate</h5>
        <p className="line-clamp-3 leading-relaxed">
          Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
          occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
          occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
          dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
          cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
          quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
          voluptate sunt elit mollit officia ad enim sit consectetur enim.
        </p>
      </article>
      <br />
      <h4>list</h4>
      <ul className="list-image-checkmark list-inside">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>5 cups chopped Porcini mushrooms</li>
      </ul>
      <ul className="list-outside list-roman">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>5 cups chopped Porcini mushrooms</li>
      </ul>
      <ul className="list-outside list-decimal">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>5 cups chopped Porcini mushrooms</li>
      </ul>
      <br />
      <hr />
      <h4>text</h4>
      <p className="text-center text-sky-400/75 underline decoration-solid decoration-4 underline-offset-8 capitalize">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, obcaecati velit ipsa nemo rem ab similique aliquam cum consequuntur voluptates dolore id nostrum non a ut quas nihil pariatur fuga?
      </p>
      <br />
      <div className="mx-8 border-2 border-yellow-500 w-32 h-40 text-ellipsis overflow-hidden p-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className="text-sky-500">Ratione quisquam illum perferendis quasi placeat magni eum,</span> rem tempora repudiandae consequuntur? Inventore sapiente aperiam consectetur laudantium sed adipisci veritatis repellat excepturi.
      </div>
      <br />
      <p className="indent-8 align-bottom whitespace-pre-wrap break-words hyphens-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam voluptate dolore ex dolores dignissimos corporis fugiat corrupti quibusdam repellat.
      </p>
      <br />
      <hr />
    </div>
  );
};

export default typography;

