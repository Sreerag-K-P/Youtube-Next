"use client";

import Sidebar from "./Sidebar";
import Videos from "./Videos";

function ClientSide({ datas, selected }) {
  let videos = datas.items;
  return (
    <div className="flex md:flex-row flex-col">
      <div className="h-auto md:h-[92vh] md:px-2">
        <Sidebar selected={selected} />

        <p className="mt-1 text-gray-600">Copy Right Sreerag k p 2023</p>
      </div>
      <div p={2} style={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <h4 className="font-bold text-2xl text-black my-4">
          {selected.replace("%20", " ")}
          <span style={{ color: "#FC1503" }}> : videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </div>
  );
}
export default ClientSide;
