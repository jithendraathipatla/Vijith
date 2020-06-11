import React from "react"
import LayoutComponent from "../components/layout"
import VisionComponent from '../components/vision'
import LocationComponet from "../components/location"
import {css} from '@emotion/core'

const Vision = () => {
  return (
    <LayoutComponent>
      <div css={vision}>
        <VisionComponent/>
      </div>
      <hr />
      <LocationComponet />
    </LayoutComponent>
  )
}

export default Vision

const vision = css`
  margin-top:13%;
`
