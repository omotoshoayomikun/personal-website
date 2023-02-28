import React from 'react'
import { BsEyeFill, BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Portfolio() {

  const portfolio = [
    {
      img: '/img/port_1.png',
      heading: 'simxchanger',
      detail: `simxchange is online crypto trading company, 
      I developed and maintained multiple React-based web applications, ensuring high performance and user experience. 
      I also implemented various features such as user authentication and data visualization using React and Redux.
      In addition, I worked with a team of designers, developers, and stakeholders to gather 
      requirements and ensure project delivery within the timeline and budget.
      `,
      badge: [
        'React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: 'http://simxchanger.net/',
      github: 'https://github.com/olawale12/simxchanger',
    },
    {
      img: '',
      heading: 'Pizza Ordering',
      detail: `
      `,
      badge: [
        'Next JS','React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: '',
      github: '',
    },
    {
      img: '',
      heading: 'Stylist',
      detail: `
      `,
      badge: [
        'Next JS','React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: '',
      github: '',
    },
    {
      img: '',
      heading: 'Clips Inventory',
      detail: `
      `,
      badge: [
        'Next JS','React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: '',
      github: '',
    },
    {
      img: '',
      heading: 'Movies',
      detail: `
      `,
      badge: [
        'Next JS','React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: '',
      github: '',
    },
    {
      img: '',
      heading: 'Auto Mobile',
      detail: `
      `,
      badge: [
        'Next JS','React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: '',
      github: '',
    },
    {
      img: '',
      heading: 'Auto Mobile',
      detail: `
      `,
      badge: [
        'Next JS','React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: '',
      github: '',
    },
  ]


  return (
    <>
      <div className="project">
        <div className="project_bio_img">
          <div className="project_bio">
            <h1 className="text_secondary">My Portfolio</h1>
          </div>
        </div>
        <div className="portfolio">
          {
            portfolio.map((data, i) => (
              <div key={i} className="portfolio_card">
                <div className="portfolio_img_cont">
                  <img src={data.img} alt="" className="img" />
                </div>
                <div className="portfolio_wrap">
                  <h2>{data.heading}</h2>
                  <p>{data.detail}</p>
                  <div className="badge_container">
                    {
                      data.badge.map((badge, i) => (
                        <div key={i} className="badge">{badge}</div>

                      ))
                    }
                  </div>
                  <div className="icons_container1">
                    <Link to={data.link} target='blank' className='icons_ico_cont'>
                      <BsGithub className='icons_icon' />
                    </Link>
                    <Link to={data.github} target='blank' className='icons_ico_cont'>
                      <BsEyeFill className='icons_icon' />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div >
    </>
  )
}

export default Portfolio