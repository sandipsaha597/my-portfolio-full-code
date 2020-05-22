import React, {useState, useEffect} from 'react'

import weatherApp from './../img/weatherApp.jpeg'
import newsSite from './../img/newsSite.jpeg'
import popUp from './../img/popUp.jpeg'
import giveAway from './../img/giveAway.jpeg'
import profile from './../img/profile.jpeg'
import customAnimations from './../img/customAnimations.jpeg'
import renovation from './../img/renovation.jpeg'
import self from './../img/self.jpeg'
import bars from './../img/bars.jpeg'
import book3D from './../img/book3D.jpeg'
import multiPageWebsite from './../img/multi-page-website.jpeg'
import todoApp2 from './../img/todoApp2.JPG'



    
function Portfolio(props) {
    const projects = {
        allProjects: [
        {
            link: 'https://sandipsaha597.github.io/todo-app-reactjs/',
            img: [todoApp2, 'Todo app'],
            heading: 'Todo app(CRUD)',
            description: "This app don't have any backend or database. It's a todo app with CRUD functionality. To manage state it uses hooks and context API.",
            techStack: ['ReactJS']
        },
        {
            link: 'https://sandipsaha597.github.io/weather-app/',
            img: [weatherApp, 'Weather app'],
            heading: 'Weather app',
            description: 'Current weather temparature in celcius and 7 days forecast of average temparature. It is using apexcharts to show weather forecast in an interactive chart.',
            techStack: ['ReactJS']
        },
        {
            link: 'https://sandipsaha597.github.io/multi-page-website',
            img: [multiPageWebsite, 'Multi page website'],
            heading: 'Multi page website',
            description: 'This is a pretty simple multi page website. It is using react router, hooks and gsap animations. On homepage it has a typewritting effect.',
            techStack: ['ReactJS(hooks)']
        },
        {
            link: 'https://safe-plains-83280.herokuapp.com/',
            img: [newsSite, 'Dynamic news website'],
            heading: 'NEWS site',
            pleaseNote: 'I can build little to nothing using nodeJS, expressJS, mongoDB without copy pasting',
            description: 'This site have an admin page where anyone can post anything. That will be saved in mongoDB altas database. Homepage is fetching news from that database.',
            techStack: ['ReactJS', 'nodeJS', 'expressJS', 'mongoDB']
        },
        {
            link: 'https://sandipsaha597.github.io/sign-up-pop-up/',
            img: [popUp, 'Sign up pop up animation'],
            heading: 'Sign up pop up with custom animations',
            description: 'I designed and built this for an online contest and also won the prize.',
            techStack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            link: 'https://sandipsaha597.github.io/giveaway-contest/',
            img: [giveAway, 'Giveaway contest'],
            heading: 'Giveaway',
            description: 'I designed and built this for an online contest and also won the prize. It is easily changeable with other images and themes',
            techStack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            link: 'https://sandipsaha597.github.io/profile/',
            img: [profile, 'Portfolio'],
            heading: 'Portfolio',
            description: 'This is a single page portfolio site with smooth scroll and google map.',
            techStack: ['HTML', 'CSS(SCSS)', 'JavaScript', 'jQuery']
        },
        {
            link: 'https://sandipsaha597.github.io/custom-animations/',
            img: [customAnimations, 'Custom animation'],
            heading: 'Animations, parallax',
            description: 'Custom slider, parallax, dropdown etc',
            techStack: ['HTML', 'CSS(SCSS)', 'JavaScript', 'jQuery']
        },
        {
            link: 'https://sandipsaha597.github.io/renovation-company/',
            img: [renovation, 'renovation'],
            heading: 'Renovation company',
            description: 'Using jQuery plugin "slick carousel".',
            techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery']
        },
        {
            link: 'https://sandipsaha597.github.io/self/',
            img: [self, 'fitness blog'],
            heading: 'Fitness blog',
            techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery']
        },
        {
            link: 'https://sandipsaha597.github.io/animated-bars/',
            img: [bars, 'Animated bars'],
            heading: '5 Animated bars',
            description: 'They change from bars to cross and vice-versa when clicked.',
            techStack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            link: 'https://sandipsaha597.github.io/book3D/',
            img: [book3D, '3D book flip'],
            heading: '3D book flip',
            description: 'Single page book flip -135deg with 3D effect.',
            techStack: ['HTML', 'CSS']
        },
        ],
    }
    const [active, setActive] = useState(false)
    useEffect(() => {
        setTimeout(() => {setActive(true) }, 1)
    }, [])
    return (
        // <div className="App">
        <div className='portfolio container'>
            <h2>My portfolio</h2>
            <div className={`projects ${active ? 'active' : ''}`}>
            {projects.allProjects.map((project, index) => {
                return (
                    <a href={project.link} className='project' key={index}
                    onMouseOver={props.changeColor}>
                    <img src={project.img[0]} alt={project.img[1]} />
                    <div className='overlay'>
                        <h3>{project.heading}</h3>
                        {(project.pleaseNote) ? <p><b>Please note: </b>{project.pleaseNote}</p> : null}
                        <p className='description'>{project.description}</p>
                        <p><b>Tech stack: </b>{project.techStack.join(', ')}</p>
                    </div>
                    </a>
                )
            })}
            </div>
        </div>
    );
}


export default Portfolio;