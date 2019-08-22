import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './Footer.scss'

const Footer = props => {
  return (
    <Row className="footer-container">
      <Col className="footer">
        <div className="footer-inner">
          <Row>
            {props.menuItem.map((menu, i) => {
              return (
                <div key={i}>
                  <a
                    href={props.menuItem[i]}
                    style={1 === i + 1 ? {} : { paddingLeft: '15px' }}
                    className="footer-menu-item"
                  >
                    {props.menuItem[i]}
                  </a>
                  <span
                    style={
                      props.menuItem.length > i + 1
                        ? {
                            borderRight: '2px solid rgb(180, 180, 180)',
                            padding: '0px 15px 0px 0px'
                          }
                        : {}
                    }
                  />
                </div>
              )
            })}
            <div className="company-signature">Copyright Ⓒ AMPOS</div>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
