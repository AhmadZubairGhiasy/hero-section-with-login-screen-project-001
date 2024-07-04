
const signinshowbtn = document.getElementById("loginshow");
const loginscreen = document.getElementById("loginscreen");


 signinshowbtn.addEventListener("click",()=>{
    switch (loginscreen.style.display) {
        case "none":
            loginscreen.style.display = "flex"
            
            break;
    
        default:
            loginscreen.style.display = "none"
            break;
    }
 })
       
       
       
       
       
       
       const signinbtn = document.getElementById("signin");
        const signupbtn = document.getElementById("signup");
        const signindiv = document.getElementById("signindiv");
        const signupdiv = document.getElementById("signupdiv");
        
        
        signupbtn.addEventListener("click",()=>{
            signindiv.style.left ="-100%"
            signupdiv.style.right = "auto"
        })
        
        signinbtn.addEventListener("click",()=>{
            signindiv.style.left ="auto"
            signupdiv.style.right = "-100%"
        })
           