    // alphabet choices
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //pool of bosses to be chosen at random 
var wordPool = ['Capra Demon', 'Nito', 'Gwyn Lord of Cinder', 'Ornstein and Smough', 'Seath the Scaleless', 'Yhorm the Giant', 'Aldrich Devourer of Gods' ];


document.onkeyup = function(event){

    

    //choose a bosss from the pool at random
    var randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    console.log(randomWord);
    var answerArray = [];
    
        for (var i = 0; i < randomWord.length; i++){
        answerArray[i] = "_";
        }
        
        var remainingLetters = randomWord.length;
}   


    //have random word appear as blanks- THEY DO IN THE CONSOLE!
// document.print = userGuess


    // log chosen incorrect letters in document/html
    //log chosen correct letters IN PLACE of blanks 

    //log choices left
    // log wins/losses

    //show image of boss after correct choices made









// for alphabet 