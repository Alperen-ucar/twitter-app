import React from 'react'

function List() {
  return (
    <div>
      <div className='message'>
        <div className='img'>
        <img   
            src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
            alt="profile" 
        />
        </div>
        <div className="user-name">
          <span>Alperen Uçar</span> <span className='name'>@Ucardev</span>
          <div className="text">
          <span>
            Hello there. This message example!
          </span>
        </div>
        </div>
        <button>Follow</button>
      </div>
      <div className='message'>
        <div className='img'>
        <img   
            src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
            alt="profile" 
        />
        </div>
        <div className="user-name">
          <span>Alperen Uçar</span> <span className='name'>@Ucardev</span>
          <div className="text">
          <span>
            Hello there. This message example!
          </span>
        </div>
        </div>
        <button>Follow</button>
      </div>
    </div>
  )
}

export default List