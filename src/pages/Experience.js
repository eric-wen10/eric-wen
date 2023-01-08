import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
//import WebIcon from '@mui/icons-material/Web';
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'> 
      {" "}
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2022-Present"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Space Technologies at California</h3>
        <h4 className='vertical-timeline-element-title'> Machine Learning Engineer</h4>
        <h5 className='vertical-timeline-element-title'> Berkeley, California, USA</h5>
        <ul>
          <li>Designing an autonomous rover for the University Rover Challenge</li>
          <li>Implementing A* star path planning methods for autonomous rover drive</li>
          <li>Developed a program to parse NMEA data into GPS coordinates</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2022-Present"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Berkeley Artificial Intelligence Research Lab</h3>
        <h4 className='vertical-timeline-element-title'> Research Mentee</h4>
        <h5 className='vertical-timeline-element-title'> Berkeley, California, USA</h5>
        <ul>
          <li>Under the mentorship of graduate students, I'm currently investigating next-gen prosthetics.</li>
          <li>Observing the use of EMG signals as a means of controlling realistic prosthetic movement</li>
          <li>Exploring algorithms that will aid the prosthetic calibration process</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2022-2026"
        iconStyle={{background: "#FAD02C", color: "#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className='vertical-timeline-element-title'>University of Califronia, Berkeley</h3>
        <h4 className='vertical-timeline-element-title'> Electrical Engineering and Computer Sciences</h4>
        <h5 className='vertical-timeline-element-title'> Berkeley, California, USA</h5>
        <ul>
          <li>GPA: 3.9</li>
        </ul>
      </VerticalTimelineElement>


      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="June 2022 - August 2022"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Kezen Thermal</h3>
        <h4 className='vertical-timeline-element-title'> Electrical EIT</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Engaged with industry leaders through CSA 8149.3 and Hydrogen Combustion code development meetings.</li>
          <li>Electrical engineering drawings for boiler system control panel @YYC Airport.</li>
          <li>Ran conduit and pulled conductors for a new control system at Vitreous Glass. Also assisted with
              troubleshooting annunciation issues in the control panel.</li>
          <li>Aided in the installation of new electrical panels and troubleshot grounding issues using a
              Fluke Advanced Earth Analyzer and provisions from the IEEE Green Book</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-Present"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Western Mechatronics</h3>
        <h4 className='vertical-timeline-element-title'> Director of External</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Played an instrumental role in hosting the 2021 VEX robotics Chinook Cup qualifying event and the 2022 VEX Robotics Alberta Pronvincial Championship which connected over 500 robot enthusiast</li>
          <li>Oversaw the management of company website and increased engagement</li>
          <li>Determined target audiences for Robotics summer camps and aligned advertising campaigns with these demographics</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-2022"
        iconStyle={{background: "#A30000", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'> Western Canada HS Robotics Club</h3>
        <h4 className='vertical-timeline-element-title'> Co-Founder and Executive Member</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Spearheaded the creation of 8 VEX robotics teams</li>
          <li>Held executive team accountable by taking meeting minutes</li>
          <li>Captain and driver for team 3300A. Built robot drivetrain, robot arms, and programmed through C++</li>
          <li>Won the Finalists Award at the 2022 VEX Robotics Alberta Provincial Championship</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-2021"
        iconStyle={{background: "#A30000", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>University of Calgary, McCaig Institute</h3>
        <h4 className='vertical-timeline-element-title'> Research Intern</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Under the mentorship of Professor John Bertram, I investigated the efficacy that self-pacing split-belt treadmills had on asymmetric gait rehabilitation</li>
          <li>Academic paper analysis on the use of Kalman filters to estimate treadmill belt speed based on prior pateint force inputs</li>
          <li>Studied human gait patterns</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2019-2022"
        iconStyle={{background: "#A30000", color: "#fff"}}
        icon={<SchoolIcon/>}>
        <h3 className='vertical-timeline-element-title'>Western Canada High School</h3>
        <h4 className='vertical-timeline-element-title'> International Baccalaureate Diploma, High School Diploma</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>GPA: 4.0</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2020-2021"
        iconStyle={{background: "#A30000", color: "#fff"}}
        icon={<WorkIcon/>}>
        <h3 className='vertical-timeline-element-title'>Ignite Youth Club</h3>
        <h4 className='vertical-timeline-element-title'>Co-Founder</h4>
        <h5 className='vertical-timeline-element-title'> Calgary, AB, Canada</h5>
        <ul>
          <li>Ignite Youth Club is an international company I co-founded that aims to provide accessible education for youth ranging from the Humanities to STEM</li>
          <li>By advertising through school boards and social media I was able to grow my organization to 80 members in 3 countries, translating to a revenue of $20,000 in 4 years.</li>
          <li>Using my profit margins. I lead several donation initiatives that helped The Drop in Center, Alpha House, and Western Canada High School</li>
          <li>
            <a href='https://www.igniteyouthclub.com/'>
            https://www.igniteyouthclub.com/
            </a>
          </li>
        </ul>
      </VerticalTimelineElement>
      
      </VerticalTimeline>
    
    </div>
  )
}

export default Experience