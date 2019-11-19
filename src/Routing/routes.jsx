import React from 'react';
import {BrowserRouter as BRouter,  Route, Switch} from 'react-router-dom';
import AddUser from '../Component/AddUser';
import getUser from '../Component/GetUser';
import editUser from '../Component/EditUser';

const Router = () =>{
    return (
        <div>
            <BRouter> 
                <Switch>
                    <Route path="/" exact component={getUser} ></Route>
                        <Route path="/getUser" exact component={getUser} ></Route>
                        <Route path="/addUser" exact component={AddUser} ></Route>
                        <Route path="/editUser/:id"  component={editUser} ></Route>
                        <Route path="/" render={() => <div>Error : 404, Page Not Found</div>} ></Route>
                </Switch>                
            </BRouter>            
        </div>
    )
}

export default Router;