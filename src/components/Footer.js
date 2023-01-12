import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
            
            <a href="https://www.linkedin.com/in/ericwen10/">
              <LinkedInIcon />
            </a>
            
            <a href="https://github.com/eric-wen10">
                <GitHubIcon />
            </a>
        </div>
        <p> &copy; 2023 ericwen10.com</p> 
        
    </div>
  );
}

export default Footer