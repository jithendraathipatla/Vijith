import React from "react"
import Layoutcomponent from "../components/layout"
import Loationcomponent from '../components/location'

const About = () => {
  return (
    <Layoutcomponent>
      <span>I am from about us Page</span>
      <hr />
      <Loationcomponent />
    </Layoutcomponent>
  )
}

export default About
