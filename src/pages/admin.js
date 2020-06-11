import React from 'react';
import TabcontainderforAdmin from '../components/tabcontaineradmin';
import Layoutcomponent from '../components/layout';
import { css } from "@emotion/core"

const Admin = () => {
    return (
        <Layoutcomponent>
           <div css={admintab}>
           <TabcontainderforAdmin/>
           </div>
        </Layoutcomponent>
    );
};

export default Admin;

const admintab = css`
  margin:0px 10%;
  margin-top:13%;
  @media(max-width:600px){
    margin-top:20%;   
  }
`