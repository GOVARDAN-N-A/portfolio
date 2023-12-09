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
        // call callback after timeout
        setTimeout(fnCallback, 5000);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 5000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  function show_content(param) {

    const sections = ["about", "resume", "portfolio", "contact"];

for (const section of sections) {
    const displayValue = section === param ? "block" : "none";
    document.getElementById(section).style.display = displayValue;
}

    // if (param == "about") {
    //     document.getElementById("about").style.display = "block";
    //     document.getElementById("resume").style.display = "none";
    //     document.getElementById("portfolio").style.display = "none";
    //     document.getElementById("contact").style.display = "none";
    // } else if (param == "resume") {
    //     document.getElementById("about").style.display = "none";
    //     document.getElementById("resume").style.display = "block";
    //     document.getElementById("portfolio").style.display = "none";
    //     document.getElementById("contact").style.display = "none";
    // } else if (param == "portfolio") {
    //     document.getElementById("about").style.display = "none";
    //     document.getElementById("resume").style.display = "none";
    //     document.getElementById("portfolio").style.display = "block";
    //     document.getElementById("contact").style.display = "none";
    // } else if (param == "contact") {
    //     document.getElementById("about").style.display = "none";
    //     document.getElementById("resume").style.display = "none";
    //     document.getElementById("portfolio").style.display = "none";
    //     document.getElementById("contact").style.display = "block";
    // }
    // var allArticles = document.querySelectorAll('.main-content article');
    // allArticles.forEach(function (article) {
    //     article.classList.remove('show');
    // });

    // // Show the selected article
    // var selectedArticle = document.getElementById(param);
    // if (selectedArticle) {
    //     selectedArticle.classList.add('show');
    // }
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
    