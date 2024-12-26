import "../commonResource/css/aboutstyle.css"
import React from 'react'
import Groupphoto from "../commonResource/images/home/Groupphoto.png"
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className='otherPages'>
      <br />
      <br />
      <br />
      <h1>About Us</h1>
     <div className='about-image'>
      <img src={Groupphoto} />
     </div>
     <div className="container">
     <div className='par-container'>
      <p>
      The UNA-ET Hawassa University Chapter is a vibrant student-led Chapter 
      Under Hawassa University dedicated to promoting the principles 
      and objectives of the United Nations, particularly the Sustainable 
      Development Goals (SDGs). Established to empower students and foster 
      global citizenship, the chapter engages in a variety of initiatives 
      aimed at raising awareness about pressing global issues,
      enhancing education, and encouraging community involvement. ph text
      </p>
      <p>
      Through workshops, Model United Nations simulations,
       and collaborative events, the chapter seeks to cultivate 
       skills in diplomacy, critical thinking, and leadership among its members. 
       By connecting students with local and international partners, the UNA-ET Hawassa
        University Chapter strives to create a more informed, engaged, 
      and socially responsible community both on campus and in the broader Hawassa area
      </p>
     </div>
     <div className="container2">
      <h2>GOAL</h2>
      <p>Enhance awareness of Sustainable Development Goals (SDGs). 
        Foster leadership and advocacy skills among members. 
        Strengthen partnerships and collaborations with local organizations. 
        Promote inclusivity and diversity in all activities. 
        Drive community engagement and positive impact through projects.</p>
        <h2>
          VISION
        </h2>
        <p>Enhance awareness of Sustainable Development Goals (SDGs). 
          Foster leadership and advocacy skills among members. 
          Strengthen partnerships and collaborations with local organizations. 
          Promote inclusivity and diversity in all activities. 
          Drive community engagement and positive impact through projects.</p>
          
          <h2>
           TARGET AUDIENCE
          </h2>
          <p className="par">
          <li>University Students: Engaging students from Hawassa University across various disciplines. </li>
          <li>High School Students: Involving high school students in MUN activities and educational programs.</li>
          <li>Local Community: Reaching out to community members for awareness and participation in projects. </li>
          <li>NGOs and Partner Organizations: Collaborating with local and international NGOs focused on development and sustainability. </li>
          <li>Educational Institutions: Partnering with schools and universities for training and capacity-building initiatives.</li>
          </p>
         
         
          <h2>MEMBER INFORMATION</h2>
          <p className="par"><li>Membership Composition: Open to all students of Hawassa University, including undergraduate and postgraduate students.</li>
            <li>Roles and Responsibilities: Members can participate in various teams (e.g., MUN, Digital Literacy, Advocacy) based on their interests and skills.</li>
            <li>Training and Development: Members will have access to workshops, training sessions, and resources to build skills in leadership, advocacy, and project management.</li>
            <li>Engagement Opportunities: Members can participate in events, projects, and initiatives that align with their interests and contribute to personal and professional growth.</li>
           <li>Diversity and Inclusion: The chapter encourages participation from diverse backgrounds, promoting an inclusive environment for all members</li></p>
     
     </div>
     <hr className="bold-line"/>
     <div className="final-par">
       
       <p>The UNA-ET HU Chapter aims to create a vibrant and impactful environment that fosters engagement,
       learning, and community service among its members. The evaluation metrics outlined above will serve 
       as essential tools for assessing our progress throughout the year. By focusing on participation, feedback, 
       partnerships, community impact, membership growth, and skill development, we will ensure that our activities 
       are aligned with our goals and that we are making a meaningful difference within the university and the wider
      community. Regular monitoring of these metrics will enable us to adapt our strategies as needed, ensuring
       we meet our targets effectively. As we embark on this annual plan, the commitment of our members and partners
        will be crucial to our success. By working collaboratively and remaining focused on our objectives, we can 
        enhance the impact of the UNA-ET HU Chapter and contribute positively to the global conversation around sustainable development and social responsibility.</p>
        </div>
     </div>
     
   </div>
  );
}

export default About
