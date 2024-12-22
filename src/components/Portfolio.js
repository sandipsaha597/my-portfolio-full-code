import React, { useState, useEffect } from 'react'

import weatherApp from './../img/weatherApp.jpeg'
import todoApp2 from './../img/todoApp2.JPG'
import multiPageWebsite from './../img/multi-page-website.jpeg'
import newsSite from './../img/newsSite.jpeg'
import popUp from './../img/popUp.jpeg'
import giveAway from './../img/giveAway.jpeg'
import customAnimations from './../img/customAnimations.jpeg'
import profile from './../img/profile.jpeg'
import renovation from './../img/renovation.jpeg'
import self from './../img/self.jpeg'
import bars from './../img/bars.jpeg'
import book3D from './../img/book3D.jpeg'
import instagram_clone from './../img/instagram_clone.JPG'
import pressfly from './../img/pressfly.JPG'
import ubiquitous from './../img/Ubiquitous.JPG'
import filosApp from './../img/filos.JPG'

function Portfolio(props) {
  const projects = {
    allProjects: [
      {
        link: 'http://ec2-13-233-240-100.ap-south-1.compute.amazonaws.com',
        img: [instagram_clone, 'instagram clone'],
        heading: 'Instagram_Clone',
        description:
          'Looks and works like instagram. Features: chat, group chat, read receipts, online/offline status etc',
        techStack: ['MERN, socket.io, AWS ec2 etc'],
      },
      {
        link: 'https://pressfly.herokuapp.com/',
        img: [pressfly, 'pressfly'],
        heading: 'Pressfly',
        description:
          'Page transitions, animations, drag and drop slide designer',
        techStack: ['MERN, heroku'],
      },
      {
        link: 'https://creators.ubiquitousinfluence.com/',
        img: [ubiquitous, 'ubiquitous'],
        heading: 'Ubiquitous',
        description:
          'Figma to pixel perfect UI. It was fetching data from firebase. Built from scratch all on my own.',
        techStack: ['ReactJS, material UI, firebase etc'],
      },
      {
        link: 'https://filosapp.com/',
        img: [filosApp, 'filos app'],
        heading: 'Filos app',
        description: 'Adobe XD to UI, built from scratch',
        techStack: ['Gatsby JS, react spring'],
      },
      {
        link: 'https://sandipsaha597.github.io/todo-app-reactjs/',
        img: [todoApp2, 'Todo app'],
        heading: 'Todo app(CRUD)',
        description:
          "This app don't have any backend or database. It's a todo app with CRUD functionality. To manage state it uses hooks and context API.",
        techStack: ['ReactJS'],
      },
      {
        link: 'https://sandipsaha597.github.io/weather-app/',
        img: [weatherApp, 'Weather app'],
        heading: 'Weather app',
        description:
          'Current weather temparature in celcius and 7 days forecast of average temparature. It is using apexcharts to show weather forecast in an interactive chart.',
        techStack: ['ReactJS'],
      },
      {
        link: 'https://sandipsaha597.github.io/multi-page-website',
        img: [multiPageWebsite, 'Multi page website'],
        heading: 'Multi page website',
        description:
          'This is a pretty simple multi page website. It is using react router, hooks and gsap animations. On homepage it has a typewritting effect.',
        techStack: ['ReactJS(hooks)'],
      },
      {
        link: 'https://safe-plains-83280.herokuapp.com/',
        img: [newsSite, 'Dynamic news website'],
        heading: 'NEWS site',
        pleaseNote:
          'I can build little to nothing using nodeJS, expressJS, mongoDB without copy pasting',
        description:
          'This site have an admin page where anyone can post anything. That will be saved in mongoDB altas database. Homepage is fetching news from that database.',
        techStack: ['ReactJS', 'nodeJS', 'expressJS', 'mongoDB'],
      },
      {
        link: 'https://sandipsaha597.github.io/sign-up-pop-up/',
        img: [popUp, 'Sign up pop up animation'],
        heading: 'Sign up pop up with custom animations',
        description:
          'I designed and built this for an online contest and also won the prize.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        link: 'https://sandipsaha597.github.io/giveaway-contest/',
        img: [giveAway, 'Giveaway contest'],
        heading: 'Giveaway',
        description:
          'I designed and built this for an online contest and also won the prize. It is easily changeable with other images and themes',
        techStack: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        link: 'https://sandipsaha597.github.io/profile/',
        img: [profile, 'Portfolio'],
        heading: 'Portfolio',
        description:
          'This is a single page portfolio site with smooth scroll and google map.',
        techStack: ['HTML', 'CSS(SCSS)', 'JavaScript', 'jQuery'],
      },
      {
        link: 'https://sandipsaha597.github.io/custom-animations/',
        img: [customAnimations, 'Custom animation'],
        heading: 'Animations, parallax',
        description: 'Custom slider, parallax, dropdown etc',
        techStack: ['HTML', 'CSS(SCSS)', 'JavaScript', 'jQuery'],
      },
      {
        link: 'https://sandipsaha597.github.io/renovation-company/',
        img: [renovation, 'renovation'],
        heading: 'Renovation company',
        description: 'Using jQuery plugin "slick carousel".',
        techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      },
      {
        link: 'https://sandipsaha597.github.io/self/',
        img: [self, 'fitness blog'],
        heading: 'Fitness blog',
        techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      },
      {
        link: 'https://sandipsaha597.github.io/animated-bars/',
        img: [bars, 'Animated bars'],
        heading: '5 Animated bars',
        description:
          'They change from bars to cross and vice-versa when clicked.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        link: 'https://sandipsaha597.github.io/book3D/',
        img: [book3D, '3D book flip'],
        heading: '3D book flip',
        description: 'Single page book flip -135deg with 3D effect.',
        techStack: ['HTML', 'CSS'],
      },
    ],
  }
  const [active, setActive] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 1)
  }, [])
  return (
    // <div className="App">
    <div className="portfolio container">
      <h2>My portfolio</h2>
      <div className={`projects ${active ? 'active' : ''}`}>
        {projects.allProjects.map((project, index) => {
          return (
            <a
              href={project.link}
              className="project"
              key={index}
              onMouseOver={props.changeColor}
            >
              <img src={project.img[0]} alt={project.img[1]} />
              <div className="overlay">
                <h3>{project.heading}</h3>
                {project.pleaseNote ? (
                  <p>
                    <b>Please note: </b>
                    {project.pleaseNote}
                  </p>
                ) : null}
                <p className="description">{project.description}</p>
                <p>
                  <b>Tech stack: </b>
                  {project.techStack.join(', ')}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
