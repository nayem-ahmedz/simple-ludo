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