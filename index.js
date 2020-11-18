const chalk = require('chalk');

console.log(chalk.red('\n---Test your JS Knowledge (ES5+ES6)---\n'));


var input = require('readline-sync');

var nameofuser = input.question("Enter Your Name : ");

console.log("\n\tWelcome " + chalk.yellow.bold.underline(nameofuser.toUpperCase()) +" to JS Quiz 2020\n");

console.log(chalk.red.underline.bold("Rules\n"));

var rules =
{
   levels :"1.There will be 2 levels in this quiz:-\n\n   Level 1(Beg Level) - 5 questions. \n   Level 2(Adv Level) - 5 questions.\n   Total of 10 question.\n\n",

   score_count:"2.Score count :-\n\n   For each Right answer +5.\n   For each Wrong answer -3.\n\n",

   qual :"3.Next Round Qualification :-\n\n   If level 1 score >= 15."
  

}

console.log(chalk.green(rules.levels),chalk.red(rules.score_count),chalk.yellow(rules.qual));

console.log("---------------------------------------");
//questions:-

var input = require('readline-sync')
var lvl1_score=0;
var lvl2_score =0;
var fscore=0;
var start = input.question("Want to start Level 1 now [y/n] ?\n");
if (start==='Y'|| start === 'y' )
{
 
function level1(question,answer)
{   
    var userans;
    userans = input.question(question);

    if(userans===answer)
    {
      console.log(chalk.green("Correct +5 :)"));
      lvl1_score +=5;
      console.log(chalk.green("------------------------------------"));
    } 
    else
    {
      console.log(chalk.red("Wrong -3 !!!"));
      lvl1_score -=3;
      console.log(chalk.red("------------------------------------"));

    }
}

  
  var lv1 =[
  
    {
        ques: "\n1. Which company developed JavaScript?\n A. AT&T Bell Labs \n B. Netscape  \n C. Sun Microsystems \n D. IBM\n",
        answer: "b"
    },

    {
        ques: "2. Which of these operators compares two variables by value AND type? \n A. =\n B. == \n C. ===\n D. All of the above\n",
        answer: "c"
    },

    {
        ques: "3. What are the types of Pop up boxes available in JavaScript?\n A. Alert\n B. Confirm\n C. Both (a) and (b)\n D. Warning\n",
        answer: "c"
    },

    {
        ques: "4. Which of the following is not\n considered a JavaScript operator?\n A. new \n B. typeof() \n C. this \n D. Delete \n",
        answer: "c"
    },

    {
        ques: "5. Find output of below code\n   var a = 20; \n   var b = a = 30;\n   console.log(a+b)?\n A. 50 \n B. 2030 \n C. 60\n D. error\n",
        answer: "c"
    }, 
]

for (var i = 0; i < lv1.length; i++) {
   level1(lv1[i].ques,lv1[i].answer);
}





 
} else {
  // Another key was pressed.
  console.log(chalk.yellow.bold.underline('\n\n\t\t Quiz Aborted ')+chalk.red.bold('!!!'));
  // Do something...
}

console.log(chalk.yellow.bold("\n Your Level 1 score is : "),chalk.red(lvl1_score) + "/25");


if(lvl1_score >= 15)
{
    console.log("\nWelcome " +chalk.red.bold.underline(nameofuser.toUpperCase()) + " to the 2nd level !!!\n");

var start2 = input.question("Want to start level 2 quiz now [y/n] ?\n");

    if (start2 === 'Y' || start2 === 'y') 
    {

            function level2(question2,answer2)
            {   
                var userans2 = input.question(question2);

                if(userans2===answer2)
                {
                      console.log(chalk.green("Correct +5 :)"));
                      lvl2_score +=5;
                      console.log(chalk.green("------------------------------------"));
                } 
                else
                {
                      console.log(chalk.red("Wrong -3 !!!"));
                      lvl2_score -=3;
                      console.log(chalk.red("------------------------------------"));
                }
              
            }

            var lv2=
            [
                  {
                      ques2: "\n1. What is the output of below code\n\n  const arr =[1,2,3,4]  \n  delete arr[2];\n  console.log(arr[2]); \n\n A. 4\n B. 2 \n C. error\n D. undefined\n",
                      answer2: "d"
                  },

                  {
                      ques2: "2. What is the output of below code\n\n function fn() {\n   setTimeout(() =>{\n    console.log('hello')\n    },2147483648)\n  }\n fn()\n\n A. error \n B. Print hello imediately \n C. Print hello after delay\n    of 2147483648 \n D. Non of the above\n",
                      answer2: "b"
                  },

                  {
                      ques2: "3.Find the output of below code\n\n    var arr = new array[2];\n    arr.fill(new array[1]));\n    a[0][0]=1;\n    console.log(arr[1][0]);\n\n A. 0\n B. undefined\n C. 1\n D. error\n",
                      answer2: "c"
                  },

                  {
                         ques2: "4. What is the output of below code\n\n var a=0;\nfunction fn()\n {\n var a=3;\n return () => console.log(this.a)\n }\n fn({a:1},2)();\n\n A. 0 \n B. 1\n C. 3\n D. undefined\n",
                      answer2: "b"
                      
                  },

                  {
                     ques2: "5. What is the output of below code\n\n function fn()\n {\n console.log(x);\n x=100;\n }\n fn();\n\n A. Reference Error \n B. undefined\n C. 100\n D. non of the above\n",
                      answer2: "a"
                      
                  }, 
            ]

            for (var j = 0; j < lv2.length; j++) 
            {
                  level2(lv2[j].ques2,lv2[j].answer2);
            }

    }
    else 
    {
       console.log(chalk.yellow.bold.underline('\n\n\t\t Quiz Aborted ')+chalk.red.bold('!!!'));

        console.log("Your Final Score : ",lvl1_score +"/50")
    }
}
else
{
    console.log(chalk.red.underline.bold("\n\tNot qualified for 2nd Level !!!"));
}


if(lvl2_score>0)
{
   console.log(chalk.yellow.bold("Your Level 2 score : ") ,chalk.red(lvl2_score)+"/25\n");
   console.log("-------------------------------------")
   fscore = lvl1_score + lvl2_score;
   console.log(chalk.red("\nCongratulations ")+chalk.green.underline(nameofuser.toUpperCase()) )
   console.log(chalk.green.bold.underline("\nYour Final Score")+" : "  ,chalk.green(fscore) +chalk.red("/50\n"));
}

if(fscore>15 && fscore<=30)
{
    console.log(chalk.green.underline.bold("Your skill") + " - " +  chalk.orange.bold("Beg level"))
}
else if(fscore>=30 && fscore <=45)
{
     console.log(chalk.green.underline.bold("Your skill") + " - " +  chalk.cyan.bold("Int level"))
   
}
else if(fscore>45&&fscore<=50)
{
  console.log(chalk.green.underline.bold("Your skill") + " - " +  chalk.red.bold("Adv level"));
  
}

