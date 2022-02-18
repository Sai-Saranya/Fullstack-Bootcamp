function base64encodeURL(URLToEncode){
  return btoa(URLToEncode);
}

function base64decodeURL(URLToDecode){
  return atob(URLToDecode);
}


const readLineSync= require("readline-sync");
const option = readLineSync.question("Welcome to the URL Encoder Decoder tool\n Enter 1 to perform base64Encode URL \n Enter 2 to base64Decode URL\n");
switch(option){
  case "1":
    const URLToEncode=readLineSync.question("You have chosen Encode URL option\nEnter the URL to be encoded\n");
    console.log(base64encodeURL(URLToEncode));
    break;
  case "2":
    const URLToDecode=readLineSync.question("You have chosen Decode URL option\nEnter the URL to be decoded\n");
    console.log(base64decodeURL(URLToDecode));
    break;
  default:
    console.log(`${option} is not a valid choice\n Make sure you enter valid option next time.`);
    break;
}