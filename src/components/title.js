import React from 'react';
import {css} from '@emotion/core'

const Title = (props) => {
    return (
        <div css={titlecom}>
           <span style={{color: props.color}}>{props.title}</span> 
        </div>
    );
};

export default Title;

const titlecom = css`
    font-size: 18px;
    letter-spacing: 0.4px;
    line-height: 2rem;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color: #e11d92;
    margin-top:0px;
    text-transform: uppercase;
`