import React from "react";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  if (!videos?.length) return "Loading...";
  return (
    <div className="flex flex-row flex-wrap justify-star  gap-3">
      {videos.map((item, idx) => (
        <div key={idx}>{item.id.videoId && <VideoCard video={item} />}</div>
      ))}
    </div>
  );
};

export default Videos;
