import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

export default function Card({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className=" p-3 cursor-pointer hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform duration-200">
      <Image
        layout="responsive"
        alt="img"
        width={200}
        height={100}
        src={BASE_URL + results.backdrop_path}
      />
      <div className=" p-2">
        <p className=" truncate text-lg">

        {results.overview}
        </p>
        <h2 className="text-lg font-bold">{results.title || results.name}</h2>
        <p className="flex items-center">{results.release_date || results.first_air_date} 
        <ThumbUpIcon className=" h-5 ml-3 mr-1"/> {results.vote_count}</p>
       
      </div>
    </div>
  );
}
