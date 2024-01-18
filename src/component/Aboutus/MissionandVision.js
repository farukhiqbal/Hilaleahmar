import React from "react";
import mission from '../../assets/images/vision-mission.jpg'

const MissionandVision = () => {
  return (
    <>
      <div className="mb-5 ">
        <div className=" relative">
          <img
            src={mission}
            alt=""
            className="w-full h-auto"
          />
        </div>

        <div className="text-sm   font-bold px-2 mx-auto  sm:w-full sm:mx-0 md:w-3/3 lg:w-3/4 md:mx-auto mt-[4rem]">
          <h2 className="sm:text-center text-[1.2rem] md:text-left lg:text-left   md:text-xl lg:text-xl">
            <strong>Hilal E Ahmer School of Nursing (HAH)</strong>
          </h2>

          <p className="sm:text-center   md:text-left   lg:pr-[0rem] mt-4  text-[#00000078]">
            300 bedded hospital providing tertiary health care services in the
            field of Gynecology/Obstetrics, Pediatrics and neonatology
            consisting of well equipped nursery and ICU. Hospital has also been
            recognized by the college of physicians and surgeons Pakistan for
            training of FCPS/MCPS. Post graduate doctors in the fields of
            obstratics and gynecology.
          </p>

          <p className="sm:text-center   md:text-left   lg:pr-[0rem] mt-4  text-[#00000078]">
            Hilal e Ahmar hospital located at the University road Faisalabad
            near to FIC hospital. It was started in 9 Aug 2001 and inaugurated
            in 21 Oct 2003.It consist of 65,109 sq./feet. Its ownership is under
            the Pakistan Red Crescent society.
          </p>

          <h2 className="sm:text-center text-[1.2rem] md:text-left lg:text-left   md:text-xl lg:text-xl">
            <strong>Goals</strong>
          </h2>
        </div>

        <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
          <p className="text-[#000000b6]">
            Consistent with our philosophy, the major goals of the BTSN are:
          </p>
          <ol class="list-disc pl-4 text-[#00000078]">
            <li>
              Educate the nurse to provide exemplary nursing care appropriate to
              the health needs of urban and rural populations in hospitals and
              communities.
            </li>
            <li>
              Provide leadership in nursing education, practice, administration
              and research.
            </li>
            <li>
              Graduate nurses with the capability of pursuing higher education
              at institutions of learning throughout the world.
            </li>
            <li>
              Provide opportunities of continuing education meet the nurses,
              institutions and communities in Pakistan.
            </li>
          </ol>
        </div>

        {/* =============================home heading 2 ========================= */}
        {/* 
      <div className=" col-md-12 mb-[6rem]  home-heading1">
        <div className="Heading text-center color-white">
          <h1>
            <span style={{ color: "#d9dadb" }}>Mission AND</span>
          </h1>
          <h2 className="text-uppercase">Vision</h2>
        </div>
      </div> */}
        {/* ==================================heading end==================================== */}

        {/* <div className="row">
        <h1 className="col-md-12   text-center mt-4">
           <span className="text-center   sm:text-[30px]   md:text-red ">
               Hilal E Ahmer School of Nursing (HAH)
           </span>
       
        </h1>
      </div> */}

        <div
          className="bg-[#1b2945] bg-center bg-cover  mt-[5rem]"
          style={{
            backgroundImage: "url(your-image-url)",
            borderWidth: "0px 0px 0px 0px",
            borderColor: "#1b2945",
            borderStyle: "solid",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div
                  className="bg-left-top bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: "url(your-image-url)",
                    padding: "0px",
                    minHeight: "0px",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1 bg-opacity-0 hover:bg-opacity-30 content-box-wrapper content-wrapper link-area-link-icon content-icon-wrapper-yes icon-hover-animation-fade">
                      <div className="heading heading-with-icon icon-left">
                        <div className="icon text-center pt-3">
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
                      <div className="text-gray-300">
                        <p className="text-justify">
                          The  Hilal-E-Ahmar School of Nursing will be a nationally
                          recognized center of excellence in inquiry, knowledge,
                          and expertise. The school of nursing educators,
                          clinicians, and researchers produce the next
                          generation of nursing leaders empowered and focused on
                          innovative responses to address the challenges of a
                          rapidly changing and culturally diverse health care
                          environment in Pakistan.
                        </p>
                      </div>
                    </div>

                    <div className="col-span-1 bg-opacity-0 hover:bg-opacity-30 content-box-wrapper content-wrapper link-area-link-icon content-icon-wrapper-yes icon-hover-animation-fade">
                      <div className="heading heading-with-icon icon-left">
                        <div className="icon text-center pt-3">
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
                      <div className="text-gray-300">
                        <p className="text-justify">
                          The School of Nursing provides an innovative, caring,
                          and collaborative learning environment. The graduates
                          demonstrate integrity and are prepared for
                          interdisciplinary roles as nurse clinicians,
                          educators, researchers, and administrators
                        </p>
                      </div>
                    </div>

                    <div className="col-span-1 bg-opacity-0 hover:bg-opacity-30 content-box-wrapper content-wrapper link-area-link-icon content-icon-wrapper-yes icon-hover-animation-fade">
                      <div className="heading heading-with-icon icon-left">
                        <div className="icon text-center pt-3">
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
                        <p className="text-justify">
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
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </>
  );
};

export default MissionandVision;
