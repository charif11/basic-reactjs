import React from "react";

export default function RefArray() {
  const table = React.useRef();
  const tr = React.useRef(new Array(3).fill(null));  // ป้องกัน undefined

  const data = [
    ["HTML", 100],
    ["React", 150],
    ["React Native", 200],
  ];

  const onClickBtn = (i) => {
    if (tr.current[i]) {
      const index = tr.current[i].rowIndex;
      table.current.deleteRow(index);
    }
  };

  return (
    <div className="table">
      <table ref={table} border={1}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} ref={(el) => (tr.current[i] = el)}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>
                <button
                  onClick={() => onClickBtn(i)}
                  className="btn-ref"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
