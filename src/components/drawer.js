import React from 'react';
import clsx from 'clsx';
import {css} from '@emotion/core';
import {BsJustify } from "react-icons/bs"
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'gatsby';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List css={buttonlist}>{
        [{name:'Home', link:"/"}, {name:'About',link:"/about"}, {name:'Vision', link:"/vision"}, {name:'Mission', link:"/mision"}, {name:'Admissions', link:"/admission"}, {name:'Faculty' , link:"/faculty"}, {name:'Facilities', link:"/facilities"}, {name:'Contact', link:"/contact"}].map((text, index) => (
         <ListItem button key={text}>
         <Link to={text.link}><ListItemText primary={text.name}/></Link>
          </ListItem>
          
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{
            fontSize: "26px",
            marginTop: "11px",
            borderRadius: "0px"}}><BsJustify/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}


const buttonlist = css`
 a{
   text-decoration:none;
   color:#2196F3;
   :hover{
     text-decoration:underline;
   }
 }
`