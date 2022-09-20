const currentImg = document.getElementById("current__img");
const images = document.querySelectorAll(".images img");

const opacity = 0.6;
// first img opacity
images[0].style.opacity = opacity

// images.forEach(img =>
//     img.addEventListener('click', (e) => currentImg.src = e.target.src) )

images.forEach(img => img.addEventListener("click", clickImage));

function clickImage(e) {

//   reset opacity
 images.forEach(img => (img.style.opacity = 1))
  currentImg.src = e.target.src;

  //   current img animation
  currentImg.classList.add('fade_in')

//   set time-out
  setTimeout(() => currentImg.classList.remove('fade_in'),600)

  // change opacity
  e.target.style.opacity = opacity;


}
