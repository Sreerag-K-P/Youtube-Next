import getDataItems from "@/app/libs/getDataItems";
import Videos from "@/components/Videos";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";
export default async function Page({ params }) {
  const videoDetails = await getDataItems(
    `videos?part=snippet,statistics&id=${params.id}`
  );
  const data = await videoDetails;
  const item = data.items[0];

  const Related = await getDataItems(
    `search?part=snippet&relatedToVideoId=${params.id}&type=video`
  );
  const videos = Related.items;

  return (
    <div>
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <div className="w-full top-[86px]">
              <iframe
                className="h-52 sm:h-96 md:h-[30rem] w-full"
                src={`https://www.youtube.com/embed/${params.id}?autoplay=true`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <h5 className="text-black p-2 font-bold">
                {item?.snippet?.title}
              </h5>
              <div className="px-2 py-1  justify-between flex flex-row">
                <Link href={`/channel/${item?.snippet?.channelId}`}>
                  <h6 className="text-black flex">
                    {item?.snippet?.channelTitle}
                    <BiCheckCircle className="h-4 w-4 flex justify-center items-center ml-2 text-blue-600 " />
                  </h6>
                </Link>
                <div className="flex gap-5 flex-row items-center">
                  <p className="opacity-[0.7] text-gray-900">
                    {parseInt(item?.statistics?.viewCount).toLocaleString()}{" "}
                    views
                  </p>
                  <p className="opacity-[0.7] text-gray-900">
                    {parseInt(item?.statistics?.likeCount).toLocaleString()}{" "}
                    likes
                  </p>
                </div>
              </div>
              <div className="px-2 py-1 ">
                {item?.snippet?.localized?.description
                  .split("\n")
                  .map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="px-2 md:py-1 xs:py-5 justify-center items-center flex-1">
            <Videos videos={videos} className="flex flex-col" />
          </div>
        </div>
      </div>
    </div>
  );
}
