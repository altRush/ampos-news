import React from 'react'
import { Nav } from 'react-bootstrap'

const MenuBar = props => {
  return (
    <Nav activeKey="/home">
      {props.menuItem.map((menu, i) => {
        return (
          <Nav.Item key={i}>
            <div className="nav-menu">
              <Nav.Link href={props.menuItem[i]}>{props.menuItem[i]}</Nav.Link>
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
  )
}

export default MenuBar
