import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail} from 'react-icons/hi'

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Meet Patel</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Building Softwares to solve real-world problems and create innovative solutions with the use of modern technologies.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1(470) 871-8810</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">meetpat91@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="./assets/images/meet-resume.pdf" download={true}><BsFillPersonLinesFill /></a>
          </span>
          <span className="bannerIcon">
              <a href='mailto:meetpat91@gmail.com'><HiOutlineMail /></a>
          </span>
          <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/csmeetpatel/' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
          </span>
          <span className="bannerIcon">
              <a href='https://github.com/meetpat2011' target='_blank' rel='noreferrer'><BsGithub /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft