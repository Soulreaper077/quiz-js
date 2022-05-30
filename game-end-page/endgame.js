const username = document.querySelector("#username")
const saveBtn = document.querySelectorAll("#saveBtn")
const endScore = document.querySelectorAll("#endScore")
const highScores = JSON.parse(localStorage.getItem("highScores")) 
const MAX_SCORE = 5

endScore.innerText = urScore
username.addEventListener("keyup", () => {
    saveBtn = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: urScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score 
    })

    highScores.splice(5)

    localStorage.setitem("highScores", JSON.stringify(highScores))
    window.location.assign("/")
}