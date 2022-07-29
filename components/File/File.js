import Image from "next/image";

const File = ({
  id,
  artworkUrl100,
  collectionName,
  copyright,
  collectionPrice,
  artistName,
  trackCount,
}) => {
  return (
    <>
      <div className="flex gap-5" id={id}>
        <img src={artworkUrl100}></img>
        <div className="flex flex-col">
          <div className="font-normal text-">{collectionName}</div>
          <div>{collectionPrice}</div>
          <div className="flex gap-2">
            <div>Number of tracks: {trackCount}</div>
            <div>Track number: undefined</div>
          </div>
          <div>{artistName}</div>
          <div>{copyright}</div>
        </div>
      </div>
    </>
  );
};

export default File;
