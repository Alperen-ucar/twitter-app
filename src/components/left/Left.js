import { NavLink } from 'react-router-dom';
import React from 'react';
import './Left.scss';
import { FaTwitter } from 'react-icons/fa'
import { RiHome7Fill, RiFileList2Line } from 'react-icons/ri'
import { BiHash, BiEnvelope } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiBookmark, FiMoreHorizontal } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import { CgMoreO } from 'react-icons/cg'


function Left() {
  return (
    <div className='left-side'>
        <div className='container'>
            <header><FaTwitter /></header>
            <nav>
                <NavLink to="/">
                <span> <span className='icon'><RiHome7Fill /></span> Home</span>
                </NavLink>
                <NavLink to="/explore">
                    <span> <span className='icon'><BiHash /></span> Explore</span>
                </NavLink>
                <NavLink to="/notifications">
                    <span> <span className='icon'><IoMdNotificationsOutline /></span> Notifications</span>
                </NavLink>
                <NavLink to="/messages">
                    <span> <span className='icon'><BiEnvelope /></span> Messages</span>
                </NavLink>
                <NavLink to="/bookmarks">
                    <span> <span className='icon'><FiBookmark /></span> Bookmarks</span>
                </NavLink>
                <NavLink to="/list">
                    <span> <span className='icon'><RiFileList2Line /></span> List</span>
                </NavLink>
                <NavLink to="/profile">
                    <span> <span className='icon'><HiOutlineUser /></span> Profile</span>
                </NavLink>
                <NavLink to="/">
                    <span> <span className='icon'><CgMoreO /></span> More</span>
                </NavLink>
            </nav>

            <button className='tweet-btn'>Tweet</button>

            <footer>
                <div className='profile-btn'>
                    <div className="img-div">
                        <img 
                        src="https://pbs.twimg.com/profile_images/1494582401347031041/4005R5tM_normal.jpg"
                        alt="profile" 
                        />
                    </div>
                    
                    <div className='profile-name'>
                        Alperen Uçar <br/>
                        @Ucardev
                        
                    </div>
                    <div className='profile-more'><FiMoreHorizontal/></div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Left