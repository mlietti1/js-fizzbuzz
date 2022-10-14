const container = document.querySelector('.container');
const limit = 100;

for (let i = 1; i <= limit; i++){
    const box = document.createElement('div');
    box.className = 'box';
    
    if(!(i % 15)){
        box.classList.add('red');
        box.innerHTML = 'FizzBuzz';   
    }else if(!(i % 5)){
        box.classList.add('orange');
        box.innerHTML = 'Buzz';
    }else if(!(i % 3)){
        box.classList.add('yellow');
        box.innerHTML = 'Fizz';
    }else{
        box.innerHTML = i;
    }
    
    container.append(box);
};