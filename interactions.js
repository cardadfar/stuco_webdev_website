

/*-------------------COLOR--------------------*/

var colorWell;
var curColor;
var defaultColor;
if(sessionStorage.getItem("bg_color") != null) {
    defaultColor = sessionStorage.getItem("bg_color");
}
else {
    defaultColor = '#76b438'; 
}
curColor = defaultColor;


window.addEventListener("load", startup, false);
function startup() {
    $(':root').css("--purple", defaultColor);
    colorWell = document.querySelector("#colorWell");
    if(colorWell != null) {
        colorWell.value = defaultColor;
        colorWell.addEventListener("change", updateAll, false);
    }

    $(".tab").css("transition", "all 0.25s");

    var footer_hgt = $(".footer").position().top;
    var window_hgt = $(window).height();
    if(footer_hgt < window_hgt) {
        diff = window_hgt - footer_hgt;
        $(".footer").css("margin-top", diff);
    }

}
function updateAll(event) {
    curColor = event.target.value;
    $(':root').css("--purple", curColor);
    sessionStorage.setItem("bg_color", curColor);
}

function resetColor() {
    curColor = defaultColor;
    colorWell.value = curColor;
    $(':root').css("--purple", curColor);
    sessionStorage.setItem("bg_color", curColor);
}

/*-------------------NAV BAR------------------*/

$(".tab").hover(function() {
    var darken = DarkenColor(curColor, 20);
    $(this).css("background", darken);
}, function() {
    $(this).css("background", "unset");
})

$(".footer-comp").hover(function() {
    var darken = DarkenColor(curColor, 20);
    $(this).css("background", darken);
}, function() {
    $(this).css("background", "unset");
})

$("#overview").click(function() {
    window.location.href = 'index.html';
});

$("#calendar").click(function() {
    window.location.href = 'calendar.html';
});

$("#assignments").click(function() {
    window.location.href = 'assignments.html';
});

$("#files").click(function() {
    window.location.href = 'files.html';
});

$("#software").click(function() {
    window.location.href = 'software.html';
});

$("#resources").click(function() {
    window.location.href = 'resources.html';
});

$("#faq").click(function() {
    window.location.href = 'faq.html';
});

$("#memes").click(function() {
    window.location.href = 'memes.html';
});

/*-------------------FOOTER--------------------*/

$("#github-footer").click(function() {
    window.open('https://github.com/cardadfar/stuco-webdev-website', '_blank');
});

$("#w3-footer").click(function() {
    window.open('https://www.w3schools.com/', '_blank');
});

$("#syllabus-footer").click(function() {
    window.open('assets/files/syllabus.pdf', '_blank');
});

/*-------------------OVERVIEW--------------------*/

$("#syllabus").click(function() {
    window.open('assets/files/syllabus.pdf', '_blank');
});

/*-------------------ASSIGNMENTS------------------*/

$("#google-drive").click(function() {
    window.open('https://drive.google.com/drive/folders/1MxXb-ClOQePgm1Dph5djVzd84thkhZBZ?usp=sharing', '_blank');
});


$("#git").click(function() {
    window.open('https://github.com/', '_blank');
});


$("#git-pages").click(function() {
    window.open('https://pages.github.com/', '_blank');
});


$("#google-drive").click(function() {
    window.open('https://drive.google.com/drive/u/1/folders/12t-AGyYU2nVCGor-ucb1eVdE1uLBTMYh', '_blank');
});


/*-------------------POLLS------------------*/


$(".poll-02").click(function() {
    window.open('https://goo.gl/forms/rhz3CYY8OEoNeU782', '_blank');
});

$(".poll-03").click(function() {
    window.open('https://goo.gl/forms/JzJ0f8gLEeUHtNa22', '_blank');
});

$(".poll-04").click(function() {
    window.open('https://goo.gl/forms/UNrLcaJB4mKpOAqa2', '_blank');
});

$(".poll-05").click(function() {
    window.open('https://goo.gl/forms/US7Zz4IVCyanXeaI3', '_blank');
});

$(".poll-06").click(function() {
    window.open('https://goo.gl/forms/BfAPLhHVftZ6n7Is1', '_blank');
});

$(".poll-07").click(function() {
    window.open('https://goo.gl/forms/uy2RH7L5j603sdIL2', '_blank');
});

$(".poll-08").click(function() {
    window.open('https://goo.gl/forms/zLZg4oUol6tOkxfo2', '_blank');
});

$(".poll-09").click(function() {
    window.open('https://goo.gl/forms/BCqyussxXn0m47hr1', '_blank');
});

$(".poll-10").click(function() {
    window.open('https://goo.gl/forms/pqzilKgZGpIST2tg1', '_blank');
});

$(".poll-11").click(function() {
    window.open('https://goo.gl/forms/jngdmzoPm53Yczox1', '_blank');
});

$(".poll-12").click(function() {
    window.open('https://goo.gl/forms/FlebBG4j6ZODpGWd2', '_blank');
});

$(".poll-13").click(function() {
    window.open('https://goo.gl/forms/PsWLbWBQOwSzzJo02', '_blank');
});

$(".poll-14").click(function() {
    window.open('https://goo.gl/forms/tQXasftxXt2j4JvP2', '_blank');
});


/*-------------------FILES------------------*/

$("#syllabus").click(function() {
    window.open('assets/files/syllabus.pdf', '_blank');
});

$("#html-starter").click(function() {
    window.open('assets/files/html_starter.html', '_blank');
});

$("#nav-bar").click(function() {
    window.open('assets/files/nav_bar.html', '_blank');
});

$("#json-parsing").click(function() {
    window.open('assets/files/json_parsing.zip', '_blank');
});

$("#search-bar").click(function() {
    window.open('assets/files/search_bar.zip', '_blank');
});

$("#parallax").click(function() {
    window.open('assets/files/parallax.zip', '_blank');
});

$("#interactive-elements").click(function() {
    window.open('assets/files/interactive_elements.html', '_blank');
});

$("#week-01").click(function() {
    window.open('assets/lectures/BPW_Lecture_01.pdf', '_blank');
});

$("#week-02").click(function() {
    window.open('assets/lectures/BPW_Lecture_02.pptx', '_blank');
});

$("#week-03").click(function() {
    window.open('assets/lectures/BPW_Lecture_03.pptx', '_blank');
});

$("#week-04").click(function() {
    window.open('assets/lectures/BPW_Lecture_04.pptx', '_blank');
});

$("#week-05").click(function() {
    window.open('assets/lectures/BPW_Lecture_05.pptx', '_blank');
});

$("#week-06").click(function() {
    window.open('assets/lectures/BPW_Lecture_06.pptx', '_blank');
});

$("#week-07").click(function() {
    window.open('assets/lectures/BPW_Lecture_07.pptx', '_blank');
});

$("#week-08").click(function() {
    window.open('assets/lectures/BPW_Lecture_08.pptx', '_blank');
});

$("#week-09").click(function() {
    window.open('assets/lectures/BPW_Lecture_09.pptx', '_blank');
});

$("#week-10").click(function() {
    window.open('assets/lectures/BPW_Lecture_10.pptx', '_blank');
});

$("#week-11").click(function() {
    window.open('assets/lectures/BPW_Lecture_11.pptx', '_blank');
});

$("#week-12").click(function() {
    window.open('assets/lectures/BPW_Lecture_12.pptx', '_blank');
});

$("#week-13").click(function() {
    window.open('assets/lectures/BPW_Lecture_13.pptx', '_blank');
});

$("#week-14").click(function() {
    window.open('assets/lectures/BPW_Lecture_14.pptx', '_blank');
});


/*-------------------SOFTWARE------------------*/

$("#sublime-text").click(function() {
    window.open('https://www.sublimetext.com/', '_blank');
});

$("#jquery").click(function() {
    window.open('https://jquery.com/', '_blank');
});


/*-------------------FAQ------------------*/

$(".qa").click(function() {
	if($(this).children(".answer").hasClass("answer-click")) {
    	$(this).children(".answer").removeClass("answer-click");
    	if($(".answer-click").length == 0) {
			$(".close-all").removeClass("close-all-visible");
    	}
    } else {
    	$(this).children(".answer").addClass("answer-click");
    	$(".close-all").addClass("close-all-visible");    	
    }
});

$(".close-all").click(function() {
	$(this).removeClass("close-all-visible");
    $(".qa").children(".answer").removeClass("answer-click");
})









/*---------------------- FUNCTIONS -----------------------*/

function DarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}