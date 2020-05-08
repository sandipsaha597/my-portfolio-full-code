import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap'

function About() {

  let trsDuration = 1
  useEffect(() => {
    gsap.from('.line', {
      duration: trsDuration,
      opacity: 0,
      x: -40,
      stagger: .4
    })
  }, [])

  let trs = useRef()

  return (
    <div className="about">
      <h1 className="line">About me</h1>
      <p className="line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius quia eligendi beatae, minus temporibus aliquam esse maiores? Vitae ad velit quam ex quia unde ipsum, vero maiores maxime, reiciendis nesciunt dolorum atque! Earum, molestias commodi eligendi, repellat aut id molestiae laborum officiis nulla modi deleniti soluta dolores odio blanditiis.</p>
    </div>
    )
}


export default About
