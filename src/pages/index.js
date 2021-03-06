import React from "react"
import Layout from "../components/layout"
import SLidercomonent from "../components/slider"
import Admissionopencomponent from "../components/admissionopen"
import { css } from "@emotion/core"
import Tabscontainercomponent from "../components/tabscontainer"
import Titlecomponent from "../components/title"
import Visioncomponent from "../components/vision"
import Loationcomponent from "../components/location"
import SpecialFeaturesComponent from "../components/silentfeatures"
import AboutUsComponent from "../components/about"
import UniquePrinciplesComponent from '../components/uniqueprinciples'

const IndexPage = () => (
  <Layout>
    <div css={slider}>
      <SLidercomonent />
    </div>
    <div css={sliderupon}>
      <Admissionopencomponent />
    </div>
    <AboutUsComponent />

    <hr />
    <Visioncomponent />

    <hr />

    <SpecialFeaturesComponent />

    <hr style={{marginBottom:"10px"}} />

    <UniquePrinciplesComponent/>
    <hr/>

    <div css={aftertheslider}>
      <div style={{ textAlign: "center" }}>
        <Titlecomponent title="Gallery" />
      </div>
      <Tabscontainercomponent />
    </div>
    <hr/>

    

    <Loationcomponent />
  </Layout>
)

export default IndexPage

const aftertheslider = css`
  padding: 3%;
  margin-top: -30px;
`

const slider = css`
  position: relative;
`

const sliderupon = css`
  position: absolute;
  right: 2%;
  top: 32%;
  z-index: 10;
  @media (max-width: 600px) {
    top: 10%;
  }
`
