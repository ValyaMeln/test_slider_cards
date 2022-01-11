$(document).ready(function () {
    $('.slider').slick({
        arrows: true, //якщо нам потрібно щоб не було видно стрілок < >;
        dots: false, //включили кнопки під слайдером
        adaptiveHeight: true, // змінює висоту нашого слайдера
        slidesToShow: 1,  // ****вибираємо кількість картинок в одному слайді****
        slidesToScroll: 1,  // кількість картинок що буде прокручуватись за один раз
        speed: 1000, // швидкість прогортання слайдерів я вказала 1сек(1000мылысекунд), по замовчуваню = 300
        easing: 'ease', //тип відтворення анімації, лшнійний або спочатку швидше потім повільніше
        infinite: true, // сказали щоб слайдер не був безкінечним, якщо true - то безкінечний
        // initialSlide: 0, // з якого по номерації слайду почнеться слайжер
        autoplay: false, // слайди автоматично самі пргортаються, щоб виключити потрібно ввести false
        autoplaySpeed: 1500,//час автоматичного прогортання слайдера
        pauseOnFocus: true, // три властивості які при наведені зупиняють покрутку слайдера
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,// відключили на ПК при нажимані мишкою на слайд можливість прокрутки слайдера
        swipe: true, // на тач скрінах вимкнули управліннямишкою, тільки кнопки на екрані будуть перемикати слайдер
        touchThreshold: 10,  // розмір впливу на слайдер щоб його прокрутити   ~26хв відео
        touchMove: true, //відключаю вплив на слайдер місця прокрутки touchThreshold: 10,
        // waitForAnimate: true, // зробили так щоб при кліку слайдер перемикався, якщо буде true...
        centerMode: true,           //комбынація цих обох значень при тру, дає можливісь
        variableWidth: true,        //вирівняти по центру і залежить від ширини самої картинки
        // rows: 1,    // задаємо кількість рядів в сдайдері
        // slidesPerRow: 1,  // задаємо кількість колон в сдайдері
        // vertical: false,  //зробили вертикальний слайдер, але в стилях замість !!!! display: flex ставимо display: block;
        // verticalSwiping: true, //змінюємо штовхання мишкою з низу в верх
        // asNavFor: ".slider_big",  //зв'язуємо між собою слайдери
        // responsive: [
        //     {
        //         breakpoint: 768,  //ширина вікна при якому ми будемо вносити зміни
        //         settings: {
        //             slidesToShow: 2,
        //             // slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 480,  //ширина вікна при якому ми будемо вносити зміни
        //         settings: {
        //             slidesToShow: 1,
        //             // slidesToScroll: 1,
        //         }
        //     }
        // ],
        // mobileFirst: false, //min-wight=true max-wight=false
        // // appendArrows: $('.content'),  //створили якийсь контейнер з класом content ы перенесли туди стрылки управлыння
        // // appendDots: $('.content'),  //створили якийсь контейнер з класом content ы перенесли туди кругленькі кнопочки управлыння
    });
    // $('.slider2').slick({
    //     // arrows: true,
    //     adaptiveHeight: true,
    //     slidesToShow: 1.08,
    // });
    $('.slider2').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true
    });

});
