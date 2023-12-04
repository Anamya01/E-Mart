const t2 = gsap.timeline();
t2.from("p", {
    x: 50,
    duration: .5,
    ease: Power2.easeOut,
    stagger: .5 ,
    autoAlpha:0, ease: "ease",
})
const t1 = gsap.timeline();
t1.from("h2", {
    y: -150,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 2 ,
    autoAlpha:0, ease: "ease",
})
t1.from("hr", {
    x: -150,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 2 ,
    autoAlpha:0, ease: "ease",
})
const t = gsap.timeline();
t.from(".home_image_details", {
    y: -200,
    duration: 1,
    ease: Power2.easeOut,
    stagger: 2 ,
    autoAlpha:0, ease: "ease-in-out",
})