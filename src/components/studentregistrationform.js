import React from "react"
import { css } from "@emotion/core"

const Studentregistrationform = () => {
  return (
    <div>
      <form>
        <label class="label is-small">Enter Parent Name</label>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Name of the parent"
            />
          </div>
        </div>
        <label class="label is-small">Parents what`s app Number</label>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="What`s app Number"
            />
          </div>
        </div>
        <label class="label is-small">Parents phone Number</label>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Phone number"
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
        
        <label class="label is-small">Acadamic year:</label>
        <div class="select is-small">
          <select>
            <option>2020 - 2021</option>
            <option>2021 - 2022</option>
            <option>2022 - 2023</option>
            <option>2023 - 2024</option>
            <option>2024 - 2025</option>
            <option>2025 - 2026</option>
          </select>
        </div>

        <br />
        <br />
        <div style={{ textAlign: "left" }}>
          <button type="submit" class="button is-small is-link">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Studentregistrationform
