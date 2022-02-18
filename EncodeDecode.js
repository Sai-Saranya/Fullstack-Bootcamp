function encodeURL(URLToEncode){
  return encodeURIComponent(URLToEncode);
}

function decodeURL(URLToDecode){
  return decodeURIComponent(URLToDecode);
}


const readLineSync= require("readline-sync");
const option = readLineSync.question("Welcome to the URL Encoder Decoder tool\n Enter 1 to encode URL \n Enter 2 to decode URL\n");
switch(option){
  case "1":
    const URLToEncode=readLineSync.question("You have chosen Encode URL option\nEnter the URL to be encoded\n");
    console.log(encodeURL(URLToEncode));
    break;
  case "2":
    const URLToDecode=readLineSync.question("You have chosen Decode URL option\nEnter the URL to be decoded\n");
    console.log(decodeURL(URLToDecode));
    break;
  default:
    console.log(`${option} is not a valid choice\n Make sure you enter valid option next time.`);
}