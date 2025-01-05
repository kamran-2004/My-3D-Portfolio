import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
I’m a skilled Software Developer with expertise in Python and JavaScript, specializing in both frontend and backend development using frameworks like React, Node.js, and Three.js. I have experience building scalable server-side systems, implementing secure authentication, and managing databases efficiently.
<br />
<br />
In addition to my development skills, I’m passionate about Data Analytics. I’ve worked on projects involving data visualization, dashboard creation using Power BI, and data-driven decision-making to uncover meaningful insights from complex datasets.
<br />
<br />
I’m a quick learner who thrives on collaboration and enjoys transforming ideas into efficient, user-friendly solutions. Whether it’s building dynamic web applications, automating workflows, or analyzing data trends—I’m excited to bring value to every project.
<br />
<br />
Let’s collaborate and create something impactful together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
