import React from 'react';
import {css} from '@emotion/core'

const Admissionopen = () => {
    return (
        <div css={admission}>
           
           <h4>Admissions are in Progress: (2020 - 2021)</h4>
           <div style={{textAlign:"center"}}>
           </div>
           
          
           <div style={{display:"flex"}}>
           <h4>Please contact us at:</h4>
           <a href="tel:+917893531408">7893531408</a>
           <span style={{marginRight:"10px", marginTop:"-2px"}}> / </span>
           <a href="tel:+917893531418">7893531418</a>
           </div>
           
        </div>
    );
};

export default Admissionopen;

const admission = css`
h2{
    margin-bottom:4px;
}
h3{
    margin-top: 10px;
    margin-bottom:4px;
}
h6{
    margin-top: 12px;
    margin-left: 5px;
}
h4{
   
    margin-right: 14px;
    margin-bottom: 6px;
    
}
color: white;
background: #22272cb3;
padding: 15px 1px 14px 20px;
border-radius: 11px;
font-size:26px;
a{
    padding-right:10px;
    font-size:15px;
    margin-top:-4px;
    font-weight: 600;
    font-family: cursive;
    color: white;
    text-decoration: none;
    :hover{
        text-decoration: underline;
        transform: translateY(-1px); 
    }
}
`