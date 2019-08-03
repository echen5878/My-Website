import React, { Component } from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from "./ProgressProvider";
import VisibilitySensor from "react-visibility-sensor";


class Resume extends Component {
  
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <h5>Technical classwork</h5>
        <ul>
          <li>CS 2110: OOP and Data Structures</li>
          <li>CS 3110: Functional Programming</li>
          <li>CS 3410: Computer Systems Organization</li>
          <li>CS 4410: Operating Systems</li>
          <li>CS 4450: Computer Networks</li>
          <li>CS 4740: Natural Language Processing</li>
          <li>CS 4670: Computer Vision</li>
          <li>CS 4780: Machine Learning for Intelligent Systems</li>
          <li>CS 4787: Large scale machine learning</li>
          <li>CS 4820: Analysis of Algorithms</li>
        </ul>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var skill = skills.name;
        var im = "images/" + skills.name.toLowerCase() + " logo.png";
        var per = Number(skills.level);
        return <div class="columns feature-item">
        <VisibilitySensor>
          {({isVisible}) => {
            const percentage = isVisible ? per : 0;
            return (
              <CircularProgressbarWithChildren value={percentage}>
              <label style={{marginTop: 20, marginBottom: 5}}>{skill}</label>
              <img style={{ width: 40, marginTop: -5, marginBottom: 5 }} src={im} alt={skill} />
              <div style={{ fontSize: 12, marginTop: -5, marginBottom: 10}}>
                 <strong>{per}%</strong>
              </div>
              </CircularProgressbarWithChildren> 
            );
            }}
          </VisibilitySensor>
          <p className="skilltext">Stuff</p>
          </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}</p>

        <ul class="bgrid-quarters s-bgrid-thirds cf">
             {skills}
				</ul>
        

			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
