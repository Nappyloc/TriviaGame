
var wrongAnswers = 0;
var correctAnswers = 0;
var totalAnswers = 0;
var counter = 45;
var timer;
var gameQuestions = [
    {
        question: "Where is Geralt from?",
        choices: [
            "Rivia", "Winterfel", "Norvasgard"
        ],
        rightAnswer: "Rivia"
    },
    {
        question: "What do Witchers Hunt?",
        choices: [ "Boar", "Elves", "Monsters"
        ],
        rightAnswer: "Monsters"
    },
    {
        question: "What kind of surprise does Geralt recieve?",
        choices: [ "Cake", "Sword", "Child"
        ],
        rightAnswer: "Child"
    },
    {
        question: 'Who is Geralts love interest?',
        choices: [ "Yennefer", "Daisy", "Cerce"
        ],
        rightAnswer: "Yennefer"
    },

]





$( "#start" ).on( "click", function ()
{
    $( '#start' ).hide();
    loadQuestions();
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



// function loadGame ()
// {
//     for ( var i = 0; i < gameQuestions.length; i++ )
//         $( "#game" ).append( '<h3>' + gameQuestions[ i ].question + '</h3>' );
//     console.log( gameQuestions[ i ] );



// }

function displayResults ()
{
    var answered = $( '<p>' ).text( 'Total answered questions: ' + totalAnswers )
    var right = $( '<p>' ).text( 'Total Correct: ' + correctAnswers )
    var wrong = $( '<p>' ).text( 'Total Wrong: ' + wrongAnswers )

    $( '#game' ).append( answered, right, wrong );

}





function loadQuestions ()
{
    for ( var i = 0; i < gameQuestions.length; i++ )
    {


        $( "#game" ).append( '<h3>' + gameQuestions[ i ].question + '</h3>' );

        for ( var c = 0; c < gameQuestions[ i ].choices.length; c++ )
        {
            $( "#game" ).append( "<input type='radio' name=" + i + " value='" + gameQuestions[ i ].choices[ c ] + "'> " + gameQuestions[ i ].choices[ c ] );
            console.log( gameQuestions[ i ].choices );
        }

    }


}

function calculateScore ()
{
    for ( var i = 0; i < gameQuestions.length; i++ )
    {


        var picks = $( `[name="${ i }"]` )
        for ( var p = 0; p < picks.length; p++ )
        {
            if ( picks[ p ].checked === true )
            {
                if ( picks[ p ].value === gameQuestions[ i ].rightAnswer )
                    correctAnswers++;
            }
        }





    }
}
