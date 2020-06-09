import React from "react"
import { css } from "@emotion/core"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import '../components/layout.css'

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

const Form = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: "admission",
      label: "Admission",
    },
    {
      value: "jobopening",
      label: "Job Opening",
    },
  ]

  const handelcontactform = () => {
    console.log("hi")
  }
  return (
    <div css={contact}>
      <form onSubmit={handelcontactform} className={classes.root}>
        <TextField
          id="outlined-basic"
          label="Enter Your Name"
          variant="outlined"
          required
        />

        <TextField
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
          required
        />

        <TextField
          id="outlined-basic"
          label="Enter Your Phone Number"
          variant="outlined"
          required
        />

        <TextField
          id="outlined-basic"
          label="Your Locality"
          variant="outlined"
          required
        />

        <div style={{marginTop:"20px"}}>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Query Regarding"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </div>
        <div style={{ textAlign: "center", marginTop:"20px" }}>
          <button type="submit" css={button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form

const button = css`
  background: #1976d2;
  color: #fff;
  border: none;
  padding: 3px 17px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 0px;
`

const contact = css`
  form {
    margin-bottom: 0px;
  }
 
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.21);
  background-color: white;
  margin: 0px 5px;
  padding: 18px;
`
