document.addEventListener('DOMContentLoaded',function(event){
    var dataText = [ "Web Developer", "Software Engineer"];
    
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.getElementById("role").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 5000);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 5000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });

  function showContacts() {
    let showContact = document.getElementById('show_contact');
    let mainContent = document.getElementById('main-content');
    let profileCard = document.getElementById('profile-card');
    let contactList = document.getElementById("contact-list");
    let languageSection = document.getElementById("language");

    if (window.innerWidth >= 520 && window.innerWidth <= 920) {
        if (contactList.style.display === "block") {
            showContact.innerHTML = "<i class='bx bxs-chevron-down'></i>";
            contactList.style.display = "none";
            languageSection.style.display = "none";
            profileCard.style.minHeight = "35vh";
            mainContent.style.top = "40vh";
        }
       
        else {
            showContact.innerHTML = "<i class='bx bxs-chevron-up'></i>";
            contactList.style.display = "block";
            languageSection.style.display = "block";
            profileCard.style.minHeight = "80vh";
            mainContent.style.top = "90vh";
        }
    }
    else if(window.innerWidth <= 520){
      if (contactList.style.display === "block") {
        showContact.innerHTML = "<i class='bx bxs-chevron-down'></i>";
        contactList.style.display = "none";
        languageSection.style.display = "none";
        profileCard.style.minHeight = "20vh";
        mainContent.style.top = "40vh";
    }
   
    else {
        showContact.innerHTML = "<i class='bx bxs-chevron-up'></i>";
        contactList.style.display = "block";
        languageSection.style.display = "block";
        profileCard.style.minHeight = "80vh";
        mainContent.style.top = "90vh";
    }
    }
    else{
      profileCard.style.minHeight = "initial";
      mainContent.style.top = "initial";
    }
}

  function show_content(param) {

//     const sections = ["about", "resume", "portfolio", "contact"];

// for (const section of sections) {
//     const displayValue = section === param ? "block" : "none";
//     document.getElementById(section).style.display = displayValue;
// }

    if (param == "about") {
        document.getElementById("about").style.display = "block";
        document.getElementById("resume").style.display = "none";
        document.getElementById("portfolio").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (param == "resume") {
        document.getElementById("about").style.display = "none";
        document.getElementById("resume").style.display = "block";
        document.getElementById("portfolio").style.display = "none";
        document.getElementById("contact").style.display = "none";
    } else if (param == "portfolio") {
        document.getElementById("about").style.display = "none";
        document.getElementById("resume").style.display = "none";
        document.getElementById("portfolio").style.display = "block";
        document.getElementById("contact").style.display = "none";
    } else if (param == "contact") {
        document.getElementById("about").style.display = "none";
        document.getElementById("resume").style.display = "none";
        document.getElementById("portfolio").style.display = "none";
        document.getElementById("contact").style.display = "block";
    }
    var allArticles = document.querySelectorAll('.main-content article');
    allArticles.forEach(function (article) {
        article.classList.remove('show');
    });

    // Show the selected article
    var selectedArticle = document.getElementById(param);
    if (selectedArticle) {
        selectedArticle.classList.add('show');
    }
}

const eyeIcons = document.querySelectorAll('.eye-icon');
    const popups = document.querySelectorAll('.popup');

    eyeIcons.forEach((eyeIcon, index) => {
        eyeIcon.addEventListener('click', () => {
            popups[index].style.display = 'flex';
        });
    });

    function closePopup() {
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
    }

    function adjustFontSize(){
      const emailInput = document.getElementById('email')
      const emailWidth = emailInput.offsetWidth
      emailInput.style.fontSize = `${emailWidth / 21}px`

    }

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "e1215024govardan.n.a.cse@gmail.com",
    Password: "mpceevmldcvdsxcg",
    To: "e1215024govardancse@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name: " + document.getElementById("name").value +
      "<br> Email: " + document.getElementById("email").value +
      "<br> Message: " + document.getElementById("message").value
  }).then(
    message => {
      // const popup = document.getElementById("popup");
      // popup.style.display = "block";
      // Reset the form
      resetForm();
    }
  );
}

function openpopup(){
  // Show the popup
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  // Hide the popup
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

function resetForm() {
  // Reset the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
    


      // const allValid = Array.from(inputs).every(i => i.checkValidity() && i.value.trim() !== '');
      // submitButton.classList.toggle('active', allValid);
      // submitButton.disabled = !allValid;
      // submitButton.style.cursor = allValid ? 'pointer' : 'not-allowed';
    