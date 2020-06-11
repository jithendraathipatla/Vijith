import React from "react"
import '../mystyle.sass'

const Form = () => {
  return (
    <div>
      <form>
        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your Emailid"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your Phonenumber"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>

        <div style={{textAlign:"center"}}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
