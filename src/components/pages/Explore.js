import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'


function Explore() {
  return (
    <div>
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
                    <a href="/" className="show-more">Show more</a>
                </div>
                
            </div>
    </div>
  )
}

export default Explore