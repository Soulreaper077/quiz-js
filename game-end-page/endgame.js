const usersName = document.getElementById("usersName")
const saveBtn = document.getElementById("saveBtn")
const endScore = document.getElementById("endScore")
const egScore = localStorage.getItem("egScore")

endScore.innerText = egScore;

function localScore(e) {
    e.preventDefault(); 

}

