import React, { useState } from 'react'
import { useStateValue } from '../hooks/state'
import { Nav } from 'react-bootstrap'

import './MenuBar.scss'

const MenuBar = ({ menuItem }) => {
  const [text, dispatch] = useStateValue()
  const [searchedText, setSearchedText] = useState('')

  const onChange = e => {
    setSearchedText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'searchSubmit',
      newSearch: searchedText
    })
  }

  return (
    <Nav activeKey="/home">
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
  )
}

export default MenuBar
