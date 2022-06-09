import React from 'react'
import './scss/style.scss'

function Notifications() {
  return (
    <div>
      <h4 style={{margin:"10px 5px"}}>Notifications</h4>
      <div className='notification'>
        <div className='img'>
        <img   
            src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
            alt="profile" 
        />
        </div>
        <div className="user-name">
          Like post <span>Alperen Uçar</span>
        </div>
        <div className="text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta in ducimus cum voluptatum numquam obcaecati?
          </span>
        </div>
      </div>
      <div className='notification'>
        <div className='img'>
        <img   
            src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
            alt="profile" 
        />
        </div>
        <div className="user-name">
          Like post <span>Alperen Uçar</span>
        </div>
        <div className="text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta in ducimus cum voluptatum numquam obcaecati?
          </span>
        </div>
      </div>
      <div className='notification'>
        <div className='img'>
        <img   
            src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
            alt="profile" 
        />
        </div>
        <div className="user-name">
          Like post <span>Alperen Uçar</span>
        </div>
        <div className="text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta in ducimus cum voluptatum numquam obcaecati?
          </span>
        </div>
      </div>
    </div>
  )
}

export default Notifications