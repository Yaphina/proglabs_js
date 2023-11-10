let arrNoun = ["lunchroom", "snake", "sheat", "tiger", "celery", "dime", "vein", "fear", "market"]
let arrAdjective = ["tiny", "various", "vulgar", "lonely", "extra-small", "courageous", "difficult", "gleaming", "wonderful"]
let arrVerb = ["explode", "handle", "beg", "itch", "carry", "interest", "spill", "sprout", "post"]
let arrAdverb = ["needily", "vacantly", "reluctantly", "suspiciously", "fervently", "sleepily", "physically", "shakily", "occasionally"]

function GetRandomInt(max) {

    return Math.floor(Math.random() * max)
}

function AddText(string) {

    const logElem = document.querySelector(".NewSentence")

    logElem.innerHTML += `${string} <br>`
}

function GenerateLine() {

    sentence = "The " + arrAdjective[GetRandomInt(9)] + " " + arrNoun[GetRandomInt(9)]  + " " + arrVerb[GetRandomInt(9)]  + " " + arrAdverb[GetRandomInt(9)]

    AddText(sentence)
}
// Button that generate a random sentence when clicked
let button = document.getElementById("RandomLine");

button.addEventListener("click", GenerateLine);