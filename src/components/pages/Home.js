import React, { useState } from 'react';
import './scss/style.scss';
import Post from './Post';
import { HiOutlinePhotograph, HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineFileGif, AiOutlineCalendar, AiOutlineHeart, AiOutlineUpload } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaRegComment, FaRetweet } from 'react-icons/fa';


function Home() {
  const [tweet, setTweet] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTweet("");
    setData(data =>  [tweet, ...data]);
  }


  console.log("data is: " + data);
  return (
    <div className='home'>
        <div className='head'>Home</div>
        <div className="container">
          <div className='whats-happening'>
              <div className='photo'>
                <img   
                  src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
                  alt="profile" 
                />
              </div>
              <form onSubmit={handleSubmit} className='text'>
                <input type="text" value={tweet} onChange={e => setTweet(e.target.value)} placeholder="What's happening?" />
                <div className='text-btn'>
                  <span className='icons'>
                    <span><HiOutlinePhotograph /></span>
                    <span><AiOutlineFileGif /></span>
                    <span><BiPoll /></span>
                    <span><BsEmojiSmile /></span>
                    <span><AiOutlineCalendar /></span>
                    <span className='disable'><HiOutlineLocationMarker /></span>
                  </span>
                  <input type="submit" value="Tweet" className='send-tweet' />
                </div>
                
              </form>
          </div>
          <div className="post">
              {
                data.map((item) => (
                  <Post item={item} />
                ))
              }
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
                    Lorem ipsum dolor sit amet consectetur adipisicing.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error similique veritatis alias blanditiis! Distinctio magni maxime debitis maiores nemo!
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
          
        </div>
        
    </div>
  )
}

export default Home