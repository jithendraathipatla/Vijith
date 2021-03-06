import React, { useEffect, useState } from "react"
import Mainlogo from "../images/vitithlogo.jpeg"
import { css } from "@emotion/core"
import "./layout.css"
import ThemeContext from "../context/Themecontext"
import { Link } from "gatsby"
import HeaderComponent from "../components/drawer"

const Header = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  console.log(offset)

  return (
    <div>
      <ThemeContext.Consumer>
        {theme => (
          <div>
            <div css={header}>
              <div css={links}>
                <div css={logo}>
                  {offset > 0 ? <img src={Mainlogo} /> : null}
                </div>
                <div>
                  <Link to="/" activeClassName="active">
                    Home
                  </Link>
                  <Link to="/about" activeClassName="active">
                    About
                  </Link>
                  <Link to="/vision" activeClassName="active">
                    Vision
                  </Link>
                  <Link to="/mision" activeClassName="active">
                    Mission
                  </Link>
                </div>
                {offset === 0 ? (
                  <div
                    style={{ padding: "30px 245px", textAlign: "center" }}
                  ></div>
                ) : null}
                <div>
                  <Link to="/admission" activeClassName="active">
                    Admissions
                  </Link>
                  <Link to="/faculty" activeClassName="active">
                    Faculty
                  </Link>
                  <Link to="/facilities" activeClassName="active">
                    Facilities
                  </Link>
                  <Link to="/contact" activeClassName="active">
                    Contact
                  </Link>
                </div>
              </div>
              {offset === 0 ? (
                <div css={beforescroll}>
                  <img src={Mainlogo} />
                </div>
              ) : null}
            </div>

            <div css={header1}>
              <HeaderComponent />

              <div css={mobilelogo}>
              {offset > 0 ? <div css={after}><img src={Mainlogo}/></div> : <div css={start}><img src={Mainlogo}/></div>}
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Header

const start = css`
img{
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 8px 2px rgb(180, 131, 163);
 }
`
const after = css`
img{
  height: 40px;
  margin-top: 3px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px rgb(180,131,163);
 }
`

const mobilelogo = css`
position:absolute;
position: absolute;
    margin-left: 50%;
    transform: translate(-45%, 1px);
`

const beforescroll = css`
  position: absolute;
  top: 0%;
  img {
    width: 20%;
    margin-left: 72.9%;
    box-shadow: 0px 0px 8px 2px rgb(180, 131, 163);
    border-radius: 50%;
    position: relative;
  }
`

const header = css`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 40;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.18);
  @media (max-width: 600px) {
    display: none;
  }
`

const header1 = css`
  display: none;
  @media (max-width: 600px) {
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 40;
    display: flex;
    justify-content: space-between;
    position:fixed;
    box-shadow: 0px 0px 3px 4px rgba(0, 0, 0, 0.18);
  }
`

const logo = css`
  img {
    width: 14%;
    margin-bottom: 0px;
    padding-top: 5px;
    padding-left: 7px;
  }
`

const links = css`
  display: flex;
  justify-content: space-between;
  a {
    margin: 17px;
    padding-bottom: 20px;
    font-size: 24px;
    letter-spacing: 0.4px;
    font-size: 1.125rem;
    line-height: 4rem;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: #875b28;
    :hover {
      color: burlywood;
    }
  }
`
