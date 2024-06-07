let t = 4, score = 0;
let img = document.getElementById('image');
let r = true;
let highScore = document.getElementById('highest-score'), hC = 0;
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
        t--;
    } else{
        hC = score;
        highScore.innerHTML = hC;
        if(hC>score){
            highScore
        }
        alert('Game is over!');
    }
});


//first code
/*
let img = document.getElementById('image');
let r = true;
document.getElementById('dice-btn').addEventListener('click', function(){
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
});
*/