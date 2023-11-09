import Link from "next/link";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import Image from "next/image";
import { BiCheckCircle } from "react-icons/bi";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="xs:w-full sm:w-[358px] md:w-[320px] drop-shadow-xl rounded-none">
      <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Image
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          width={400}
          height={400}
          className="w-full sm:w-[358px] md:w-[320px] h-[180px] rounded-xl mb-1"
        />
      </Link>
      <div className="h-28 bg-slate-100 rounded-xl p-2">
        <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <p className="font-bold text-black">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </p>
        </Link>
        <Link
          href={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <p className="text-red-950 italic mt-1 font-bold flex">
            {snippet?.channelTitle || demoChannelTitle}
            <BiCheckCircle className="h-4 w-4 flex justify-center items-center ml-2 text-blue-600 " />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
