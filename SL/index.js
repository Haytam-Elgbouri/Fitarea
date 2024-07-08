// function switchForm() {
//     var SelectedForm = document.querySelector('input[name="formSelect"]:checked').value;
  
//     if (SelectedForm === "Signup") {
  
//       document.getElementById("signupForm").style.display = "block";
//       document.getElementById("loginForm").style.display = "none";
      
      
//     } else if (SelectedForm === "Login") {
  
//       document.getElementById("signupForm").style.display = "none";
//       document.getElementById("loginForm").style.display = "block";
        
//     }
//   }

function SwitchForm() {
    var signupForm = document.getElementById("signupForm");
    var loginForm = document.getElementById("loginForm");
    var signupRadio = document.getElementById("signup");
    
    if (signupRadio.checked) {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        document.getElementById("text").innerHTML = "Create your account now";
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        document.getElementById("text").innerHTML = "Connect to your account now";
    }
}

    