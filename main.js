// Global variables
var random =  Math.round(Math.random() * 10);
var buttonsDiv = $('#btns-section');
var main = $('#main');
var submitBtn = $('#submit');
var mainDiv = $('#section');
var clearBtn = $('#clear');
var textDiv = $('#text-div');
var startBtn = $('#start-btn');
var startDiv = $('#start-div');
var levelDiv = $('#level-div');
var easy = $('#easy');
var medium = $('#medium');
var hard = $('#hard');
var hint1 = $('#first-div');
var hint2 = $('#second-div');
var hintsDiv = $('#hint-div');
var correctAnswer = $('#correct-answer');
var leftDiv = $('#left');
var rightDiv = $('#right')
var para = $('#answer-para');
var innerDiv = $('#inner');
var hint = $('<h3></h3>');
var counter = 1;
var sum = '';



// Clear button
clearBtn.on('click', function(){
	sum = '';
	textDiv.html(' ');
})

// Start button
$('#start-btn').on('click', function(){
	startDiv.fadeOut(400);
	setTimeout(function(){
		levelDiv.fadeIn(400);
	}, 400)
	
});

// Levels Buttons
// Easy Level
easy.on('click', function(){
	hint.html('<h3>Try To guess The number <br> The Bounds Between 1 - 10</h3>')
	hint.prependTo(buttonsDiv);
	levelDiv.fadeOut(500);
	setTimeout(function(){
		buttonsDiv.fadeIn(500);	
		main.fadeIn(500);
		hintsDiv.fadeIn(600);
	}, 400)
	
	random =  Math.round(Math.random() * 10);
	innerDiv.html('hi')
	// Numbers Buttons
	$('.btns').on('click', function(){
		var e = event.keyCode;
		console.log(e)
		sum += this.id;
		if(sum.length === 4){
			alert('stop')
		}
		if(sum.length === 8){
			alert('stop again')
		}
		if(sum.length === 10){
			sum = ''
		}
		textDiv.html(sum)
	});

	// Submit button
	submitBtn.on('click', function(){
		if(parseInt(textDiv.text()) === random){ // Val() only works with string
			buttonsDiv.fadeOut(500);
			main.fadeOut(500);
			innerDiv.html('<img src="meme1.jpg" alt="meme1" /><br><h2>You Guessed The Right Answer in ' + counter + ' Times!</h2>')
			setTimeout(function(){
				correctAnswer.fadeIn(400)
			}, 400)

		}
		if(parseInt(textDiv.text()) > random){
			hint1.append('Less < <br>')
		}
		if(parseInt(textDiv.text()) < random){
			hint2.append('> Higher <br>')
		}
		counter++;
		sum = '';
		textDiv.html(' ');
	});
});

// Medium Level
medium.on('click', function(){
	hint.html('<h3>Try To guess The number <br> Bounds Between 1 - 50</h3>')
	hint.prependTo(buttonsDiv);
	levelDiv.fadeOut(500);
	setTimeout(function(){
		buttonsDiv.fadeIn(500);	
		main.fadeIn(500);
		hintsDiv.fadeIn(600);
	}, 400)
	random =  Math.round(Math.random() * 50);
	// Numbers Buttons
	$('.btns').on('click', function(){
		sum += this.id;
		textDiv.html(sum);
		if(sum.length === 4){
			alert('stop')
		}
		if(sum.length === 8){
			alert('stop again')
		}
		if(sum.length === 10){
			sum = ''
		}
	});

	// Submit button
	submitBtn.on('click', function(){
		if(parseInt(textDiv.text()) === random){ // Val() only works with string
			buttonsDiv.fadeOut(500);
			main.fadeOut(500);
			innerDiv.html('<img src="meme2.jpg" alt="meme1" /><br><h2>You Guessed The Right Answer in ' + counter + ' Times!</h2>')
			setTimeout(function(){
				correctAnswer.fadeIn(400)
			}, 400)
		}
		if(parseInt(textDiv.text()) > random){
			hint1.append('Less < <br>')
		}
		if(parseInt(textDiv.text()) < random){
			hint2.append('Higher < <br>')
		}
		counter++;
		sum = '';
		textDiv.html(' ');
	});
});

// Hard Level
hard.on('click', function(){
	hint.html('<h3>Try To guess The number <br> Bounds Between 1 - 100</h3>')
	hint.prependTo(buttonsDiv);
	levelDiv.fadeOut(500);
	setTimeout(function(){
		buttonsDiv.fadeIn(500);	
		main.fadeIn(500);
		hintsDiv.fadeIn(600);
	}, 400)
	random =  Math.round(Math.random() * 100);
	// Numbers Buttons
	$('.btns').on('click', function(){
		sum += this.id;
		textDiv.html(sum);
		if(sum.length === 4){
			alert('stop')
		}
		if(sum.length === 8){
			alert('stop again')
		}
		if(sum.length === 10){
			sum = ''
		}
	});

	// Submit button
	submitBtn.on('click', function(){
		if(parseInt(textDiv.text()) === random){ // Val() only works with string
			buttonsDiv.fadeOut(500);
			main.fadeOut(500);
			innerDiv.html('<img src="meme3.jpg" alt="meme3.png" /><br><h2>You Guessed The Right Answer in ' + counter + ' Times!</h2>')
			setTimeout(function(){
				correctAnswer.fadeIn(400)
			}, 400)
		}
		if(parseInt(textDiv.text()) > random){
			hint1.append('Less < <br>')
		}
		if(parseInt(textDiv.text()) < random){
			hint2.append('Higher < <br>')
		}
		counter++;
		sum = '';
		textDiv.html(' ');
	});
});