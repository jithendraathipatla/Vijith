import React from 'react';
import {css} from '@emotion/core';
import TitleComponent from '../components/title';

const Footer = () => {
    return (
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
    );
};

export default Footer;

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
font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.5px;

`