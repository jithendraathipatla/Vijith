import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { css } from "@emotion/core"

const Lighthouse = props => {
  const images = props.images
  const [state, setstate] = useState(props.state)
  console.log(images)
  const displayingGallery = () => {
    return state.map((item, i) => {
      return (
        <div key={i} css={one}>
          <img
            src={item.image}
            alt={item.name}
            onClick={() => setisOpen(true)}
            width="400px"
          />
          <span>{item.name}</span>
        </div>
      )
    })
  }
  const [photoIndex, setphotoIndex] = useState(0)
  const [isOpen, setisOpen] = useState(false)
  return (
    <div>
      <div css={imagesingrid}>{displayingGallery()}</div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() =>
            setphotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setphotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  )
}

export default Lighthouse

const one = css`
text-align: center;
background: #eee;
padding-bottom: 10px;
box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.23);
  :hover {
    transform: translateY(-2px);
    cursor: pointer;
  }
  @media(max-width:600px){
    margin-bottom: 23px;
  }
`

const imagesingrid = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-gap:0px 25px;
  img {
    margin-bottom: 1px;
  }
  span {
    padding: 0px 20px;
  }
  @media(max-width:600px){
    display:block;
  }
`
