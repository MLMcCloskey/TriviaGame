var questions = [
    {question: "Which of the four is not a core ingredient in beer?",
    answers: [{a:"Cereal Grains", boolean: false}, {b:"Hops", boolean: false}, {c:"Coriander", boolean: true}, {d:"Yeast", boolean: false}]
} , {question: "Which of the four is not an ale?",
    answers: [{a:"Stout", boolean: false}, {b:"IPA", boolean: false}, {c:"Pilsner", boolean: true}, {d:"Tripel", boolean: false}]
} , {question: "Which type of acid is responsible for hops bitter flavor?", 
    answers: [{a:"Lactic Acid", boolean: false}, {b:"Acedic Acid", boolean: false}, {c:"Alpha Acids", boolean: true}, {d:"Butyric Acid", boolean: false}]
}
]

var correct = 0;
var incorrect = 0;

var i = 0;
var j = 0;

function init(){
    $("#question").html(questions[i].question);
    $("#a").html(questions[i].answers[0].a);
    $("#b").html(questions[i].answers[1].b);
    $("#c").html(questions[i].answers[2].c);
    $("#d").html(questions[i].answers[3].d);
}

function score(){
    console.log(questions[i].answers[j].boolean);
        if (questions[i].answers[j].boolean === true){
            correct+=1;
        } else {incorrect+=1;};
        i+=1;
        init ()
}

function gameOver(){
        alert("You got "+correct+" out of 10 correct.");
        i = 0;
        correct = 0;
        incorrect = 0;
        init ();
}

function game (){
    init();

    $("#btnA").on("click", function(){
        j = 0;
        score()
    });

    $("#btnB").on("click", function(){
        j = 1;
        score()
    });

    $("#btnC").on("click", function(){
        j=2;
        if (i < questions.length){
        score()
        } else {gameOver()}
    });

    $("#btnD").on("click", function(){
        j=3;
        score()
    });
}

game()

// $("#a").append("Blah")