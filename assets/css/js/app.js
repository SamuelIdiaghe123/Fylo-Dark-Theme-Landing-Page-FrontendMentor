// function create(){
//     var counter = 0;

//     return{
//         increment: function () {
//             counter++;
//         },
//         print: function() {
//             console.log(counter);
//         },
//     };
// }

// var c = create();
// c.increment();
// c.print();

$(document).ready(function(){
    // console.log("It works")

    // const x =30;
    // const y = 50;

    // const add = x + y;
    // console.log(add);

    // if(x > y){
    //     console.log(`X ${x} is greater than Y ${y}`)
    // }else{
    //     console.log(`Y ${y} is greater than X ${x}`)
    // }


    // $('p').hide();
    $("h1").css("color", "red");

    $(".blue").css("color", "blue");
    $(".green").css("color", "green");

    $("ul li:first-child").hide();
    $("ul li:last-child").hide();
    // $("ul li:nth-child(2)").css({
    //     color: "red", 
    //     backgroundColo : "black",
    //     fontSize : "32px"});

    $("ul li:nth-child(even)").css("background", "#333");
    $("ul li:nth-child(odd)").css("background", "#d3d3d3");
    $("ul li:nth-child(4)").css("list-style", "none");

    // $(":button").hide();
    // $(":submit").hide()
    $("p[id = demo]").css({
        color: "yellow",
        backgroundColor : "#000",
        fontSize : '28px'
    })

})