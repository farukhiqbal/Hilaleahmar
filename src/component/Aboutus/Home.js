import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
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
     
     
    





<div className="image-display flex flex-col sm:flex-col md:flex-row w-full overflow-hidden">
  {/* First Image */}
  <div className="image-container relative h-80 md:w-1/2 bg-cover bg-center transition-all transform" style={{ backgroundImage: 'linear-gradient(rgba(33, 30, 30, 0.84), rgba(29, 25, 25, 0.7)), url(https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/299294266_365724325764568_4755002102037008504_n.jpg?stp=dst-jpg_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vcf71JRNl9YAX8Wxj4X&_nc_ht=scontent.flhe5-1.fna&oh=00_AfA9kksnlvM3msoaDrziFsAQ4lSauLy2GmiVZh5-4oFaNA&oe=65A56869)' }}>
    <div className="content-display absolute inset-0 p-8 text-white">

    <h2 className="text-4xl font-bold">
          <span>CNA 2 Year Program</span>
        </h2>
        <h3>
          An Otolaryngologist is a professional term called for an ear, nose, and throat doctor which we often refer to as ENT in short.
        </h3>
        <p>
          <Link to='/cnaprogram' className="wow fadeInRight">Read More</Link>
        </p>

    </div>
  </div>

  {/* Second Image */}
  <div className="image-container relative h-80 md:w-1/2 bg-cover bg-center transition-all transform" style={{ backgroundImage: 'linear-gradient(rgba(33, 30, 30, 0.84), rgba(29, 25, 25, 0.7)), url(https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/299294266_365724325764568_4755002102037008504_n.jpg?stp=dst-jpg_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vcf71JRNl9YAX8Wxj4X&_nc_ht=scontent.flhe5-1.fna&oh=00_AfA9kksnlvM3msoaDrziFsAQ4lSauLy2GmiVZh5-4oFaNA&oe=65A56869)' }}>
    <div className="content-display absolute inset-0 p-8 text-white">
    <h2 className="text-4xl font-bold">
          <span>LHV 2 Year Program</span>
        </h2>
        <h3>
           we provide women with compassionate, research-based care at every stage of life from adolescence to menopause and beyond.
        </h3>
        <p>
          <Link to='/lhvprogram' className="wow fadeInRight">Read More</Link>
        </p>
    </div>
  </div>
</div>

                  {/* ==============================row 2====================== */}


<div className="image-display flex flex-col sm:flex-col md:flex-row w-full overflow-hidden">
  {/* First Image */}
  <div className="image-container relative h-80 md:w-1/2 bg-cover bg-center transition-all transform" style={{ backgroundImage: 'linear-gradient(rgba(33, 30, 30, 0.84), rgba(29, 25, 25, 0.7)), url(https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/299294266_365724325764568_4755002102037008504_n.jpg?stp=dst-jpg_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vcf71JRNl9YAX8Wxj4X&_nc_ht=scontent.flhe5-1.fna&oh=00_AfA9kksnlvM3msoaDrziFsAQ4lSauLy2GmiVZh5-4oFaNA&oe=65A56869)' }}>
    <div className="content-display absolute inset-0 p-8 text-white">

    <h2 className="text-4xl font-bold">
          <span>CNA 2 Year Program</span>
        </h2>
        <h3>
          An Otolaryngologist is a professional term called for an ear, nose, and throat doctor which we often refer to as ENT in short.
        </h3>
        <p>
          <Link to='/cnaprogram' className="wow fadeInRight">Read More</Link>
        </p>

    </div>
  </div>

  {/* Second Image */}
  <div className="image-container relative h-80 md:w-1/2 bg-cover bg-center transition-all transform" style={{ backgroundImage: 'linear-gradient(rgba(33, 30, 30, 0.84), rgba(29, 25, 25, 0.7)), url(https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/299294266_365724325764568_4755002102037008504_n.jpg?stp=dst-jpg_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vcf71JRNl9YAX8Wxj4X&_nc_ht=scontent.flhe5-1.fna&oh=00_AfA9kksnlvM3msoaDrziFsAQ4lSauLy2GmiVZh5-4oFaNA&oe=65A56869)' }}>
    <div className="content-display absolute inset-0 p-8 text-white">
    <h2 className="text-4xl font-bold">
          <span>CMW 2 Year Program</span>
        </h2>
        <h3>
           we provide women with compassionate, research-based care at every stage of life from adolescence to menopause and beyond.
        </h3>
        <p>
          <Link to='/cmwprogram' className="wow fadeInRight">Read More</Link>
        </p>
    </div>
  </div>
</div>
















{/* =============================home heading 2 ========================= */}

<div className="col-span-12 mb-5 md:mb-2 lg:mb-32 xl:mb-8 mt-[5rem]">
  <div className="Heading text-center text-white">
    <h1 className="text-[2rem] sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl uppercase font-elaineSans-ExtraLight transition-all duration-300 ease-in-out">
      <span className="text-black">SUPPORT OUR mission</span>
    </h1>
  </div>
</div>





 {/* ==========================dispaly image 2 ===================================== */}


<div className="image-display flex flex-col sm:flex-col md:flex-row w-full overflow-hidden">
  {/* First Image */}
  <div className="image-container relative h-80 md:w-1/3 bg-cover bg-center transition-all transform" style={{ backgroundImage: 'linear-gradient(rgba(33, 30, 30, 0.84), rgba(29, 25, 25, 0.7)), url(https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/299294266_365724325764568_4755002102037008504_n.jpg?stp=dst-jpg_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vcf71JRNl9YAX8Wxj4X&_nc_ht=scontent.flhe5-1.fna&oh=00_AfA9kksnlvM3msoaDrziFsAQ4lSauLy2GmiVZh5-4oFaNA&oe=65A56869)' }}>
    <div className="content-display absolute inset-0 p-8 text-white">
    <div className="heading heading-with-icon icon-left">
                        <div className="icon text-center   pt-1">
                          <span>
                            <i
                              style={{
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                                height: "auto",
                                width: "50px",
                                lineHeight: "normal",
                                color: "#ffffff",
                                fontSize: "50px",
                              }}
                              aria-hidden="true"
                              className="fontawesome-icon fa-eye fas circle-no"
                            ></i>
                          </span>
                        </div>
                        <h2 className="text-white text-3xl font-bold mt-4 mb-2 text-center">
                          Mission
                        </h2>
                      </div>

           <p className="text-white">The Hilal-E-Ahmar School of Nursing will be a nationally recognized center of excellence in inquiry, knowledge, and expertise. The school of nursing educators, clinicians, and researchers produce the next generation of nursing leaders empowered and focused on innovative responses to address the challenges of a rapidly changing and culturally diverse health care environment in Pakistan.</p>

       
    </div>
  </div>

  {/* Second Image */}
  <div className="image-container relative h-80 md:w-1/3 bg-cover bg-center transition-all transform" style={{ backgroundImage: 'linear-gradient(rgba(33, 30, 30, 0.84), rgba(29, 25, 25, 0.7)), url(https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/299294266_365724325764568_4755002102037008504_n.jpg?stp=dst-jpg_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vcf71JRNl9YAX8Wxj4X&_nc_ht=scontent.flhe5-1.fna&oh=00_AfA9kksnlvM3msoaDrziFsAQ4lSauLy2GmiVZh5-4oFaNA&oe=65A56869)' }}>
    <div className="content-display absolute inset-0 p-8 text-white">
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
                                color: "#ffffff",
                                fontSize: "50px",
                              }}
                              aria-hidden="true"
                              className="fontawesome-icon fa-record-vinyl fas circle-no"
                            ></i>
                          </span>
                        </div>
                        <h2 className="text-white text-3xl font-bold mt-4 mb-2 text-center">
                          Vision
                        </h2>
                      </div>
        <p className="text-justify  text-white">
                          The School of Nursing provides an innovative, caring,
                          and collaborative learning environment. The graduates
                          demonstrate integrity and are prepared for
                          interdisciplinary roles as nurse clinicians,
                          educators, researchers, and administrators
                        </p>
       
      
    </div>
  </div>

  {/* Third Image */}
  <div className="image-container relative h-80 md:w-1/3 bg-cover bg-center transition-all transform" style={{ backgroundImage: 'linear-gradient(rgba(33, 30, 30, 0.84), rgba(29, 25, 25, 0.7)), url(https://scontent.flhe5-1.fna.fbcdn.net/v/t39.30808-6/299294266_365724325764568_4755002102037008504_n.jpg?stp=dst-jpg_p640x640&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vcf71JRNl9YAX8Wxj4X&_nc_ht=scontent.flhe5-1.fna&oh=00_AfA9kksnlvM3msoaDrziFsAQ4lSauLy2GmiVZh5-4oFaNA&oe=65A56869)' }}>
    <div className="content-display absolute inset-0 p-8 text-white">
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
                                color: "#ffffff",
                                fontSize: "50px",
                              }}
                              aria-hidden="true"
                              className="fontawesome-icon fa-graduation-cap fas circle-no"
                            ></i>
                          </span>
                        </div>
                        <h2 className="text-white text-3xl font-bold mt-4 mb-2 text-center">
                          Goal
                        </h2>
                      </div>
                      <div className="text-gray-300">
                        <p className="text-justify  text-white">
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
      {Department.map((item) => (
        <div key={item.id} className="">
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
