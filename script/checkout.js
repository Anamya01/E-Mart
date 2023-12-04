
let total = 0;
let t = document.querySelector(".total_amount");
t.textContent = "₹" + total;
let prop = [{
    photo : '../images/modoc1/2.avif',
    title : "Actually",
    amount : 2899
},
{
    photo : '../images/product/3.avif',
    title : "Naina",
    amount : 3999
},
{
  photo : '../images/modoc4/3.avif',
  title : "Naina",
  amount : 1200
},
{
  photo : '../images/product7/2.avif',
  title : "Naina",
  amount : 999
},
{
  photo : '../images/product4/2.avif',
  title : "Naina",
  amount : 4299
},
]
let g = JSON.parse( localStorage.getItem("allEntries") );

checkout(prop);
function checkout(prop){
    prop.forEach(element => {
    let a =  document.createElement('div');
    a.classList.add("lii");
    let b = document.createElement('div');
    b.classList.add("imt");
    let c = document.createElement('img');
    c.src = element.photo;
    b.appendChild(c);
    a.appendChild(b);
    let adet =  document.createElement('div');
    adet.classList.add("details");
    let d = document.createElement('p');
    d.textContent = "Sadrai Saras"
    adet.append(d);
    
    let h = document.createElement('h6');
    h.textContent = "M";
  
    adet.appendChild(h);
  
    let k = document.createElement('h4');
    k.textContent= "₹" + element.amount;
  
    adet.appendChild(k);
  
    let e = document.createElement('button');
    let span = document.createElement('span');
    span.classList.add("material-symbols-outlined");
    span.textContent = "Remove";
   
    e.appendChild(span);
     
    adet.appendChild(e);
    
    a.appendChild(adet);
    console.log(a);
    let o = document.querySelector(".orderlist");
    o.appendChild(a);
    total = total + element.amount;
    updatetotal(total);
    e.addEventListener('click', () => {
      total = total - element.amount;
        console.log(total);
        updatetotal(total);
        e.parentElement.parentElement.remove();
      })
    });
  }
  console.log(total);
function updatetotal(){
  t.textContent = "₹" + total;
}