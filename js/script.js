
var name, age;

console.log(name);
console.log(age);
//The different possible responses for the people under 18
var teenFortunes = [
'a secret admirer will soon send you a sign of affection.',
'you find beauty in ordinary things, do not lose this ability.',
'today is a lucky day for those who remain cheerful and optimistic.',
'the hard times will begin to fade, joy will take their place.'
];

var youngAdultsFortunes = [
'a warm smile is testimony of a generous nature.',
'pray for what you want, but work for the things you need.',
'trust your intuition. The universe is guiding your life.',
'when you speak honestly and openly, others truly listen to you.'
];

var adultsFortunes = [
 'those who have love, have wealth beyond measure.',
 'your many hidden talents will become obvious to those around you.',
 'grand adventures await those who are willing to turn the corner.',
 'a false step is made by standing still.'
];

var  seniorFortunes = [
 'only love lets us see normal things in an extraordinary way.',
 'be prepared to accept a wondrous opportunity in the days ahead!',
 'there is yet time enough for you to take a different path.',
 'the secret of getting ahead is getting started.'
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


// replacing the main image
function replaceImg(){
    document.getElementById('cookieImg').src="http://via.placeholder.com/200x300";
}

//this function is hiding the form area and displaying the fortune output
function showHide() {
    document.getElementById('yourFortuneSection').classList.toggle("display");
    document.getElementById('infoInputSection').classList.toggle('display');
    console.log('hello');
};







function othername() {
replaceImg();
showHide();
newLuckyNumbers();
  name = document.getElementById("nameInput").value;
  age = document.getElementById("ageInput").value;
       if(name == "" || age == ""){
        //alert("Enter a Valid Roll Number");
      return false;  }
      //return a message depending on the age they input
      else if(age < 0 && age < 18) {
        document.querySelector('#yourFortune').innerHTML= name + ', ' + teenFortunes[randomResponsesSelector] ;
        //console.log('your under 18');

      }else if(age >= 18 && age <=29){

        document.querySelector('#yourFortune').innerHTML= name + ', ' + youngAdultsFortunes[randomResponsesSelector] ;
        console.log('your in the prime of your life');

      }else if (age >= 30 && age <= 55){

        document.querySelector('#yourFortune').innerHTML= name + ', ' + adultsFortunes[randomResponsesSelector] ;
        console.log('your a season vet at life');

      }else {

        document.querySelector('#yourFortune').innerHTML=name + ', ' + seniorFortunes[randomResponsesSelector] ;
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
  //setTimeout(function(){ luckyNumber(loopNumber); } , 1000);
  luckyNumber(loopNumber);
  function luckyNumber(numb) {
  document.querySelector('#luckyNumber' + numb).innerHTML=Math.floor(Math.random()*98+1);
}
};
};


//setTimeout(function(){
//    return newLuckyNumbers()
//} , 1000);

//newLuckyNumbers();
//document.getElementById('newNumbers').addEventListener('click', newLuckyNumbers);
