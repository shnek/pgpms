import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteSubtitle, siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#63ACD5`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2 style={{ margin: 0 }}>
        <Link style={{
          color: `#8A8787`,
          textDecoration: `none`,
        }} to="/">
          {siteSubtitle}
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``,
}

export default Header