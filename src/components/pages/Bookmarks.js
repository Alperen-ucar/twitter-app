import React from 'react'
import { AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import './scss/style.scss';

function Bookmarks() {
  return (
    <div className='bookmark'>
       <div className="post-element">
                <div className='post-photo'>
                        <img 
                        src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
                        alt="profile" 
                        />
                </div>
                <div className='post-text'>
                  <div className='post-header'>
                    <span>
                      <span className='post-name'>Alperen Uçar</span>
                      <span className='post-username'>@Ucardev</span>
                      <span className='post-time'>. 30m</span>
                    </span>
                    <span className='post-more'><FiMoreHorizontal/></span>
                  </div>
                  <div className='post-content'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, qui.
                  </div>
                  <div className='post-footer'>
                    <span><FaRegComment /> 3</span>
                    <span><FaRetweet /></span>
                    <span><AiOutlineHeart /> 9</span>
                    <span><AiOutlineUpload /></span>
                  </div>
                </div>
        </div>
        <div className="post-element">
                <div className='post-photo'>
                        <img 
                        src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
                        alt="profile" 
                        />
                </div>
                <div className='post-text'>
                  <div className='post-header'>
                    <span>
                      <span className='post-name'>Alperen Uçar</span>
                      <span className='post-username'>@Ucardev</span>
                      <span className='post-time'>. 30m</span>
                    </span>
                    <span className='post-more'><FiMoreHorizontal/></span>
                  </div>
                  <div className='post-content'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ab magnam reiciendis ratione hic nemo corporis dolor nulla asperiores recusandae!
                  </div>
                  <div className='post-footer'>
                    <span><FaRegComment /> 3</span>
                    <span><FaRetweet /></span>
                    <span><AiOutlineHeart /> 9</span>
                    <span><AiOutlineUpload /></span>
                  </div>
                </div>
        </div>

        <div className="post-element">
                <div className='post-photo'>
                        <img 
                        src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
                        alt="profile" 
                        />
                </div>
                <div className='post-text'>
                  <div className='post-header'>
                    <span>
                      <span className='post-name'>Alperen Uçar</span>
                      <span className='post-username'>@Ucardev</span>
                      <span className='post-time'>. 30m</span>
                    </span>
                    <span className='post-more'><FiMoreHorizontal/></span>
                  </div>
                  <div className='post-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum dolorum ratione. Voluptas, quas illum?
                  </div>
                  <div className='post-footer'>
                    <span><FaRegComment /> 3</span>
                    <span><FaRetweet /></span>
                    <span><AiOutlineHeart /> 9</span>
                    <span><AiOutlineUpload /></span>
                  </div>
                </div>
        </div>

    </div>
  )
}

export default Bookmarks