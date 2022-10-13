const container = document.querySelector('.container');
const limit = 100;

for (let i = 1; i <= limit; i++){
    const box = document.createElement('div');
    box.className = 'box';
    box.innerHTML = i;
 
    if(!(i % 3)){
        box.classList.add('yellow');
        box.innerHTML = 'Fizz';
    }if(!(i % 5)){
        box.classList.add('orange');
        box.innerHTML = 'Buzz';
    }if(!(i % 3 || i % 5)){
        box.classList.add('red');
        box.innerHTML = 'FizzBuzz';
    }
    
    container.append(box);
};