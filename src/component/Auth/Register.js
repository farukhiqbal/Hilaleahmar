import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="container-fluid  p-3 dashboard">
        <div className="row  mt-5">
          <div className="col-md-3 ">
            {/* <img src="./images/mainlogo.png" className="w-50" alt="" /> */}
            {/* <div className="mt-5">
              <h3 class="border-2 border-black text-center py-1 cursor-pointer hover:bg-red-600 hover:text-white">
                Register
              </h3>
              <Link to='/login'  className="text-black no-underline">
              <h3 class="border-2 border-black text-center py-1 cursor-pointer hover:bg-red-600 hover:text-white">
                Login
              </h3>
              </Link>
            
            </div> */}
          </div>


          <div className="col-md-9">
            <div className="row ">
              <div className=" col-md-12  col-sm-10 h-[36vh] md:h-[33vh]">
                <div className="w-full h-auto  black ">
                  <img
                    src="./images/mainlogo.png"
                    className="text-center justify-center mx-auto   pb-2"
                    height='100px'
                    width='100px'
                    alt=""
                  />
              
                </div>

               <div className="text-center  sm:pb-6">
                       <b className="text-center  mx-auto"> Admission 2024-2025</b>
            <p>Admission registration - In case of any query or problem Online Application,</p>
               <p >Please contact Admission office department (041 920 1475 timing 9am to 4pm Monday to Friday )</p>
               </div>
              </div>
            </div>



{/* 

            <div class="flex flex-col p-4 max-h-screen">
  <form className="flex flex-col space-y-4">
    <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
      <div className="w-full md:w-1/2">
        <label className="block text-sm font-medium mb-1" htmlFor="name">Applicant Name *</label>
        <input id="name" name="name" type="text" minLength={3} maxLength={25} required className="input-field w-full h-10 border-b-2 border-black" placeholder="Applicant Name" />
      </div>
      <div className="w-full md:w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cnic">CNIC *</label>
        <input id="cnic" name="cnic" type="text" required className="input-field w-full h-10 border-b-2 border-black" placeholder="CNIC" />
      </div>
    </div>

    <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
      <div className="w-full md:w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required className="input-field w-full h-10 border-b-2 border-black" placeholder="Email" />
      </div>
      <div className="w-full md:w-1/2">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobileNumber">Mobile *</label>
        <input id="mobileNumber" name="mobileNumber" type="text" required className="input-field w-full h-10 border-b-2 border-black" placeholder="Mobile (xxx-xxxxxxx)" />
      </div>
    </div>

    <div className="flex items-center">
      <button type="submit" className="bg-red-600 hover:bg-red-400 text-white w-[12rem] font-bold py-2 px-4 rounded" disabled>
        Register
      </button>
    </div>
  </form>
</div>

 */}








          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
