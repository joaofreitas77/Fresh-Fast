const slider = document.getElementById("slider");
const next = document.getElementById("btn-next");
const prev = document.getElementById("btn-prev");

next.onclick = () => {
    slider.scrollLeft += 200;
};

prev.onclick = () => {
    slider.scrollLeft -= 200;
};

setInterval(() => {
    slider.scrollLeft += 200;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth)
        slider.scrollLeft = 0;

}, 3000);
