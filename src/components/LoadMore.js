import React from 'react'
import { Col } from 'react-bootstrap'

import './LoadMore.scss'

const LoadMore = ({ loadMore }) => {
  return (
    <Col className="load-more-col">
      <div className="load-more-col-border">
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </Col>
  )
}

export default LoadMore
