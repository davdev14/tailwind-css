import React from "react";

const Tables = () => {
  return (
    <div>
      <h3>Tables</h3>
      <br />
      <table className="border-collapse border border-slate-500 ...">
        <caption className="caption-top text-sm">
          Table 3.1: Professional wrestlers and their signature moves.
        </caption>
        <thead>
          <tr>
            <th className="border border-slate-600 ...">State</th>
            <th className="border border-slate-600 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 ...">Indiana</td>
            <td className="border border-slate-700 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Ohio</td>
            <td className="border border-slate-700 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Michigan</td>
            <td className="border border-slate-700 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
      <table className="border-separate border-spacing-2 border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">State</th>
            <th className="border border-slate-600 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 ...">Indiana</td>
            <td className="border border-slate-700 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Ohio</td>
            <td className="border border-slate-700 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-slate-700 ...">Michigan</td>
            <td className="border border-slate-700 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
