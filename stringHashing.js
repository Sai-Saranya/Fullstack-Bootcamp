const readLineSync= require('readline-sync');
const crypto = require('crypto');

function hashString(string, hashTechnique){
  console.log(crypto.createHash(hashTechnique).update(string).digest('hex'));
}

const options= {
    "1":"md5",
    "2":"sha-1",
    "3":"sha-256",
    "4":"sha-512"
};
const option = readLineSync.question("Welcome to the string hashing tool\nEnter 1 to hash using md5 \nEnter 2 to hash using sha-1\nEnter 3 to hash using sha-256\nEnter 4 to hash using sha-512\n");
if(!options[option])
{
  console.log("Please make sure you have chosen valid option\n");
}
else
{
  const string = readLineSync.question(`Enter string to hash using ${options[option]}\n`);
  switch(option)
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