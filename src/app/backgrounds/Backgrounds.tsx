import { url } from "inspector";
import React from "react";
import image1 from "../../../assets/pexels-line-knipst-16933469.jpg";

const Backgrounds = () => {
  return (
    <div>
      <h3>backgrounds</h3>
      <br />
      <div
        className="bg-fixed w-full h-96 bg-center border-2 border-green-600 "
        style={{ backgroundImage: `url(${image1.src})` }}
      ></div>
      <p className="bg-white text-black">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et facilis
        quam accusantium ducimus perferendis eius, placeat magni nostrum.
        Impedit, autem iusto debitis consequuntur similique, ratione qui eaque
        quam aliquam consequatur repellendus magni nesciunt facilis quas
        molestiae accusamus, quasi ut officia consectetur dolorem velit. Atque
        quas ipsam beatae deserunt nisi eum aliquid fuga deleniti modi. Rerum,
        est! Totam sit dolorum aliquid fugit mollitia numquam iure
        necessitatibus officiis. Eligendi cumque ex ipsa accusamus itaque dolor,
        autem voluptatibus sit consequatur? Minus et iste saepe iusto fugiat,
        praesentium sunt hic maxime accusamus nesciunt quo ipsa autem, excepturi
        consectetur voluptates distinctio facilis itaque, sequi eos doloremque!
        Blanditiis sunt maiores expedita, laudantium porro adipisci neque
        commodi dolorum natus. A officiis culpa rerum, iusto inventore fugiat
        ducimus hic quod nobis reiciendis! Nesciunt harum exercitationem sunt
        maxime, veniam obcaecati, dolores beatae enim nobis quod tempora dolor,
        repellat dolore quis? Excepturi adipisci aliquid veniam totam, illo
        autem vel aliquam perferendis numquam hic alias id ea nobis voluptatem.
        Excepturi blanditiis, numquam sequi libero atque repellat illum sed!
        Alias laborum itaque, nulla perspiciatis amet maiores quod nesciunt
        dolor, sed error inventore vitae natus perferendis incidunt non
        repellendus. Incidunt, dolorum odio! In, blanditiis numquam repellat
        enim eaque labore est libero nam consequuntur. beatae enim nobis quod
        tempora dolor, repellat dolore quis? Excepturi adipisci aliquid veniam
        totam, illo autem vel aliquam perferendis numquam hic alias id ea nobis
        voluptatem. Excepturi blanditiis, numquam sequi libero atque repellat
        illum sed! Alias laborum itaque, nulla perspiciatis amet maiores quod
        nesciunt dolor, sed error inventore vitae natus perferendis incidunt non
        repellendus. Incidunt, dolorum odio! In, blanditiis numquam repellat
        enim eaque labore est libero nam consequuntur.
      </p>
      <br />
      <h5>background clip & positon & repeat & origin & size</h5>
      <div
        className="bg-clip-border p-12 bg-violet-600 border-4 border-violet-300 border-dashed h-72 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image1.src})` }}
      ></div>
      <br />
      <div
        className="bg-clip-padding p-12 bg-violet-600 border-4 border-dashed h-72 bg-origin-content bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image1.src})` }}
      ></div>
      <br />
      <div
        className="bg-clip-content p-12 bg-violet-600 border-4 border-violet-300 border-dashed h-72 bg-contain bg-repeat"
        style={{ backgroundImage: `url(${image1.src})` }}
      ></div>
      <br />
      <h5>background gradient color</h5>
      <div className="h-14 bg-gradient-to-r from-cyan-500 "></div>
      <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>
      <br />
      <hr />
    </div>
  );
};

export default Backgrounds;
