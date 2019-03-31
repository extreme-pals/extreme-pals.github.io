// Set the date we're counting down to
var countDownDate = new Date("March 30, 2019 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the interval between now and the count down date
    var interval = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((interval % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = days + " days : " + hours + " hours : " +
        minutes + " minutes : " + seconds + " seconds";

    // If the count down is over, write some text 
    if (interval < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "ENDED. WANT TO SEE IT AGAIN? SEND US AN EMAIL!";
    }
}, 1000);

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    // Add smooth scrolling to all links
    $("nav a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

// change active status navigation bar buttons
function onScroll(event) {
    var scroll = $(window).scrollTop();
    var breakpoint = scroll + $("nav").height();

    $("nav a").each(function() {
        var current = $(this);
        var href = $(current.attr("href"));

        if (href.position().top <= breakpoint
        && href.position().top + href.outerHeight(true) > breakpoint) {
            current.addClass("active");
        } else {
            current.removeClass("active");
        }
    })
}