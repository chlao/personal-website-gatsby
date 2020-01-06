import React from "react"

import "./linksToAdditionalInformation.scss"

const LinksToAdditionalInformation = ({ headerOpenState, isDesktop }) => {
  const headerOpenClass = headerOpenState ? " links-to-additional-information--md-open" : ""
  const isDesktopClass = isDesktop ? " links-to-additional-information--lg" : " links-to-additional-information--md"

  return (
    <div className={`links-to-additional-information${headerOpenClass}${isDesktopClass}`}>
      <a href="mailto:christinelao3o@gmail.com" className="links-to-additional-information__link links-to-additional-information__link--email">
        <span className="icon-envelope-o"></span>
      </a>
      <a href="https://www.linkedin.com/in/christinelao3o/" className="links-to-additional-information__link links-to-additional-information__link--linked-in">
        <span className="icon-linkedin-square"></span>
      </a>
      <a href="/Resume.pdf" target="_blank" className="links-to-additional-information__link links-to-additional-information__link--resume">Resume</a>
    </div>
  )
}

export default LinksToAdditionalInformation
