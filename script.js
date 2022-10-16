var nav = $("#nav ul li");
var contents = $("#contents > div");

nav.click(function (e) {
	e.preventDefault();
	var target = $(this);
	var index = target.index();
	//alert(index);
	var section = contents.eq(index);
	var offset = section.offset().top;
	//alert(offset);
	$(".offset_top").text(offset);

	$("html,body").animate({ scrollTop: offset }, 600, "easeInOutExpo");
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	$(".scroll_top").text(wScroll);

	if (wScroll >= contents.eq(0).offset().top) {
		nav.removeClass("active");
		nav.eq(0).addClass("active");
	}
	if (wScroll >= contents.eq(1).offset().top) {
		nav.removeClass("active");
		nav.eq(1).addClass("active");
	}
	if (wScroll >= contents.eq(2).offset().top) {
		nav.removeClass("active");
		nav.eq(2).addClass("active");
	}
	if (wScroll >= contents.eq(3).offset().top) {
		nav.removeClass("active");
		nav.eq(3).addClass("active");
	}
	if (wScroll >= contents.eq(4).offset().top) {
		nav.removeClass("active");
		nav.eq(4).addClass("active");
	}
	if (wScroll >= contents.eq(5).offset().top) {
		nav.removeClass("active");
		nav.eq(5).addClass("active");
	}
	if (wScroll >= contents.eq(6).offset().top) {
		nav.removeClass("active");
		nav.eq(6).addClass("active");
	}
	if (wScroll >= contents.eq(7).offset().top) {
		nav.removeClass("active");
		nav.eq(7).addClass("active");
	}
	if (wScroll >= contents.eq(8).offset().top) {
		nav.removeClass("active");
		nav.eq(8).addClass("active");
	}


});

var isLast = function(word) {
  return $(word).next().length > 0 ? false : true;
}

var getNext = function(word) {
  return $(word).next();
}

var getVisible = function () {
  return document.getElementsByClassName('is-visible');
}

var getFirst =  function() {
  var node = $('.words-wrapper').children().first();
  return node;
}

var switchWords = function(current, next) {
  $(current).removeClass('is-visible').addClass('is-hidden');
  $(next).removeClass('is-hidden').addClass('is-visible');
}

var getStarted = function() {
  //We start by getting the visible element and its sibling
  var first = getVisible();
  var next = getNext(first);
  
  //If our element has a sibling, it's not the last of the list. We switch the classes
  if (next.length !== 0) {
     switchWords(first,next);
  } else {
    
    //The element is the last of the list. We remove the visible class of the current element
    $(first).removeClass('is-visible').addClass('is-hidden');
    
    //And we get the first element of the list, and we give it the visible class. And it starts again.
    var newEl = getFirst();
    $(newEl).removeClass('is-hidden').addClass('is-visible');
  }
  
}

var init = function() {
  setInterval(function() {getStarted()}, 2000);
}

init();


 
