import React from 'react';
import {css} from '@emotion/core';
import TitleComponent from '../components/title';

const Vision = () => {
    return(
        <div css={vision}>
        <div style={{textAlign:"center"}}>
         <TitleComponent title="Our Vision"/>
        </div>
        
        <span>Vijith Public School is a second home for your child which extends care, love and affection in grooming
        your child into a refined and responsible citizen with human, moral and social values</span>
        </div>
    )
}

export default Vision;

const vision = css`
margin: 26px 3%;
    margin-top: 0px;
    padding: 20px;
    padding-bottom: 0px;
    text-align: justify;
    border-radius: 10px;
span{
    margin-top:20px;
}
}
`