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

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + " days : " + hours + " hours : " +
        minutes + " minutes : " + seconds + " seconds";

    // If the count down is over, write some text 
    if (interval < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

$(document).ready(function () {
    // Add smooth scrolling to all links
    $(".scroll").on('click', function (event) {

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

        } // End if
    });
});

// change active status of home and about button
$(document).ready(function () {
    $(window).scroll(function (event) {
        $("a").removeClass('active');
        var scroll = $(window).scrollTop();

        if (scroll < 830) {
            $("#tab-home").addClass('active');
        } else if (scroll < 1050) {
            $("#tab-contact").addClass('active');
        } else {
            $("#tab-about").addClass('active');
        }
    });
})