import React, { useState } from "react"

import LeftSideBar from '../leftSideBar/leftSideBar'
import NavMenu from '../navMenu/navMenu'
import LinksToAdditionalInformation from '../linksToAdditionalInformation/linksToAdditionalInformation'
import Logo from '../logo'

import "./header.scss"

require("typeface-open-sans")

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`header${open ? " header--open" : ""}`} >
      <button className={`header__icon-menu ${open ? "icon-close" : "icon-bars"}`}
              onClick={() => { setOpen(!open)}}
              onKeyDown={() => { setOpen(!open)}}></button>
      <LeftSideBar headerOpenState={open}/>
      <Logo className="logo logo--header"/>
      <NavMenu headerOpenState={open}/>
      <LinksToAdditionalInformation headerOpenState={open}/>
    </header>
  )
}

export default Header
