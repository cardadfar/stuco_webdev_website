

/*-------------------COLOR--------------------*/

var colorWell;
var curColor;
var defaultColor;
if(sessionStorage.getItem("bg_color") != null) {
    defaultColor = sessionStorage.getItem("bg_color");
}
else {
    defaultColor = '#5a2c63'; 
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
    curColor = "#5a2c63";
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
    window.open('https://github.com/cardadfar/stuco-animation-website', '_blank');
});

$("#drive-footer").click(function() {
    window.open('https://drive.google.com/drive/folders/1MxXb-ClOQePgm1Dph5djVzd84thkhZBZ?usp=sharing', '_blank');
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


$("#youtube").click(function() {
    window.open('https://www.youtube.com', '_blank');
});


$("#tumblr").click(function() {
    window.open('https://www.tumblr.com', '_blank');
});


$("#vimeo").click(function() {
    window.open('https://www.vimeo.com', '_blank');
});



/*-------------------FILES------------------*/

$("#syllabus").click(function() {
    window.open('assets/files/syllabus.pdf', '_blank');
});


$("#cartoon-walls").click(function() {
    window.open('assets/files/cartoon walls.zip', '_blank');
});


$("#city-vectors").click(function() {
    window.open('assets/files/city vectors.zip', '_blank');
});

$("#midterm-starter").click(function() {
    window.open('assets/files/midterm starter.zip', '_blank');
});


$("#storyboard-template").click(function() {
    window.open('assets/files/storyboard template.ai', '_blank');
});


$("#smiley-demo").click(function() {
    window.open('assets/files/smiley demo.fla', '_blank');
});


$("#smiley-demo-completed").click(function() {
    window.open('assets/files/smiley demo (completed).fla', '_blank');
});


/*-------------------SOFTWARE------------------*/

$("#after-effects").click(function() {
    window.open('https://www.adobe.com/products/aftereffects.html', '_blank');
});

$("#animate").click(function() {
    window.open('https://www.adobe.com/products/animate.html', '_blank');
});

$("#illustrator").click(function() {
    window.open('https://www.adobe.com/products/illustrator.html', '_blank');
});

$("#photoshop").click(function() {
    window.open('https://www.adobe.com/products/photoshop.html', '_blank');
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