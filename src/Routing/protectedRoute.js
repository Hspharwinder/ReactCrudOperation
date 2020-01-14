import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Component/Authentication/authCheck';

// class component
class ProtectedRoute {
    authRoute({ component: Component, ...rest }){
        return (
            <Route {...rest} render={ props => 
                    {
                if (Auth.isAuthenticated()){
                            return <Component {...props} />
                        }else{
                            Auth.setShowLogin(true);
                            return <Redirect to={{ pathname: '/getUser', state: { from: props.location } }} />
                        }
                    } 
                } 
            /> );
    }        
}

export default new ProtectedRoute();
