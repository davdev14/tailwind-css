import React from "react";

const Plugins = () => {
  return (
    <div>
      <br />
      <h3 className="mb-4 font-bold ">plugins</h3>
      <label className="block">
        <span className="text-white">using the form plugin to style the textarea and using a custom plugin to add a utility that hides content visibility</span>
        <textarea
          className="form-input mt-5 block border-2 text-black content-hidden"
          rows={5}
          placeholder="Tell us something about you...!!!"
        ></textarea>
      </label>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Plugins;
