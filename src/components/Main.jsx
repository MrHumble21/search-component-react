import {useState} from "react";
import data from "./data";

function Main() {
  const [filter, setFilter] = useState(data);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          e.target.value.length === 0
            ? setFilter(data)
            : setFilter(
                filter.filter((el) => {
                  return (
                    el.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
                    -1
                  );
                })
              );
        }}
      />

      {filter.map((value, index, array) => (
        <h1 key={index}>{value}</h1>
      ))}
    </>
  );
}

export default Main;
