const readLineSync = require('readline-sync');
const crypto = require('crypto');

const options= {
    "1":"md5",
    "2":"sha-1",
    "3":"sha-256",
    "4":"sha-512"
};

function encodeURL(URLToEncode)
{
    return encodeURIComponent(URLToEncode);
}
  
function decodeURL(URLToDecode)
{
    return decodeURIComponent(URLToDecode);
}

function base64encodeURL(URLToEncode)
{
    return btoa(URLToEncode);
}
  
function base64decodeURL(URLToDecode)
{
    return atob(URLToDecode);
}
  
function hashString(string, hashTechnique)
{
    console.log(crypto.createHash(hashTechnique).update(string).digest('hex'));
}
 
function toHumanDate(milliseconds)
{
    const day = new Date(milliseconds);
    const humanDate={
      year : day.getFullYear(),
      month : day.getMonth()+1,
      date: day.getDate(),
      hours : day.getHours(),
      minutes : day.getMinutes(),
      seconds : day.getSeconds()
    };
    return humanDate;
}

function toEpoch(year, month, day, hours, minutes, seconds)
{
    const str=month+"/"+day+"/"+year+" "+hours+":"+minutes+":"+seconds;
    const reqDate=new Date(str);
    return reqDate.getTime();
}

function componentToHex(c) 
{
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b)
{
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
  
function hex2rgb(hex) 
{
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [ r, g, b ]
}

function urlEncoding(){
    const option1 = readLineSync.question("Welcome to the URL Encoder Decoder tool\n Enter 1 to encode URL \n Enter 2 to decode URL\n");
        switch(option1)
        {
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
}

function base64Encoding(){
    const option2 = readLineSync.question("Welcome to the URL Encoder Decoder tool\n Enter 1 to perform base64Encode URL \n Enter 2 to base64Decode URL\n");
    switch(option2)
    {
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
}

function stringHashing(){
    const option3 = readLineSync.question("Welcome to the string hashing tool\nEnter 1 to hash using md5 \nEnter 2 to hash using sha-1\nEnter 3 to hash using sha-256\nEnter 4 to hash using sha-512\n");
    if(!options[option3])
    {
        console.log("Please make sure you have chosen valid option\n");
    }
    else
    {
        const string = readLineSync.question(`Enter string to hash using ${options[option3]}\n`);
        switch(option3)
        {
            case "1":
                hashString(string,'md5');
                break;
            case "2":
                hashString(string,'sha1');
                break;
            case "3":
                hashString(string,'sha256');
                break;
            case "4":
                hashString(string,'sha512');
                break;
            default:
                console.log("You have chosen invalid option\n"); 
        }
    }
}

function epochConverter(){
    const option4=parseInt(readLineSync.question("Enter 1 to convert milliseconds to humanreadable date.\nEnter 2 to convert humanreadable date to milliseconds\n"));
    switch(option4)
    {
        case 1:
            const ms=parseInt(readLineSync.question("Enter the milliseconds\n"));
            console.log(toHumanDate(ms));
            break;
        case 2:
            const year = readLineSync.question("Enter the year\n");
            const month = readLineSync.question("Enter the month \n");
            const date = readLineSync.question("Enter the date\n");
            const hours = readLineSync.question("Enter the hours\n");
            const minutes = readLineSync.question("Enter the minutes\n");
            const seconds = readLineSync.question("Enter the seconds\n");
            console.log(toEpoch(year,month,date,hours,minutes,seconds));
            break;
        default:
            console.log("Make sure you have entered correct option");
    }
}

function converter(){
    let num;
        const option5= readLineSync.question("Enter 1 to convert decimal to hexa.\nEnter 2 to convert decimal to octal.\nEnter 3 to convert decimal to binary.\nEnter 4 to convert binary to hexa.\nEnter 5 to convert binary to octal.\nEnter 6 to convert binary to decimal.\nEnter 7 to convert hexa to binary.\nEnter 8 to convert hexa to octal.\nEnter 9 to convert hexa to decimal.\nEnter 10 to convert octal to hexa.\nEnter 11 to convert octal to binary.\nEnter 12 to convert octal to decimal.\n");

        switch(option5)
        {
            case "1":
                num = parseInt(readLineSync.question("Enter decimal number to be converted to hexa format.\n"));
                console.log(num.toString(16));
                break;
            case "2":
                num = parseInt(readLineSync.question("Enter decimal number to be converted to octal format.\n"));
                console.log(num.toString(8));
                break;
            case "3":
                num = parseInt(readLineSync.question("Enter decimal number to be converted to binary format.\n"));
                console.log(num.toString(2));
                break;
            case "4":
                num = readLineSync.question("Enter binary to be converted to hexa format.\n");
                num = parseInt(num,2);
                console.log(num.toString(16));
                break;
            case "5":
                num = readLineSync.question("Enter binary to be converted to octal format.\n");
                num = parseInt(num,2);
                console.log(num.toString(8));
                break;
            case "6":
                num = readLineSync.question("Enter binary to be converted to decimal format.\n");
                console.log(parseInt(num,2));
                break;
            case "7":
                num = readLineSync.question("Enter hexa to be converted to binary format.\n");
                num = parseInt(num,16);
                console.log(num.toString(2));
                break;
            case "8":
                num = readLineSync.question("Enter hexa to be converted to octal format.\n");
                num = parseInt(num,16);
                console.log(num.toString(8));
                break;
            case "9":
                num = readLineSync.question("Enter hexa to be converted to decimal format.\n");
                console.log(parseInt(num,16));
                break;
            case "10":
                num = readLineSync.question("Enter octal to be converted to hexa format.\n");
                num = parseInt(num,8);
                console.log(num.toString(16));
                break;
            case "11":
                num = readLineSync.question("Enter octal to be converted to binary format.\n");
                num = parseInt(num,8);
                console.log(num.toString(2));
                break;
            case "12":
                num = readLineSync.question("Enter octal to be converted to decimal format.\n");
                console.log(parseInt(num,8));
                break;
            default:
                console.log("Make sure you entered correct option.\n");
                break;
        }
}

function rgbHexaConverter(){
    const opt6 = readLineSync.question("Welcome to tool to convert RGB to Hexa and viceversa\nEnter 1 to convert RGB to Hexa.\nEnter 2 to convert Hexa to RGB.\n");
        switch(opt6)
        {
            case "1":
                const rValue=parseInt(readLineSync.question("Enter r value.\n"));
                const gValue=parseInt(readLineSync.question("Enter g value.\n"));
                const bValue=parseInt(readLineSync.question("Enter b value.\n"));
                console.log(rgbToHex(rValue,gValue,bValue)+"\n");
                break;
            case "2":
                const hexValue=readLineSync.question("Enter hex value.Make sure that string starts with '#'\n");
                console.log(hex2rgb(hexValue+"\n"));
                break;
            default:
                console.log("Make sure you entered correct option.\n");
        }
}

function kmConverter(){
    let num1;
        const opt7 = readLineSync.question("Enter 1 to convert kms to mts.\nEnter 2 to convert kms to cms.\nEnter 3 to convert kms to mms.\n");
        switch(opt7)
        {
            case "1":
                num1 = parseInt(readLineSync.question("Enter kms to be converted to mts.\n"));     
                console.log(`mts:\t${num1*1000}\n`);
                break;
            case "2":
                num1 = parseInt(readLineSync.question("Enter kms to be converted to cms.\n"));     
                console.log(`cms:\t${num1*1000*100}\n`);
                break;
            case "3":
                num1 = parseInt(readLineSync.question("Enter kms to be converted to mms.\n"));     
                console.log(`mms:\t${num1*1000*100*10}\n`);
                break;
            default:
                console.log("Make sure you have entered valid option.\n");
                break;
        }
}
const choice= readLineSync.question("Enter 1 to perform URL encoding and decoding.\nEnter 2 to perform Base64 Encoding and decoding.\nEnter 3 to perform hashing using various techniques.\nEnter 4 for Epoch converters.\nEnter 5 to perform Binary/Decimal/Octal/Hexa conversions.\nEnter 6 to perform RGB <=> Hexa conversions.\nEnter 7 to perform Unit conversions.\n");

switch(choice){
    case "1":
        urlEncoding();
        break;
    case "2":
        base64Encoding();
        break;
    case "3":
        stringHashing();
        break;
    case "4":
        epochConverter()
        break;
    case "5":
        converter();
        break;
    case "6":
        rgbHexaConverter();
        break;
    case "7":
        kmConverter();
        break;
    default:
        console.log("Get Lost!\n");
}
