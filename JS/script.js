window.addEventListener('load', function(){
    let block = document.getElementById('block');

    let sizeCoe = 1;
    let rotateDeg= 0;

// -------pos Y manipulation---------

let posY = document.getElementById('pos-y');

posY.addEventListener('input', function(){
    block.style.top = posY.value+ 'px';
})


// -------pos Y manipulation---------

let posX = document.getElementById('pos-x');

posX.addEventListener('input', function(){
    block.style.left = posX.value+ 'px';
})

// -------size manipulation---------

let size = document.getElementById('Size');

size.addEventListener('input', function(){
    sizeCoe = size.value;
    block.style.transform = `scale(${sizeCoe}) rotate(${rotateDeg}deg)`;
})

// -------Opacity manipulation---------

let opacity = document.getElementById('Opacity');

opacity.addEventListener('input', function(){
    block.style.opacity = opacity.value;
})

// -------Shape manipulation---------


let selector = document.getElementById('shape-select');


let okButton = document.getElementById('ok');

okButton.addEventListener('click',function(){
    let option = selector.value;
    if(option==='1'){
        
        block.style.borderRadius = '0';
        rotateDeg = 0;
        block.style.transform = `scale(${sizeCoe}) rotate(${rotateDeg}deg)`;
    }
    else if(option==='2'){
        block.style.borderRadius = '50%';
        

    }
    else if(option==='3'){
        block.style.borderRadius = '0';
        rotateDeg = 45;
        block.style.transform = `scale(${sizeCoe}) rotate(${rotateDeg}deg)`;
        

    }
   
})

// -------hex manipulation---------

let hex = document.getElementById('hex');

hex.addEventListener('keyup', function(e){

    if(e.key === 'Enter') {block.style.backgroundColor = hex.value;} 
})
   
// -------RGBA manipulation---------

let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');

    let rgbaInputs = document.querySelectorAll('.col input');

    rgbaInputs.forEach(function(element) {
        element.addEventListener('input', function() {
            block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
        })
    })


})