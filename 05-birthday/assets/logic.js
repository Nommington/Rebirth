var pics = [
    "assets/images/born.jpg",
    "assets/images/whoops.gif", 
    "assets/images/firstMet.jpg", 
    "assets/images/firstDate.jpg", 
    "assets/images/dance.jpg", 
    "assets/images/wedding.jpg", 
    "assets/images/ruby.jpg", 
    "assets/images/daisy.jpg",
    "assets/images/young.jpg",
    "assets/images/thirty.jpg",
    "assets/images/squad2.jpg",
    "assets/images/all.jpg",
    "assets/images/squad.jpg",
    "assets/images/ram.jpg",
    "assets/images/hbd.gif"
];
var subt = [
    "Today is the day you were born",
    "(Well, actually a couple days ago)",
    "And from the day we met",
    "to our first date",
    "to our first dance",
    "to the day we started this crazy thing",
    "to the day we made a family",
    "to the day our family was complete",
    "from childhood,",
    "to thirty,",
    "to umm...",
    "ya know...",
    "...whichever birthday this one is",
    "I love you for being goofy,",
    "for being HOT,",
    "and for being mine."
];
var page = 0;
var song = document.getElementById("hbd");
document.getElementById("go").onclick = function openCard() {
    
    var caption = subt[page];
    var img = pics[page];
    console.log(caption);
     //unhide pix
    document.getElementById("pic").src = img;
    document.getElementById("caption").innerHTML = caption;
    page++;
    if (page === 1) {
        document.getElementById("go").innerHTML = "Guess what ELSE?";
        document.getElementById("pix").style.display = "block";
        document.getElementById("go").style.fontSize = "40px";
        document.getElementById("go").style.cssFloat = "left";
        //play song
        song.play();
    }
};

