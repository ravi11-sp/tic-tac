var player = 0;
var count = 0;
var win = 0;
var pc1 = 0;
var pc2 = 0;

function fun(i) {
    if (win == 0) {
        if (player == 0) {
            if (i.innerHTML == "X" || i.innerHTML == "O") {
                player = 0;
            } else {
                i.innerHTML = "X";
                count += 1;
                player = 1;
                countCheeck();
            }
        } else {
            if (i.innerHTML == "X" || i.innerHTML == "O") {
                player = 1;
            } else {
                i.innerHTML = "O";
                player = 0;
                count += 1;
                countCheeck();
            }
        }
    } else {
        //Do nothing..
    }
}

function clr() {
    document.querySelector(".g1").innerHTML = "";
    document.querySelector(".g2").innerHTML = "";
    document.querySelector(".g3").innerHTML = "";
    document.querySelector(".g4").innerHTML = "";
    document.querySelector(".g5").innerHTML = "";
    document.querySelector(".g6").innerHTML = "";
    document.querySelector(".g7").innerHTML = "";
    document.querySelector(".g8").innerHTML = "";
    document.querySelector(".g9").innerHTML = "";
    count = 0;
    player = 0;
    win = 0;
    document.querySelector(".won").innerHTML = "";
    popUpRemove();
}

function reset() {
    pc1 = 0;
    pc2 = 0;
    document.querySelector(".count1").innerHTML = 0;
    document.querySelector(".count2").innerHTML = 0;
    clr();
}

function cheeck() {
    tg1 = document.querySelector(".g1").innerHTML;
    tg2 = document.querySelector(".g2").innerHTML;
    tg3 = document.querySelector(".g3").innerHTML;
    tg4 = document.querySelector(".g4").innerHTML;
    tg5 = document.querySelector(".g5").innerHTML;
    tg6 = document.querySelector(".g6").innerHTML;
    tg7 = document.querySelector(".g7").innerHTML;
    tg8 = document.querySelector(".g8").innerHTML;
    tg9 = document.querySelector(".g9").innerHTML;

    if (tg1 == tg2 && tg2 == tg3 && tg1 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg1 == tg2 && tg2 == tg3 && tg1 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg4 == tg5 && tg5 == tg6 && tg4 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg4 == tg5 && tg5 == tg6 && tg4 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg7 == tg8 && tg8 == tg9 && tg7 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg7 == tg8 && tg8 == tg9 && tg7 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg1 == tg4 && tg4 == tg7 && tg1 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg1 == tg4 && tg4 == tg7 && tg1 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg2 == tg5 && tg5 == tg8 && tg2 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg2 == tg5 && tg5 == tg8 && tg2 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg3 == tg6 && tg6 == tg9 && tg3 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg3 == tg6 && tg6 == tg9 && tg3 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg3 == tg5 && tg5 == tg7 && tg3 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg3 == tg5 && tg5 == tg7 && tg3 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg1 == tg5 && tg5 == tg9 && tg1 == "X") {
        win = 1;
        pc1 += 1;
        let m = "Player1 wins..!";
        document.querySelector(".count1").innerHTML = pc1;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else if (tg1 == tg5 && tg5 == tg9 && tg1 == "O") {
        win = 1;
        pc2 += 1;
        let m = "Player2 wins..!";
        document.querySelector(".count2").innerHTML = pc2;
        document.querySelector(".won").innerHTML = m;
        popUpAdd(m);
    } else {
        // Do nothing.
    }

}

function countCheeck() {
    if (count == 9) {
        cheeck();
        if (win == 0) {
            let message = "Game Over..!";
            document.querySelector(".won").innerHTML = message;
            popUpAdd(message);
        }
    } else {
        cheeck();
    }
}

function popUpAdd(mess) {
    document.querySelector(".won").classList.add("won-pop");
    document.querySelector(".won-pop").innerHTML = mess;
}

function popUpRemove() {
    document.querySelector(".won").classList.remove("won-pop");
}