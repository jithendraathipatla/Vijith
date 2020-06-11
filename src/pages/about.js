import React from "react"
import {css} from '@emotion/core';
import Layoutcomponent from "../components/layout"
import Loationcomponent from '../components/location'
import Aboutuscomponent from '../components/about'

const About = () => {
  return (
    <Layoutcomponent>
      <div css={about}>
       <Aboutuscomponent/>
      </div>
      <hr />
      <Loationcomponent />
    </Layoutcomponent>
  )
}

export default About;

const about = css`
 margin-top:13%;
`


