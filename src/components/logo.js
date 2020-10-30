import React from "react"
import { Link } from "gatsby"

const Logo = (props) => {
  return <div className="site-logo">
    <Link to="/">
      <img src={props.logo}/>
      </Link>
  </div>
}

export default Logo
