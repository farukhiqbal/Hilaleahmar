import React from "react";
import { Link } from "react-router-dom";

const SchoolInfrasture = () => {
  const Academicblock = [
    {
      id: 1,
      image: "./images/reception.jpg",
    },
    {
      id: 2,
      image: "./images/cooridor.jpg",
    },
    {
      id: 3,
      image: "./images/cooridor1.jpg",
    },
    {
      id: 4,
      image: "./images/oldoffice.jpg",
    },
    {
      id: 5,
      image: "./images/oldoffice1.jpg",
    },
    {
      id: 6,
      image: "./images/oldoffice2.jpg",
    },
    {
      id: 7,
      image: "./images/principaloffice.jpg",
    },
    {
      id: 8,
      image: "./images/cafe1.jpg",
    },
  
    {
      id: 9,
      image: "./images/cafe2.jpg",
    },
    {
      id: 10,
      image: "./images/cafe2.jpg",
    },
    {
      id: 11,
      image: "./images/cafe2.jpg",
    },
    {
      id: 12,
      image: "./images/cafe2.jpg",
    },
  ];

  return (
    <div>
      <div className="text-sm   font-bold px-2 mx-auto  sm:w-full sm:mx-0 md:w-3/3 lg:w-3/4 md:mx-auto mt-[4rem]">
        <h2 className="text-center text-[1.2rem]  md:text-xl lg:text-xl">
          <strong>INTRODUCTION OF NURSING SCHOOL HAH FAISALABAD</strong>
        </h2>
     

 <p className="sm:text-center   md:text-left    lg:pr-[0rem] mt-4 px-10 text-[#00000078]">
          HAH introduces three courses for students including CNA( Certified
          Nursing Assistant), LHV ( Lady Health Visitor), and CMW ( Community
          Midwife).Nursing school consist of three fully equipped class rooms,
          Skill lab, CPC room, library, computer lab, meeting room, principal &
          vice principal office, faculty office, student affair office, nursing
          hostel & visiting room..
            </p>




      </div>

      <div className="text-sm font-bold mb-5 px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-[4rem]">
        <h2 className="text-center text-[1.4rem]  md:text-2xl lg:text-xl">
          <strong>Academic Block</strong>
        </h2>
      </div>




      <div className="container mx-auto  mb-[13rem] p-1">
        <div className="flex justify-center flex-wrap ">
          {/* Image 1 */}

           

        {
          Academicblock.map((id)=>(

<div className="relative p-2 block lg:w-1/4 md:w-1/2 sm:w-full   transform transition-transform duration-300 hover:scale-105">
  <div className="fusion-gallery-image border-2 h-[14rem] w-full border-black">
    <Link
      data-rel="iLightbox[gallery_image_7]"
      className="fusion-lightbox"
      target="_self"
      data-caption=""
    >
      <img
        decoding="async"
        src={id.image}
        
        alt=""
        title="reception"
        aria-label="reception"
        className="img-responsive wp-image-882 fusion-gallery-image-size-fixed h-full w-full"
      />
    </Link>
  </div>
</div>


 
          ))
        }

        </div>
      </div>
    </div>
  );
};

export default SchoolInfrasture;
