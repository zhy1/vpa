import React ,{Component}from 'react';

import {Route, Switch} from 'react-router-dom';
import {createBundle} from 'components/Common'

import UserListLayout from 'bundle-loader?lazy&name=UserListLayout!./List'

import UserDetailLayout from 'bundle-loader?lazy&name=UserDetailLayout!./List'
import {withRouter} from 'react-router-dom'
@withRouter 
export default class UserLayout extends Component {
    constructor(props) {
        super(props)
    }
 
    
    render() {



        return (
            <div  >
            <Switch>
          
            <Route exact path={this.match.path} component={createBundle(UserListLayout)}/>
            <Route exact path={this.match.path+'/detail/:id(\\d)/:name'} component={createBundle(UserDetailLayout)}/>
            <Route component={createBundle(NotFound)}/>
        </Switch>
            </div>
        )
    }
}