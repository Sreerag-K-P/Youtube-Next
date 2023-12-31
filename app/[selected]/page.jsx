import ClientSide from "@/components/ClientSide";
import React from "react";
import getDataItems from "../libs/getDataItems";
export const revalidate = 0; // revalidate at most every time
async function page({ params }) {
  const datas = await getDataItems(`search?part=snippet&q=${params.selected}`);
  return (
    <div>
      <ClientSide datas={datas} selected={params.selected} />
    </div>
  );
}

export default page;
