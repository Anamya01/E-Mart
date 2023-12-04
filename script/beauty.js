const tl = gsap.timeline();

tl.from(".capsule", {
    y: -100,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 1 ,
    autoAlpha:0, ease: "ease",
})
tl.to(".capsule", {
    y: 0,
    duration: 3,
    ease: Power2.easeOut,
    stagger: 1,
    autoAlpha:1, ease: "ease"
})
const tl2 = gsap.timeline();
tl2.from(".capsule2", {
    y: -100,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 1 ,
    autoAlpha:0, ease: "ease",
})
tl2.to(".capsule2", {
    y: 0,
    duration: 3,
    ease: Power2.easeOut,
    stagger: 1,
    autoAlpha:1, ease: "ease"
})
const tl3 = gsap.timeline();
tl3.from(".capsule3", {
    y: -100,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 1 ,
    autoAlpha:0, ease: "ease",
})
tl3.to(".capsule3", {
    y: 0,
    duration: 3,
    ease: Power2.easeOut,
    stagger: 1,
    autoAlpha:1, ease: "ease"
})

