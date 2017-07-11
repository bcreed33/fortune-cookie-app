
var name, age;

//The different possible responses for the fortune, depending the age input
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






// replacing the main image
function replaceImg(){
    document.getElementById('cookieImg').src="img/broken-fortune-cookie.jpg";
}

//this function is hiding the form area and displaying the fortune output
function showHideSection() {
    document.getElementById('yourFortuneSection').classList.toggle("display");
    document.getElementById('infoInputSection').classList.toggle('display');
    console.log('hello');
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
      var loopNumber = [i] ;
      luckyNumber(loopNumber);
      function luckyNumber(numb) {
          document.querySelector('#luckyNumber' + numb).innerHTML=Math.floor(Math.random()*98+1);
      };
     };
};




function runFortuneCookie() {

    var randomResponsesSelector= Math.floor(Math.random()*4);

    //Getting the user inputs and storing them in variables
    name = document.getElementById("nameInput").value;
    age = document.getElementById("ageInput").value;

        //if the name or the age field is null dont run anything
       if(name == "" || age == ""){
        //alert("Enter a Valid Roll Number");
      return false;  }
      //return a message depending on the age they input
      else if(age < 0 && age < 18) {
        document.querySelector('#yourFortune').innerHTML= name + ', ' + teenFortunes[randomResponsesSelector] ;
        //console.log('your under 18');
      }else if(age >= 18 && age <=29){
        document.querySelector('#yourFortune').innerHTML= name + ', ' + youngAdultsFortunes[randomResponsesSelector] ;
        //console.log('your in the prime of your life');
      }else if (age >= 30 && age <= 55){
        document.querySelector('#yourFortune').innerHTML= name + ', ' + adultsFortunes[randomResponsesSelector] ;
        //console.log('your a season vet at life');
      }else {
          document.querySelector('#yourFortune').innerHTML=name + ', ' + seniorFortunes[randomResponsesSelector] ;
          //console.log('its time to retire!');
      };
      //run the functions
      replaceImg();
      showHideSection();
      newLuckyNumbers();
     //show the reset button
     document.getElementById('reset').style.display='block';
};




//reset the lucky numbers
function resteLuckyNumbers(){
    for (var i = 1; i < 5; i++) {
      var loopNumber = [i] ;
      luckyNumber(loopNumber);
      function luckyNumber(numb) {
          document.querySelector('#luckyNumber' + numb).innerHTML='0';
      }
    };
};


//reseting the app
document.querySelector('#reset').addEventListener('click', function(){
    //run the function to reset the lucky numbers
    resteLuckyNumbers();
    //Show the input form again
    document.getElementById('yourFortuneSection').classList.remove("display");
    document.getElementById('infoInputSection').classList.add('display');
    //reset the main image
    document.getElementById('cookieImg').src="img/fortune-cookie.jpg";
    //reset the form
    document.querySelector('#form').reset();
    //Hide the reset button 1/2 second after its clicked
    setTimeout(function(){
        document.getElementById('reset').style.display='none';
    },500)
});
