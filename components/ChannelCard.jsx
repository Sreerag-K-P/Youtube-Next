import { demoProfilePicture } from "@/utils/constants";
import Image from "next/image";

import React from "react";
import { BiCheckCircle } from "react-icons/bi";

function ChannelCard({ item }) {
  return (
    <div className="flex justify-center items-center w-[356px] md:w-[320px] h-[326px] m-auto rounded-sm ">
      <div>
        <div className="flex flex-col justify-center items-center text-white">
          <Image
            src={item?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={item?.snippet?.title}
            height={180}
            width={180}
            className=" h-48 w-48 mb-4 border-x-yellow-200"
          />
          <h6 className="flex flex-row bg-black p-2">
            {item?.snippet?.title}
            <BiCheckCircle className="h-4 w-4 flex justify-center items-center ml-2 text-blue-600 " />
          </h6>
          {item?.statistics?.subscriberCount && (
            <h6 className="text-base font-medium text-gray-700">
              {parseInt(item?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}
              Subscribers
            </h6>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChannelCard;
