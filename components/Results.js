import React from "react";
import Card from "./Card";

export default function Results({ result }) {
  console.log(result);
  return (
    <div className=" bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {result.map((itm) => (
       <Card key={itm.id} results={itm} />
      ))}
    </div>
  );
}
