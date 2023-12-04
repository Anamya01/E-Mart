

let ar = ["../images/product6/1.avif", "../images/product6/2.avif", "../images/product6/5.avif", "../images/product6/3.avif", "../images/product6/4.avif", "../images/product6/5.avif"];

function change(props){
    let k  = document.querySelector(".proimg");
    k.src = ar[props];
    console.log(k.src);

}
function calc(){
    let e = document.querySelector('.coup').value;
    if(e === "F200"){
    document.querySelector('.price').innerHTML = '₹3799';
    console.log(document.querySelector('.price').innerHTML)
    }
    if(e === "F500"){
        document.querySelector('.price').innerHTML = '₹3499';
        console.log(document.querySelector('.price').innerHTML)
        }
    document.querySelector('.coup').value = "";
    console.log(e);
}
function color(prop){
    let yesNo = document.querySelectorAll(".sd");
    Array.from( yesNo ).forEach(function(element){
        element.classList.remove("smt");
    });

    document.querySelector("#" + prop).classList.add('smt');
}