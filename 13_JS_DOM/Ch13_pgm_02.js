// DOM: Mini Project

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// 1. The year color is changing every 1 second
// 2. The date and time background color is changing every on seconds
// 3. Completed challenge has background green
// 4. Ongoing challenge has background yellow
// 5. Coming challenges have background red



// <!-- index.html -->


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>JavaScript for Everyone:DOM</title>
//   </head>
//   <body>
//     <div class="wrapper">
//         <h1>JavaScript Challenges in 2024</h1>
//         <h2>30DaysOfJavaScript Challenge</h2>
//         <ul>
//             <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>
//         </ul>
//     </div>
//   </body>
// </html>


const yearElement = document.querySelector('h1');
const dateTimeElement = document.querySelector('h2');
const listItems = document.querySelectorAll('li');

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let color = `rgb(${r}, ${g}, ${b})`;
    
    return color
  }

function changeYearColor() {
  const newColor = randomColor();
  yearElement.style.color = newColor;
}
setInterval(changeYearColor, 1000);


function changeDateTimeBackground() {
  const newColor = randomColor();
  dateTimeElement.style.backgroundColor = newColor;
}
setInterval(changeDateTimeBackground, 1000);



listItems.forEach((item) =>{
  const text = item.textContent;
  if (text.includes('Done')) {
    item.style.backgroundColor = 'green';
  } else if (text.includes('Ongoing')) {
    item.style.backgroundColor = 'yellow';
  } else {
    item.style.backgroundColor = 'red';
  }
});