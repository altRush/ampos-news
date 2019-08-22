import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { StateProvider } from './hooks/state'
import reducer from './hooks/reducer'

import Logo from './components/Logo'
import MenuBar from './components/MenuBar'
import NewsList from './components/NewsList'
import Footer from './components/Footer'

import './App.scss'

function App() {
  const menuList = ['News', 'Regions', 'Video', 'TV']

  const initialState = {
    text: ''
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Container>
          <Row>
            <Col className="logo-container" md={2} sm={12}>
              <Logo />
            </Col>
            <Col className="menu justify-content-end" md={10}>
              <MenuBar menuItem={menuList} />
            </Col>
          </Row>
          <NewsList />
        </Container>
        <Footer menuItem={menuList} />
      </div>
    </StateProvider>
  )
}

export default App
