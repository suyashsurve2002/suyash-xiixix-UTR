import React from 'react'
import Heading from "@/app/_components/PropertiesComponents/Heading_property";

export const GalleryImages = ({property}) => {
  return (
    <div className="flex-column ">
      <h2 className="text-[30px] mt-[8vh]">Explore the Place</h2>

      <div className="flex justify-between gap-[1vw] h-[20vh] w-[30vw] mt-[5vh]">
        {property.images.gallery.map((item) => {
          return <img className="rounded-[10px]" src={item} />;
        })}
      </div>
    </div>
    
  )
}
