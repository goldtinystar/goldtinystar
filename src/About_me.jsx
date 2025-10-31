import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
      <br />
      <div className="about_me_info">
          <p className='about_me_left'>Senior Software Engineer with over 8 years of experience designing, developing, and deploying full-stack web applications across diverse
            industries.
            <br />
            Highly skilled in JavaScript, Python, PHP, and ASP.NET, with advanced expertise in modern frameworks such as React.js, Vue.js, and
            Node.js.
            <br />
            I’m passionate about using technology to solve real-world problems from creating intuitive user interfaces to building scalable backend
            systems and APIs.
            <br />
            Strong background in API integration, database architecture, testing, and debugging, ensuring reliable, high-performance applications.
            Proficient in cloud environments (AWS, Azure, GCP) and experienced in Agile collaboration to deliver projects on time and above
            expectations.
            <br />
            Proven success leading cross-functional teams, improving system performance, and creating user-focused digital solutions that drive measurable
            business growth.
            </p>
          <div className="about_me_right"></div>
      </div>

    </motion.div>
    
  )
}

export default AboutMe
