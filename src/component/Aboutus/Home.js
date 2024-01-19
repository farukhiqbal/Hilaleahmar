import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import CounterUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "./BackgroundImage";
import g1 from '../../assets/images/g1.jpg';
import g2 from '../../assets/images/g2.jpg';
import g3 from '../../assets/images/g3.jpg';
import g4 from '../../assets/images/g4.jpg';
import g5 from '../../assets/images/g5.jpg';
import g6 from '../../assets/images/g6.jpg';
import carosel2 from '../../assets/images/carosel2.jpg';
import carosel3 from '../../assets/images/carosel3.jpg';
import chairman from '../../assets/images/chairman.jpg';
import nebplogo from '../../assets/images/nebplogo.jpg';
import pnclogo from '../../assets/images/pnclogo.jpg';
import Cna from '../../assets/images/cna.jpg'
import midwife from '../../assets/images/midwife.jpg'
import health from '../../assets/images/health.jpg'




const Home = () => {
  const [counteron, setcounteron] = useState(false);





  const Gallery = [
    {
      id: 1,
      imageSrc:g1
      },

    {
      id: 2,
      imageSrc:g2
    },
    {
      id: 3,
      imageSrc:
        g3
    },

    {
      id: 4,
      imageSrc:
          g4
    },
    {
      id: 5,
      imageSrc:
        g5
    },

    {
      id: 6,
      imageSrc:
      g6
    },
  
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768, // Adjust the breakpoint as needed for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "25%", // Adjust the padding as needed
        },
      },
      {
        breakpoint: 560, // Adjust the breakpoint as needed for tablets and larger screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "10%", // Adjust the padding as needed
        },
      },
    ],
  };
       

  return (
    <>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
          <img
            className="d-block w-100  lg:h-[600px] sm:h-[700px]"
            src={carosel2}
            alt="Second slide"
       
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  lg:h-[600px] sm:h-[700px]"
            src={carosel3}
            alt="Second slide"
       
          />
        </Carousel.Item>
    
      </Carousel>

      <Container>
        <div className="row  mt-6  mb-5 ">
          <div className="col-md-6  col-sm-12 col-lg-6 ">
          <div className="sm:flex sm:flex-col  sm:justify-center md:items-start">
  <div className="title text-center ">
    <h2 className="mt-[15px]">Chairman's Message</h2>
    <img
      src={chairman}
      width="250px"
      height="250px"
      alt="/"
      className="mx-auto  text-center"
    />
      <p className="name-heading mt-2">Dr. HAFIZ MUKHTAR AHMAD RANDHAWA</p>

  </div>




</div>


            <span className="member">
              <b>MEMBERS OF THE RED CRESENT SOCIETY “EXECUTIVE BODY”</b>
            </span>
            <p>
              "As the chairman of this institution, I anticipate the full
              participation and cooperation of the students and parents to make
              it possible for us to transform those dreams to reality. And if
              there is any assistance that you might need, may it be personal or
              professional, I shall always be willing to hear from you."
            </p>
          </div>




       
     

          <div className="col-md-6  col-sm-12     ">
              <br/>
              <br/>
              <div className=" row mt-5   main-council">  
            <div className="col-md-6 col-sm-12  col-lg-6 council-logo-left">
              <img
                src={nebplogo}
                alt="/"
               fluid
              />
              <h4 className="text-center mt-2">Pakistan Nursing Council</h4>
            </div>

            <div className="col-md-6 col-sm-12 mb-5 council-logo-right">
              <img
                src={pnclogo}
                alt="/"
                // width="250px"
                // height="250px"
                fluid
              />

              <h4 className="text-center mt-2">Nursing Examination Board</h4>
            </div>

             </div>





          </div>
        </div>
      </Container>


       





      {/* ================ home heading1============================= */}



      <div className="col-span-12  mb-5 md:mb-0 lg:mb-10 xl:mb-15  ">
  <div className="Heading text-center text-white">
    <h1 className="text-[2rem] sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl uppercase font-elaineSans-ExtraLight transition-all duration-300 ease-in-out">
      <span className="text-black sm:mb-[2rem]">OUR Nursing   Program</span>
    </h1>
  </div>
</div>
     {/* =====================================end =========================== */}
     
     


<div className='w-full bg-[#f2f2f7df] h-full py-3 mt-5'>

<div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-5">
        <h2 class="text-left text-[1.2rem]  md:text-4xl lg:text-4xl">
          <strong>
          Certified Nursing Assistant (CNA)  2 Year Program
          </strong>
        </h2>
      </div>



  <div className='flex flex-col md:flex-row lg:flex-row md:justify-evenly mx-auto justify-center py-5'>
    
    <div className='w-full md:w-1/4 lg:w-1/4 p-'>
    
      <Link to='#' className='no-underline text-center md:pt-5'>
        <img className="w-full h-[50vh]" src={Cna} alt="" />
      </Link>
    </div>

    <div className='w-full md:w-3/4 lg:w-[40rem] p-2'>
      <h3 className="font-bold sm:text-center md:text-left lg:left">
        <Link to="" target="_blank" className='text-black no-underline text-2xl line-clamp-[5rem]'> Scope of (CNA) </Link>
      </h3>
      <p className="mt-2 pt-2 text-xl leading-[3rem]">
      Certified Nursing Assistant (CNA) is a (02) Two-years professional education program leading to practice as a Registered Nurse. The diploma program offers integrated nursing knowledge,
         skills and professional attitude. Upon completion of this program the graduate is prepared to be a safe clinical nurse, who will be able to provide comprehensive care at primary, secondary and tertiary levels with in hospitals and community settings.
       </p>
    </div>
  </div>
</div>


{/* =========================================CNA part EnD======================================= */}










<div className='w-full  h-full py-1'>

<div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-5">
        <h2 class="text-left text-[1.2rem]  md:text-4xl lg:text-4xl">
          <strong>
          Community Midwife  (CMW)  2 Year Program
          </strong>
        </h2>
      </div>



  <div className='flex flex-col md:flex-row lg:flex-row md:justify-evenly mx-auto justify-center py-5'>
    
    <div className='w-full md:w-1/4 lg:w-1/4 p-'>
    
      <Link to='#' className='no-underline w-full text-center md:pt-5'>
        <img className="w-full h-[50vh]" src={midwife} alt="" />
      </Link>
    </div>

    <div className='w-full md:w-3/4 lg:w-[40rem] p-2'>
      <h3 className="font-bold sm:text-center md:text-left lg:left">
        <Link to="" target="_blank" className='text-black no-underline text-2xl line-clamp-[5rem]'> Scope of (CMW) </Link>
      </h3>
      <p className="mt-2 pt-2 text-xl leading-[3rem]">
      This is a two years’ diploma program, leading to practice as a Registered Midwife (RM). The CMW diploma program has been designed for training rural females as midwives who can provide maternal and newborn care to women and children of their communities. Rural females meeting the CMW eligibility criteria enter into this program through a formal selection process.
     
      </p>
    </div>
  </div>
</div>




{/* ======================================cmw part end ============================================== */}







<div className='w-full bg-[#f2f2f7df]  h-full py-1'>

<div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-5">
        <h2 class="text-left text-[1.2rem]  md:text-4xl lg:text-4xl">
          <strong>
          Lady Health Visitors (LHV)  2 Year Program
          </strong>
        </h2>
      </div>



  <div className='flex flex-col md:flex-row lg:flex-row md:justify-evenly mx-auto justify-center py-5'>
    
    <div className='w-full md:w-1/4 lg:w-1/4 p-'>
    
      <Link to='#' className='no-underline text-center md:pt-5'>
        <img className="w-[100vw] h-[50vh]" src={health} alt="" />
      </Link>
    </div>

    <div className='w-full md:w-3/4 lg:w-[40rem] p-2'>
      <h3 className="font-bold sm:text-center md:text-left lg:left">
        <Link to="" target="_blank" className='text-black no-underline text-2xl line-clamp-[5rem]'> Scope of (LHV) </Link>
      </h3>
      <p className="mt-2 pt-2 text-xl leading-[3rem]">
      A LHV is eligible to provide health care facilities at home and in other health care settings; community, hospitals, clinics, or health units.
Employment in the government sector at DHQ or THQ healthcare settings under maternal and child healthcare facilities.   </p>
   
      
    </div>
  </div>
</div>


{/* ================================================lhv part end ================================= */}







{/* =============================home heading 2 ========================= */}

<div className="col-span-12 mb-5 md:mb-2 lg:mb-32 xl:mb-8 mt-[5rem]">
  <div className="Heading text-center text-white">
    <h1 className="text-[2rem] sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl uppercase font-elaineSans-ExtraLight transition-all duration-300 ease-in-out">
      <span className="text-black"> VISion & mission</span>
    </h1>
  </div>
</div>





 {/* ==========================dispaly image 2 ===================================== */}


<div className="image-display flex flex-col sm:flex-col md:flex-row w-full overflow-hidden bg-[#f2f2f7df]">
  {/* First Image */}
  <div className="image-container relative h-80 md:w-1/3 " >
    <div className="content-display absolute  p-8 ">
    <div className="heading heading-with-icon icon-left">
                        <div className="icon text-center text-black  pt-1">
                          <span>
                            <i
                              style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                                height: "auto",
                                width: "50px",
                                lineHeight: "normal",
                                color: "black",
                                fontSize: "50px",
                              }}
                              aria-hidden="true"
                              className="fontawesome-icon fa-eye fas circle-no"
                            ></i>
                          </span>
                        </div>
                        <h2 className="text-black text-3xl font-bold mt-4 mb-2 text-center">
                          Mission
                        </h2>
                      </div>

           <p className="text-black">The Hilal-E-Ahmar School of Nursing will be a nationally recognized center of excellence in inquiry, knowledge, and expertise. The school of nursing educators, clinicians, and researchers produce the next generation of nursing leaders empowered and focused on innovative responses to address the challenges of a rapidly changing and culturally diverse health care environment in Pakistan.</p>

       
    </div>
  </div>

  {/* Second Image */}
  <div className="image-container relative h-80 md:w-1/3 bg-cover bg-center transition-all transform" >
    <div className="content-display absolute inset-0 p-8 text-black">
    <div className="heading heading-with-icon icon-left">
                        <div className="icon text-center  pt-1">
                          <span>
                            <i
                              style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                                height: "auto",
                                width: "50px",
                                lineHeight: "normal",
                                color: "black",
                                fontSize: "50px",
                              }}
                              aria-hidden="true"
                              className="fontawesome-icon fa-record-vinyl fas circle-no"
                            ></i>
                          </span>
                        </div>
                        <h2 className="text-black text-3xl font-bold mt-4 mb-2 text-center">
                          Vision
                        </h2>
                      </div>
        <p className="text-justify  text-black">
                          The School of Nursing provides an innovative, caring,
                          and collaborative learning environment. The graduates
                          demonstrate integrity and are prepared for
                          interdisciplinary roles as nurse clinicians,
                          educators, researchers, and administrators
                        </p>
       
      
    </div>
  </div>

  {/* Third Image */}
  <div className="image-container relative h-80 md:w-1/3 bg-cover bg-center transition-all transform" >
    <div className="content-display absolute inset-0 p-8 text-black">
    <div className="heading heading-with-icon icon-left">
                        <div className="icon text-center pt-1">
                          <span>
                            <i
                              style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                                height: "auto",
                                width: "50px",
                                lineHeight: "normal",
                                color: "black",
                                fontSize: "50px",
                              }}
                              aria-hidden="true"
                              className="fontawesome-icon fa-graduation-cap fas circle-no"
                            ></i>
                          </span>
                        </div>
                        <h2 className="text-black text-3xl font-bold mt-4 mb-2 text-center">
                          Goal
                        </h2>
                      </div>
                      <div className="text-gray-300">
                        <p className="text-justify  text-black">
                          Educate the nurse to provide exemplary nursing care
                          appropriate to the health needs of urban and rural
                          populations in hospitals and communities. Provide
                          leadership in nursing education, practice,
                          administration and research.
                        </p>
                      </div>
                      </div>
    </div>
  </div>















     
      














{/* 
        <div className="counter-body">
  <ScrollTrigger onEnter={() => setcounteron(true)} onExit={() => setcounteron(false)}>
    <div className="count-container container mx-auto my-10 sm:my-20">
      <div className="count-width flex flex-wrap gap-4 sm:gap-6 lg:gap-8">
        <div className="count-col flex-1 p-4 sm:w-full lg:w-1/4">
          <div className="count-content border-2 border-black rounded-lg p-6 h-full">
            <div className="count-number text-4xl font-bold text-indigo-700">
              {counteron && <CounterUp start={0} end={517} duration={2} delay={0} />}
            </div>
            <div className="count-title text-lg font-semibold mt-4">Happy Clients </div>
          </div>
        </div>

        <div className="count-col flex-1 p-4 sm:w-full lg:w-1/4">
          <div className="count-content border-2 border-black rounded-lg p-6 h-full">
            <div className="count-number text-4xl font-bold text-indigo-700">
              {counteron && <CounterUp start={0} end={297} duration={2} delay={0} />}
            </div>
            <div className="count-title text-lg font-semibold mt-4">Projects Completed </div>
          </div>
        </div>

        <div className="count-col flex-1 p-4 sm:w-full lg:w-1/4">
          <div className="count-content border-2 border-black rounded-lg p-6 h-full">
            <div className="count-number text-4xl font-bold text-indigo-700">
              {counteron && <CounterUp start={0} end={13} duration={2} delay={0} />}
            </div>
            <div className="count-title text-lg font-semibold mt-4">Years of Experience</div>
          </div>
        </div>

        <div className="count-col flex-1 p-4 sm:w-full lg:w-1/4">
          <div className="count-content border-2 border-black rounded-lg p-6 h-full">
            <div className="count-number text-4xl font-bold text-indigo-700">
              {counteron && <CounterUp start={0} end={7} duration={2} delay={0} />}
            </div>
            <div className="count-title text-lg font-semibold mt-4">Global Presence </div>
          </div>
        </div>
      </div>
    </div>
  </ScrollTrigger>
</div>
 */}





      {/* =============================home heading 2 ========================= */}

      <div className="col-span-12 mb-4  sm:mb-1 md:mb-24 lg:mb-32 xl:mb-48  mt-5">
  <div className="Heading text-center text-white">
    <h1 className="text-[2rem] sm:text-3xl md:text-2xl lg:text-4xl xl:text-6xl uppercase font-elaineSans-ExtraLight transition-all duration-300 ease-in-out">
      <span className="text-black ">Gallery</span>
    </h1>
  </div>
</div>







<div className="container mx-auto  mb-[13rem] p-1">
        <div className="flex justify-center flex-wrap ">
          {/* Image 1 */}

           

        {
         Gallery.map((id)=>(

<div className="relative p-2 block lg:w-1/4 md:w-1/2 sm:w-full   transform transition-transform duration-300 hover:scale-105">
  <div className="fusion-gallery-image border-2 h-[14rem] sm:w-75 md:w-full border-red-400">
    <Link
      data-rel="iLightbox[gallery_image_7]"
      className="fusion-lightbox"
      target="_self"
      data-caption=""
    >
      <img
        decoding="async"
        src={id.imageSrc}
        
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


















      {/* ===========================================slider =================================== */}
      {/* <div className="">
  <div className="">
    <Slider {...settings}>
      {Gallery.map((item) => (
        <div key={item.id} className="m-5  p-6">
          <img
            src={item.imageSrc}
            className=""
            alt={item.altText}
          />
        </div>
      ))}
    </Slider>
  </div>
</div> */}


    </>
  );
};

export default Home;
