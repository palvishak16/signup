
 alert("WELCOME to RIFSHA ")
 alert("create your account now 😊!")
let FirstuserName = prompt("Please type your UserName");
let FirstPassword = prompt("create a password");
alert("click ok to create account");
alert("Your account has been created successfully!  Now dont forget your UserName or password otherwise you will not be able to login :)");
let question = prompt("wanna login again? type yes or no ")
switch (question) {
  case "yes":
     let EnteredUserName = prompt("Please type UserName");
let EnteredPassword = prompt("Enter your password ");
if (EnteredUserName ===  FirstuserName && EnteredPassword === FirstPassword) {
  alert("Account successfully loged in!")
} else {
  alert("Invalid UserName or password");
}

    break;
    case "no":
      alert("cool! we will wait for your next visit")

  default:
    break;


}
