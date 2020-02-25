
var wrongAnswers = 0;
var correctAnswers = 0;
var totalAnswers = 0;
var counter = 45;
var timer;
var gameQuestions = [
    {
        question: "Where is Geralt from?",
        choices: {
            a: "Rivia",
            b: "Winterfel",
            C: "Norvasgard"
        },
        rightAnswer: "Rivia"
    },
    {
        question: "What do Witchers Hunt?",
        choices: {
            a: "Boar",
            b: "Elves",
            c: "Monsters"
        },
        rightAnswer: "Monsters"
    },
    {
        question: "What kind of surprise does Geralt recieve?",
        choices: {
            a: "Cake",
            b: "Sword",
            c: "Child"
        },
        rightAnswer: "Child"
    },
    {
        question: 'Who is Geralts love interest?',
        choices: {
            a: "Yennefer",
            b: "Daisy",
            c: "Cerce"
        },
        rightAnswer: "Yennefer"
    },

]





$( "#start" ).on( "click", function ()
{
    $( '#start' ).hide();
    loadGame();
    timer = setInterval( countDown, 1000 );
    countDown();

} )





function countDown ()
{
    counter--;
    $( '#timer' ).html( 'You have ' + counter + ' seconds left!' )
    if ( counter <= 0 )
    {
        timer = clearInterval()
        $( '#timer' ).html( 'Time is up!' )

    }
}



function loadGame ()
{
    for ( var i = 0; i < gameQuestions.length; i++ )
        $( "#game" ).append( '<h3>' + gameQuestions[ i ].question + '</h3>' );
    console.log( gameQuestions[ i ] );



}





// function loadQuestions ()
// {
//     for ( var i = 0; i < gameQuestions.length; i++ )
//         $( "#game" ).append( '<h3>' + gameQuestions[ i ].question + '</h3>' );
//     for ( var c = 0; c < gameQuestions[ c ].choices.length; c++ )
//         $( "#game" ).append( "<input type='radio' value='" + gameQuestions[ i ].choices[ c ] + "'> " + gameQuestions[ i ].choices[ c ] );
//     console.log( gameQuestions[ c ].choices );
// }
