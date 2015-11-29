var userChoice;
var compChoice;
var total =[];

var choose = function(){
  userChoice = prompt("Let's play game!\nROCK, PAPER, SCISSORS?");
  userChoice = userChoice.toUpperCase();
  check();
};

var compRandom = function(){
  compChoice = Math.random();
    if (compChoice < 0.34) {
      compChoice = "ROCK";
    }else if (compChoice < 0.67) {
      compChoice = "PAPER";
    }else {
      compChoice = "SCISSORS";
    }
};

var check = function(){
  if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {
    compRandom();
    compare(userChoice, compChoice);
  }else {
    alert("Choose from ROCK, PAPER, SCISSORS!");
    choose();
  }
};

var compare = function(user, comp){
  var result;
  if (user === comp) {
    result = "TIE"
  }else if (user === "ROCK") {
    //ROCK vs
    if (comp === "PAPER") {
      result = "LOOSE";
    }else{
      result = "WIN";
    }
  }else if (user === "PAPER") {
    //PAPER vs
    if (comp === "SCISSORS") {
      result = "LOOSE";
    }else{
      result = "WIN";
    }
  }else{
    //SCISSORS vs
    if (comp === "ROCK") {
      result = "LOOSE";
    }else{
      result = "WIN";
    }
  }
  alert("The result is " + result);

  var list = [user, comp, result];
  total.push(list);

  addResult(result);
};

// add list of resut
var addResult = function(result){
  var node = document.createElement("li");
  var result = result;
  var textnode = document.createTextNode(result);

  node.appendChild(textnode);
  document.getElementById('result').appendChild(node);
};

//show Details
var showDetail = function(){
  var re = [];
  for(i = 0; i < total.length; i++){
    re += i+1 + ". "
    for(j = 0; j < total[i].length; j++){
      re += total[i][j] + ": ";
    }
    re += "\n"
  }
  alert("you : computer : result\n" + re);
};
