import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {Link as GatsbyLink} from 'gatsby'

import Navbar from '../components/Navbar'
import icons from './icons'

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

const Frame = styled.div`
    max-width: 750px;
    margin: 1rem auto;
`

export const SubHeading = styled.h1`
    color: ${colors.darkmint};
    text-transform: uppercase;
`

export const CategoryBlock = styled.div`
    margin: 0rem;
    margin-top: 1rem;
`

export const CategoryHeader = styled.h2`
    margin: 0;
    font-size: 1.2rem;
`

export const ArticleRow = styled.div`
    margin: 0rem;
`

export const Link = styled(GatsbyLink)`
    color: ${colors.textmint};
`

export const Tag = styled.span`
    margin: 0rem 0.25rem;
    padding: 0;
`

const TemplateWrapper = ({ children }) => (
  <Frame>
    <Helmet title="Soundchasing - Experiments in pursuit of sound-making" />
    <Navbar />
    <div>{children}</div>
  </Frame>
)

export default TemplateWrapper
