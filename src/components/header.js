import React, { useEffect, useState } from "react"
import Mainlogo from "../images/vitithlogo.jpeg"
import { css } from "@emotion/core"
import ThemeContext from "../context/Themecontext"
import { Link } from "gatsby"

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
          <div css={theme.isdark === true ? header : header1}>
            <div css={links}>
              <div css={logo}>{offset > 0 ? <img src={Mainlogo} /> : null}</div>
              <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/vision">Vision</Link>
                <Link to="/mision">Mission</Link>
              </div>
              {offset === 0 ? (
                <div
                  style={{ padding: "30px 245px", textAlign: "center" }}
                ></div>
              ) : null}
              <div>
                <Link to="/mision">Admissions</Link>
                <Link to="/about">Faculty</Link>
                <Link to="/vision">Facilities</Link>
                <Link to="/mision">Contact</Link>
              </div>
            </div>
            {offset === 0 ? (
              <div css={beforescroll}>
                <img src={Mainlogo} />
              </div>
            ) : null}
          </div>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Header

const beforescroll = css`
  position: absolute;
  top: 0%;
  img {
    width: 20%;
    margin-left: 72.9%;
    box-shadow: 0px 0px 8px 2px rgb(180, 131, 163);
    border-radius: 50%;
    position:relative;
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
`

const header1 = css`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 7px 8px rgba(0, 0, 0, 0.08);
  background: white;
  color: black;
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
    padding: 17px;
    font-size: 24px;
    letter-spacing: 0.4px;
    font-size: 1.125rem;
    line-height: 4rem;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: #875b28;
  }
`

