import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

import { useStateValue } from '../hooks/state'

import './NewsCard.scss'
import MobileNewsImage from './MobileNewsImage'
import NewsBlock from './NewsBlock'
import LoadMore from './LoadMore'

const NewsCard = () => {
  const [{ text }] = useStateValue()

  const [newsData, setNewsData] = useState([])
  const [postLimit, setPostLimit] = useState(15)

  const loadMore = () => {
    const newLimit = postLimit + 15
    setPostLimit(newLimit)
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=' + postLimit)
      .then(({ data }) => {
        setNewsData(data)
      })
  }, [postLimit])

  const filteredNews = text.length
    ? newsData.filter(news => {
        return news.body.toLowerCase().includes(text.toLowerCase())
      })
    : newsData

  return filteredNews.length ? (
    <div>
      <Row className="news-container">
        {filteredNews.map((news, i) => {
          return (
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
    <div className="no-matched-search">No matched search...</div>
  )
}

export default NewsCard
