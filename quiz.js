const questions=[
    {
        question:"6,25,62,122,214,341 find wrong term in the series",
        answers:[
            {text:"6,25,125,214,341",correct:false},
            {text:"6,25,123,214,341",correct:true},
            {text:"6,25,123,217,341",correct:false},
            {text:"8,25,125,214,341",correct:false}
        ]
    },
    {  
    question:"2,5,9,?,20,27",
        answers:[
            {text:"15",correct:false},
            {text:"12",correct:false},
            {text:"14",correct:true},
            {text:"16",correct:false}
        ]
    
    },
    {  
        question:"if 25th day of the month falls on wednesday then the what day of 30th day of same month",
            answers:[
                {text:"sunday",correct:false},
                {text:"saturday",correct:false},
                {text:"tuesday",correct:false},
                {text:"monday",correct:true}
            ]
        
        },
        {  
            question:"if 9th august 1945 is wednesday what was the day on 9th august 1949",
                answers:[
            {text:"monday",correct:false},
            {text:"wednesday",correct:false},
            {text:"sunday",correct:false},
            {text:"Tuesday",correct:true}
                ]
            
     },
     {  
        question:"what is 34% of 12km interms of cm",
         answers:[
         {text:"408000cm",correct:true},
        {text:"40800cm",correct:false},
        {text:"400800km",correct:false},
        {text:"4080000cm",correct:false}
                    ]
     }         
                
];
const questionElement=document.getElementById('question');
const answerButtons=document.getElementById('answer-buttons');
const nextbutton=document.getElementById('next-btn');
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetstate();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        } 
       button.addEventListener("click",selectAnswer);
    });
}
function resetstate(){
    nextbutton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}
function showscore(){
    resetstate();
    question.innerHTML=`your scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML=`play again`;
    nextbutton.style.display="block";
}
function handleNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex<questions.length){
        showQuestion();
      }else{
        showscore();
      }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
