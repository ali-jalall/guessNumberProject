var random =  Math.round(Math.random() * 10);
var submit = $('#submit');
var textBox = $('#section');
var clear = $('#clear')

$('.btns').on('click', function(){
	textBox.prepend('<span id="text-span">' + this.id + '</span>')
	submit.on('click', function(){
		if(parseInt($('#text-span').text()) === random){ // Val() only works with string
			console.log('hi')
		}
		if(parseInt($('#text-span').text()) > random){
			console.log('less')
		}
		if(parseInt($('#text-span').text()) < random){
			console.log('higher')
		}
	});
	clear.on('click', function(){
		$('#text-span').text('')
	})

})


// Function to check input text to see if matched with random

$('button').on('click', function(){
	
})