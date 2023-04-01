const email = document.getElementById("email");
const button = document.getElementById("getStarted");

button.addEventListener("click", (e)=> {
    // prompt("hello world")
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        document.getElementById("error").style.display = "none";
        email.value = "";
        return (true)
        
    }

    document.getElementById("error").style.display = "inline"
    // alert("You have entered an invalid email address!")
    return (false)
})


