// Generating numbers and marking evens, odds and prime numbers with three different colors. 

// See the image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_number_generator_day_3.1.gif

document.getElementById('generateBtn').addEventListener('click', generateNumbers);

function generateNumbers() {
    const numContainer = document.getElementById('numContainer');
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    numContainer.innerHTML = '';

    
    let info = document.getElementById('info')
    let input = document.querySelector('#numberInput')
    document.getElementById('numberInput').addEventListener('input',()=>{
        info.textContent = '';
    })
        if(input.value === ''){
        info.textContent = 'Enter a number to generate Values'
        } else if(isNaN(input.value)){
            info.textContent = 'Input value must be a number'
        }


    for (let i = 0; i <= inputNumber; i++) {
        let div = document.createElement('div');
        div.innerText = i;
        if (i % 2 === 0) {
            div.style.backgroundColor = 'rgba(17, 255, 0, 0.749)';
        } else {
            if(isPrime(i)){
                div.style.backgroundColor = 'rgba(255, 0, 0, 0.652)';
            } else {
                div.style.backgroundColor = 'rgba(242, 255, 0, 0.752)';
            }
        }
        numContainer.appendChild(div);
    }
    
    function isPrime(n){
        if(n <= 1){
            return false;
        }
        for(let i=2; i*i < n; i++){
            if(n % i === 0) return false
        }
        return true;
    }
}
