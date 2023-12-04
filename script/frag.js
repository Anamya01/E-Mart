




const tl = gsap.timeline();

tl.from(".left", {
    y: -100,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 1 ,
    autoAlpha:0, ease: "back",
})
tl.to(".left", {
    y: 0,
    duration: 3,
    ease: Power2.easeOut,
    stagger: 1,
    autoAlpha:1, ease: "back"
})
const t2 = gsap.timeline();

t2.from(".right", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 2 
})
t2.to(".right", {
    y: 0,
    opacity: 1,
    duration: 3,
    ease: Power2.easeOut,
    stagger:2
})

const tl3 = gsap.timeline();

tl3.from(".span", {
    x:-100,
    opacity:0,
    duration: 1,
    ease: Power2.easeOut,
    stagger: .2 
})
tl3.to(".span", {
    x:0,
    opacity:1,
    duration: 1,
    ease: Power2.easeOut,
    stagger: .2,
    ease: "back"
})