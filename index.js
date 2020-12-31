
var first_layout = document.getElementsByClassName("first-layout");
var second_layout = document.getElementsByClassName("second-layout");
var search_window = document.getElementsByClassName("search-click");
var imageCards = document.getElementsByClassName("cards")[0].querySelectorAll(".fruit-cards");
var pos = 0;
var len = imageCards.length;

function circle1_click() {
	first_layout[0].style.display = "block";
	second_layout[0].style.display = "none";
}

function circle2_click() {	
	first_layout[0].style.display = "none";
	second_layout[0].style.display = "block";
}

function open_search(){
	search_window[0].style.display = "block";
}

function close_search() {
	search_window[0].style.display = "none";
}

function left_cards() {
	pos--;
	pos = (pos + len) % len;

	for (var i=0; i<imageCards.length;i++){
		imageCards[i].style.display = "none";
	}
	imageCards[pos].style.display = "block";
	imageCards[(pos+1+len)%len].style.display = "block";
	imageCards[(pos+2+len)%len].style.display = "block";
}

function right_cards() {
	pos++;
	pos = (pos + len) % len;

	for (var i=0; i<imageCards.length;i++){
		imageCards[i].style.display = "none";
	}
	imageCards[pos].style.display = "block";
	imageCards[(pos+1+len)%len].style.display = "block";
	imageCards[(pos+2+len)%len].style.display = "block";
}
