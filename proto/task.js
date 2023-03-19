
const user = {
    alertRole() {
        return this.role;
    }
}

const administrator = {
    role: "admin"
}

const maintainer = {
    role: "maintainer"
}

administrator.__proto__ = user
maintainer.__proto__ = user

console.log(administrator.alertRole());
console.log(maintainer.alertRole());    



// const User {

//    ///role = 'user';

//     // constructor(role) {
//     //     this.role = role;
//     // }

//     alertRole() {
//         return this.role = 'user'
//     }
// }

// class Admin extends User{
//     role = 'admin';
//     // __proto__ = User;
// }

// console.log(Admin.alertRole)

