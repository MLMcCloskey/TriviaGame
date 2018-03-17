var questions = [
    {question: "Which of the four is not a core ingredient in beer?",
    answers: [{a:"Cereal Grains", boolean: false}, {b:"Hops", boolean: false}, {c:"Coriander", boolean: true}, {d:"Yeast", boolean: false}]
} , {question: "Which of the four is not an ale?",
    answers: [{a:"Stout", boolean: false}, {b:"IPA", boolean: false}, {c:"Pilsner", boolean: true}, {d:"Tripel", boolean: false}]
} , {question: "Which type of acid is responsible for hops bitter flavor?", 
    answers: [{a:"Lactic Acid", boolean: false}, {b:"Acedic Acid", boolean: false}, {c:"Alpha Acids", boolean: true}, {d:"Butyric Acid", boolean: false}]
} , {question: "Which brewery is the oldest in Georgia?",
    answers: [{a:"Sweetwater", boolean: false}, {b:"Red Brick", boolean: true}, {c:"Monday Night", boolean: false}, {d:"Jekyll", boolean: false}]
} , {question: "What is the maximum ABV allowed in Georgia?",
answers: [{a:"5%", boolean: false}, {b:"10%", boolean: false}, {c:"14%", boolean: true}, {d:"40%", boolean: false}]
} , {question: "What does yeast consume to produce alcohol?",
    answers: [{a:"Sugars", boolean: true}, {b:"Hops", boolean: false}, {c:"CO2", boolean: false}, {d:"Water", boolean: false}]
} , {question: "What type of bacteria isn't used to produce sour ales?",
    answers: [{a:"Lactobacillus", boolean: false}, {b:"Pediococcus", boolean: false}, {c:"Brettanomyces", boolean: false}, {d:"Streptococcus", boolean: true}]
} , {question: "What type of sugar is yeast incapable of consuming?",
    answers: [{a:"Dextrose", boolean: false}, {b:"Lactose", boolean: true}, {c:"Glucose", boolean: false}, {d:"Fructose", boolean: false}]
} , {question: "What gives Guiness such a smoothe mouth-feel?",
    answers: [{a:"Chocolate", boolean: false}, {b:"Low Alcohol Content", boolean: false}, {c:"Lengthy Aging", boolean: false}, {d:"Nitrogen", boolean: true}]
} , {question: "When is a good time to drink a beer?",
    answers: [{a:"After completing your homework", boolean: true}, {b:"When you're with friends", boolean: true}, {c:"When it's hot outside", boolean: true}, {d:"Whenever you feel like it", boolean: true}]
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
        if (i < questions.length -1) {
        i+=1;
        } else {gameOver()};
        init ()
}

function gameOver(){
        alert("You got "+correct+" out of 10 correct. Pour yourself a beer and try again!");
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
        score()
    });

    $("#btnD").on("click", function(){
        j=3;
        score()
    });

}


game();