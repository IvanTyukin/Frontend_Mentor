'use strict';
// Баг со слайдерами при изменении размеров окна
let left_btn = document.querySelector('.left-button'),
right_btn = document.querySelector('.right-button');
let sliderLine = document.querySelector('.slider-line');
let wrapperWidth = document.querySelector('.wrapper').clientWidth;

let count = 0;



window.addEventListener('resize', function() {
    wrapperWidth = document.querySelector('.wrapper').clientWidth;
    console.log(this.window.getComputedStyle(sliderLine).left);
    sliderLine.style.cssText += `left: ${-wrapperWidth * count}px`
})


left_btn.addEventListener('click', function () {
    count -= 1;

    console.log(count);
    
    // left = window.getComputedStyle(sliderLine).left
    // console.log(left);
    // if (left === '0px') {
    //     sliderLine.style.cssText += `left: ${-2 * wrapperWidth}px`
    // } else {
    //     sliderLine.style.cssText += `left: ${wrapperWidth + parseInt(left)}px`
    // }
    if ( count < 0 ) {
        count = 2;
     }

    sliderLine.style.cssText += `left: ${-wrapperWidth * (count)}px`
});

right_btn.addEventListener('click', function () {
    count += 1;

    console.log(count);

    if (count > 2) {
        count = 0
    }

    // left = window.getComputedStyle(sliderLine).left

    // if (left === `${-wrapperWidth * 2}px`) {
    //     sliderLine.style.cssText += `left: ${0}`
    // } else {
    //     sliderLine.style.cssText += `left: ${-wrapperWidth + parseInt(left)}px`
    // }

    sliderLine.style.cssText += `left: ${-wrapperWidth * (count)}px`
})