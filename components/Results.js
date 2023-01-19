import React from "react";
import Card from "./Card";

export default function Results({ result }) {
  console.log(result);
  return (
    <div>
      {result.map((itm) => (
       <Card key={itm.id} results={itm} />
      ))}
    </div>
  );
}
