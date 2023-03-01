import React from 'react'
import {CusBtn} from './Form/Button'
import {BiCloudDownload } from 'react-icons/bi'

function About() {

  document.title = 'Omotosho Ayomikun About';

  const handleResume = () => {
    const url = '/resume/OMOTOSHO_AYOMIKUN_JAMES.docx';
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url;
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()

  }

  return (
    <>
      <div className="about">
        <div className="about_bio_img">
          <div className="about_bio">
            <h2 className="text_secondary">BIO</h2>
            <CusBtn onClick={handleResume} text={<div className='text-center'><div><BiCloudDownload size='25px'/></div> <div>Resume</div></div>} />
            <p>
              Highly motivated and well experience software developer with 3+ years of working experience in developing scalable,
              robust and user friendly web application using React JS. Proven track record of delivering projects on time and within budget,
              while maintaining high quality standard. Strong understanding of Javascript,
              HTML, CSS and other top web technologies. Excellent problem-solving skills and ability to work in a fast-paced, agile enviroment.
            </p>
          </div>
        </div>

        <div className="job_container">

          <div className="jobs">
            <div className="jobs_job">
              <h3 className="text_secondary">2022 - 2023</h3>
              <h2 className='mb-3'>Simxchanger</h2>
              <h6 className='mb-3'>Senior Front-end Developer</h6>
              <p className='mb-2'>•	Implementation of responsive design for different screen sizes.</p>
              <p className='mb-2'>•	Utilized redux for state management and optimized the application’s performance</p>
              <p className='mb-2'>•	Collaborated with the design team to implement visually appealing user interfaces.</p>
              <p className='mb-2'>•	Worked with the backend team to integrate REST APIs and ensure data consistency</p>
              <p className='mb-2'>•	Developed and maintained reusable UI components, reducing development time and improving code maintainability</p>
            </div>
          </div>

          <div className="jobs">
            <div className="jobs_job">
              <h3 className="text_secondary">2020 - 2022</h3>
              <h2 className='mb-3'>Eclipsoft ICT company</h2>
              <h6 className='mb-3'>Front-end Developer</h6>
              <p className='mb-2'>•	Built and launched multiple React-based applications, resulting to increase of customer engagement and satisfaction.</p>
              <p className='mb-2'>•	Developed and maintained reusable UI components, reducing development time and improving code maintainability</p>
              <p className='mb-2'>•	Implement response design and optimized applications for performance, resulting in improved load time</p>
              <p className='mb-2'>•	Integrate with RESTful APIs and ensure seamless communication between front-end and backend</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About