/////  Q1.Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.



// **********Coding***************///
// let userFirstName = prompt("Enter your first name.");
// let UserSecondname = prompt("Enter your second name.");
// let userFulName = userFirstName + " " + UserSecondname;
//  let userName = userFulName.toUpperCase();
//  alert("Salam " + userName);



/////  Q2.Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser



// **********Coding***************///
// let userInput = prompt("Enter your favourite mobile phone model");
// let userInputLenght = userInput.length;
// document.write("Your favourite mobile phone model is: " + userInput + "<br>" + "length of string is " + userInputLenght);


/// Q..Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser


// **********Coding***************///.
// let countryName = "Pakistani";
// let indexOfString = countryName.indexOf("n");
// document.write("String:" + countryName + "<br>" + "Index of 'n': " + indexOfString);



/// Q...Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.



// **********Coding***************///
// let countryName = "Pakistani";
// let charOfString = countryName.charAt(3);
// document.write("String:" + countryName + "<br>" + "Character at index 3: " + charOfString); 


///Q..Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.



// **********Coding***************///
// let cityName = "Hyderabad";
// let replaceOfChar = cityName.replace("Hyder","Islam");
// document.write("City: " + cityName + "<br>" + "After replacement: " + replaceOfChar);


///Q..Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.



// **********Coding***************///
// let message = "Ali and Sami are best friends. They play cricket and football togather";
// let replaceMessage = message.replace(/and/g, "&");
// document.write(replaceMessage);





////Q...Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;



// **********Coding***************///
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var words = message.split(" ");
// var replacedMessage = "";

// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "and") {
//     replacedMessage += "& ";
//   } else {
//     replacedMessage += words[i] + " ";
//   }
// }

// document.write(replacedMessage);


/// Q..Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.




// **********Coding***************///
// let numINString = "472";
// let typeString = "string"
// let num = parseInt(numINString);
// let typeNum = "number" 
// document.write("Value: " + numINString + "<br>" + "Type: " + typeString + "<br>" + "Value:" + numINString + "<br>" + "Type:" + typeNum); 


////Q..Write a program that takes user input. Convert and
// show the input in capital letters.



// **********Coding***************///
// let userInput = prompt("Enter your favourite dry fruit name.");
// let changeCaseOfUserInput = userInput.toUpperCase();
// document.write("User Input: " + userInput + "<br>" + "Upper Case: " + changeCaseOfUserInput);


///Q..Write a program that takes user input. Convert and
// show the input in title case.



// **********Coding***************///
// let userInput = prompt("Enter the programming language. ");
// let firstLetter = userInput.slice(0,1) 
// let changeCaseOfFirstLetter = firstLetter.toUpperCase();
// let remainningLetters = userInput.slice(1)
// let titleCase = changeCaseOfFirstLetter + remainningLetters;
// document.write("User Input: " + userInput + "<br>" + "Title Case: " + titleCase );



///Q..Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.



// **********Coding***************///
// let num = 35.36;
//  let numINString = num.toString();
//  let numString = numINString.replace("." , "");
//  console.log(numString);
 

//// Q..Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// // among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64



// **********Coding***************///
// var username = prompt("Enter your username:");

// var containsSpecialSymbol = false;
// var specialSymbols = ['@', '.', ',', '!'];

// for (var i = 0; i < specialSymbols.length; i++) {
//   if (username.includes(specialSymbols[i])) {
//     containsSpecialSymbol = true;
//     //break;
//   }
// }

// if (containsSpecialSymbol) {
//   alert("Please enter a valid username without special symbols.");
// } else {
//   alert("Username: " + username);
// }


///Q..You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:




// **********Coding***************///
// var arrOfItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");

// var found = false;

// for (var i = 0; i < arrOfItems.length; i++) {
//   if (userInput.toLowerCase() === arrOfItems[i].toLowerCase()) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert( userInput + " is available at index  " + arrOfItems.indexOf(userInput) + " in our bakery.");
// } else {
//   alert("We are sorry. " + userInput + " is not available in our bakery.");
// }


/// Q..Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.





// **********Coding***************///
// let universityName = "Karachi University";
// let splitName = universityName.split("");
// for(var i=0; i < universityName.length; i++){
//     document.write(splitName[i] + "<br>");
// }
///must focus this


///Q..Write a program to display the last character of a user
// input.


// **********Coding***************///
// let userInput = "Pakistan";
// let lastChar = userInput.charAt(7);
// document.write("User Input: " + userInput + "<br>" + "Last character of input: " + lastChar);


///Q..You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.



// **********Coding***************///
// let sentence = "The quick brown fox jumps over the lazy dog";
// let wordToFind = "the";
// var count = 0;
// var lowercaseSentence = sentence.toLowerCase();
// var words = lowercaseSentence.split(" ");
// for (var i = 0; i <= words.length; i++) {
//   if (words[i] === wordToFind) {
//     count++;
//   }
  
// }
//  document.write("Text: " + sentence + "<br>" + "There are " + count + " occurence(s) of the word 'the' " );



///Q...Repeat Q1 using string concat() method.



// **********Coding***************///
// let userFirstName = prompt("Enter your first name.");
// let UserSecondname = prompt("Enter your second name.");
// let userFulName = userFirstName.concat(" ").concat(UserSecondname) ;
// let userName = userFulName.toUpperCase();
// alert(userName);





///Q..Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// **********Coding***************///
// var password = prompt("Enter a password: ");

// // Check if the password meets the requirements
// if (
//   password.length >= 6 &&
//   /[a-zA-Z]/.test(password) &&
//   /[0-9]/.test(password) &&
//   !/^[0-9]/.test(password)
// ) {
//   console.log("Valid password!");
// } else {
//   console.log("Invalid password. Please enter a valid password.");
// }



