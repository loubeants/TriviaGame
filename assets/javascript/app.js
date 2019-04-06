var panel = $('#quiz-area');

$(document).on('click', '#start', function (e) {
    start();  
});
;
$(document).on('click', '#done', function (e) {
    done();
});

var questions = [{
    question: "1 . What is Captain America's name?",
    answers: ["Steve Rogers", "Steve Jobs", "Tony Starks", "David Banner"],
    correctAnswer: "Steve Rogers"
}, {
    question: "2 . What is Dr.Bruce Banner's secret?",
    answers: ["He's Superman", "He's The Hulk", "He's a very happy guy", "He's not really a Doctor"],
    correctAnswer: "He's The Hulk"
}, {
    question: "3 .Who is Iron Man?",
    answers: ["T'Challa", "Michael Jordan", "Tony Stark", "lark Kent"],
    correctAnswer: "Tony Stark"
}, {
    question: "4 . What is Thor's place of origin?",
    answers: ["Krypton", "Brooklyn", "wakanda", "Asgard"],
    correctAnswer: "Asgard"
}, {
    question: "5 . What is Peter Parker's secret identity?",
    answers: ["He is Superman", "He is Batman", "He's The Black Panther", "He is Spiderman"],
    correctAnswer: "He is Spiderman"
}, ];

var correct = 0;
var incorrect = 0;
var counter = 60;

function countdown() {
    counter--;
    $('#counter-number').html(counter);

    if (counter === 0) {
        ('TIME UP');
        done();
    }
}

function start() {
    timer = setInterval(countdown(), 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
        panel.append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
            panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
        }
    }

    panel.append('<br><button id="done">Done</button></br>');
}

function done() {

    $.each($("input[name='question-0']:checked"), function () {
        if ($(this).val() == questions[0].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-1']:checked"), function () {
        if ($(this).val() == questions[1].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-2']:checked"), function () {
        if ($(this).val() == questions[2].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-3']:checked"), function () {
        if ($(this).val() == questions[3].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    $.each($("input[name='question-4']:checked"), function () {
        if ($(this).val() == questions[4].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        
        }
    });

    this.result();
}

function result() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3> Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3> Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3> Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
}