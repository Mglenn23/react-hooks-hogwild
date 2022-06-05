import React, { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
  //   console.log(hogs);
  const [hog] = useState(hogs);
  const [filter, setFilter] = useState("All");
  function handlerFilter(data) {
    console.log(data);
    setFilter(data);
  }
  if (filter === "nameA") {
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }

    hog.sort(compare);
  } else if (filter === "nameD") {
    function compare(a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    }

    hog.sort(compare);
  } else if (filter === "weightA") {
    function compare(a, b) {
      if (a.weight < b.weight) {
        return -1;
      }
      if (a.weight > b.weight) {
        return 1;
      }
      return 0;
    }
    hog.sort(compare);
  } else if (filter === "weightD") {
    function compare(a, b) {
      if (a.weight > b.weight) {
        return -1;
      }
      if (a.weight < b.weight) {
        return 1;
      }
      return 0;
    }
    hog.sort(compare);
  }
  //   console.log(hog);
  const hogDataFilter = hog.filter((data) => {
    if (filter === "All") {
      return data;
    } else if (filter === true) {
      if (data.greased === true) {
        return data;
      }
    } else {
      return data;
    }
    return "";
  });

  return (
    <div className="App">
      <Nav />
      <Filter functionFilter={handlerFilter} />
      <Content dataHogs={hogDataFilter} />
    </div>
  );
}

export default App;
