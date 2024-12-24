import React from 'react'

import secondLogo from "../commonResource/images/home/blue_logo.png"
import airobicsImg from "../commonResource/images/home/Airobics two.jpg"
import aerobics from "../commonResource/images/home/Aerobics.jpg"
function MainPart() {
  return (
    <div>
      {/* we will create sections for our main page in a single directory */}
      
          <div className='section1Img '>
          </div>
      <div className='container mt-5'>
      <div className='d-flex row '>
        <div className='col-4'>
        <img  className='section2 ' src={secondLogo}/>
        </div>
        <div className='col-4 '>
        <div className='font-weight-bold sizer'>
          United Nations 
        </div>
        <div className='font-weight-bold sizer'>
        Association 
        </div>
        </div>
        <div className='col-4 bord sizer'>
          <div className=''>Ethiopia Hawassa</div>
          <div>University Chapter</div>
        </div>
        </div>
        
     
      </div>
      <div className=' center-horizontal'>
        <img className='' src={aerobics} alt="airobics image" />
        <img className='' src={airobicsImg} alt="airobics image" />
        
      </div>
      <h2 className='ml-5 mt-4'>Aerobics</h2>
      <p className='ml-4'>Description:The UNA-ET Hawassa University Chapter is a vibrant student-led Chapter Under Hawassa University dedicated to promoting the principles and objectives of the United Nations, particularly the Sustainable Development Goals (SDGs). Established to empower students and foster global citizenship, the chapter engages in a variety of initiatives aimed at raising awareness about pressing global issues, enhancing education, and encouraging community involvement. ph text</p>
    </div>
  );
}

export default MainPart;
