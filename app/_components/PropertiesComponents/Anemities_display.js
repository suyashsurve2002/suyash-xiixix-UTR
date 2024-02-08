import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const Anemities = ({property}) => {
  return (
    <div>
    <h2 className="text-[30px] mt-[8vh] mb-[2vh]">Anemities</h2>
    {property.amenities.map((curr) => {
      return (
        <div className="flex items-center gap-[1vw] ">
          <img
            className=" mb-[2vh] rounded-[50%] p-[5px] h-[10vh] w-[4.8vw]  border-2 border-solid border-black"
            src={curr.pic}
          />
          <p>{curr.dsc}</p>
        </div>
      );
    })}
  </div>

  )
}
