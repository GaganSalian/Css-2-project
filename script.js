// Tab functionality
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  const activeLink = event.currentTarget;
  activeLink.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Side menu functionality
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-220px";
}

// Google Sheets form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycby0XeWwdNl4NjwwoVZCGHMz4sOM-pVNTdQpXZiwfZumAAFldLkpMmm48AepISkL-9Wq/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
