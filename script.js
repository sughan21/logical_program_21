//1.Write a JavaScript function to find the index of a given element in an array.
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [10, 20, 30, 40, 50];
const elementToFind = 20;

const index = findIndex(myArray, elementToFind);

if (index !== -1) {
  console.log(`Element ${elementToFind} Found at index ${index}.`);
} else {
  console.log(`Element ${elementToFind} not found in the Array.`);
}

//2.Create a program that converts a given amount in dollars to euros.

function dollarsToEuros(amountToDollars) {
  const exchangeRate = 0.85;
  const amountInEuros = amountToDollars * exchangeRate;
  return amountInEuros;
}

const amountToDollars = 100;
const amountInEuros = dollarsToEuros(amountToDollars);
console.log(`${amountToDollars} USD is equal to ${amountInEuros} EUR.`);

//3.Write a function that removes all false values from an array.
function removeFalseValues(arr) {
  const filteredArray = arr.filter((item) => item !== false);
  return filteredArray;
}

const values = [1, 2, 3, 4, false, null, false, undefined, 10, 20];
const resultArray = removeFalseValues(values);
console.log(resultArray);

//4.Create a program that generates a random password of a given length

function generateRandomPassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let password = " ";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);

console.log(randomPassword);

//5.Write a JavaScript function to find the intersection of two arrays.

function findIntersection(arr1, arr2) {
  const intersection = arr1.filter((item) => arr2.includes(item));
  return intersection;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersectionResult = findIntersection(array1, array2);
console.log(intersectionResult);
//6.Create a program that capitalizes the first letter of each word in a sentence.

function capitalizesFirstLetter(sentence) {
  const words = sentence.split("e ");
  const capitalizesWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizesWords.join(" ");
}

const sentence = "hello, world, how are you?";
const capitalizesSentence = capitalizesFirstLetter(sentence);
console.log(capitalizesSentence);

//7.Write a function to check if a given string, is a valid URL.

function isValidURL(str) {
  const urlPattern =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/i;
  return urlPattern.test(str);
}

const url1 = "https://www.example.com";
const url2 = "http://google.com";
const url3 = "invalid-url";

console.log(isValidURL(url1));
console.log(isValidURL(url2));
console.log(isValidURL(url3));
