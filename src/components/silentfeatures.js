import React from "react"
import { css } from "@emotion/core"
import Titlecomponent from "../components/title"
import { FaCheckCircle } from "react-icons/fa"

const Silentfeatures = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Titlecomponent title="Special Features" />
      </div>

      <div css={main}>
        <div css={one}>
          <ul>
            <li>
              <FaCheckCircle /> Pleasant and friendly atmosphere
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Child centric & Digitalised classrooms
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Indoor & Outdoor Games & Sports
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Special Emphasis on Communication Skills in
              English
            </li>
            <li>
              {" "}
              <FaCheckCircle />
              Specially Trained, Highly Educated Faculty & Management Team
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Individual attention on every Child
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Activity Based play way Methodology
            </li>
          </ul>
        </div>

        <div css={two}>
          <ul>
            <li>
              {" "}
              <FaCheckCircle /> CCTV Surveillance
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Hygienic Washrooms & Toilets
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Advanced Computer Lab and Library
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Extra and Co-curricular Activities
            </li>
            <li>
              {" "}
              <FaCheckCircle /> RO Water for Drinking
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Regular Parent Teacher Association
            </li>
            <li>
              {" "}
              <FaCheckCircle /> Safe, Efficient & Reliable Transportation
              Available
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Silentfeatures

const main = css`
  display: flex;
  padding: 0px 4%;
  box-sizing: border-box;
  box-shadow: rgba(102, 51, 153, 0.08) 0px 2px 4px,
    rgba(102, 51, 153, 0.16) 0px 4px 8px;
  background: rgb(255, 255, 255);
  border-color: white;
  margin: 0px;
  padding: 1rem;
  margin: 0px 4%;
  margin-bottom: 30px;
  border-width: 2px;
  border-style: solid;
  border-image: initial;
  border-radius: 8px;
  @media (max-width: 600px) {
    display: block;
    padding:15px 0px;
  }
  ul {
    margin-bottom: 0px;
  }
  li {
    font-size: 18px;
    letter-spacing: 0.3px;
    list-style: none;
    svg {
      color: #875b28;
      margin-right: 10px;
    }
  }
`
const one = css`
  flex: 5;
`
const two = css`
  flex: 4;
  margin-left: 10%;
  @media (max-width: 600px) {
    margin-left: 0%;
  }
`
