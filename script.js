let buttons = document.querySelectorAll('.box1');
let body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id = 'yellow';
    }
  });
});
//  ********** two way to solve this problem***********
// let grey = document.getElementById('grey');
// console.log(grey);
// let white = document.getElementById('white');
// console.log(white);
// let blue = document.getElementById('blue');
// let yellow = document.getElementById('yellow');

// grey.addEventListener('click', (e) => {
//   body.style.backgroundColor = 'grey';
// });
// white.addEventListener('click', (e) => {
//   body.style.backgroundColor = 'white';
// });
// blue.addEventListener('click', (e) => {
//   body.style.backgroundColor = 'blue';
// });
// yellow.addEventListener('click', (e) => {
//   body.style.backgroundColor = 'yellow';
// });
