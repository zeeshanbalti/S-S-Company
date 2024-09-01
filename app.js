function navMenu () {
    let navBar = document.querySelector('.navbar-sticky')
    let scrollTopButton = document.querySelector('#scrollUp')


    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 120){
            navBar.classList.add('navbar-sticky-move-up')
        }else{
            navBar.classList.remove('navbar-sticky-move-up')
        }

        // ==== Apply Transition 

        if(scroll >= 250){
            navBar.classList.add('navbar-sticky-transitioned')
            // scrollTopButton.classList.add('scrollActive')
        }else{
            navBar.classList.remove('navbar-sticky-transitioned')
            // scrollTopButton.classList.remove('scrollActive')
        }

        // === Sticky

        if(scroll >= 500){
            navBar.classList.add('navbar-sticky-on')
        }else{
            navBar.classList.remove('navbar-sticky-on')
        }

    }
}
navMenu();

// === Counter area 

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
       let obj = document.getElementById(id),
       current = start,
       range = end - start ,
       increment = end > start ? 1 : -1 ,
       step = Math.abs(Math.floor(duration / range)),
       time = setInterval(() => {
        current += increment;
        obj.textContent =current;
        if(current == end){
            clearInterval(time)
        }
       }, step)

    }
    counter("counter1", 0 ,10 ,2000)
    counter("counter2", 110 ,20 ,3000)
    counter("counter3", 0 ,40 ,3000)
    counter("counter4", 0 ,10 ,2000)
});

// ==== App Screenshort =====

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper-container.app-screen", {
        effect: "coverflow",
         loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true, // Make pagination bullets clickable

        },
    });
});

  