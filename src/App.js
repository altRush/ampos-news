import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'

import './App.scss'

function App() {
  const menuList = ['News', 'Regions', 'Video', 'TV']
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={2}>
            <div className="logo">Logo</div>
          </Col>
          <Col className="menu justify-content-end" sm={10}>
            <Nav activeKey="/home">
              {menuList.map((menu, i) => {
                return (
                  <Nav.Item>
                    <div className="nav-menu">
                      <Nav.Link href={menuList[i]}>{menuList[i]}</Nav.Link>
                    </div>
                  </Nav.Item>
                )
              })}
              <div className="search-bar">
                <input
                  name="name"
                  type="search"
                  className="fa fa-search"
                  placeholder="&#61442; &nbsp; Search"
                />
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
