console.log("holis");

let celdas = document.querySelectorAll("td");


celdas.forEach(function(td) {
    td.addEventListener('click', function() {
        console.log("click");
    })
});


//get element fom the class .close

//go through

//add a click event 

let links = document.querySelectorAll(".close");

links.forEach(function(link) {
    link.addEventListener("click", function(ev) {
        ev.preventDefault();
        return false;
    })
})






let links = document.querySelectorAll(".close-me");

links.forEach(function(link) {
    link.addEventListener("click", function(ev) {

        let content = document.querySelectorAll(".content");
        //remove class 
        ev.preventDefault();
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //add class to get animation
        content.classList.add("animate__fadeInUp");
        content.classList.add("animated__animate");

        setTimeout(function() {
            location.href = "../index.html"
        }, 600);

        return false;
    })
})