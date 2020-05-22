import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import freelancerLogo from '.././img/freelancer-icon2.png'
// import { faTwitter } from "@fortawesome/free-brands-svg-icons"

function Footer(props) {
  return (
    <footer className="container">
      <ul className="social-links">
        <li><a href="https://www.facebook.com/webDeveloper.sandip" id="facebook"
          title="facebook.com"
          data-cursor-color="#4267b2" 
          onMouseEnter={props.changeColor} 
          onMouseLeave={props.changeColorOut}
          data-fixed-cursor='true'
        ><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="https://github.com/sandipsaha597" id="github"
          title="github.com"
          data-cursor-color="#fff" 
          onMouseEnter={props.changeColor} 
          onMouseLeave={props.changeColorOut}
          data-fixed-cursor='true'
        ><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://www.youtube.com/channel/UCEJcGwZ9Z2f_nGXoBpB6RCA" id="youtube"
          title="youtube.com"
          data-cursor-color="#f00" 
          onMouseEnter={props.changeColor} 
          onMouseLeave={props.changeColorOut}
          data-fixed-cursor='true'
        ><FontAwesomeIcon icon={faYoutube} /></a></li>
        <li><a href="https://www.freelancer.com/u/sandipsaha564" id="freelancer"
          title="freelancer.com"
          data-cursor-color="#007FED" 
          onMouseEnter={props.changeColor} 
          onMouseLeave={props.changeColorOut}
          data-fixed-cursor='true'
        ><img src={freelancerLogo} alt="freelancer"/></a></li>
        {/* <li><a href="#" id="twitter"
          data-cursor-color="#1da1f2" 
          onMouseEnter={props.changeColor} 
          onMouseLeave={props.changeColorOut}
          data-fixed-cursor='true'
        ><FontAwesomeIcon icon={faTwitter} /></a></li> */}
      </ul>
      <p className="copyright">&copy; Developer Sandip 2020</p>
    </footer>
  )
}

export default Footer
