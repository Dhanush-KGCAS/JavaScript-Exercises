// Generating the keyboard code code using even listener. 

// The image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_keycode_day_3.2.gif



document.body.addEventListener('keypress' ,(e)=>{
let keys = document.querySelector('#key')
let keysCode = document.querySelector('#keyCode')
    keys.innerHTML = `You Pressed ${e.key}`
    keysCode.classList.add('enabled') 
    keysCode.innerHTML = `${e.keyCode}`
})