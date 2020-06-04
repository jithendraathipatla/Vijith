import React from 'react';
import {css} from '@emotion/core'

const Form = () => {
    const handelcontactform = () => {
        console.log("hi")
    }
    return (
        <div css={contact}>
          <form onSubmit={handelcontactform}>
         
          <label>Name:</label>
          <input name="name" placeholder="Enter Your Name" required/>
         

         
          <label>Email:</label>
          <input name="email" placeholder="Enter Your Email" required/>
         
         
          <label>Phone Number:</label>
          <input name="phone" type="number" placeholder="Enter Your Phone Number" required/>
          

          <label>Your Locality:</label>
          <input name="phone" placeholder="Ex: Murakambuttu" required/>
          
          <label>Query Regarding:</label>
          <select name="dropdown">
           <option>Admission</option>
           <option>Job Opening</option>
          </select>

          

          <div style={{textAlign:"center"}}>
          <button type="submit" css={button}>Submit</button>
          </div>
          </form>
        </div>
    );
};

export default Form;

const button = css`
 background:#1976d2;
 color:#fff;
 border: none;
 padding: 3px 17px;
 box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
 margin-bottom:0px;
`

const contact = css`
form{
    margin-bottom:0px;
}
 label{
     display: block;
     margin-bottom:10px;
 }

 input{
     margin-bottom:20px;
     width:100%;
     font-size:18px;
     padding:10px 20px 1px 2px;
 }

 select{
    margin-bottom:20px;
    width:100%;
    padding:10px 20px 1px 2px;
}
box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.21);
    background-color: white;
    margin: 0px 5px;
    padding:18px;

`