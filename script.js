const mainPage = document.querySelector(".container");
const submitBtn = document.getElementById("submit-btn");
const thankYouPage = document.querySelector(".thank-you-page");
let rating = document.getElementById("rating");
let ratingBtn = document.querySelectorAll(".rating-btn button");

// submitBtn.addEventListener("click", () => {

//   thankYouPage.classList.remove("hidden");
//   mainPage.classList.add("hidden");
// });

// ratingBtn.forEach((rate) => {
//   rate.addEventListener("click", () => {
//     rating.innerHTML = rate.innerHTML;
//   });
// });

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    rating.textContent = e.currentTarget.textContent;
    if (e.currentTarget.textContent > 0 && e.currentTarget.textContent <= 5) {
      submitBtn.addEventListener("click", () => {
        thankYouPage.classList.remove("hidden");
        mainPage.classList.add("hidden");
      });
    }
  });
});
