import React from "react";

function Checklist({ title, items, handleCheck, setList }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li style={{ listStyle: "none" }} key={item.title}>
            <label>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheck(index, setList)}
              />
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
