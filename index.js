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
    groups[1].forEach((persons) => persons.classList.add("justify-persons"));
    // 한 줄로 정렬
  }
}

function addMargin() {
  if (window.screen.width < 768) {
    const mapBoxMargin = document
      .querySelector(".map-box")
      .getBoundingClientRect().left;
    const infoBox = document.querySelector(".info-box");

    infoBox.style.marginLeft = `${mapBoxMargin}px`;
  }
  if (window.screen.width >= 1024) {
    //pc버전
    const pcContainerMargin = document
      .querySelector(".pc-container")
      .getBoundingClientRect().left;
    const headerBarLogo = document.querySelector(".header-bar__logo");
    const headerBarBtn = document.querySelector(".header-bar__btn");

    headerBarLogo.style.marginLeft = `${pcContainerMargin}px`;
    headerBarBtn.style.marginRight = `${pcContainerMargin}px`;
  }
}

function clickStudyBtn() {
  const studyBtn = document.querySelector(".header-bar__btn");
  studyBtn.addEventListener("click", () => {
    alert("We are currently preparing the website.");
  });
}

function init() {
  removePagination();
  menuAnchor();
  addMargin();
  clickStudyBtn();
}

init();
