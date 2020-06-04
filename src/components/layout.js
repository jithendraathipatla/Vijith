import React from "react"
import PropTypes from "prop-types"
import './layout.css'
import { useStaticQuery, graphql } from "gatsby"
import ThemeContext from '../context/Themecontext'
import Footercomponent from '../components/footer'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeContext.Consumer>{(theme) => ( 
        <div className={theme.isdark === false ? 'dark' : 'light'}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`, 
          }}
        >
          <main>{children}</main>
          
         
          <Footercomponent/>
        </div>
        </div>
        )}
        </ThemeContext.Consumer>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
