function signup(userName){
    // existing username in the system
    let registeredUsers = ['user1','user2','admin'];

    //check if the user already exists
    if(registeredUsers.includes(userName)){
        return "User Already Registered, please login";
    }
    else{
        registeredUsers.push(userName);//add the new user to the array
        return "Signup Successful, Please login";
    }
}
console.log(signup('user1'));//User Already Registered, Please Login
console.log(signup('newUser'));//signup successful, please login