$('.categories-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });



$('.products-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});
