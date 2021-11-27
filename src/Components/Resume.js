import React, { Component } from 'react';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import ProgressProvider from "./ProgressProvider";
import VisibilitySensor from "react-visibility-sensor";

class Resume extends Component {
  
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        var classes = education.classes.map(function(classt){
          return <li>{classt}</li>
        })
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <h5>Technical classwork</h5>
        <ul>
          {classes}
        </ul>
        </div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
        // return (
        //   <VerticalTimelineElement
        //     className="vertical-timeline-element--work"
        //     contentStyle={{ background: '#e9d5a1', color: '#fff' }}
        //     contentArrowStyle={{ borderRight: '7px solid  #e9d5a1' }}
        //     date={work.years}
        //     iconStyle={{
        //       background: "#AE944F",
        //       color: "#fff",
        //       textAlign: "center",
        //     }}
        //     icon={<i class="fa fa-github"></i>}
        //   >
        //     <h3
        //       className="vertical-timeline-element-title"
        //       style={{ textAlign: "left" }}
        //     >
        //       {work.title}
        //     </h3>
        //     <h4
        //       className="vertical-timeline-element-subtitle"
        //       style={{ textAlign: "left" }}
        //     >
        //       {work.company}
        //     </h4>
        //     <div class="flip-card-back">{work.description}</div>
        //   </VerticalTimelineElement>
        // );
      })
      var skills = this.props.data.skills.map(function(skills){
        var skill = skills.name;
        // var im = "images/" + skills.name.toLowerCase() + " logo.png";
        var per = Number(skills.level);
        return <div class="columns feature-item">
        <VisibilitySensor>
          {({isVisible}) => {
            const percentage = isVisible ? per : 0;
            return (
              <CircularProgressbarWithChildren className="progress-bar" value={percentage} styles={buildStyles({pathColor:`rgba(255, 165, 0, ${percentage / 100})`})}>
              <label style={{ fontSize: 15, marginTop: 20, marginBottom: 5}}>{skill}</label>
              {/* <img style={{ width: 40, marginTop: -5, marginBottom: 5 }} src={im} alt={skill} /> */}
              <i style={{ fontSize: 40, marginTop: -5, marginBottom: 5 }} class={skills.icon}></i>
              <div style={{ fontSize: 12, marginTop: -5, marginBottom: 10}}>
                 <strong>{per}%</strong>
              </div>
              </CircularProgressbarWithChildren> 
            );
            }}
          </VisibilitySensor>
          <p className="skilltext"></p>
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
          {/* <VerticalTimeline
            lineColor="#000"
          > */}
              {work}
              {/* <VerticalTimelineElement
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={
                  <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                }
              />
            </VerticalTimeline> */}
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
