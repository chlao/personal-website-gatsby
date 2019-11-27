import React from "react"

import "./linksToAdditionalInformation.scss"

const LinksToAdditionalInformation = ({ headerOpenState }) => {
  return (
    <div className={`links-to-additional-information${headerOpenState ? " links-to-additional-information--open" : ""}`}>
      <a href="" className="links-to-additional-information__link links-to-additional-information__link--email">
        <span className="icon-envelope-o"></span>
      </a>
      <a href="" className="links-to-additional-information__link links-to-additional-information__linkk--linked-in">
        <span className="icon-linkedin-square"></span>
      </a>
      <a href="" className="links-to-additional-information__link links-to-additional-information__link--resume">Resume</a>
    </div>
  )
}

export default LinksToAdditionalInformation