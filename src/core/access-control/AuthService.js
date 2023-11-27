import {appName} from "../environment/environment";

class AuthService {
    constructor() {
        this.token = window.localStorage.getItem(appName+"_token");
        this.user = JSON.parse(window.localStorage.getItem(appName+"_user"));
        this.email = this.user ? this.user.email : null
    }
    check() {
        return !!this.token;
    }
    getUser(){
        return this.user
    }

    login(token, user) {
        window.localStorage.setItem(appName+"_token", token);
        window.localStorage.setItem(appName+"_user", JSON.stringify(user));
        this.token = token;
        this.user = user;
    }
    logout() {
        window.localStorage.removeItem(appName+"_token");
        window.localStorage.removeItem(appName+"_user");
        window.location.href="/"
    }
    store(key,value) {
        window.localStorage.setItem(appName+key,JSON.stringify(value));
    }
    remove(key) {
        window.localStorage.removeItem(appName+key)
    }
    lvalue(key) {
        let item= window.localStorage.getItem(appName+key);
        return JSON.parse(item)
    }
}

export default new AuthService();
