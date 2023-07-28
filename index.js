const revealBtn = document.getElementById('reveal-btn')
//console.log(revealBtn);
const answer = document.getElementById('answer')
//console.log(answer);
const question= document.getElementById('question')
//console.log(question);

revealBtn.addEventListener('click', function(){
    answer.style.display='block';
    question.style.backgroundColor='#68e1fd';
    question.style.color='#1434A4';
    revealBtn.style.display='none';


})
