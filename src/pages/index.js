import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SLidercomonent from "../components/slider"
import Admissionopencomponent from '../components/admissionopen'
import {css} from '@emotion/core';
import Tabscontainercomponent from '../components/tabscontainer'
import Titlecomponent from '../components/title'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
     <div css={slider}>
     <SLidercomonent/>
     </div>
     <div css={sliderupon}>
     <Admissionopencomponent/>
     </div>
    
     <div css={aftertheslider}>
     <div style={{textAlign:"center"}}>
     <Titlecomponent title="Gallery"/>
     </div>
     <Tabscontainercomponent/>
     </div>
  </Layout>
)

export default IndexPage

const aftertheslider = css`
padding: 3%;
margin-top:-30px;
margin-bottom:10px;

`
 
const slider = css`
 position : relative;
`

const sliderupon = css`
position: absolute;
right: 3%;
top: 37%;
z-index: 10;
`
