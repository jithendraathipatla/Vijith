import React from "react"
import TitleComponent from "../components/title"
import { css } from "@emotion/core"
import { FaStar } from "react-icons/fa"

const uniqueprinciples = () => {
  return (
    <div css={abcd}>
      <div style={{ textAlign: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205 918" css={svvb}>
          <path
            fill="#f5fcff"
            fill-rule="evenodd"
            d="M786.762 81.215c-5.731 0-11.435.12-17.11.348-106.873 4.14-114.975-2.673-172.065-38.455C555.367 15.836 505.072 0 451.077 0 325.84 0 220.502 85.158 189.724 200.742c-19.29 66.98-24.02 74.033-83.435 121.661l.01.005C41.498 374.42 0 454.288 0 543.865 0 700.6 127.012 827.66 283.69 827.66c26.16 0 51.486-3.559 75.539-10.19 81.736-20.874 101.626-24.156 209.346 39.146C632.095 895.55 706.808 918 786.762 918 1017.749 918 1205 730.68 1205 499.607c0-231.072-187.251-418.392-418.238-418.392"
            opacity="1"
          ></path>
        </svg>
      </div>
      <div css={fine}>
        <div style={{ textAlign: "center" }}>
          <TitleComponent title="Five Unique Principles" />
        </div>

        <div css={unique}>
          <ul>
            <span>
              <FaStar />
              <li>Innovative Skills Development</li>
            </span>
            <span>
              <FaStar />
              <li>Communication Skills Development</li>
            </span>
            <span>
              <FaStar />
              <li>Smart Skills Development</li>
            </span>
            <span>
              <FaStar />
              <li>Apllication Skills Development</li>
            </span>
            <span>
              <FaStar />
              <li>Self Confidence Development</li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default uniqueprinciples

const fine = css`
  position: absolute;
  top: 9%;
  left: 0px;
  width:100%;
`
const svvb = css`
 width:23%;
 @media(max-width:600px){
     width: 100%;
 }
`

const unique = css`
  position: absolute;
  width: 100%;
  ul {
    list-style: none;
    margin-left: 40.5%;
    margin-top: 13px;
    margin-bottom: 0px;
    @media(max-width:600px){
        margin-left:30px;
    }
    span {
      display: flex;
      svg {
        color: #e11d92;
        margin-right: 10px;
      }
    }
  }
`

const abcd = css`
  position: relative;
`
