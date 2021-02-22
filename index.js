const menu = document.querySelectorAll('.menu');
const speed = 400;

menu.forEach((item,index) => {
    item.addEventListener('click', () => swiper.slideTo(index,speed));
});