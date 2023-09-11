class JWTUtils {
    static getJWT() {
        return localStorage.getItem('jwt');
    }

    static setJWT(jwt) {
        localStorage.setItem('jwt', jwt);
    }

    static removeJWT() {
        localStorage.removeItem('jwt');
    }

    static get_user_id() {
        return '1';
    }

    // static get_user_id() {
    //     var jwt = this.getJWT();
    //     if (jwt == null) {
    //         return null;
    //     }
    //     else {
    //         return jwt.split('.')[1];
    //     }
    // }
}

export default JWTUtils;