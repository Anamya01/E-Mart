

let ar = ["../images/modoc3/1.jpg", "../images/modoc3/2.webp", "../images/modoc3/3.webp", "../images/modoc3/4.jpg", "../images/modoc3/5.avif", "../images/modoc3/6.jpg"];

function change(props){
    let k  = document.querySelector(".proimg");
    k.src = ar[props];
    console.log(k.src);

}
function calc(){
    let e = document.querySelector('.coup').value;
    let b = document.querySelector('.price').innerText;
    if(b !== "₹3999"){
        window.alert("Discount Coupon is Already Applied");
    }
    else{
    if(e === "F200"){
    document.querySelector('.price').innerHTML = '₹3799';
    console.log(document.querySelector('.price').innerHTML)
    }
    else if(e === "F500"){
        document.querySelector('.price').innerHTML = '₹3499';
        console.log(document.querySelector('.price').innerHTML)
        }
    else{
        window.alert("Invalid Discount Coupon.");
    }    
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