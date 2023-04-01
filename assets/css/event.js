$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background", "#0f0")
    })

    $("input").blur(function(){
        $(this).css("background", "#fff")
    })

    $("input#firstName").keyup(function(e){
        // console.log(e)
        console.log(e.target.value);
    })

    $("#formUser").submit(function(e){
        e.preventDefault();  
        const firstName = $("#firstName").val();
        const lasName = $("#lasrName").val();
        const email = $("#email").val();
        const gender = $("#gender").val();

        const user = {
            firstName,
            lasName,
            email,
            gender
        }
    
        console.log(user)

    })

 
})

    