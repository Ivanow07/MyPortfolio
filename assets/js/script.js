'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Custom Scripts



// Cloudflare protection script
(function(){
  if (!document.body) return;
  var js = "window['__CF$cv$params']={r:'88e17c6d7a6a9b37',t:'MTcxNzQzNjYxMy4xNjIwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='cdn-cgi/challenge-platform/h/g/scripts/jsd/26ed7e9dda49/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";
  var _0xh = document.createElement('iframe');
  _0xh.height = 1;
  _0xh.width = 1;
  _0xh.style.position = 'absolute';
  _0xh.style.top = 0;
  _0xh.style.left = 0;
  _0xh.style.border = 'none';
  _0xh.style.visibility = 'hidden';
  document.body.appendChild(_0xh);
  function handler() {
    var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;
    if (_0xi) {
      var _0xj = _0xi.createElement('script');
      _0xj.innerHTML = js;
      _0xi.getElementsByTagName('head')[0].appendChild(_0xj);
    }
  }
  if (document.readyState !== 'loading') { handler(); }
  else if (window.addEventListener) { document.addEventListener('DOMContentLoaded', handler); }
  else {
    var prev = document.onreadystatechange || function () {};
    document.onreadystatechange = function (e) {
      prev(e);
      if (document.readyState !== 'loading') {
        document.onreadystatechange = prev;
        handler();
      }
    };
  }
})();

// Copy email and open mail client
function copyAndOpenEmail() {
  const email = 'ivanoweca@proton.me';
  // Create a temporary input to copy the email to clipboard
  const tempInput = document.createElement('input');
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Open the email client
  window.location.href = `mailto:${email}`;
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullname = event.target.fullname.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  const webhookURL = 'https://discord.com/api/webhooks/1247660915760042135/v9tmCbdQflYwM00vDlbnRASA8LXxylOlFyToLJycEONsIUS0sd3a66fZxPMd_Wy3Yq3N';

  const embed = {
    content: '<@951513329107619850>', // This will mention the user with the specified ID
    embeds: [{
      title: "New Contact Form Submission",
      color: 5814783, // Blue color
      fields: [
        { name: "Full Name", value: fullname, inline: true },
        { name: "Email", value: email, inline: true },
        { name: "Message", value: message }
      ],
      timestamp: new Date()
    }]
  };

  fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(embed)
  }).then(response => {
    if (response.ok) {
      const contactResponse = document.getElementById('contactResponse');
      contactResponse.textContent = 'Message sent successfully!';
      contactResponse.classList.add('show'); // Show the message
      setTimeout(() => {
        contactResponse.classList.remove('show'); // Hide the message after 5 seconds
      }, 5000);
      event.target.reset();
    } else {
      showError('Error sending message. Please try again later.');
    }
  }).catch(error => {
    showError('Error sending message. Please try again later.');
  });
});

function showError(message) {
  const contactResponse = document.getElementById('contactResponse');
  contactResponse.textContent = message;
  contactResponse.classList.add('show'); // Show the message
  setTimeout(() => {
    contactResponse.classList.remove('show'); // Hide the message after 5 seconds
  }, 5000);
}

// Social link click handler
document.querySelector('.social-link').addEventListener('click', function(event) {
  event.preventDefault();
  var appLink = document.createElement('a');
  appLink.href = 'discord://-/users/951513329107619850';
  appLink.click();

  setTimeout(function() {
    if (!document.hidden) {
      document.querySelector('.fallback-link').click();
    }
  }, 1000);
});
