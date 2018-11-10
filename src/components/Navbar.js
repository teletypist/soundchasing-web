import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import styled from 'styled-components'

const colors = {
    white: "#ffffff",
    green: "#1FB714",
    yellow: "#FBF305",
    darkgreen: "#006412",
    orange: "#FF6403",
    brown: "#562C05",
    red: "#DD0907",
    tan: "#90713A",
    magenta: "#F20884",
    lightgrey: "#C0C0C0",
    purple: "#4700A5",
    mediumgrey: "#808080",
    blue: "#0000D3",
    darkgrey: "#404040",
    cyan: "#02ABEA",
    lightmint: "#95DCC8",
    mint: "#83B59E",
    textmint: "#5DA080",
    darkmint: "#1B7963",
    lightbrown: "#856D57",
    black: "#000000",
}



const SiteHeading = styled.h1`
    text-transform: uppercase;
    margin: 0rem;
    opacity: ${(props) => (props.fade) ? 1/props.fade : 1.0};
    text-decoration: underline;
`

const Link = styled(GatsbyLink)`
    color: ${colors.lightmint};
`

const Nav = styled.nav`
    margin-bottom: 2rem;
`

const Navbar = () => (
  <Nav>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
            {([1, 2, 3, 4, 5]).map((index) =>
                <SiteHeading fade={2**(index-1)}>Sound Chasing</SiteHeading>
            )}
        </Link>
      </div>
    </div>
  </Nav>
)

export default Navbar
