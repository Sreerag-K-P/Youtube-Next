import getDataItems from "@/app/libs/getDataItems";
import ChannelCard from "@/components/ChannelCard";
import Videos from "@/components/Videos";
import React from "react";

// app\channel\[channelId]
async function page({ params }) {
  const ChannelDetails = await getDataItems(
    `channels?part=snippet,statistics&id=${params.channelId}`
  );
  const data = await ChannelDetails;
  const item = data.items[0];

  const Related = await getDataItems(
    `search?channelId=${params?.channelId}&part=snippet&order=date`
  );
  const videos = Related.items;

  return (
    <div>
      <div className="w-full">
        <ChannelCard item={item} />
      </div>
      <div display="flex p-3 mx-auto">
        <Videos videos={videos} />
      </div>
    </div>
  );
}

export default page;
