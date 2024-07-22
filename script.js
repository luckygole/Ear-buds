let seeMoreButton = document.querySelectorAll('.seemore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let btn = document.querySelector(".clickme")
let btnn = document.querySelector(".backme")
let privous = document.querySelector(".privous")
let morese = document.querySelector(".moresee")

btnn.onclick = function(){
    showSlider('backme');
}
btn.onclick = function(){
    showSlider('clickme');
}

const showSlider = (type) => {
   
    carousel.classList.remove('backme','clickme')
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'backme'){
        listHTML.appendChild(items[0]);
        console.log("photo change");
        carousel.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast])
        carousel.classList.add('prev')
    }
   
}
seeMoreButton.forEach(button =>{
    button.onclick = function(){
        carousel.classList.add('showdetail');
        privous.style.opacity=1;
        backme.style.opacity=0;
        clickme.style.opacity=0;
    }
});

privous.onclick = function(){
    carousel.classList.remove('showdetail');
    privous.style.opacity=0;
    backme.style.opacity=1;
    clickme.style.opacity=1;
}


