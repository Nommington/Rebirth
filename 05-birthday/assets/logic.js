var pics = ["images/born.jpg", "images/firstMet.jpg", "images/firstDate.jpg", "images/dance.jpg", "images/wedding.jpg"];
var subt = [
    "Today is the day you were born",
    "And from the day we met",
    "to our first date",
    "to our first dance",
    "to the day we started this crazy thing",
    "to the day we made a family",
    "to the day our family was complete",
];

function openCard() {
    var page = 0;
    var caption = subt[page];
    console.log(caption);
    page++;
}

document.getElementById("go").onclick = openCard();