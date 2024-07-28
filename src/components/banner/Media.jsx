import React from 'react'
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail} from 'react-icons/hi'

const Media = () => {
  return (
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="./assets/images/meet-resume.pdf" download={true}><BsFillPersonLinesFill /></a>
            </span>
            <span className="bannerIcon">
              <a href='mailto:meetpat91@gmail.com'><HiOutlineMail /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/csmeetpatel/'><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://github.com/meetpat2011'><BsGithub /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-1">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div> 
      
  
      
        )

}

export default Media