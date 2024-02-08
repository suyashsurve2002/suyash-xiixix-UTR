import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const Faqs = ({property}) => {
  return (
    <div className=" mt-[3vh] rounded-[20px] px-[2vw] py-[5vh] ">
    <h2 className="text-[30px]  mb-[2vh]">FAQ</h2>
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
