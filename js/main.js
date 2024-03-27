let arrow = document.getElementById("arrow");
let btn = document.getElementById("btn");

btn.addEventListener('mouseover', function() {
    arrow.style.opacity = 1;
    arrow.style.transform = "translateX(0)";
});

btn.addEventListener("mouseout", function() {
    arrow.style.opacity = 0;
    arrow.style.transform = "translateX(-20px)";
});

// Обработчик события прокрутки
window.addEventListener('scroll', function() {
    let element = document.querySelector('.lines_double');
    let elm = document.querySelector('.slide');
    let why_build = document.querySelector('._lines');
    let arrow_2 = document.getElementById('arrow_2');
    let arrow_3 = document.getElementById('arrow_3');
    let arrow_4 = document.getElementById('arrow_4');
    let position = element.getBoundingClientRect();
    let pos = elm.getBoundingClientRect();
    let prost = why_build.getBoundingClientRect();

    // Проверка, находится ли элемент в видимой области экрана
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('animate');
        arrow_2.style.opacity = 1;
        arrow_2.style.transform = "translateX(0)";// Добавляем класс для анимации
    }
    if(pos.top < window.innerHeight && pos.bottom >= 0) {
        arrow_3.style.opacity = 1;
        arrow_3.style.transform = "translateX(0)";
    }
    if(prost.top < window.innerHeight && prost.bottom >=0) {
        why_build.classList.add('lines_animate');
        arrow_4.style.opacity = 1;
        arrow_4.style.transform = "translateX(0)";
    }
});
