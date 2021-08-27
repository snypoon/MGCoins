//Slider

const heroImages = [
  "media/hero-image-1.png",
  "https://via.placeholder.com/400x140.png/ffeed2?text=Image-2",
  "https://via.placeholder.com/400x140.png/ffeed2?text=Image-3",
  "https://via.placeholder.com/400x140.png/ffeed2?text=Image-4",
];
let currentHeroImageIndex = 0;
function onHeroGalleryScrollLeft() {
  const img = document.getElementById("hero-image");
  if (currentHeroImageIndex === 0) {
      currentHeroImageIndex = heroImages.length - 1;
  } else {
      currentHeroImageIndex -= 1;
  }
  img.src = heroImages[currentHeroImageIndex];
}
function onHeroGalleryScrollRight() {
  const img = document.getElementById("hero-image");
  if (currentHeroImageIndex === heroImages.length - 1) {
      currentHeroImageIndex = 0;
  } else {
      currentHeroImageIndex += 1;
  }
  img.src = heroImages[currentHeroImageIndex];
}

// Scroll

document.addEventListener("scroll", () => {
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const fab = document.getElementById("fab");
  if (window.scrollY > 300) {
      if (fab.classList.contains("no-display")) {
          fab.classList.remove("no-display");
      }
  } else {
      if (!fab.classList.contains("no-display")) {
          fab.classList.add("no-display");
      }
  }

})
