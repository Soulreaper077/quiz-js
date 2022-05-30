const username = document.getElementById("username")
const saveBtn = document.getElementById("saveBtn")
const endScore = document.getElementById("endScore")
const highScores = JSON.parse(localStorage.getItem("highScores")) 
const MAX_SCORE = 5


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

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign("/")
}