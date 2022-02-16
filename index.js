console.log("Welcome to DSA Quiz!\n\n");
console.log("Let's test our knowlege on DSA!\n");
let questionAndOptions=new Map();
let questionAndAnswer=new Map();
questionAndOptions.set("Which DS is used for recursion?",["array","stack","queue","List"]);
questionAndOptions.set("What's the full form of DS?",["Design System","Data Structures","Design Sync","Digital signature"]);
questionAndOptions.set("What's the time complexity of Merge sort?",["O(n)","O(n2)","O(nlogn)","O(logn)"]);
questionAndOptions.set("Which of the following is palindrome?",["[]][","[][]","[[]]","[]"]);
questionAndOptions.set("Which algorithm helps to find longest subarray sum?",["Knuth Morris Pratt(KMP)","Master's Algorithm","Rabin Karp","Kadane's"]);
questionAndAnswer.set("Which DS is used for recursion?","2");
questionAndAnswer.set("What's the full form of DS?","2");
questionAndAnswer.set("What's the time complexity of Merge sort?","3");
questionAndAnswer.set("Which of the following is palindrome?","1");
questionAndAnswer.set("Which algorithm helps to find longest subarray sum?","4");
let questionCount=1;
let correctAnswers=0;
const readLineSync=require('readline-sync');
questionAndOptions.forEach((value,key) => {
  console.log(`Question ${questionCount}: ${key} \n 1.  ${value[0]} \n 2.  ${value[1]} \n 3.  ${value[2]} \n 4.  ${value[3]} \n`);
  questionCount++;
  const opt=readLineSync.question('Enter your answer 1 or 2 or 3 or 4\n');
  if(opt === questionAndAnswer.get(key)){
    correctAnswers++;
    console.log("Hurray!!, You are correct!\n");
  }
  else{
    console.log("Answer is incorrect.. Better luck next time..\n")
  }
});

console.log(`Your score: ${correctAnswers}/${questionAndOptions.size}\n`);
if(correctAnswers === questionAndOptions.size){
  console.log("You are expert in DS!\n")
}
else{
  console.log("Keep learning!")
}
