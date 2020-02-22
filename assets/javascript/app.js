
var gameQuestions = [
    {
        question: "Where is Geralt from?",
        answers: [ "Rivia", "Winterfel", "Norvasgard" ],
        rightAnswer: "Rivia"
    },
    {
        question: "What do Witchers Hunt?",
        answers: [ "Boar", "Elves", "Monsters" ],
        rightAnswer: "Monsters"
    },
    {
        question: "What kind of surprise does Geralt recieve?",
        answers: [ "Cake", "Sword", "Child" ],
        rightAnswer: "Child"
    },
    {
        question: 'Who is Geralts love interest?',
        answers: [ "Yennefer", "Daisy", "Cerce" ],
        rightAnswer: "Yennefer"
    },

]





$( "#start" ).on( "click", function ()
{
    $( '#start' ).hide();
    loadQuestions();
} )


function loadQuestions ()
{
    for ( var i = 0; i < gameQuestions.length; i++ )
        $( "#game" ).append( '<h3>' + gameQuestions[ i ].question + '</h3>' );
    for ( var c = 0; c < gameQuestions[ i ].answers.length; c++ )
        console.log( this )

}

