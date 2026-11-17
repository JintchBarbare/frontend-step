export class User {
    constructor(name, email, avatar, isAdmin, isLoggedIn) {
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.isAdmin = isAdmin;
        this.isLoggedIn = isLoggedIn;
    }

    getRole() {
        return this.isAdmin ? "ადმინი" : "მომხმარებელი";
    }

    checkLoggedIn() {
        return this.isLoggedIn;
    }
}