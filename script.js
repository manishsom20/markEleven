var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var btnCheck = document.querySelector("#check-btn");
var outputMsg = document.querySelector("#output-p");


function clickHandler () {
  hideMsg();
  var dobDigit = calcDob(dateOfBirth.value);
  var luckyNum = Number(luckyNumber.value);
  if(luckyNum>0){
    logic(dobDigit,luckyNum);
  } else {
    showMsg("Number should be greater than 0");
    outputMsg.style.color = "green";
  }
}

function calcDob(dob) {
  dob=dob.replaceAll('-','');
  console.log(dob);
  var sum = 0;
  for(var i=0;i<dob.length;i++){
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function hideMsg() {
  outputMsg.style.display = "none";
  outputMsg.style.color = "red";
}

function showMsg(msg) {
  outputMsg.style.display = "block";
  outputMsg.innerText = msg;
}

function logic(dob,luck) {
  if(dob%luck===0) {
    showMsg(`Congrats ${luck} is a lucky number`)
  } else {
    showMsg(`Sorry ${luck} is not a lucky number`)
  }
}

btnCheck.addEventListener("click", clickHandler);