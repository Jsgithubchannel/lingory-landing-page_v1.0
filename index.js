function menuAnchor() {
  const menu = document.querySelectorAll(".menu");
  const speed = 400;

  menu.forEach((item, index) => {
    item.addEventListener("click", () => swiper.slideTo(index, speed));
  });
}

function removePagination() {
  if (window.screen.width >= 768) {
    const mobile_container = document.querySelector("#for-mobile");
    const pagination_v = mobile_container.querySelector(".swiper-pagination-v");
    const cards = mobile_container.querySelectorAll(".cards");

    mobile_container.classList.remove("swiper-container-v");
    pagination_v.remove();
    cards.forEach((item) => item.classList.remove("swiper-slide"));
  }
}

function init() {
  removePagination();
  menuAnchor();
}

init();
