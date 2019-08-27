$(document).ready(function () {

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
            setTimeout(showSlides, 10000); // Change image every 10 seconds
        }


    // })
    // function test() {
    //     $("img.slide-image").each(function (index) {
    //         $(this).hide();
    //         $(this).delay(3000 * index).fadeIn(6000).fadeOut();
    //     });
    // }
    // test();
})