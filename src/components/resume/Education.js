import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education History</h2>
        </div>
        <div className="mt6- lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Masters in Computer Science"
            subTitle="Arizona State University ( May 2023 - Dec 2024 )"
            result="3.1/4.0"
            des="Course work :
            Software Verification, Validation and Testing,
            Statistical Machine Learning,
            Data Processing at scale,
            Information assurance and security,
            Data Visualization,
            Software Project, Process and Quality Management,
            Knowledge Representation and Reasoning,
            Foundation of Algorithms,
            Mobile Computing,
            Data Mining."
          />
          <ResumeCard
            title="Bachelors of Computer Engineering"
            subTitle="L. J. Institute Of Eng. and Tech. ( June 2018 - June 2022 )"
            result="3.5/4.0"
            des="Related Courses : Analysis and Design of Algorithms, Data Structures, Object Oriented Programming, Computer Networks, Python for Data Science, Microprocessor and Interfacing, Mobile Computing and wireless communication, Machine Learning  "
          />
          <ResumeCard
            title="10th & 12th Grade - Science Major"
            subTitle="Divine Buds School ( June 2016 - June 2018 )"
            result="84%"
            des="Gave 10th & 12th science grade - finals state level exam along with rigorous engineering national level entrance exams : JEE, GUJCET"
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        // <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        //   <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
        //   <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        // </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education