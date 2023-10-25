import Checklist from "./Checklist";
import "./styles.css";
import { useState } from "react";
export default function App() {
  const [leftList, setLeftList] = useState([
    { isChecked: true, title: "The Shawshank Redemption" },
    { isChecked: false, title: "The Godfather" },
    { isChecked: true, title: "The Dark Knight" },
    { isChecked: false, title: "Pulp Fiction" },
    { isChecked: true, title: "Schindler's List" }
  ]);
  const [rightList, setRightList] = useState([
    {
      isChecked: false,
      title: "The Lord of the Rings: The Return of the King"
    },
    { isChecked: true, title: "Forrest Gump" },
    { isChecked: false, title: "Fight Club" },
    { isChecked: true, title: "Inception" },
    { isChecked: false, title: "The Matrix" }
  ]);

  // Not a pure funtion
  const move = (sourceList, setSourceList, setTargetList) => {
    const markedItems = sourceList
      .filter((item) => item.isChecked)
      .map((item) => ({ ...item, isChecked: false }));
    const unMarkedItems = sourceList.filter((item) => !item.isChecked);

    setTargetList((prevState) => [...prevState, ...markedItems]);
    setSourceList((prevState) => [...unMarkedItems]);
  };

  const handleCheck = (checkedIndex, setList) => {
    setList((prevState) =>
      prevState.map((item, index) =>
        checkedIndex === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>
        Dhruv's solution to one of Facebook's interview question for React
      </h1>
      <button onClick={() => move(rightList, setRightList, setLeftList)}>
        Move Left
      </button>
      <button onClick={() => move(leftList, setLeftList, setRightList)}>
        Move Right
      </button>

      <div style={{ display: "flex" }}>
        <Checklist
          title={"Leftist"}
          items={leftList}
          handleCheck={handleCheck}
          setList={setLeftList}
        />

        <Checklist
          title={"Rightist"}
          items={rightList}
          handleCheck={handleCheck}
          setList={setRightList}
        />
      </div>
    </div>
  );
}
