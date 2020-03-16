function User(email, name) {
    this.email = email;
    this.name = name;
    // this.login = function() {
    //     console.log(this.email, "has logged in");
    // }
    // this.logout = function() {
    //     console.log(this.email, "has logged out");
    // }

}

User.prototype.login = function() {
    console.log(this.email, "has logged in");
}
User.prototype.logout = function() {
    console.log(this.email, "has logged out");
}

const UserOne = new User("FirstUser@us.com", "John");
console.log(UserOne);
UserOne.logout();