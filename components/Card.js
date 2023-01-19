import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

export default function Card({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image
        layout="responsive"
        alt="img"
        width={200}
        height={100}
        src={BASE_URL + results.backdrop_path}
      />
      <div>
        <p className=" truncate">

        {results.overview}
        </p>
        <h2>{results.title || results.name}</h2>
        <p>{results.release_date || results.first_air_date} 
        <ThumbUpIcon className=" h-5"/> {results.vote_count}</p>
       
      </div>
    </div>
  );
}
