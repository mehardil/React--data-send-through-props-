import React, { useState, useEffect } from "react";
import "./style.css";
import { useRef } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default function Dataget() {
  const [value, setValue] = useState("");
  const [Data, setData] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=0d64fa4c93655aec365dc2bee07f665b`
      )
      .then((Data) => setData(Data.data.production_companies))
      .catch(() => {
        console.log("DATA NOT FOUND");
      });
  }, []);

  function handleClick(x) {
    setValue(x);
  }

  return (
    <>
      <div className="INPUTS">
        <input ref={inputRef} value={value} onChange={(e)=>handleClick(e.target.value)}></input>
      </div>
      {Data && Data.length && <SearchBar data={Data} inputValue={value} setValue={setValue}/>}
    </>
  );
}
