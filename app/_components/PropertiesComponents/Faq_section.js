import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const Faqs = ({property}) => {
  return (
    <div className=" mt-[22.32px] rounded-[20px] px-[14.88px] py-[37.2px] ">
    <h2 className="text-[30px]  mb-[14.68px]">FAQ</h2>
    {property.faqs.map((curr) => {
      return (
        <div>
          <p>{curr.qus}</p>
          <li>{curr.ans}</li>
        </div>
      );
    })}
  </div>
  )
}
