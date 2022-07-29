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
    return obj
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
    return obj
  };

  const input = data.results;
  const obj = getGenre(input)
  const objArtist = getArtistName(input)
  console.log(obj)
  console.log(objArtist)

  return (
    <div>
      <div>Primary Genre Name</div>
      <div>Artist name</div>
    </div>
  );
};

export default Sidebar;
