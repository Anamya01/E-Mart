// document.addEventListener("DOMContentLoaded",  () => {
//     const counter3 = document.querySelector(".counter-3");
//     for (let index = 0; index < 2; index++) {
//       for (let j = 0; j < 10; j++) {
//         const div = document.createElement('div');
//         div.className = "num";
//         div.textContent = j;
//         counter3.appendChild(div);
//       }
//     }
//       const finalDiv = document.createElement("div");
//       finalDiv.className = "num";
//       finalDiv.textContent = "0"; 
//       counter3.appendChild(finalDiv);

//       function animate(counter, duration, delay = 0){
//         const numHeigth = counter.querySelector(".num").clientHieght;
//         const totalDis = (counter.querySelectorAll(".num").length-1) * numHeigth;

//         gsap.to(counter,{
//           y : -totalDis,
//           duration : duration,
//           delay : delay,
//           ease : "power2.inOut",
//         });
//       }
//       animate(counter3 , 5);
//       animate(document.querySelector(".counter-2"),6);
//       animate(document.querySelector(".counter-1"),2 , 4);
//   });



const tl3 = gsap.timeline();
tl3.from(".copoun", {
    x: -100,
    duration: 2,
    ease: Power2.easeOut,
    stagger: 1 ,
    autoAlpha:0, ease: "ease",
})
const tl = gsap.timeline();
tl.from(".hero-img", {
    x: -150,
    duration: 2,
    ease: Power2.easeOut,
    stagger: 1 ,
    autoAlpha:1, ease: "ease-out",
})
const t2 = gsap.timeline();
t2.from("p", {
    x: 100,
    duration: 1,
    ease: Power2.easeOut,
    stagger: .5 ,
    autoAlpha:0, ease: "ease",
})
const t = gsap.timeline();
t.from(".hero_div", {
    x: 250,
    duration: 2,
    ease: Power2.easeOut,
    stagger: 1 ,
    autoAlpha:0, ease: "ease",
})






