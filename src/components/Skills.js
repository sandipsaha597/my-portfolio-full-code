import React, {useState} from 'react'
import Skill_layout from './skills/Skill_layout'

function Skills() {

  return (
    <div className="skills container">
      <h1>Skills</h1>
      <ul className="skills-list">
        <li>
          <h2 className="skill">HTML</h2>
          <div className="para">
            <p>C:/Skills/HTML> I have in-depth knowledge of HTML5. I can write SEO friendly, clean HTML code.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">CSS</h2>
          <div className="para">
            <p>C:/Skills/CSS> I have in-depth knowledge of CSS3. I can recreate almost anything I can see. I have advance CSS3 knowledge. Like knowledge of flexbox, transforms, transform-origin etc.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">JavaScript</h2>
          <div className="para">
            <p>C:/Skills/JavaScript> With basic knowledge of loops, functions, conditions etc, I also hold knowledge of other programming concepts like callbacks, promises, recursion etc. I also know some frontend engineering concepts like debouncing. I know ES5, ES6, some ES7 and object oriented programming.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">ReactJS</h2>
          <div className="para">
            <p>C:/Skills/ReactJS> This is the only modern JavaScript framework I know. I know the old setState method but I don't use it anymore. I use react hooks and context api. I have built multiple reactJS projects and I am very proficient with it.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">NodeJS</h2>
          <div className="para">
            <p>C:/Skills/NodeJS> I took a crash course on NodeJS. I know things like inbuilt modules(fs, os, path etc). I know how to create server, connect the backend with frontend, build REST APIs etc.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">MongoDB</h2>
          <div className="para">
            <p>C:/Skills/MongoDB> Took a crash course. I know how to create, read, update, delete.Build fullstack web apps. However, I am not very proficient. I have to look at the documentation to remember the syntax.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">ExpressJS</h2>
          <div className="para">
            <p>C:/Skills/ExpressJS> Took crash course. NodeJS just becomes easier with this framework. I know how to create middlewares, build fullstack web apps. However, I have to look at the documentation to remember the syntax.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">SASS</h2>
          <div className="para">
            <p>C:/Skills/SASS> Basics. Variables, loops, mixins. I use it mostly for nesting styles.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">Git, Github and command line</h2>
          <div className="para">
            <p>C:/Skills/G-GH-CLI> I know commands like Git status, git add, git push, git commit, git merge, git log, git checkout etc. I also know command line commands like touch index.html to make file, mkdir todoApp to make folder etc.</p>
          </div>
        </li>
        <li>
          <h2 className="skill">Python</h2>
          <div className="para">
            <p>C:/Skills/Python> I wanted to learn automation so I learned python. Automated many web tasks almost perfectly. I also did some python college assignment as a freelancer. I know basic web scrapping as well.</p>
          </div>
        </li>
      </ul>
    </div>
    )
}


export default Skills
