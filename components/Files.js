import File from "./File/File";
import data from "../data/itunes.json";

const Files = () => {
  return (
    <div className="flex flex-col">
      {data.results.map((res) => {
        return (
          <div className="flex flex-col gap-5">
            <File
              id={res.collectionId}
              artworkUrl100={res.artworkUrl100}
              collectionName={res.collectionName}
              copyright={res.copyright}
              collectionPrice={res.collectionPrice}
              artistName={res.artistName}
              trackCount={res.trackCount}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Files;
