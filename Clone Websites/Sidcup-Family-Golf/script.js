gsap.to("#nav", {
    backgroundColor: "black",
    height: "110px",
    duration: 1,
    /*delay:1,*/
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        //markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    }
})

gsap.to("#main", {
    backgroundColor: "black",


    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1

    }

})
var cur = document.querySelector("#cursor");
var cur_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (details) {
cur.style.left = details.x + "px";
cur.style.top = details.y + "px";
cur_blur.style.left = details.x - 150 + "px";
cur_blur.style.top = details.y - 150 + "px";
});

var h4All = document.querySelectorAll("#nav h4");
h4All.forEach(function (elem) {
elem.addEventListener("mouseenter", function () {
cur.style.scale = 3;
cur.style.border = "2px solid white";
cur.style.backgroundColor="transparent"
});

elem.addEventListener("mouseleave", function () {
cur.style.scale = 1;
cur.style.backgroundColor="rgb(188, 238, 238)";


});
});

