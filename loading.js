

function loading() {
    $(".loading-screen-text").text("loading.");
    setTimeout( function() {
        $(".loading-screen-text").text("loading..");
        setTimeout( function() {
            $(".loading-screen-text").text("loading...");
            setTimeout( function () {
                loading();
            }, 300);
        }, 300);
    }, 300);
}

loading();

window.addEventListener("load", startup, false);
function startup() {
    $(".loading-screen").removeClass("loading-screen-on");
    setTimeout(function() {$(".loading-screen").css("display", "none") }, 500);
}