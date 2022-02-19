const readLineSync= require('readline-sync');

function toHumanDate(milliseconds){
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

function toEpoch(year, month, day, hours, minutes, seconds){
  const str=month+"/"+day+"/"+year+" "+hours+":"+minutes+":"+seconds;
  const reqDate=new Date(str);
  return reqDate.getTime();
}

console.log("Welcome!\n");
const option=parseInt(readLineSync.question("Enter 1 to convert milliseconds to humanreadable date.\nEnter 2 to convert humanreadable date to milliseconds\n"));
switch(option){
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