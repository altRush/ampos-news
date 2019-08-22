import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'

import { useStateValue } from '../hooks/state'

import './NewsCard.scss'

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
      <Row>
        {filteredNews.map((news, i) => {
          return (
            <Col
              style={(i + 1) % 3 === 0 ? {} : { marginRight: '40px' }}
              key={i}
              className="news-card"
              lg={3}
              md={12}
            >
              <div className="news-image-mobile">
                <img
                  alt={i}
                  src="https://dummyimage.com/600x400/555/fff.jpg&text=Ampos+News"
                />
              </div>
              <div className="news-block">
                <div className="news-title">Title</div>
                <div className="news-image">
                  <img
                    alt={i}
                    src="https://dummyimage.com/600x400/555/fff.jpg&text=Ampos+News"
                  />
                </div>
                <div className="news-body">{filteredNews[i].body}</div>
                <div className="news-update">Updated: 28 July, 2019 12:30</div>
              </div>
            </Col>
          )
        })}
      </Row>
      <Row>
        <Col className="load-more-col">
          <div className="load-more-col-border">
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <div className="no-matched-search">No matched search...</div>
  )
}

export default NewsCard
