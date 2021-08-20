import * as React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

  return (
    <div className="main-container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>

      <main style={{marginTop: '56px'}}>{children}</main>
      <footer>
        <div className="line"/>
        <div className="txt-center">

          <strong>DIALLO CORPORATION </strong><br/>
          <strong>©2021</strong>
        </div>
        <div className="txt-center">
          プライバシーポリシー
        </div>
        <div className="txt-center">
          Website by – 鈴木多聞
        </div>
      </footer>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
