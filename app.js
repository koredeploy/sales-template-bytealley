const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");
const paragraphs = document.querySelectorAll(".para");

// Make first FAQ active by default
minusButtons[0].classList.add("showminus");
paragraphs[0].classList.add("active");
plusButtons[0].classList.add("hideplus");

function setupToggle(index) {
  plusButtons[index].addEventListener("click", () => {
    // Hide all other active FAQs first (optional - if you want only one open at a time)
    plusButtons.forEach((btn, i) => {
      if (i !== index) {
        btn.classList.remove("hideplus");
        minusButtons[i].classList.remove("showminus");
        paragraphs[i].classList.remove("active");
      }
    });

    // Show clicked FAQ
    plusButtons[index].classList.add("hideplus");
    minusButtons[index].classList.add("showminus");
    paragraphs[index].classList.add("active");
  });

  minusButtons[index].addEventListener("click", () => {
    minusButtons[index].classList.remove("showminus");
    paragraphs[index].classList.remove("active");
    plusButtons[index].classList.remove("hideplus");
  });
}

// Set up event listeners for all elements
plusButtons.forEach((_, index) => setupToggle(index));

// Set the target date (e.g., 3 days from now)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 3); // 3 days from now

// Update the countdown every 1 second
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Time calculations
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result

  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  // If the countdown is over
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);