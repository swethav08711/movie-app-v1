import React from "react";

export default function Results({ result }) {
  console.log(result);
  return (
    <div>
      {result.map((itm) => (
        <div key={itm.id}>{itm.title} </div>
      ))}
    </div>
  );
}
