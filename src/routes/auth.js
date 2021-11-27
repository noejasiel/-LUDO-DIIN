class Auth{
    constructor(){
        const user = window.localStorage.getItem('user')
        if (user) {
            this.authenticated = true;
        }else{
            this.authenticated = false;
        }
    };

    login(cb){
        const user = window.localStorage.getItem('user')
        if (user) {
            this.authenticated = true;
        }
        cb();
    };

    logout(cb){
        this.authenticated = false;
        cb();
    };

    isAuthenticated(){
        return this.authenticated;
    };
};

export default new Auth();