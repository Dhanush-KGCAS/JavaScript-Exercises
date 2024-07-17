// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is red

let selDiv = document.querySelector('div');
for (let i = 1; i <= 100; i++) {
    let div = document.createElement('div');
    div.innerText = i;
    if (i % 2 === 0) {
        div.style.backgroundColor = 'green';
    } else {
        if(isPrime(i)){
            div.style.backgroundColor = 'red';
        } else {
            div.style.backgroundColor = 'yellow';
        }
    }
    selDiv.appendChild(div);
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