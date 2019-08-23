import React from 'react'

import './NewsBlock.scss'

const NewsImage = ({ i, filteredNews }) => {
  return (
    <div className="news-block">
      <div className="news-title">Title {i + 1}</div>
      <div className="news-image">
        <img
          alt={i}
          src="https://dummyimage.com/600x400/555/fff.jpg&text=Ampos+News"
        />
      </div>
      <div className="news-body">{filteredNews}</div>
      <div className="news-update">Updated: 28 July, 2019 12:30</div>
    </div>
  )
}

export default NewsImage
