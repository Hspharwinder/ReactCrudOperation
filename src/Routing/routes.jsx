import React from 'react';
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import AddUser from '../Component/AddUser';
import getUser from '../Component/GetUser';
import editUser from '../Component/EditUser';
import ProtectedRoute from './protectedRoute';

const Router = () =>{
    return (
        <div>
            <BRouter> 
                <Switch>
                    <Route path="/" exact component={getUser} ></Route>
                    <Route path="/getUser" exact component={getUser} ></Route>
                    <ProtectedRoute.authRoute path="/addUser" exact component={AddUser} ></ProtectedRoute.authRoute>
                    <ProtectedRoute.authRoute path="/editUser/:id" component={editUser} ></ProtectedRoute.authRoute>
                    <Route path="/" render={() => <div>Error : 404, Page Not Found</div>} ></Route>
                    {/* protected */}
                </Switch>                
            </BRouter>            
        </div>
    )
}

export default Router;