import React from "react"
import "../mystyle.sass"
import { css } from "@emotion/core"

const Form = () => {
  return (
    <div css={main}>
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

        <label class="label is-small">Query Regarding</label>
        <div class="select is-small">
          <select>
            <option>Admission</option>
            <option>Job Opening</option>
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

const main = css`
  margin: 1%;
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.08);
  padding: 20px;
`
