import { useEffect, useState } from "react";
import data from "../data/itunes.json";

const Sidebar = () => {
  const [genre, setGenre] = useState({});
  // const [artist, setArtist] = useState({})

  const getGenre = (input) => {
    var arr = input,
      obj = {};
    for (var i = 0; i < arr.length; i++) {
      if (!obj[arr[i].primaryGenreName]) {
        obj[arr[i].primaryGenreName] = 1;
      } else if (obj[arr[i].primaryGenreName]) {
        obj[arr[i].primaryGenreName] += 1;
      }
    }
    return obj;
  };
  const getArtistName = (input) => {
    var arr = input,
      obj = {};
    for (var i = 0; i < arr.length; i++) {
      if (!obj[arr[i].artistName]) {
        obj[arr[i].artistName] = 1;
      } else if (obj[arr[i].artistName]) {
        obj[arr[i].artistName] += 1;
      }
    }
    return obj;
  };

  const input = data.results;
  const obj = getGenre(input);
  const objArtist = getArtistName(input);
  console.log(obj);
  console.log(objArtist);

  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold text-base">Primary Genre Name</div>
      <div className="flex flex-col">
        {Object.keys(obj).map((val) => {
          return (
            <div className="flex gap-2">
              {val}
              {obj[val]}
              <input type="radio"></input>
            </div>
          );
        })}
      </div>
      <div className="font-bold text-base">Artist name</div>
      <div className="flex flex-col">
        {Object.keys(objArtist).map((val) => {
          return (
            <div>
              {val}
              <input type="radio"></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
