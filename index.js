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
function login(userName, password){
    let users ={
        'user1':'Emp@123',
        'user2':'Emp@123',
        'user':'Emp@123',
    }
    // check if the username exists
    if(users[userName]){
        //check if the password matches
        if(users[userName] === password){
            return "Login Successful...";
        }
        else{
            return "wrong Password...";
        }
    }
}
console.log(signup('user1'));//User Already Registered, Please Login
console.log(signup('newUser'));//signup successful, please login
console.log(login('user1','Emp@123'));//login successful
console.log(login('user2','wrongPassword'));// wrong password
console.log(login('nonExistentUser','Emp@123'));// user not found, please signup