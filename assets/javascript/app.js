
var wrongAnswers = 0;
var unanswered = 0;
var correctAnswers = 0;
var counter = 30;
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
    {
        question: 'Where is the island of the Mage?',
        choices: [ "Dead", "Aritouza", "The Seven"
        ],
        rightAnswer: "Aritouza"
    },
    {
        question: 'Who is Ciris Grandmother?',
        choices: [ "Queen Dragons", "Princess Freya", "Queen Calanthe"
        ],
        rightAnswer: "Queen Calanthe"
    },
    {
        question: 'Where is Yennefer from?',
        choices: [ "Aedirn", "Vengerberg", "Nexus"
        ],
        rightAnswer: "Vengerberg"
    },
    {
        question: 'Where did the battle take place?',
        choices: [ "Sodden Hill", "Prestonpass", "Collodin"
        ],
        rightAnswer: "Sodden Hill"
    },

]


// Start button function
$( "#start" ).on( "click", function ()
{
    $( '#start' ).hide();
    timer = setInterval( countDown, 1000 );
    loadQuestions();
    countDown();


} )


// Timer function
function countDown ()
{

    counter--;
    $( '#timer' ).html( 'You have ' + counter + ' seconds left!' )
    if ( counter <= 0 )
    {
        clearInterval( timer )
        $( '#timer' ).html( 'Time is up!' )
        displayResults()


    }


}


// function to load the game question and answers

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
    var butDiv = $( '<div id="buttonDiv">' )
    var submit = $( '<button>' ).text( 'submit' )
    submit.addClass( "done btn" );
    butDiv.append( submit )
    $( '#game' ).append( butDiv );
    $( ".done" ).on( 'click', function ()
    {
        clearInterval( timer )
        displayResults()

    } )


}

// Function to display the results

function displayResults ()
{
    calculateScore();
    $( '#timer' ).hide()

    var results = $( '<div id = "results">' )
    var right = $( '<p>' ).text( 'Total Correct: ' + correctAnswers )
    var wrong = $( '<p>' ).text( 'Total Wrong: ' + wrongAnswers )
    var undone = $( '<p>' ).text( 'Total Unanswered: ' + unanswered )
    var set = $( '<button>' ).text( 'Restart Game' );
    set.addClass( 'btn done' )
    results.append( right, wrong, undone, set );


    $( '#game' ).replaceWith( results );
    $( '#results' ).on( 'click', function () 
    {
        reset()
    } )

}






// Function to calculate the score

function calculateScore ()
{   // Loop through the questions
    for ( var i = 0; i < gameQuestions.length; i++ )
    {

        // Loop through the user choices
        var picks = $( `[name="${ i }"]` )
        for ( var p = 0; p < picks.length; p++ )
        {
            if ( picks[ p ].checked === true )
            {
                if ( picks[ p ].value === gameQuestions[ i ].rightAnswer )
                    correctAnswers++;
            }

            if ( picks[ p ].checked === true )
            {
                if ( picks[ p ].value !== gameQuestions[ i ].rightAnswer )
                    wrongAnswers++;
            }
        }
        var totalAnswered = wrongAnswers + correctAnswers
        unanswered = 8 - totalAnswered




    }

}

// Play again Function

function reset ()
{
    wrongAnswers = 0;
    correctAnswers = 0;
    unanswered = 0;
    counter = 30;

    timer = setInterval( countDown, 1000 );
    $( "#timer" ).show()
    var newGame = $( "<div id='game'>" )
    $( '#results' ).replaceWith( newGame );
    loadQuestions()

}







