// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);
if (!document.querySelector("#cursor")) {
    console.error("Element with id 'cursor' not found.");
}




// _______|Cursor MOve|___________

var curs = document.querySelector("#cursor")

document.addEventListener("mousemove", (e) => {
    curs.style.left = e.clientX + 35+"px";
    curs.style.top = e.clientY +25 + "px";
});









gsap.from("#logo",{
    x:-50,
    opacity:0,
    duration:0.5,
    // ease: "Elastic.easeOut",

})


gsap.from("#navbar",{
    // opacity: 0,
    y:10,
    duration:1.5,
    delay:1.5,
   

})


gsap.from(" .card1  ",{
    // opacity:0,
    x: -10,
    duration:1.5,
    delay:0.6

})


// gsap.to("#navbar",{
//     duration: 1,
//     backgroundColor: "#000000",
//     position:"fixed",
//     ease: "power1.inOut",
//     scrollTrigger:{
// scroller:"body",
// trigger:"#navbar",
// start:"top 20%",
// end:"100%",
// yoyo:true,
// scrub:true,



//     }
// })



gsap.from("#page2",{
    opacity: 0,
    // y: 100,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        scroller: "body",
        trigger: "#page2",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
        // pin: true,
    }
})






gsap.from("#m-card1", {
    opacity: 0,
    y: -8,
    duration: 2,
    // delay: 0.6,
    // stagger: 0.1.5,
    rotateZ:-180,
    // rotateY:-180,
    ease: "circ.out"
,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page2",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
    
        // pin: true,
    }

})



gsap.from("#m-card2", {
    opacity: 0,
    y: -8,
    x:-50,
    duration: 2,
    delay: 0.6,
    // stagger: 4,
    rotateZ:180,
    rotateX:-180,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page2",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
        // pin: true,
    }
});



gsap.from("#m-card3", {
    opacity: 0,
    scale:0.5,
    y: -8,
    x:20,
    duration:2,
    delay: 0.6,
    // stagger: 0.1.5,
    // rotateZ:180,
    rotateY:180,
    // ease: "power3in.out" ,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page2",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
        // pin: true,
    }
});


gsap.from("#page3",{
    opacity: 0,
    // y: 100,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        scroller: "body",
        trigger: "#page3",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
        // pin: true,
    }
})

gsap.from("#page3 .page3-left",{
    opacity: 0,
    y: 100,
    x:-20,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
        scroller: "body",
        trigger: "#page3",
        // markers: true,
        start: "top 50%",
        end: "top 35%",
        scrub: 2,
    }
})



gsap.from("#page3 h1 , #page3 p",{
    opacity: 0,
    y: 100,
    duration: 2,
    ease: "power2.inOut",
    stagger:0.7,
    scrollTrigger: {
        scroller: "body",
        trigger: "#page3",
        // markers: true,
        start: "top 50%",
        end: "top 75%",
        scrub: 2,
    }
})


