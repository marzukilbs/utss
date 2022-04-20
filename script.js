window.addEventListener("scroll", scrollFunction)

function scrollFunction() {
    var reveal = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveal.length; ++i) {
        var h = window.innerHeight;
        var top = reveal[i].getBoundingClientRect().top;
        console.log(h)
        console.log(top)
            // console.log(h)
        var point = 150;
        if (top < h - point) {
            reveal[i].classList.add('active')
        } else {
            reveal[i].classList.remove('active')
        }
    }
}

window.onscroll = scrollFunction;