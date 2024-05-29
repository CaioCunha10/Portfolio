let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const closeModalSpan = modal.querySelector(".close");
  const sendMessageBtn = document.querySelector(".btn");

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  closeModalSpan.addEventListener("click", function () {
    closeModal();
  });

  sendMessageBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  modal.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - modal.getBoundingClientRect().left;
    offsetY = e.clientY - modal.getBoundingClientRect().top;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      modal.style.left = e.clientX - offsetX + "px";
      modal.style.top = e.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      modal.style.display = "block";

      setTimeout(function () {
        closeModal();
      }, 2000);
    });

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("reset", function () {
    closeModal();
  });
  function closeModal() {
    contactForm.reset();
    modal.style.transition = "opacity 0.3s ease";
    modal.style.opacity = 0;

    setTimeout(function () {
      modal.style.display = "none";
      modal.style.opacity = 1;
    }, 300);
  }
});

let phoneInput = document.querySelector("input[name='Phone']");
phoneInput.addEventListener("input", function () {
  let phone = phoneInput.value.replace(/\D/g, "");
  if (phone.length === 11) {
    phone = phone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (phone.length === 10) {
    phone = phone.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (phone.length === 9) {
    phone = phone.replace(/^(\d{5})(\d{4})/, "$1-$2");
  } else if (phone.length === 8) {
    phone = phone.replace(/^(\d{4})(\d{4})/, "$1-$2");
  }
  phoneInput.value = phone;
});
