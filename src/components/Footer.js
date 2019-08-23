import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.scss'

const Footer = ({ menuItem }) => {
  return (
    <Row className="footer-container">
      <Col className="footer">
        <div className="footer-inner">
          <Row>
            {/* Receive menu items from App component and iterate through to render each one */}
            {menuItem.map((menu, i) => {
              return (
                <div key={i}>
                  <a
                    href={menuItem[i]}
                    style={1 === i + 1 ? {} : { paddingLeft: '15px' }}
                    className="footer-menu-item"
                  >
                    {menuItem[i]}
                  </a>
                  {/* Render separator for each items */}
                  <span
                    style={
                      menuItem.length > i + 1
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
