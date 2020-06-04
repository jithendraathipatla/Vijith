import React from 'react';
import {css} from '@emotion/core'
import TitleComponent from '../components/title';
import FormComponent from '../components/form';


const Location = () => {
    return(
        <div css={first}>
          <div css={second}>
          <div style={{textAlign:"center"}}>
           <TitleComponent title="location"/>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15536.978098629357!2d79.0845325!3d13.2099589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4a284ca5b0a3de8!2sVijith%20Public%20School!5e0!3m2!1sen!2sin!4v1591248385300!5m2!1sen!2sin" width="100%" height="550" frameBorder="0"></iframe>
          </div>
          <div css={thirs}>
            <div style={{textAlign:"center"}}><TitleComponent title="Contact Us"/></div>
            <FormComponent/>
          </div>
        </div>
    )
}

export default Location;

const first = css`
 display:flex;
 iframe{
     margin-bottom:0px;
 }
`

const second = css`
 flex: 4;
`

const thirs = css`
flex: 2;
`