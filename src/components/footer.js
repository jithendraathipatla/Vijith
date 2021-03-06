import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import TitleComponent from "../components/title"
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div style={{ background: "#232F3E" }}>
      <div css={fostyle}>
        <div>
          <TitleComponent title="Vijith Public School" color="#ffff" />
          <span>27-147/3, Ram Nagar Colony,Chittoor, Andhra Pradesh  <br/> 517002</span>
        </div>
        <div>
          <TitleComponent title="Quick Links" color="#ffff" />
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Mission</Link>
            </li>
            <li>
              <Link>Vision</Link>
            </li>
          </ul>
        </div>

        <div>
          <TitleComponent title="Follows Us" color="#ffff" />
          <div css={icons}>
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <div>
          <TitleComponent title="Contact US" color="#ffff" />
        </div>
      </div>

      <div css={last}>
        <span>@{year} Vijith Public School, All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer

const icons = css`
  display: flex;
  svg {
    font-size: 22px;
    margin-right: 15px;
    margin-top:4px;
    :hover {
      border: 1px solid #eeee;
      border-radius: 25%;
      transform: translateY(-1px);
      cursor: pointer;
      padding: 2px;
      background: #e11d92;
    }
  }
`

const last = css`
  text-align: center;
  color: #ffff;
  box-shadow: 0px 0px 7px 2px rgba(229, 220, 220, 0.52);
  padding-bottom: 2px;
  padding-top:4px;
  span {
    font-size: 14px;
    letter-spacing: 0.4px;
    padding-bottom: 5px;
     }
`

const fostyle = css`
  padding: 10px 30px;
  display: grid;
  grid-template-columns: 5.3fr 1.7fr 2.2fr 2fr;
  grid-gap:0px 100px;
  justify-content: space-between;
  box-shadow: 0px 0px 2px 2px rgba(53, 51, 51, 0.68);
  background: #232f3e;
  color: #ffff;
  @media(max-width:600px){
    display:none;
  }
  span {
    font-size: 16px;
    letter-spacing: 0.8px;
  }
  line-height: 22px;
  -webkit-letter-spacing: 0.5px;
  -moz-letter-spacing: 0.5px;
  -ms-letter-spacing: 0.5px;
  letter-spacing: 0.2px;
  ul {
    li {
      margin-bottom: 5px;
      :hover {
        transform: translateY(-1px);
      }
      a {
        margin-bottom: 1px;
        font-size: 0.90em;
        text-decoration: none;
        color: white;
        letter-spacing: 0.5px;
       
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`
