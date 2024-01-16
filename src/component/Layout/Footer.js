import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8  w-full overflow-x-hidden">
        <div className="mx-6 md:mx-12 flex flex-col lg:flex-row justify-center lg:justify-between space-y-6 lg:space-y-0">
          <div className="footer-links text-center lg:text-left">
            <h2 className="text-xl font-semibold">LINKS</h2>
            <div className="social-lnk flex space-x-4 justify-center mt-4">
      <Link to='/'
        className="text-gray-200 hover:text-white no-underline hover:underline"
        href="your-facebook-url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookSquare />
      </Link>
      <Link  to=''
        className="text-gray-200 hover:text-white no-underline hover:underline"
        href="your-instagram-url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </Link>
      <Link to=''
        className="text-gray-200 hover:text-white no-underline hover:underline"
        href="your-twitter-url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare />
      </Link>
    </div>

          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold pl-5 lg:pl-8">INFORMATION</h2>
            <ul className="space-y-2">
              <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/about-us/">About Us</Link></li>
              <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/the-history/">Our History</Link></li>
              <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/vision-mission/">Vision & Mission</Link></li>
              <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/board-of-trustees/">Board Of Trustees</Link></li>
              <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/privacy-policy/">Privacy Policy</Link></li>
            </ul>
          </div>


    <div className="footer-links text-center lg:text-left">
      <h2 className="text-xl font-semibold pl-5 lg:pl-8">HELP</h2>
      <ul className="space-y-2">
        <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/appointments/">Appointment</Link></li>
        <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/donate-now/">Donate Now</Link></li>
        <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="http://labonline.patel-hospital.org.pk/login.php">Lab Results</Link></li>
        <li><Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="https://patel-hospital.org.pk/faqs/">FAQ’S</Link></li>
      </ul>
    </div>

    <div className="footer-links text-center lg:text-left ">
      <h2 className="text-xl font-semibold">NEWSLETTER SUBSCRIPTION</h2>
      <div className="newzltr">
        <form className="space-y-2 flex flex-col items-center justify-center lg:justify-normal">
          <input
            className="email-input w-[80%] lg:w-[90%] p-2 border border-white rounded"
            placeholder="Email address"
            type="email"
            name="your-email"
          />
          <button className=" p-2 w-[50%]  mt-3  submit  rounded">Submit</button>
        </form>
      </div>
    </div>

    <div className="footer-links text-center lg:text-left">
            <h2 className="text-xl font-semibold lg:ml-6">CONTACT</h2>
            <ul className="space-y-2">
              <li className="uannum">
                <Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="tel:021-111-174-174">
                  <i className="fa fa-phone mr-5" aria-hidden="true" />
                  <span className="spa ">UAN Number: (041) 920 1475</span>
                </Link>
              </li>
              <li>
                <Link  className="text-gray-200 hover:text-white no-underline hover:underline" href="mailto:info@patel-hospital.com">
                  <i className="fa fa-envelope mr-3" aria-hidden="true" />
                  <span className="spa">hilaleahmarhospital@gmail.com</span>
                </Link>
              </li>
              <li>
                <i className="fa fa-map-marker" style={{ color: "#ffffff" }} aria-hidden="true" />{" "}
                <span className="spa" style={{ color: "#ffffff" }}>University Road, Faisalabad, Punjab Tell: (041) 920 1475</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* footer area */}
      <section className="copyrightSec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xs-12">
              <div className="copyright-text text-center">
                <p>Developed by medcloud.com.pk. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
