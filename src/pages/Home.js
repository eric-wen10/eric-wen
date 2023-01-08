import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
        <div className='about'>
            <h2>Hi, My Name is Eric</h2>
            <div className="prompt"> 
                <p> 
                    A Software developer and Robotics enthusiast with an Entrepreneurial instinct.
                </p>
                <p>Studying EECS @UC Berkeley</p>
                <a href="https://www.linkedin.com/in/ericwen10/">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/eric-wen10">
                    <GitHubIcon />
                </a>
            </div>
        </div>
        <div className='skills'> <h1> Skills</h1></div>
        <ul className='list'>
            <p className="item">
                <h2>Languages</h2>
                <span> Python, SQL, Lisp, HTML, CSS, C++ </span>
            </p>
        </ul>
    </div>
  )
}

export default Home