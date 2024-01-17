import React from "react";
import viceprinciple from '../../assets/images/viceprinciple.png';
import nursing from '../../assets/images/nursing.jpg';
import nursing2  from '../../assets/images/nursing2.png';
import nursing3 from '../../assets/images/nursing3.jpg';
import english from '../../assets/images/english.jpg';
import nursing4 from '../../assets/images/nursing4.jpg';
import students from '../../assets/images/students.jpeg';
import najma from '../../assets/images/najma.jpg';


import { Link } from "react-router-dom";

const Chairmanpage = () => {
  const Academicblock = [
    {
      id: 1,
      image: viceprinciple,
      title:'Vice Principal',
      name:'Bushra Farzana'
    },
    {
      id: 2,
      image: nursing,
      title:'Nursing Instructor',
      name:'Nighat Rubeena'
    },
    {
      id: 3,
      image: nursing2,
      title:'Nursing Instructor',
      name:'Rafiqan Bibi'
    },
    {
      id: 4,
      image: nursing3,
      title:'Nursing Instructor',
      name:'Asma Parveen'
    },


    {
      id: 5,
      image: english,
      title:'English Lecturer',
      name:'Fozia Tahir'
    },

    {
      id: 6,
      image: nursing4,
      title:'Nursing Instructor',
      name:'Miss Hira'
    },
    {
      id: 7,
      image: najma,
      title:'Student Affairs',
      name:'Miss. Najma'
    },
    {
      id: 8,
      image: nursing,
      title:'Nursing Instructor',
      name:'Nighat Rubeena'
    },
    {
      id: 9,
      image: nursing2,
      title:'Nursing Instructor',
      name:'Shameem Akhtar'
    },

    {
      id:10 ,
      image: students,
      title:'IT Department',
      name:'Rimsha Razzaq'
    },
  ];



  
  return (
    <>
      {/* <div className="text-center mt-5 mb-4 text-[30px]">
        <p>Chairman's Message</p>
      </div> */}

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 lg:mr-4">
        <div className="bg-cover bg-top    h-45 pb-[5rem] relative">
 

            <div className="person person-center person-icon-top">
              <div className="person-shortcode-image-wrapper">
                <div className="person-image-container  h-25 md:h-full lg:full rounded-[40px]  border-3 border-gray-200  m-5"
                   style={{
                 
                    border: "0px solid #e2e2e2",
                    boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.3)",
                  }}>
                  <img
                    className="person-img w-full h-[400px] md:h-75 md:w-75 lg:h-full  rounded-[40px]  object-cover "
                    src="../../assets/images/priciple.jpg"
                    alt="Principal"
                  />
                </div>
              </div>
              <div className="person-desc">
                <div className="person-author">
                  <div className="person-author-wrapper text-center text-[25px] mt-1   p-2">
                    <span className="person-name font-semibold text-center">
                      Principal:
                    </span>
                    <span className="person-title ">Miss Azra Parveen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 mt-5">
          <div className=" h-full sm:text-center md:text-left lg:text-left">
            <h3
              className="text-4xl  text-center md:text-left lg:text-left"
              data-fontsize="32"
              data-lineheight="41.6px"
            >
              Principal Message
            </h3>
            <p className="sm:text-center   md:text-left  sm:p-3  lg:pr-[3rem] mt-4 px-10">
              I am honored and feel very privileged to be the Principal of Hilal
              E Ahmer School of Nursing (HAH). HAH has a foresight and vision to
              prepare professional nurses, in order to improve standards of
              nursing education and patient care through quality education and
              training. Since the day of my joining, I am always excited and
              look forward to work with our brilliant students, well-qualified
              staff, and respected parents to make our nursing education and
              training according to the highest standards.
            </p>

            <p className="sm:text-center   md:text-left  sm:p-3 lg:pr-[3rem] mt-4 px-10">
              I am honored and feel very privileged to be the Principal of Hilal
              E Ahmer School of Nursing (HAH). HAH has a foresight and vision to
              prepare professional nurses, in order to improve standards of
              nursing education and patient care through quality education and
              training. Since the day of my joining, I am always excited and
              look forward to work with our brilliant students, well-qualified
              staff, and respected parents to make our nursing education and
              training according to the highest standards.
            </p>

            <p className="sm:text-center   md:text-left  sm:p-3 lg:pr-[3rem] mt-4 px-10">
              I am honored and feel very privileged to be the Principal of Hilal
              E Ahmer School of Nursing (HAH). HAH has a foresight and vision to
              prepare professional nurses, in order to improve standards of
              nursing education and patient care through quality education and
              training. Since the day of my joining, I am always excited and
              look forward to work with our brilliant students, well-qualified
              staff, and respected parents to make our nursing education and
              training according to the highest standards.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap ">
        <div className="w-full h-full  sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
          <div className="bg-center bg-no-repeat bg-cover  p-5">
            <div className="person person-center person-2 person-icon-top">
              <div className="person-shortcode-image-wrapper rounded-full">
                <div className="person-image-container hover-type-zoomout glow person-rounded-overflow rounded-full border-3 border-gray-200"
                   style={{
                 
                    border: "0px solid #e2e2e2",
                    boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    decoding="async"
                    className="person-img img-responsive wp-image-854 w-full h-full object-cover rounded-full"
                    src="./images/chairman.jpg"
                    alt="Vice Principal"
                  />
                </div>
              </div>
              <div className="person-desc text-center">
                <div className="person-author block w-full">
                  <div className="person-author-wrapper block w-full ">
                    <span className="person-name block text-[20px]  mt-3">
                      Medical Superintendent/Chair Person
                    </span>
                    <span className="person-title block font-semibold text-[25px]">
                      Dr. Hafiz Mukhtar Ahmad Randhawa
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fusion-clearfix"></div>
          </div>
        </div>

        <div className="w-full h-full  sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
          <div className="bg-center bg-no-repeat bg-cover  p-5">
            <div className="person person-center person-2 person-icon-top">
              <div className="person-shortcode-image-wrapper rounded-full">
                <div className="person-image-container hover-type-zoomout glow person-rounded-overflow rounded-full border-3 border-gray-200"
                   style={{
               
                    border: "0px solid #e2e2e2",
                    boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    decoding="async"
                    className="person-img img-responsive wp-image-854 w-full h-full object-cover rounded-full"
                    src="./images/ams.jpg"
                    alt="Vice Principal"
                  />
                </div>
              </div>
              <div className="person-desc text-center">
                <div className="person-author block w-full">
                  <div className="person-author-wrapper block w-full ">
                    <span className="person-name block text-[20px]  mt-3">
                   
                      Assistant   Medical Superintendent
                    </span>
                    <span className="person-title block  font-semibold text-[25px]">
                      Dr. Masood Bukhari
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fusion-clearfix"></div>
          </div>
        </div>

        <div className="w-full h-full  sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4">
          <div className="bg-center bg-no-repeat bg-cover  p-5">
            <div className="person person-center person-2 person-icon-top">
              <div className="person-shortcode-image-wrapper rounded-full">
                <div className="person-image-container hover-type-zoomout glow person-rounded-overflow rounded-full border-3 border-gray-200"
                   style={{
                   
                    border: "0px solid #e2e2e2",
                    boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    decoding="async"
                    className="person-img img-responsive wp-image-854 w-full h-full object-cover rounded-full"
                    src="./images/hod.jpg"
                    alt="Vice Principal"
                  />
                </div>
              </div>
              <div className="person-desc text-center">
                <div className="person-author block w-full">
                  <div className="person-author-wrapper block w-full ">
                    <span className="person-name block text-[20px]  mt-3">
                      HOD/Gynae/OBS
                    </span>
                    <span className="person-title block  font-semibold text-[25px]  ">
                      Dr. Tehseen Aslam
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fusion-clearfix"></div>
          </div>
        </div>
      </div>

      {/* =================================================end image part============================= */}

      <div className="flex flex-wrap justify-center w-full mb-5 mt-5">
        <div className="w-full md:w-1/2 lg:w-1/2 mb-1 md:mb-1">
          <div className="bg-cover  relative animate__animated animate__rubberBand">
            <div className="fusion-text text-center">
              <h4 className="text-2xl font-bold">Faculty Members</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto  mb-[13rem] p-1">
        <div className="flex justify-center flex-wrap ">
          {/* Image 1 */}

          {Academicblock.map((id) => (
            <div className="w-full h-full xm:w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4">
              <div className="bg-center bg-no-repeat bg-cover p-5">
                <div className="person person-center person-2 person-icon-top">
                  <div className="person-shortcode-image-wrapper  ">
                    <div
                      className="person-image-container  justify-center  text-center  h-[27rem] sm:h-[1rem] md:h-[18rem] rounded-[40px]  glow person-rounded-overflow  ease-in-out duration-300  transition-all   border-3 border-gray-200 overflow-hidden "
                      style={{

                        border: "0px solid #e2e2e2",
                        boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <img
                        decoding="async"
                        className="person-img img-responsive  wp-image-854 w-full  h-full  object-cover overflow-hidden transform transition-transform duration-500 hover:scale-[1.5]"
                        src={id.image}
                        
                        alt="Vice Principal"
                      />
                    </div>
                  </div>
                  <div className="person-desc text-center">
                    <div className="person-author block w-full">
                      <div className="person-author-wrapper block w-full ">
                        <span className="person-name block text-[20px]  mt-3">
                           {id.title}
                        </span>
                        <span className="person-title block  font-semibold text-[25px]">
                         {id.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fusion-clearfix"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chairmanpage;
