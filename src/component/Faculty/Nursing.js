import React from 'react'

const Nursing = () => {
  const Academicblock = [
 
    {
      id: 1,
      image: "./images/nursing.jpg",
      title:'Nursing Instructor',
      name:'Nighat Rubeena'
    },
  
    {
      id: 2,
      image: "./images/nursing3.jpg",
      title:'Nursing Instructor',
      name:'Asma Parveen'
    },
    {
      id: 3,
      image: "./images/nursing4.jpg",
      title:'Nursing Instructor',
      name:'Miss Hira'
    },
   
    {
      id: 4,
      image: "./images/nursing2.png",
      title:'Nursing Instructor',
      name:'Shameem Akhtar'
    },
    {
      id: 5,
      image: "./images/fozia.jpg",
      title:'English Lecture',
      name:'Fozia Tahir'
    }
  ];





  return (
    <div>


   {/* ================ home heading1============================= */}
     
     
   <div className="col-span-12   sm:mb-1 md:mt-10 lg:mt-10 xl:mt-10  ">
  <div className="Heading text-center text-white">
    <h1 className="text-[2rem] sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl uppercase font-elaineSans-ExtraLight transition-all duration-300 ease-in-out">
      <span className="text-black sm:mb-[2rem]"> Teaching  Faculty</span>
    </h1>
  </div>
</div>


        <div className="container mx-auto  mt-[3rem] mb-[13rem] p-1">
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
    </div>
  )
}

export default Nursing