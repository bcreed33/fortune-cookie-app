
var name, age;

console.log(name);
console.log(age);
//The different possible responses for the people under 18
var teenFortunes = [
'You are under 18',
'You are a minor',
'you cant buy cigs yet',
'you cant drink yet'
];

var youngAdultsFortunes = [
'You are above the age of 17',
'You are below the age of 30',
'you are a young adult',
'you are just starting to build your life'
];

var adultsFortunes = [
 'You are above the age of 29',
 'You are below the age of 56',
 'you are a season vet at this thing called life',
 'theres a good chance you have kids by now'
];

var  seniorFortunes = [
 'You are above the age of 55',
 'You are eligible for the senior discount at most places',
 'Good chance your kids are in college by now',
 'Good chance your a grandparent by now'
];

var randomResponsesSelector= Math.floor(Math.random()*4);

//launch the prompt boxs on  #button1 click
/*document.getElementById('button1').addEventListener('click', function(){

//name= prompt('whats your name?');
age= prompt('How old are you?');
 //console.log(name);
 console.log(age);

//The different possible responses for the people under 18
 var teenFortunes = [
'You are under 18',
'You are a minor',
'you cant buy cigs yet',
'you cant drink yet'
 ];

 var youngAdultsFortunes = [
'You are above the age of 17',
'You are below the age of 30',
'you are a young adult',
'you are just starting to build your life'
 ];

 var adultsFortunes = [
   'You are above the age of 29',
   'You are below the age of 56',
   'you are a season vet at this thing called life',
   'theres a good chance you have kids by now'
 ];

 var  seniorFortunes = [
   'You are above the age of 55',
   'You are eligible for the senior discount at most places',
   'Good chance your kids are in college by now',
   'Good chance your a grandparent by now'
 ];

 var randomResponsesSelector= Math.floor(Math.random()*4);

      //return a message depending on the age they input
      if(age < 18) {
        document.querySelector('#yourFortune').innerHTML= teenFortunes[randomResponsesSelector] ;
        //console.log('your under 18');

      }else if(age >= 18 && age <=29){

        document.querySelector('#yourFortune').innerHTML= youngAdultsFortunes[randomResponsesSelector] ;
        console.log('your in the prime of your life');

      }else if (age >= 30 && age <= 55){

        document.querySelector('#yourFortune').innerHTML= adultsFortunes[randomResponsesSelector] ;
        console.log('your a season vet at life');

      }else {

        document.querySelector('#yourFortune').innerHTML= seniorFortunes[randomResponsesSelector] ;
          console.log('its time to retire!');

      }

});*/

function othername() {
  name = document.getElementById("nameInput").value;
  age = document.getElementById("ageInput").value;
       if(name == "" || age == ""){
        //alert("Enter a Valid Roll Number");
      return false;  }
      //return a message depending on the age they input
      else if(age < 0 && age < 18) {
        document.querySelector('#yourFortune').innerHTML= name + ' ' + teenFortunes[randomResponsesSelector] ;
        //console.log('your under 18');

      }else if(age >= 18 && age <=29){

        document.querySelector('#yourFortune').innerHTML= name + ' ' + youngAdultsFortunes[randomResponsesSelector] ;
        console.log('your in the prime of your life');

      }else if (age >= 30 && age <= 55){

        document.querySelector('#yourFortune').innerHTML= name + ' ' + adultsFortunes[randomResponsesSelector] ;
        console.log('your a season vet at life');

      }else {

        document.querySelector('#yourFortune').innerHTML=name + ' ' + seniorFortunes[randomResponsesSelector] ;
          console.log('its time to retire!');

      };




};


//generate a set of lucky numbers////////////////////////////////////////////

//var luckyNumberArray= [0,0,0,0];
//luckyNumberArray[0] = Math.floor(Math.random()*100);
//luckyNumberArray[1] = Math.floor(Math.random()*100);
//luckyNumberArray[2] = Math.floor(Math.random()*100);
//luckyNumberArray[3] = Math.floor(Math.random()*100);
//document.querySelector('#luckyNumber1').innerHTML= luckyNumberArray[0];
//document.querySelector('#luckyNumber2').innerHTML= luckyNumberArray[1];
//document.querySelector('#luckyNumber3').innerHTML= luckyNumberArray[2];
//document.querySelector('#luckyNumber4').innerHTML= luckyNumberArray[3];
//console.log(luckyNumberArray);

function newLuckyNumbers(){
for (var i = 1; i < 5; i++) {
  loopNumber = [i] ;
  //console.log(loopNumber);
  luckyNumber(loopNumber);
  function luckyNumber(nub) {
  document.querySelector('#luckyNumber' + nub).innerHTML= Math.floor(Math.random()*98+1);
}
};
};

newLuckyNumbers();
document.getElementById('newNumbers').addEventListener('click', newLuckyNumbers);
