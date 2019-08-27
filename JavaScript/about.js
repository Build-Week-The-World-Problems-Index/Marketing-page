$(document).ready(function () {
    // //     $("slide-image:gt(0)").hide();

    // // setInterval(function() { 
    // //   $('.slide-image:first')
    // //     .fadeOut(1000)
    // //     .next()
    // //     .fadeIn(1000)
    // //     .end()
    // //     .appendTo('.slide-image');
    // // },  12000);


    // console.log("Hello, I am working")
    // });

    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slide-image");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
})