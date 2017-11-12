$('document').ready(function(){
	$('button').click(scramblePuzzle);
	puzzle('ul');
});


function scramblePuzzle() {
	var li = $('li');
    var j;
    for (var i = 0; i < li.length; i++) {
        j = Math.floor(Math.random() * li.length);
        $(li[i]).before($(li[j]));
    }
	$('h1').text('Project 1 Puzzle Enabled').css('background-color', '#66f');
	$('ul').sortable('enable');
};

function puzzle(sortItems){
    $(sortItems).sortable({
        placeholder: 'placeholder',
        cursor: 'move',
        start: function(event, ui){
            $('h1').text('Puzzle in progress...');
            $('h1').css('background-color', '#f00');
        },
        stop: function(event, ui){
            var puzzleArr = $(sortItems).sortable('toArray');
            if(puzzleArr[0] == 0 && puzzleArr[1] == 1 && puzzleArr[2] == 2 && puzzleArr[3] == 3 && puzzleArr[4] == 4 && puzzleArr[5] == 5 && puzzleArr[6] == 6 && puzzleArr[7] == 7) {
                $('h1').text('Correct!');
                $('h1').css('background-color', '#008000');
                $(sortItems).sortable({disabled: true});
            }
        }
    });
}