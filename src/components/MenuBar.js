import React, { useState } from 'react'
import { useStateValue } from '../hooks/state'
import { Nav } from 'react-bootstrap'

import './MenuBar.scss'

const MenuBar = ({ menuItem }) => {
  // Connect search input with global state
  const [text, dispatch] = useStateValue()
  // Create component search text state
  const [searchedText, setSearchedText] = useState('')

  // Set search text upon each input changes
  const onChange = e => {
    setSearchedText(e.target.value)
  }

  // Dispatch the search text load to the reducer to further processing
  const onSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'searchSubmit',
      newSearch: searchedText
    })
  }

  return (
    <>
      <Nav className="mobile-nav">
        <div className="mobile-logo">Logo</div>
        <div className="news-title">News</div>
        <div className="news-hamburger-menu">
          <i class="fa fa-bars" aria-hidden="true" />
        </div>
      </Nav>
      <Nav activeKey="/home">
        {/* Iterate through each menu items in order to render them in the navbar */}
        {menuItem.map((menu, i) => {
          return (
            <Nav.Item key={i}>
              <div className="nav-menu">
                <Nav.Link href={menuItem[i]}>{menuItem[i]}</Nav.Link>
              </div>
            </Nav.Item>
          )
        })}
        <div className="search-bar">
          <form onSubmit={e => onSubmit(e)}>
            <input
              name="name"
              type="search"
              className="fa fa-search"
              placeholder="&#61442; &nbsp; Search"
              onChange={onChange}
            />
          </form>
        </div>
      </Nav>
    </>
  )
}

export default MenuBar
