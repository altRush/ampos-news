import React from 'react'
import './MobileNewsImage.scss'

const MobileNewsImage = ({ i }) => {
  return (
    <div className="news-image-mobile">
      <img
        alt={i}
        src="https://dummyimage.com/600x400/555/fff.jpg&text=Ampos+News"
      />
    </div>
  )
}

export default MobileNewsImage
