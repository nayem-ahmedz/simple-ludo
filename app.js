let t = 5, score = 0;
let img = document.getElementById('image');
let r = true;
let highScore = document.getElementById('highest-score'), hC = 0;
let target = 20;
document.getElementById('target').innerHTML = target;
let chBox = document.getElementsByClassName('ch-box');
document.getElementById('dice-btn').addEventListener('click', function(){
    if(t!=0){
        let randomValue = Math.round(Math.random().toFixed(2) * 6);
        if(randomValue==0){
        randomValue+=1;
        }
        let res = document.getElementById('res');
        res.innerHTML = randomValue;
        res.style.visibility = 'visible';
        let imgSrc = 'assets/' + randomValue + '.png';
        if(r==true){
        img.style.transform = 'rotate(360deg)';
        r = false;
        img.style.opacity = '0'
        } else{
        img.style.transform = 'rotate(0)';
        r = true;
        img.style.opacity = '0'
        }
        img.style.opacity = '1.0';
        img.src = imgSrc;
        //imageReset();
        score += randomValue;
        document.getElementById('score').innerHTML = score;
        document.getElementById('cir-outer').style.background = `conic-gradient(blue ${score * 18}deg , white 0deg)`;
        t--;
        chBox[t].classList.add('hideOut');
        if(t==1){
            document.getElementById('warning').style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        }
    }
    if(t==0){
        if(score>hC){
            hC = score;
        }
        highScore.innerHTML = hC;
        showMessage(score);
    }
});

document.getElementById('replay-btn').addEventListener('click', function(){
    document.location = 'index.html?highScore=' + hC;
});

//check if user want to replay
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlScore = urlParams.get('highScore');
    if(urlScore>0){
        highScore.innerHTML = urlScore;
        hC = urlScore;
    }
}

//showing score board on result
function showMessage(score){
    document.querySelector('section').classList.add('blur');
    document.getElementById('messageBox').style.display = 'block';
    let message = document.getElementById('mB-message');
    let result = document.getElementById('mB-result');
    let mScore = document.getElementById('mB-score');
    let replayBtn = document.getElementById('replay-btn');
    if(score>=target){
        mScore.innerHTML = 'Your score : ' + score;
    } else{
        message.innerHTML = 'Alas !';
        result.innerHTML = 'You LOSS';
        mScore.innerHTML = 'Your score : ' + score;
        replayBtn.innerHTML = 'Try Again';
    }
}