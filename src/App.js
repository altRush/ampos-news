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
  // Define all menu items
  const menuList = ['News', 'Regions', 'Video', 'TV']

  // Initiate search text's state as empty then pass through the StateProvider
  const initialState = {
    text: ''
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Container>
          <Row>
            <Col className="logo-container" lg={2}>
              <Logo />
            </Col>
            <Col className="menu justify-content-end" lg={10} md={12}>
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
