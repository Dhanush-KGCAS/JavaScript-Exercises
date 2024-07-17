// Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// 4. Loop through the nodeList and get the text content of each paragraph
// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

let p1 = document.querySelector('p');
console.log(p1.textContent)

let p2 = document.querySelector('#p2');
console.log(p2.textContent)

let p3 = document.querySelector('#p3');
console.log(p3.textContent)

let pall = document.querySelectorAll('p');
for(let i=0; i < pall.length; i++){
    console.log(pall[i].textContent = 'This is looped Over all p tags')
}

let p4 = document.querySelector('#p4');
p4.textContent = 'Fourth Paragraph'
console.log(p4.textContent)

p1.setAttribute('class', 'par1');
console.log(p1.className)

p2.classList.add('par2');
console.log(p2.className)

p3.className = 'par3';
console.log(p3.className);

p4.setAttribute('class', 'par4');
console.log(p4.className)
// Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// 3. Set text content, id and class to each paragraph

p1.style.backgroundColor = 'lightblue'
p2.style.backgroundColor = 'lightblue'
p3.style.backgroundColor = 'lightblue'
p4.style.backgroundColor = 'lightblue'

let pAll = document.querySelectorAll('p')
for(let i=0; i < pAll.length; i++){
    if(i % 2 === 0){
        pAll[i].style.color = 'green'
    } else {
        pAll[i].style.color = 'red'
    }
    pAll[i].className += ' NewClass'
    pAll[i].textContent += ' (This is newly looped)'
    pAll[i].setAttribute('id', 'p' + i)

}