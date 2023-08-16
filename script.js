const makebubble = () => {
    let clutter = "";

    for (let i = 1; i <= 168; i++) {
        const rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#panalbotom').innerHTML = clutter;
};
let timer=60;
let score=0;
var hitRan;
function runTimer(){
   let timeint=setInterval(function(){
    if (timer>0) {
        timer--;
        document.querySelector('#time').textContent=timer
    } else {
        clearInterval(timeint)
        document.querySelector('#panalbotom').innerHTML=`<h1>Game Over</h1>`
        
    }
   
   },1000)
}
function hit(){
     hitRan=Math.floor(Math.random()*10)
    document.querySelector('#hit').textContent=hitRan;
}
function scoreCheck(){
score=score+10;
document.querySelector('#score').textContent=score;
}

document.querySelector('#panalbotom').addEventListener('click',function(details){
    var clickedNumber=Number(details.target.textContent)
    if(clickedNumber===hitRan){
        scoreCheck()
        hit()
        makebubble()
    }
})   
hit()
runTimer()
makebubble()