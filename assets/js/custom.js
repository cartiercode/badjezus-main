$(document).ready(function () {
    // $('.navbar-toggler').click(function () {
    //     $('.toggle-menu-icon').toggleClass('open');
    // })
    $(".nav-link").click(function () {
        if (!$(this).hasClass('active')) {
            $(".nav-link.active").removeClass("active");
            $(this).addClass("active");
        }
    });
    // Toggle Mobile Menu
    $(function () {
        $(".navbar-toggler").on("click", function (a) {
        $('.toggle-menu-icon').toggleClass('open');
        $("#navbar-right").toggleClass("show");
            // a.stopPropagation()
        });
        // $('.navbar-toggler').click(function () {
        //     $('.toggle-menu-icon').toggleClass('open');
        // })
        $(document).on("click", function (a) {
            if ($(a.target).is("#navbar-right") === false) {
                $("#navbar-right").removeClass("show");
                $('.toggle-menu-icon').removeClass('open');
            }
        });
    });
    $(function () {
        var pageScroll = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= pageScroll) {
                $('header').addClass('fixed');
            }
            else {
                $('header').removeClass('fixed');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    //Timer countdown
    const targetDate = new Date("2025-04-20T00:00:00").getTime();
    const countDownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance <= 0) {
            countDownElement.innerText = "We're live!";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countDownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); //Initial call...
});