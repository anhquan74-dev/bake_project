

var imageElements = document.querySelectorAll('.gallery-item');
var closeIcon = document.querySelector('.gallery__icon-close');
var prevIcon = document.querySelector('.prev-icon');
var nextIcon = document.querySelector('.next-icon');
var galleryElement = document.querySelector('.gallery-overlay');
var imageGallery = document.querySelector('.gallery__image img')

var currentIndex;

function showGallery() {
    if (currentIndex == 0) {
        prevIcon.style.display = 'none';
        nextIcon.style.display = 'block';

    } else if (currentIndex == imageElements.length - 1) {
        nextIcon.style.display = 'none';
        prevIcon.style.display = 'block';

    } else {
        prevIcon.style.display = 'block';
        nextIcon.style.display = 'block';
    }
    imageGallery.src = `./img/g${currentIndex+1}.jpg`
    console.log(imageGallery.src)

    galleryElement.classList.add("show");

}

imageElements.forEach(function (item, index) {
    item.addEventListener('click', function () {
        currentIndex = index;
        showGallery();
    })
})

closeIcon.addEventListener('click', function () {
    galleryElement.classList.remove("show");
})

prevIcon.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

nextIcon.addEventListener('click', function () {
    if (currentIndex < imageElements.length - 1) {
        currentIndex++;
        showGallery();
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode = 27) {
        galleryElement.classList.remove("show");
    }
})

var menu = document.querySelectorAll(".navbar li")
// var li = document.querySelector('.navbar li a')
// console.log(menu, li)
menu.forEach(function(tab, index){
    tab.onclick = function(){
        menu.forEach(function(tab, index){
                tab.childNodes[0].classList.remove('active')
        })
        tab.childNodes[0].classList.add('active')
    }
})