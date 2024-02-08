import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const GuestsAllowed = ({property}) => {
  return (
    
    <div className="  mt-[5vh] rounded-[20px] px-[2vw] py-[5vh] ">
    <h2 className="text-[30px] ">Guests</h2>
    <li>Maximum Allowed: {property.numberofguest.max}</li>
    <li>Number of Adults: {property.numberofguest.numberofadults.max}</li>
    <li>
      Number of Children max & min:{" "}
      {property.numberofguest.numberofchilders.min}/
      {property.numberofguest.numberofchilders.max}
    </li>
  </div>

  )
}
