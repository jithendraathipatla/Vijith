import React from "react"
import { css } from "@emotion/core"

import Titlecomponent from "../components/title"

const Form = () => {
  const handelcontactform = () => {
    console.log("hi")
  }
  return (
    <div css={contact}>
      <div style={{ textAlign: "center" }}>
        <Titlecomponent title="Admission form" />
      </div>
      <form>
        <label class="label is-small">Your Name</label>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your Name"
            />
          </div>
        </div>
        <label class="label is-small">Your Emailid</label>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your Emailid"
            />
          </div>
        </div>
        <label class="label is-small">Your Phone Number</label>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your Phonenumber"
            />
          </div>
        </div>


        <label class="label is-small">Name of the child</label>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your child Name"
            />
          </div>
        </div>

        <label class="label is-small">Admission Seeking For:</label>
        <div class="select is-small">
          <select>
            <option>Nursary</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>1st Class</option>
            <option>2nd Class</option>
            <option>3rd Class</option>
            <option>4th Class</option>
            <option>5th Class</option>
            <option>6th Class</option>
            <option>7th Class</option>
          </select>
        </div>

        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <button type="submit" class="button is-small is-link">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form


const contact = css`
  margin: 20px 30%;
  margin-top: 10%;
  form {
    margin-bottom: 0px;
  }
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.21);
  background-color: white;
  padding: 18px;
  @media(max-width:600px){
    margin: 20px 4%;
    margin-top: 14%;
  }
`
