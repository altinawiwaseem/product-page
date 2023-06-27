// Hero Carousel

const slider1 = document.querySelector("#glide1");

function slider() {
  if (slider1) {
    new Glide(slider1, {
      type: "carousel",
      startAt: 0,
      autoplay: 5000,
      gap: 0,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "linear",
      pagination: {
        el: ".glide__pagination",
      },
    }).mount();
  }
}

export { slider };
