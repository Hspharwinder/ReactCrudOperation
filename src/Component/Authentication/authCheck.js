class Auth {
    constructor(){
        this.authenticated = !!localStorage.getItem("currentUser");
        this.showLogin = false;
        // this.Route = '/addUser';
    }

    logIn(cb){
        this.authenticated = true;
        this.showLogin = false;
        cb();
    }

    logOut(){
        localStorage.removeItem("currentUser");
        this.authenticated = !!localStorage.getItem("currentUser");
        alert("successfully logout");
    }

    isAuthenticated(){
        return this.authenticated;
    }

    setShowLogin(value){
        this.showLogin = value
    }

    getShowLogin(){
        return this.showLogin;
    }

    // setRoute(route){
    //     this.Route = route;
    // }

    // getRoute(){
    //     return this.Route;
    // }
}

export default new Auth();