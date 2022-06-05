import React from "react";
import ContentCard from "./ContentCard";
import { v4 as uuid } from "uuid";
function Content({ dataHogs }) {
  //   console.log(dataHogs);

  const hogsList = dataHogs.map((hog) => {
    // console.log(hog.greased);
    return <ContentCard key={uuid()} name={hog.name} image={hog.image} greased={hog.greased} medal={hog["highest medal achieved"]} specialty={hog.specialty} weight={hog.weight} />;
  });
  return <div className="ui link cards">{hogsList}</div>;
}

export default Content;
