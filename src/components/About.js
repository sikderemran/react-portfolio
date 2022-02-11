// import logo from './logo.svg';
import { Link } from "react-router-dom";
import React,{useState} from 'react';
function About() {
 
  const toggleClass = (e) => {
    if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')){
      const aboutSection=document.querySelector(".about-section")
      aboutSection.querySelector(".tab-item.active").classList.remove("active")
      e.target.classList.add('active')
      const target=e.target.getAttribute('data-target')
      aboutSection.querySelector(".tab-content.active").classList.remove("active")
      aboutSection.querySelector(target).classList.add('active')
    }
    
  };
  return (
    <section className="about-section ptb-80">
      <div className="container">
        <div className="row">
          <div className="about-title">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src="img/profile-img.png" alt="About image" />
            </div>
          </div>
          <div className="about-text">
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy </p>
            <h3>Skills</h3>
            <div className="skills">
              <div className="skill-item">Html5</div>
              <div className="skill-item">css3</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">Php</div>
              <div className="skill-item">mySql</div>
              <div className="skill-item">Bootstrap</div>
              <div className="skill-item">Jquery</div>
              <div className="skill-item">React</div>
              <div className="skill-item">laravel</div>
              <div className="skill-item">cpanel</div>
              <div className="skill-item">git</div>
              <div className="skill-item">RestApi</div>
            </div>
            <div onClick={toggleClass} className="about-tabs">
              <button className='tab-item active'  data-target="#education">Education</button>
              <button className='tab-item' data-target="#experience">Experience</button>
            </div>
            <div className='tab-content active' id="education">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2016-2020</span>
                  <h4>Bachelor of science - <span>computer science and engineering</span></h4>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="timeline-item">
                  <span className="date">2016-2020</span>
                  <h4>Bachelor of science - <span>computer science and engineering</span></h4>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
              </div>
            </div>
            <div className='tab-content' id="experience">
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2020-2021</span>
                  <h4>Bachelor of science - <span>computer science and engineering</span></h4>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
                <div className="timeline-item">
                  <span className="date">2016-2020</span>
                  <h4>Bachelor of science - <span>computer science and engineering</span></h4>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy</p>
                </div>
              </div>
            </div>
            <a href="" className="btn">download cv</a>
            <a href="" className="btn">contact me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
