import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineering Fellow"
            subTitle="HeadstarterAI - ( Jul 2024 - Sept 2024 )"
            result="USA"
            des="During this fellowship, I built five AI projects along with one capstone project by collaborating with other 3 team members. The goal of that project is to gather a community of 1,000 users or earn $1,000 in revenue. Moreover, during this fellowship, I got opportunity to participate in hackathons on weekends and also enhanced my knowledge of data structures and algorithms by solving many tricky problems with technical interview preparation. Also, I gain lot of networking, communicating and entrepreneur skills by CEOs of well-funded successful startups."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Jetsweat, Inc - ( Sept 2023 - Feb 2024 )"
            result="USA"
            des="Worked on the backend of livestream feature of the Jetsweat application in result getting different parameters of users of livestreaming. Also collaborated with the team to enchance the front-end components to meet UI/UX standards and user needs there by making application more user friendly. "
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Unnati Informatics LLP - ( Jan 2022 - Dec 2022 )"
            result="India"
            des="Managed AWS resources such as deployment Pipelines, Elasticsearch, and Kubernetes Instances using 
                Terraform. Also participated in production support, handled software monitoring systems and validations. Used Node.js to architect RESTful APIs and also integrated authentication and authorization security configurations."
          />
          <ResumeCard
            title="Data Analyst Intern"
            subTitle="BrainyBeam Technologies Pvt. Ltd. - ( May 2021 - Aug 2021 )"
            result="India"
            des="Conducted comprehensive data analysis on a dataset exceeding 10,000 records, leveraging Python and 
                data science libraries, including NumPy and Pandas, to identify key trends and patterns. Also, utilized various data science methodologies, such as decision trees and linear regression to extract 
                meaningful insights, results into 15% improvement in predictive accuracy. Moreover gained hands-on experience in advanced data manipulation techniques"
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
