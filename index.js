function menuAnchor() {
  const menu = document.querySelectorAll(".menu");
  const speed = 400;

  menu.forEach((item, index) => {
    item.addEventListener("click", () => swiper.slideTo(index, speed));
  });
}

function removePagination() {
  if (window.screen.width >= 768) {
    const mobile_container = document.querySelectorAll("#for-mobile");
    const pagination = [
      mobile_container[0].querySelector(".swiper-pagination-v"),
      mobile_container[1].querySelector(".swiper-pagination-team"),
    ];
    const groups = [
      mobile_container[0].querySelectorAll(".cards"),
      mobile_container[1].querySelectorAll(".persons"),
    ];

    mobile_container.forEach((item) =>
      item.classList.remove("swiper-container-v")
    );
    pagination.forEach((bullets) => bullets.remove());
    groups.forEach((group) =>
      group.forEach((elem) => elem.classList.remove("swiper-slide"))
    );
  }
}

function init() {
  removePagination();
  menuAnchor();
}

init();
