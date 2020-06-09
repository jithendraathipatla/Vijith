import React from "react"
import Titlecomponent from "../components/title"
import { css } from "@emotion/core"

const About = () => {
  return (
    <div css={main}>
      <div style={{ textAlign: "center" }}>
        <Titlecomponent title="About US" />
      </div>

      <span>
        Our school's aim is to learn leadership, the common core, and
        relationships for life. Our aim is to provide a safe, disciplined
        learning environment that empowers all students to develop their full
        potential. We feel strongly about helping to build leaders that have the
        ability to succeed in whatever endeavor they undertake. Winning is not
        always the measure of success. Our students understand the "Win, win"
        philosophy and use it in their daily life. Common standards keeps us
        focused on learning appropriate content and preparing our students to
        graduate. Last but just as importantly, setting examples for our
        students of meaningful and lasting relationships will go with them
        throughout their lifetime.
        <br />
        <br />
        While adopting our own unique aim stated in the introduction, we
        embrace the district aim of providing a safe, disciplined learning
        environment that empowers all students to develop their full potential.
        We strongly agree with and uphold the district's belief statement: "In a
        consistently safe and healthy environment, all students can become
        responsible, respectful, and resourceful. We believe students learn best
        when actively engaged in the learning process. Education is a
        collaborative partnership involving school, family, and community." At
        Vijith Public School, we strive to build lasting relationships among
        students and staff that encourage open discussion and provide activities
        that develop our students' strengths.
      </span>
    </div>
  )
}

export default About

const main = css`
  margin: 0px 3%;
  padding-bottom: 30px;
  text-align: justify;
  span{
    letter-spacing: 0.3px;
  }
`
