import React from "react";
import { Link } from "react-router-dom";
import Cna from '../../assets/images/cna.jpg'
const CnaProgram = () => {
  return (
    <div>



  <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-5">
        <h2 class="text-center text-[1.2rem]  md:text-4xl lg:text-4xl">
          <strong>
          Certified Nursing Assistant(CNA) 2 Year Program
          </strong>
        </h2>
      </div>


<div className='w-full bg-[#F2F2F7] h-full py-3 mt-5'>
  <div className='flex flex-col md:flex-row lg:flex-row md:justify-evenly mx-auto justify-center py-5'>
    <div className='w-full md:w-1/4 lg:w-1/4 p-4'>
      <Link to='#' className='no-underline text-center md:pt-5'>
        <img className="w-full h-[42vh]" src={Cna} alt="" />
      </Link>
    </div>

    <div className='w-full md:w-3/4 lg:w-[40rem] p-2'>
      <h3 className="font-bold sm:text-center md:text-left lg:left">
        <Link to="" target="_blank" className='text-black no-underline text-4xl line-clamp-[5rem]'> Certified Nursing Assistant(CNA) </Link>
      </h3>
      <p className="mt-2 pt-2 text-xl leading-[3rem]">
      Certified Nursing Assistant (CNA) is a (02) Two-years professional education program leading to practice as a Registered Nurse. The diploma program offers integrated nursing knowledge,
         skills and professional attitude. Upon completion of this program the graduate is prepared to be a safe clinical nurse, who will be able to provide comprehensive care at primary, secondary and tertiary levels with in hospitals and community settings.
       </p>
    </div>
  </div>
</div>














      <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-[4rem]">
        <h2 class="text-left text-[1.2rem]  md:text-xl lg:text-xl">
          <strong>Eligibility Criteria (CNA 2 Years Program)</strong>
        </h2>
      </div>

      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <p className="text-[#00000078]  font-bold">
          The Applicant must meet one of the following academic levels:
        </p>
        <ol class="list-decimal text-md pl-4 text-[#00000078]">
          <li>
            FSc (Pre-Medical) with 45% marks minimum (Physics, Chemistry &
            Biology as compulsory subjects).
          </li>
          <li>FA with 50% Marks ·.</li>
          <li>
            Matric (Science) with 45 % marks minimum (Physics, Chemistry &
            Biology as compulsory subjects).
          </li>
          <li>D. Matric (Arts) with 50% marks.</li>
        </ol>
      </div>

      <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto py-3">
        <h2 class="text-left text-[1.2rem]  md:text-xl lg:text-xl">
          <strong>
            Documents Required:- (All docs should be attested by a grade 17
            officer)
          </strong>
        </h2>
      </div>

      <div className="sm:w-full xm:overflow-x-scroll  md:w-3/3 lg:w-3/4 md:mx-auto">
        <table className="w-full  sm:w-full mb-[2.5rem] lg:w-3/2 border-collapse border">
          {/* <thead>
          <tr className='border'>
            <th className="text-left px-4 py-2 border">No.</th>
            <th className="text-left px-4 py-2 border">Document</th>
            <th className="text-left px-4 py-2 border">Requirement</th>
         
          </tr>
        </thead> */}
          <tbody>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">1</td>
              <td className="text-left px-4 py-2 border">Matric Mark Sheet</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border">
              <td className="text-left px-4 py-2 border">2</td>
              <td className="text-left px-4 py-2 border">Matric Certificate</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border ">3</td>
              <td className="text-left px-4 py-2 border">FSc Mark Sheet</td>
              <td className="text-left px-4 py-2 border ">
                One copy with attestation
              </td>
            </tr>
            <tr className="border">
              <td className="text-left px-4 py-2 border">4</td>
              <td className="text-left px-4 py-2 border">FSc Certificate</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">5</td>
              <td className="text-left px-4 py-2 border">Diploma in Nursing</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border">
              <td className="text-left px-4 py-2 border">6</td>
              <td className="text-left px-4 py-2 border">
                Mark sheet 1st .2nd & Final year Nursing
              </td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">7</td>
              <td className="text-left px-4 py-2 border">Active PNC License</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border ">
              <td className="text-left px-4 py-2 border">8</td>
              <td className="text-left px-4 py-2 border">C.N.I.C</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border bg-gray-100">
              <td className="text-left px-4 py-2 border">9</td>
              <td className="text-left px-4 py-2 border">Domicile</td>
              <td className="text-left px-4 py-2 border">
                One copy with attestation
              </td>
            </tr>
            <tr className="border b">
              <td className="text-left px-4 py-2 border">10</td>
              <td className="text-left px-4 py-2 border">Photographs</td>
              <td className="text-left px-4 py-2 border">
                Passport size three photographs
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto py-3">
        <h2 class="text-left text-[1.2rem]  md:text-2xl lg:text-2xl">
          <strong>Goals</strong>
        </h2>
      </div>

      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <p className=" text-lg  font-bold  text-[#00000078]">
          In keeping with our philosophy, the major goals of PNC to start this
          program are to:
        </p>
        <ol class="list-disc pl-4 text-lg  text-[#00000078]">
          <li>
            Educate nurses with appropriate knowledge, skills and attitudes and
            with clinical competency.
          </li>
          <li>
            Maintain a safe and healthy environment for the prevention of
            disease, promotion and maintenance of health.
          </li>
          <li>
            Provide information, counseling and health education to individual
            family and community.
          </li>
          <li>
            Participate in screening, case identification and management of
            common minor illness and injuries.
          </li>
          <li>
            Participate actively in professional organization for the
            improvement of the nursing profession.
          </li>
        </ol>
      </div>

      <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto py-3">
        <h2 class="text-left text-[1.2rem]  md:text-2xl lg:text-2xl">
          <strong>Core Competencies:</strong>
        </h2>
      </div>

      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <ol class="list-decimal pl-4 text-lg text-[#00000078]">
          <li>Critical thinking</li>
          <li>Communication</li>
          <li> Evidence Based Practice</li>
          <li>Technical knowledge</li>
        </ol>
      </div>

      <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto py-3">
        <h2 class="text-left text-[1.2rem]  md:text-2xl lg:text-2xl">
          <strong>Critical thinking:</strong>
        </h2>
      </div>

      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <p className="text-[#00000078]  text-lg">
          Critical thinking underlies independent and interdependent decision
          making. Critical thinking includes questioning, analysis, syntheses,
          interpretation, inference, inductive and deductive reasoning,
          intuition, application, and creativity.
        </p>
      </div>

      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <p className="text-[#00000078] font-bold text-lg">
          Course work or clinical experiences should provide the graduate with
          the knowledge and skills to:
        </p>
      </div>

      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <ol class="list-decimal pl-4 text-lg text-[#00000078]">
          <li>
            Use nursing and other appropriate theories and models, and an
            appropriate ethical framework,
          </li>
          <li>
            Apply research-based knowledge from nursing and the sciences as the
            basis for practice,
          </li>
          <li>Use clinical judgment and decision-making skills,</li>
          <li>
            Engage in self reflection and collegial dialogue about professional
            practice,
          </li>
          <li>
            Evaluate nursing care outcomes through the acquisition of data and
            the questioning of inconsistencies allowing for the revision of
            actions and goals,
          </li>
          <li>Engage in creative problem solving.</li>
        </ol>
      </div>

      <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto py-3">
        <h2 class="text-left text-[1.2rem]  md:text-2xl lg:text-2xl">
          <strong>Evidence - based practice:</strong>
        </h2>
      </div>

      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <p className="text-[#00000078]   font-bolder text-lg">
          It involves assessment, which is gathering information about the
          health status of the patient, analyzing and synthesizing those data,
          making judgments about nursing interventions based on the findings,
          and evaluating patient care outcomes. It also includes understanding
          the family, community, or population and utilizing data from
          organizations and systems in planning and delivering care.
        </p>
      </div>


      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <p className="text-[#00000078] text-lg font-bold">
        Course work or clinical experiences should provide the graduate with the knowledge and skills to:
        </p>
        <ol class="list-disc font-bolder text-lg pl-4 text-[#00000078]">
          <li>
          Perform a risk assessment of the individual including lifestyle, family and genetic history, and other risk factors using scholarly research literature,
          </li>
          <li>Perform a holistic assessment of the individual across the lifespan, including a health history that includes spiritual, social, cultural, and psychological assessment, as well as a comprehensive physical exam using bedside interview with patient and relatives.</li>
          <li>
          Evaluate an individual's capacity to assume responsibility for self care.
          </li>
          <li>Perform a community health risk assessment and provide outcome based interventions,</li>
          <li>Used evidence based findings to diagnose, plan, deliver and evaluate quality care.</li>
        
        </ol>
      </div>




      <div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto py-3">
        <h2 class="text-left text-[1.2rem]  md:text-2xl lg:text-2xl">
          <strong>
          Technical knowledge:
          </strong>
        </h2>
      </div>


      <div class="w-full   mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
        <p className="text-[#00000078]   font-bolder text-lg">
        Acquisition and use of technical skills are required for the delivery of nursing care. While the baccalaureate graduate must be adept at performing skills, major roles will also include teaching, delegating, and supervising the performance of skilled tasks by others. Consequently, graduates must approach their understanding and use of skills in a sophisticated theoretical and analytic manner. The acquisition of new skills is an ongoing competent of the nursing career. Skills development should focus on the mastery of core scientific principles that underline all skills, thus preparing the graduate to incorporate current and future technical skills into other nursing responsibilities, and apply skills in diverse contexts of health care delivery.
        </p>



        <ol class="list-disc font-bolder text-lg pl-4 text-[#00000078]">
          <li>
          The teaching, learning and assessment of any given skill should serve as an exemplar that focuses as much on helping the student learn the process for life long self-mastery of needed skills, as on the learning of the specific skill itself. The emphasis must be on helping students identify those skills essential for baccalaureate nursing practice and understanding the scientific principles that underlie the application of these skills.
          </li>
         <li>The graduate should be able to perform, teach, delegate, and supervise these skills with safety and competence. As nursing practice changes to meet the needs of contemporary health care delivery, required skills and expectations related to the graduate's competence must be reviewed and revised.</li>
        
        </ol>

        <p className="text-[#00000078] text-lg font-bold">
        Course work or clinical experiences should provide the graduate with the knowledge and skills to:
        </p>




        <ol class="list-disc font-bolder text-lg pl-4 text-[#00000078]  mb-8">
          <li>
          Monitor and assess vital signs, including pulse and respiratory rates, temperature, pulse, blood pressure, and three-lead electrocardiogram

        </li>
         <li>Provide appropriate individual hygiene maintenance;</li>
         <li>Apply infection control measure;</li>
         <li>Assess and manage wounds, including irrigation, application of dressings, and suture / staple removal;</li>
         <li>Provide and teach ostomy care;</li>
         <li>Apply heating and cooling devices;</li>
         <li>Apply and teach proper positioning and mobility techniques, including range of motion exercises, transferring, ambulating, and use of assistive devices;</li>
         <li>Provide nursing care using proper safety techniques, including the use of all systems, identification procedures, appropriate use of restrains, and basic fore, radiation, and hazardous materials protection;</li>
         <li>Administer CPR</li>
         <li>Perform specimen collection techniques;</li>
         <li>Perform accurate intake and output calculations and recording;</li>
         <li>Administer medications by all routes;</li>
         <li>Initiate, assess, and regulate intravenous therapies</li>
         <li>Demonstrate the proper use and care for various therapeutic tubes and drains.</li>
         <li>Provide comfort and pain reduction measures including positioning and therapeutic touch;</li>
         <li>Provide care of the respiratory system, including chest physiotherapy, oxygen therapy, resuscitation, spirometry, and suctioning</li>
         <li>Provide teaching, and emotional and physical support in preparation for therapeutic procedure; and Provide pre-operative and post-operative teaching and care.</li>
        
        </ol>







      </div>


















    </div>
  );
};

export default CnaProgram;
