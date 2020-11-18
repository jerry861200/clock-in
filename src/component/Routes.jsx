import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components'
import { MenuList, MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SidebarItems from './SidebarItems'
import ClockIn from '../pages/ClockIn';
import Salary from '../pages/Salary';
import Setting from '../pages/Setting';
import NotFound from '../pages/NotFound';

const FlexDiv = styled.div`
  display:flex;
`

const useStyles = makeStyles({
  w250: {
    width:250,
    textAlign:'center',
  },
  textCenter:{
    textAlign:'center',
  },
  justifyCenter:{
    justifyContent:'center'
  }
});



function Routes() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <FlexDiv>
        <MenuList className={classes.w250}>
        {
          SidebarItems.map((item) => (
            <MenuItem key={item.name} component={Link} to={item.route} className={classes.justifyCenter}>
              <p>{item.name}</p>
            </MenuItem>
          ))
        }
        </MenuList>
        <Switch>
          <Route path='/' component={ClockIn}></Route>
          <Route path='/salary' component={Salary}></Route>
          <Route path='/setting' component={Setting}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </FlexDiv>
    </BrowserRouter>
  )
}

export default Routes;