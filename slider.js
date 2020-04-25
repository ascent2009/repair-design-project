const properties = [
    {
        city: 'Rostov-on-Don\nLCD admiral',
        area: '81 m2',
        time: '3.5 months',
        img: './img/image2.1.jpg',
    },
    {
        city: 'Sochi\nThieves',
        area: '105 m2',
        time: '4 months',
        img: './img/image2.jpg'
    },
    {
        city: 'Rostov-on-Don\nPatriotic',
        area: '93 m2',
        time: '3 months',
        img: './img/image3.jpg'
    }
]

const city = document.querySelector('.item-text_city');
const area = document.querySelector('.item-text_area');
const time = document.querySelector('.item-text_time');
const img = document.querySelector('.completed__image-item-pic');
const dotsBlock = document.querySelector(".dots");

for (let i = 0; i < properties.length; i++) {
    let dot = document.createElement("div");
    dot.className = "dot-item";
    if (i === 0) {
        dot.classList.add("active");
    }
    dotsBlock.append(dot);
}

const dots = document.querySelectorAll(".dot-item");
const links = document.querySelectorAll(".project-list__item");

dots.forEach((dot, index) => dot.addEventListener('click', () => { slider(index); }));
links.forEach((link, index) => link.addEventListener('click', () => { slider(index); }))

const genProperty = (index) => {
    city.innerText = properties[index].city;
    area.innerText = properties[index].area;
    time.innerText = properties[index].time;
    img.style.backgroundImage = `url(${properties[index].img})`;
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#808080";
        links[i].classList.remove("active");
    }
    links[index].classList.add("active");
    dots[index].style.backgroundColor = "#FFFFFF";
}

const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');
const mobBtnNext = document.querySelector(".arrow-circle-next");
const mobBtnPrev = document.querySelector(".arrow-circle-prev");

let currentIndex = 0

prev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = properties.length;
    }

    genProperty(currentIndex - 1);
    currentIndex -= 1;
})

next.addEventListener('click', () => {
    if (currentIndex == properties.length - 1) {
        currentIndex = -1;
    }

    genProperty(currentIndex + 1);
    currentIndex += 1;
})

mobBtnNext.addEventListener('click', () => {
    if (currentIndex == properties.length - 1) {
        currentIndex = -1;
    }

    genProperty(currentIndex + 1);
    currentIndex += 1;
})

mobBtnPrev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = properties.length;
    }

    genProperty(currentIndex - 1);
    currentIndex -= 1;
})

img.addEventListener('click', () => {
    if (currentIndex == properties.length - 1) {
        currentIndex = -1;
    }

    genProperty(currentIndex + 1);
    currentIndex += 1;
})


const slider = (index) => {
    genProperty(index);
    currentIndex = index;
}