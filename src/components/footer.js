import React from 'react';
import {css} from '@emotion/core';
import TitleComponent from '../components/title';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
       <div style={{background:"#232F3E"}}>
        <div css={fostyle}>
           <div>
            <TitleComponent title="Vijith Public School" color="#ffff"/>  
            <span>ljrehgekjghdkjfg jkfshdfkjsdf sdkhgsggg sskjdfhsdf</span>  
            <span>ljrehgekjghdkjfg jkfshdfkjsdf sdkhgsggg sskjdfhsdf</span>  
            <span>ljrehgekjghdkjfg jkfshdfkjsdf sdkhgsggg sskjdfhsdf</span>         
           </div>
           <div>
           <TitleComponent title="Quick Links" color="#ffff"/>
           fglkdfgk           
          </div>

          <div>
          <TitleComponent title="Follows Us" color="#ffff"/>           
         </div>

         <div>
         <TitleComponent title="Contact US" color="#ffff"/>           
        </div>
        </div>
        <hr/>
        <div css={last}>
         <span>@{year} All rights reserved</span>
        </div>
       </div> 
    );
};

export default Footer;

const last = css`
text-align: center;
color: #ffff;
box-shadow:0px 0px 7px 2px rgba(229, 220, 220, 0.52);
span{
    font-size:11px;
    letter-spacing:0.4px;
}
`

const fostyle = css`
padding:10px 30px;
display:flex;
justify-content: space-between;
box-shadow: 0px 0px 2px 2px rgba(53, 51, 51, 0.68);
background:#232F3E;
color:#ffff;
span{
    display: block;
}
font-size: 12px;
    line-height: 26px;
    -webkit-letter-spacing: 0.5px;
    -moz-letter-spacing: 0.5px;
    -ms-letter-spacing: 0.5px;
    letter-spacing: 1.5px;

`