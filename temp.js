$('#1').on('click', function(){
	textBox.val('1')
})
$('#2').on('click', function(){
	textBox.val('2')
})
$('#3').on('click', function(){
	textBox.val('3')
})
$('#4').on('click', function(){
	textBox.val('4')
})
$('#5').on('click', function(){
	textBox.val('5')
})
$('#6').on('click', function(){
	textBox.val('6')
})
$('#7').on('click', function(){
	textBox.val('7')
})
$('#8').on('click', function(){
	textBox.val('8')
})
$('#9').on('click', function(){
	textBox.val('9')
})
$('#0').on('click', function(){
	textBox.val().append('0')
})

textBox.prepend('<span id="text-span">' + this.id + '</span>')


// Numbers Buttons
$('.btns').on('click', function(){
	sum += this.id;
	textDiv.html(sum)
});

// Submit button
submitBtn.on('click', function(){
	if(parseInt(textDiv.text()) === random){ // Val() only works with string
		console.log('yes')
	}
	if(parseInt(textDiv.text()) > random){
		console.log('less')
	}
	if(parseInt(textDiv.text()) < random){
		console.log('higher')
	}
	sum = '';
	textDiv.html(' ');
});
