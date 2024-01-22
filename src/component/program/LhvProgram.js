import React from 'react'
import { Link } from 'react-router-dom'
import health from '../../assets/images/health.jpg'

const LhvProgram = () => {
  return (
    <div>


<div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-5">
        <h2 class="text-center text-[1.2rem]  md:text-4xl lg:text-4xl">
          <strong>
          Lady Health Visitors (LHV) (02 years Diploma Program)
          </strong>
        </h2>
      </div>






<div className='w-full bg-[#F2F2F7] h-full py-3 mt-5'>
  <div className='flex flex-col md:flex-row lg:flex-row md:justify-evenly mx-auto justify-center py-5'>
    <div className='w-full md:w-1/4 lg:w-1/4 p-4'>
      <Link to='#' className='no-underline text-center md:pt-5'>
        <img className="w-full h-[40vh]" src={health} alt="" />
      </Link>
    </div>

    <div className='w-full md:w-3/4 lg:w-[40rem] p-2'>
      <h3 className="font-bold sm:text-center md:text-left lg:left">
        <Link to="" target="_blank" className='text-black no-underline text-4xl line-clamp-[5rem]'>Lady Health Visitors (LHV) </Link>
      </h3>
      <p className="mt-2 pt-2 text-xl leading-[3rem]">
      A LHV is eligible to provide health care facilities at home and in other health care settings; community, hospitals, clinics, or health units.
Employment in the government sector at DHQ or THQ healthcare settings under maternal and child healthcare facilities.   </p>
    </div>
  </div>
</div>














<div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto mt-[4rem]">
  <h2 class="text-left text-[1.2rem]  md:text-xl lg:text-xl">
    <strong>Eligibility Criteria (LHV 2 Years Program)</strong>
  </h2>
</div>














<div class="w-full  mx-auto sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-2 md:text-[1rem] lg:text-[1rem] xl:text-[1rem] md:mx-auto">
  <ol class="list-disc pl-4 text-[#00000078]">
    <li>LHV Eligibility: Applicant must meet one of the following academic levels
      
        <li>FSc (Pre-Medical) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)</li>
        <li>Matric (Science) with 45% marks minimum (Physics, Chemistry & Biology as compulsory subjects)</li>
    
    </li>
    <li>Age Limit: 14-35 years</li>
    <li>Nationality: Pakistani</li>
    <li>Gender: LHV is only for females</li>
    <li>Marital Status: Unmarried or married, both females are allowed</li>
  </ol>
</div>

<div class="text-sm font-bold px-2 mx-auto sm:w-full sm:mx-0 md:w-3/4 lg:w-3/4 md:mx-auto my-5">
  <h2 class="text-left text-[1.2rem]  md:text-xl lg:text-xl">
    <strong>Documents Required:-(All docs should be attested by a grade 17 officer)</strong>
  </h2>
</div>




<div className="sm:w-full xm:overflow-x-scroll md:w-3/4 lg:w-3/4 md:mx-auto">
      <table className="w-full  sm:w-full  mb-[2.5rem] lg:w-3/2 border-collapse border">
        <thead>
          <tr className='border'>
            <th className="text-left px-4 py-2 border">No.</th>
            <th className="text-left px-4 py-2 border">Document</th>
            <th className="text-left px-4 py-2 border">Requirement</th>
         
          </tr>
        </thead>
        <tbody>
          <tr className='border bg-gray-100'>
            <td className="text-left px-4 py-2 border">1</td>
            <td className="text-left px-4 py-2 border">Matric Mark Sheet</td>
            <td className="text-left px-4 py-2 border">One copy with attestation</td>
          </tr>
          <tr className='border'>
            <td className="text-left px-4 py-2 border">2</td>
            <td className="text-left px-4 py-2 border">Matric Certificate</td>
            <td className="text-left px-4 py-2 border">One copy with attestation</td>
          </tr>
          <tr className='border bg-gray-100'>
            <td className="text-left px-4 py-2 border">3</td>
            <td className="text-left px-4 py-2 border">FSc Mark Sheet</td>
            <td className="text-left px-4 py-2 border">One copy with attestation</td>
          </tr>
          <tr className='border'>
            <td className="text-left px-4 py-2 border">4</td>
            <td className="text-left px-4 py-2 border">FSc Certificate</td>
            <td className="text-left px-4 py-2 border">One copy with attestation</td>
          </tr>
          <tr className='border bg-gray-100'>
            <td className="text-left px-4 py-2 border">5</td>
            <td className="text-left px-4 py-2 border">C.N.I.C/Form B</td>
            <td className="text-left px-4 py-2 border">One copy with attestation</td>
          </tr>
          <tr className='border'>
            <td className="text-left px-4 py-2 border">6</td>
            <td className="text-left px-4 py-2 border">Domicile</td>
            <td className="text-left px-4 py-2 border">One copy with attestation</td>
          </tr>
          <tr className='border bg-gray-100'>
            <td className="text-left px-4 py-2 border">7</td>
            <td className="text-left px-4 py-2 border">Photographs</td>
            <td className="text-left px-4 py-2 border">Passport size three photographs</td>
          </tr>
        </tbody>
      </table>
    </div>



    </div>
  )
}

export default LhvProgram