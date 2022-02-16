console.log("Welcome to DSA Quiz!\n\n");
console.log("Let's test our knowlege on DSA!\n");

let correctAnswers=0;
let questionCount=1;
const readLineSync=require('readline-sync');

function displayQuestion(question){
  console.log(`Question ${questionCount}:\t  ${question.question} \n 1. ${question.options[0]} \n 2. ${question.options[1]} \n 3. ${question.options[2]} \n 4. ${question.options[3]} \n`);
  const ans=readLineSync.question('Enter your answer 1 or 2 or 3 or 4\n');
  if(ans === question.correctAnswer){
    correctAnswers++;
    console.log("Hurray!!, You are correct!\n");
  }
  else{
    console.log("Answer is incorrect.. Better luck next time..\n");
  }
  questionCount++;
}

const questions=[
  {
    question: "Which DS is used for recursion?",
    options: ["array","stack","queue","List"],
    correctAnswer:"2"
  },
  {
    question: "What's the full form of DS?",
    options: ["Design System","Data Structures","Design Sync","Digital signature"],
    correctAnswer:"2"
  },
  {
    question:"What's the time complexity of Merge sort?" ,
    options: ["O(n)","O(n2)","O(nlogn)","O(logn)"],
    correctAnswer:"3"
  },
  {
    question: "Which of the following is palindrome?",
    options: ["[]][","[][]","[[]]","[]"],
    correctAnswer:"1"
  },
  {
    question: "Which algorithm helps to find longest subarray sum?",
    options: ["Knuth Morris Pratt(KMP)","Master's Algorithm","Rabin Karp","Kadane's"],
    correctAnswer:"4"
  }
];

questions.push({question: "Which algorithm takes less time to search an element in array?", options: ["linear search","binary search","Both of them", "None of them"], correctAnswer:"2"});

questions.forEach(displayQuestion);


console.log("Your Score:\t"+ correctAnswers+"\n");

if(correctAnswers === questions.length){
  console.log("You're expert in DS\n");
}
else{
  console.log("Keep learning\n");
}

