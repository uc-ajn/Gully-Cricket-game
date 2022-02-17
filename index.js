let score = {
    balls: 6,
    run: 0,
    runs: 0
}

localStorage.setItem("player1", JSON.stringify(score));
localStorage.setItem("player2", JSON.stringify(score));

let active = 0;

function getRun(playerNo) {
    let run = Math.floor((Math.random() * 6) + 1);
    if(playerNo == 1){
        document.getElementById("hit2").disabled = false;
        document.getElementById("hit1").disabled = true;
        document.getElementById("dot1").style.backgroundColor = "red";
        document.getElementById("dot2").style.backgroundColor = "green";
        document.getElementById("hit1").style.backgroundColor = "gray";
        document.getElementById("hit2").style.backgroundColor = "green";
    }
    else{
        document.getElementById("hit1").disabled = false;
        document.getElementById("hit2").disabled = true;
        document.getElementById("dot1").style.backgroundColor = "green";
        document.getElementById("dot2").style.backgroundColor = "red";
        document.getElementById("hit2").style.backgroundColor = "gray";
        document.getElementById("hit1").style.backgroundColor = "green";
    }
    let newScore1 = localStorage.getItem("player1");
    let score1 = JSON.parse(newScore1);
    let newScore2 = localStorage.getItem("player2");
    let score2 = JSON.parse(newScore2);
    if(active == 0){
        document.getElementById("balls1").innerHTML = score1.balls;
        document.getElementById("balls2").innerHTML = score2.balls;
    }
    if (playerNo == 1) {
        if (score1.balls > 0) {
            score1.run = run;
            score1.balls = score1.balls - 1;
            score1.runs = score1.runs + run;
            document.getElementById("run1").innerHTML = score1.run;
            document.getElementById("score1").innerHTML = score1.runs;
            document.getElementById("balls1").innerHTML = score1.balls;
            localStorage.setItem("player1", JSON.stringify(score1));
        }
    }
    else {
        if (score2.balls > 0) {
            score2.run = run;
            score2.balls = score2.balls - 1;
            score2.runs = score2.runs + run;
            document.getElementById("run2").innerHTML = score2.run;
            document.getElementById("score2").innerHTML = score2.runs;
            document.getElementById("balls2").innerHTML = score2.balls;
            localStorage.setItem("player2", JSON.stringify(score2));
        }
    }
    if(score1.balls == 0 && score2.balls == 0){
        if(score1.runs > score2.runs){
            document.getElementById("hit1").style.display= "none";
        document.getElementById("winner1").style.display= "block";
        }
        else {
            document.getElementById("hit2").style.display= "none";
        document.getElementById("winner2").style.display= "block";
        }
        
    }
}

function winner(){
   
}