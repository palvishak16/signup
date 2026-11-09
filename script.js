//   // alert and prompt learning

// alert("hello");
// let name = prompt("your name :");

//      //learning variables and constant and increment and decrement  
// let num = 4;
// console.log(num++); //hidden value but incremented
// console.log(num);

//   // task for ID eligiblity or not

// let age = prompt("hello "+ name +" can you tell us your age ?");
// if(age>=20){
//     console.log("yeah " + name +" you can make ID card")}
//  else{
//         console.log("Sorry!"+ name + " not eligible ")
//     }

//     //task for rainy or sunny day

//     let wethear = prompt("how's the wethear ?");

//   if(wethear==="rainy"){
//     console.log("yeah "+ name + " bring umberalla")}
//   else{
//         console.log("Cool "+ name + " best of luck ")}

//         //new task of for week days

//   let da = prompt( name + " would you like to tell the day name ?")
//    if (da==="Monday") {

//     console.log("ok its your work day")
    
//    } else if (da==="tuesday") {

//       console.log("again your work day")
//    } 
//    else if (da==="wednesday") {

//       console.log("again your work day honey")
//    }
//      else if (da==="thursday") {

//       console.log("again work day")
//    }
   
//     else if (da==="friday") {

//       console.log("half day")
//    }
  
//     else if (da==="saturday") {

//       console.log("weekend")
//    }
//     else if (da==="sunday") {

//       console.log("holiday")
//    }
//    else {
//     console.log("invalid day")
//    }

// let userName = prompt("what is your name ?").toUpperCase();
    
//   //Now learn ab switch statements and its conditions
// let breakfast = prompt("tell me "+userName  + " what you wanna eat in breakfast i  will give you its recipe :)").toLowerCase();
//   switch (breakfast) {
//     case "pancake":
//      console.log("To make easy homemade pancakes, begin by whisking together 1 cup of all-purpose flour, 2 tablespoons of sugar, 2 teaspoons of baking powder, and a pinch of salt in a large mixing bowl. In a separate smaller bowl or measuring jug, beat 1 large egg, then stir in ¾ to 1 cup of milk, 2 tablespoons of melted butter or vegetable oil, and 1 teaspoon of vanilla extract. Pour the liquid mixture directly into the bowl with the dry ingredients and stir gently using a fork or wooden spoon just until combined; it is critical not to overmix, so leave a few small lumps in the batter and let it rest for about 5 minutes to ensure fluffy pancakes. While the batter rests, heat a non-stick skillet or griddle over medium-low heat and lightly coat it with a thin layer of butter or oil. Pour roughly ¼ cup of batter onto the hot skillet for each pancake, cooking until bubbles form on the surface and the edges look dry, which takes about 1 to 2 minutes. Carefully flip the pancake over with a spatula and cook the other side for another 60 seconds until it turns beautifully golden brown, then serve immediately while warm with your favorite toppings");

      
//       break;
// case " chai paratha":
//     console.log(`
//     ☕ CHAI RECIPE

//     1. Add one cup of water.
//     2. Add tea leaves and sugar.
//     3. Boil for 2 minutes.
//     4. Add one cup of milk.
//     5. Simmer for 3-4 minutes.
//     6. Strain and enjoy!
//     7. Take flour and make a ball of it using ghee and then roll it and add more ghee and enjoy your food
//     `);
//     break;
//         case "halwa puri":
//         console.log(`
//         🥘 HALWA PURI RECIPE

//         HALWA:

//         1. Heat ghee in a pan.
//         2. Add semolina (sooji) and roast until golden.
//         3. Add sugar and water.
//         4. Add cardamom powder.
//         5. Stir until thick and fluffy.

//         PURI:

//         1. Mix flour, salt and water to make dough.
//         2. Roll into small circles.
//         3. Deep fry until puffed and golden.
//         4. Serve with halwa and channy.
//         `);
//         break;
//           case "anda":
//     case "egg":
//         console.log(`
//         🍳 FRIED EGG RECIPE

//         1. Heat a little oil in a frying pan.
//         2. Crack an egg into the pan.
//         3. Add salt and black pepper.
//         4. Cook until the egg white is fully set.
//         5. Serve hot with bread or paratha.
//         `);
//         break;
//     default:
//       alert("sorry i dont have that recipe")
//       break;
//   }






    // restraunt project

  let CostumerName = prompt(" What is your good name ? ");
  let gender = "";

  switch (gender) {
    case male:
      alert("Hello Sir !"+CostumerName)
      
      break;

       case "female":
      alert("Hello Mam !"+CostumerName)
  
    
      break;
  

   default:
      break;}
 

 
 let orderFood = prompt("Welcome to my restaurant!\nHere is our menu:\n1. Burger    Rs.100\n2. Pizza    Rs.200\n3. Biryani    Rs.300\n4. Pasta   Rs.400");
 let bill = 0;
 switch (orderFood) {
  case "Pizza":
  bill = 300;
    alert(" your bill is Rs.200")
    
    break;
    case "Burger":
      bill = 400;
    alert(" your bill is Rs.100")
    
    break;
    case "Biryani":
      bill=500;
    alert(" your bill is Rs.300")
    
    break;
    case "Pasta":
      bill=600;
    alert(" your bill is Rs.400")
    
    break;
 

  default:
    alert("item is unavailble ");
    break;
    
 }
 let money = Number(prompt("type the amount you are paid "));
if (money===100 ) {
  alert("order confirmed");
  
} else if(money>100) {
  alert("your money is remained " + (money-100));
}
else if(money<100) {
  alert("insufficant balance ");
}



// let age = prompt("your age ?") ;
// if (age > 18 && age < 26) {
//   alert("you are young")
  
// } else {
//   alert("sorry you are not eligible")
// }

// let FirstuserName = prompt("Please type UserName");
// let FirstPassword = prompt("create a password");

// alert("click ok to create account");
// alert("Your account has been created successfully!  Now dont forget your UserName or password otherwise you will not be able to login :)");
// let question = prompt("wanna login again? type yes or no ")
// if (question = "no") {
// alert("cool! we will wait for your next visit :)")
 

// } else if (question = "yes"){
//    let EnteredUserName = prompt("Please type UserName");
// let EnteredPassword = prompt("Enter your password ");
// if (EnteredUserName ===  FirstuserName && EnteredPassword === FirstPassword) {
//   alert("Account successfully loged in!")
// } else {
//   alert("Invalid UserName or password");
// }
// }
// else {
//   alert("thanks")
// }


// let FirstuserName = prompt("Please type UserName");
// let FirstPassword = prompt("create a password");

// alert("click ok to create account");
// alert("Your account has been created successfully!  Now dont forget your UserName or password otherwise you will not be able to login :)");
// let question = prompt("wanna login again? type yes or no ")
// if (question = "no") {
// alert("cool! we will wait for your next visit :)")
 




//  alert("WELCOME to RIFSHA ")
//  alert("create your account now 😊!")
// let FirstuserName = prompt("Please type your UserName");
// let FirstPassword = prompt("create a password");
// alert("click ok to create account");
// alert("Your account has been created successfully!  Now dont forget your UserName or password otherwise you will not be able to login :)");
// let question = prompt("wanna login again? type yes or no ")
// switch (question) {
//   case "yes":
//      let EnteredUserName = prompt("Please type UserName");
// let EnteredPassword = prompt("Enter your password ");
// if (EnteredUserName ===  FirstuserName && EnteredPassword === FirstPassword) {
//   alert("Account successfully loged in!")
// } else {
//   alert("Invalid UserName or password");
// }

//     break;
//     case "no":
//       alert("cool! we will wait for your next visit")

//   default:
//     break;


// }
  // make a result

// let StudentNo1 = 'Areeba';
// let RollnoStudentNo1 = 123;
// let MarksofStudentNo1 = 100;
// let StudentNo2 =   "Rabia" ;
// let RollnoStudentNo2 = 123;
// let MarksofStudentNo2 = 80;
// let StudentNo3 =  " ayesha" ;
// let RollnoStudentNo3 = 123;
// let MarksofStudentNo3 = 90;

 
// let EnteredName = prompt("enter your name");


// switch (EnteredName) {
//   case "Areeba":
//   let EnteredRollno = prompt("enter your Roll number");
//   let RollnoStudentNo1 = "123";
//  if ( EnteredRollno === RollnoStudentNo1) {
//   alert("great Marks")
//  } else {
//   alert("invalid roll mum or name")
//  }
//  break;

//  case "Rabia" :
//    let EnteredRollno2 = prompt("enter your Roll number");
//   let RollnoStudentNo2 = "321";
//   if ( EnteredRollno2 === RollnoStudentNo2) {
//   alert("good Marks")
//  } else {
//   alert("invalid roll mum or name")
//  }
//  break;
//  case "ayesha" :
//   let EnteredRollno3 = prompt("enter your Roll number");
//   let RollnoStudentNo3 = ("012");
//   if ( EnteredRollno === RollnoStudentNo3) {
//   alert("try next time")
//  } else {
//   alert("invalid roll mum or name")
//  }

//     break;

//   default:
//     break;
// }




// making a calculator

let operationMulti = prompt("what operation you want to be performed ");
switch (operationMulti) {
  case "multiply":
    let type1 = Number(prompt("enter a number 1  "));
    let type2 = Number(prompt("enter a number 2 "));
  alert(type1 * type2);
    break;
     case "divide":
    let type3 = Number(prompt("enter a number 1  "));
    let type4 = Number(prompt("enter a number 2 "));
  alert(type3 % type4);
  break;
       case "add":
    let type5 = Number(prompt("enter a number 1  "));
    let type6 = Number(prompt("enter a number 2 "));
  alert(type5 + type6);
break;
     case "minus":
    let type7 = Number(prompt("enter a number 1  "));
    let type8 = Number(prompt("enter a number 2 "));
  alert(type7 - type8);
break;

  default:
    break;
}