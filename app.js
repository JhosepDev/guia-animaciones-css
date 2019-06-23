const optionOne = document.getElementById('option1')
const optionTwo = document.getElementById('option2')
const optionThree = document.getElementById('option3')
const optionFour = document.getElementById('option4')
const optionFive = document.getElementById('option5')
const optionSix = document.getElementById('option6')
const optionSeven = document.getElementById('option7')
const optionEight = document.getElementById('option8')

optionOne.addEventListener('click', function () {

   optionOne.classList.add('active');

   optionTwo.classList.remove('active');
   optionThree.classList.remove('active');
   optionFour.classList.remove('active');
   optionFive.classList.remove('active');
   optionSix.classList.remove('active');
   optionSeven.classList.remove('active');
   optionEight.classList.remove('active');
})

optionTwo.addEventListener('click', function () {

   optionOne.classList.remove('active');

   optionTwo.classList.add('active');

   optionThree.classList.remove('active');
   optionFour.classList.remove('active');
   optionFive.classList.remove('active');
   optionSix.classList.remove('active');
   optionSeven.classList.remove('active');
   optionEight.classList.remove('active');
})

optionThree.addEventListener('click', function () {

   optionOne.classList.remove('active');
   optionTwo.classList.remove('active');

   optionThree.classList.add('active');

   optionFour.classList.remove('active');
   optionFive.classList.remove('active');
   optionSix.classList.remove('active');
   optionSeven.classList.remove('active');
   optionEight.classList.remove('active');
})

optionFour.addEventListener('click', function () {

   optionOne.classList.remove('active');
   optionTwo.classList.remove('active');
   optionThree.classList.remove('active');

   optionFour.classList.add('active');

   optionFive.classList.remove('active');
   optionSix.classList.remove('active');
   optionSeven.classList.remove('active');
   optionEight.classList.remove('active');
})

optionFive.addEventListener('click', function () {

   optionOne.classList.remove('active');
   optionTwo.classList.remove('active');
   optionThree.classList.remove('active');
   optionFour.classList.remove('active');

   optionFive.classList.add('active');

   optionSix.classList.remove('active');
   optionSeven.classList.remove('active');
   optionEight.classList.remove('active');
})

optionSix.addEventListener('click', function () {

   optionOne.classList.remove('active');
   optionTwo.classList.remove('active');
   optionThree.classList.remove('active');
   optionFour.classList.remove('active');
   optionFive.classList.remove('active');

   optionSix.classList.add('active');

   optionSeven.classList.remove('active');
   optionEight.classList.remove('active');
})


optionSeven.addEventListener('click', function () {

   optionOne.classList.remove('active');
   optionTwo.classList.remove('active');
   optionThree.classList.remove('active');
   optionFour.classList.remove('active');
   optionFive.classList.remove('active');
   optionSix.classList.remove('active');

   optionSeven.classList.add('active');

   optionEight.classList.remove('active');
})

optionEight.addEventListener('click', function () {

   optionOne.classList.remove('active');
   optionTwo.classList.remove('active');
   optionThree.classList.remove('active');
   optionFour.classList.remove('active');
   optionFive.classList.remove('active');
   optionSix.classList.remove('active');
   optionSeven.classList.remove('active');

   optionEight.classList.add('active');
})