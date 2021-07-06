$(document).ready(function () {

    //window scroll

    $(window).scroll(function () {
            let position = $(this).scrollTop();
            if (position >= 718) {
                $('.navbar').addClass('navbar-background')
                $('.navbar').addClass('fixed-top');
            } else {
                $('.navbar').removeClass('navbar-background');
                $('.navbar').removeClass('fixed-top');
            }
        })
        //smooth scroll
    $('.nav-item a, .header-link, #top-icons').click(function (link) {
        link.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);

    })


    //window scroll

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        console.log(position);
        if (position >= 718) {
            $('#back-to-top').addClass('scrollTop')

        } else {
            $('#back-to-top').removeClass('scrollTop');

        }
    })


    //ripples
    $("#header, .info").ripples({
        dropRadius: 25,
        perturbance: 0.01,
    });




    //magnefic popup
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
        },
        // other options
    });




    //scroll up button
    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };



});
