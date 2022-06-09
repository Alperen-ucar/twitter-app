import React from 'react'
import './Right.scss';
import { MdMoreHoriz } from 'react-icons/md'
import { RiMailAddLine } from 'react-icons/ri'
import { BsChevronDoubleUp } from 'react-icons/bs'

function Right() {
  return (
    <div className='right-side'>
        <div className="container">
            <div className="right">
                <div className="search">
                    <input type="text" placeholder="Search Twitter" />
                </div>
                <div className="trends">
                    <h3>Trends for you</h3>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <div className="trend-element">
                        <span className="trend-country">Trending in Turkey</span>
                        <span className="trend-more">
                            <MdMoreHoriz />
                        </span>
                        <span className="trend-text">#Hashtag</span>
                        <span className="trend-tweet-text">10.1K Tweets</span>
                    </div>
                    <a href="/" className="show-more">Show more</a>
                </div>
                
                <div className="message-btn">
                    <div style={{fontSize: "19px"}}>Messages</div><span><RiMailAddLine />   <BsChevronDoubleUp/>   </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Right