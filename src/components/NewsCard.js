import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import { useStateValue } from '../hooks/state'
import MobileNewsImage from './MobileNewsImage'
import NewsBlock from './NewsBlock'
import LoadMore from './LoadMore'

import './NewsCard.scss'

const NewsCard = () => {
  // Draw the global state for search text for usage
  const [{ text }] = useStateValue()

  // Set component states
  const [newsData, setNewsData] = useState([])
  const [postLimit, setPostLimit] = useState(15)

  // Assign new news load amount by adding 15 to previous amount
  const loadMore = () => {
    const newLimit = postLimit + 15
    setPostLimit(newLimit)
  }

  // Fetch news as per required amount
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=' + postLimit)
      .then(({ data }) => {
        setNewsData(data)
      })
  }, [postLimit])

  // Filtering for searched news otherwise display as posts limit
  const filteredNews = text.length
    ? newsData.filter(news => {
        return news.body.toLowerCase().includes(text.toLowerCase())
      })
    : newsData

  return filteredNews.length ? (
    <div>
      <Row className="news-container">
        {/* Iterate through filtered news */}
        {filteredNews.map((news, i) => {
          return (
            // Dynamically add margin to the right of the news card if they are not at the end of the page (not in the 3rd card)
            <Col
              style={(i + 1) % 3 === 0 ? {} : { marginRight: '40px' }}
              key={i}
              className="news-card"
              lg={3}
              md={12}
            >
              <MobileNewsImage i={i} />
              <NewsBlock i={i} filteredNews={filteredNews[i].body} />
            </Col>
          )
        })}
      </Row>
      <Row>
        <LoadMore loadMore={loadMore} />
      </Row>
    </div>
  ) : (
    <div className="no-matched-search">
      {newsData.length ? 'No matched search...' : 'Loading...'}
    </div>
  )
}

export default NewsCard
