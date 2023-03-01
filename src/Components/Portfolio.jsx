import React from 'react'
import { BsEyeFill, BsGithub } from 'react-icons/bs'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Portfolio() {

  document.title = 'Omotosho Ayomikun Portfolio';

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
      link: 'https://simxchanger.net/',
      github: 'https://github.com/olawale12/simxchanger',
    },
    // {
    //   img: '',
    //   heading: 'Pizza Ordering',
    //   detail: `
    //   `,
    //   badge: [
    //     'Next JS', 'React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
    //   ],
    //   link: '',
    //   github: '',
    // },
    // {
    //   img: '',
    //   heading: 'Stylist',
    //   detail: `
    //   `,
    //   badge: [
    //     'Next JS', 'React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
    //   ],
    //   link: '',
    //   github: '',
    // },
    {
      img: '/img/port_5.png',
      heading: 'Clips Inventory',
      detail: `
      This is a private project due to company policy.
      Clips Inventory is an inventory management system that solve most of the the problem face in physical store. It reduce risk and help to know all transaction made, it also help to determine the quantity of goods and store and so much more
      `,
      badge: [
        'Angular', 'Javascript', 'Html', 'Css/Scss',
      ],
      link: '',
      github: '',
      copyright: true,
    },
    // {
    //   img: '',
    //   heading: 'Movies',
    //   detail: `
    //   `,
    //   badge: [
    //     'Next JS', 'React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
    //   ],
    //   link: '',
    //   github: '',
    // },
    {
      img: '/img/port_4.png',
      heading: 'Login, Dashboard, User, User details page',
      detail: `
      This is a responsive 4 pages web-app, which include Login page, Dashboard page, User page and User details page. User can easily filter list of there details and so on.
      `,
      badge: [
        'React JS', 'Javascript', 'Html', 'Scss', 'Redux',
      ],
      link: 'https://omotosho-ayomikun-lendsqr-test.herokuapp.com/ ',
      github: 'https://github.com/omotoshoayomikun/lendsqr-fe-test',
    },
    {
      img: '/img/port_3.png',
      heading: 'Property Management',
      detail: `
      This is an ongoing project which will allow customer to check out properties for sale, buy house, buy lands, rent an apartments, invest and so on.
      `,
      badge: [
        'Next JS', 'React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: 'https://real-estate-iota-six.vercel.app/',
      github: 'https://github.com/omotoshoayomikun/real-estate',
    },
    {
      img: '/img/port_2.png',
      heading: 'Auto Mobile',
      detail: `
      This is a pending project develop with Next JS. this project is a web app for an auto mobile online store where customers can check out cars and purchase cars.
      `,
      badge: [
        'Next JS', 'React JS', 'Javascript', 'Html', 'Css/Scss', 'Redux',
      ],
      link: 'https://automobile-one.vercel.app/',
      github: 'https://github.com/omotoshoayomikun/automobile',
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
                  {
                    data.copyright && (
                      <div className="no_pre"><AiFillEyeInvisible />Private</div>
                    )
                  }
                  <Link to={ data.link } target='_blank'>
                    <img src={data.img} alt="" className="img" />
                  </Link>
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
                  {
                    !data.copyright ? (
                      <div className="icons_container1">
                        <Link to={data.github} target='blank' className='icons_ico_cont'>
                          <BsGithub className='icons_icon' />
                        </Link>
                        <Link to={data.link} target='blank' className='icons_ico_cont'>
                          <BsEyeFill className='icons_icon' />
                        </Link>
                      </div>
                    ) : ''
                  }

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