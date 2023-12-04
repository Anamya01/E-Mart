function Active() {
  document.querySelector(".cart-container").classList.toggle("cart-open");
}
let f = document.querySelectorAll(".clc");
const items = [
  {
    link: '../images/modoc5/1.avif',
    title: "Sadrai Saras",
    amount: 2333
  },
  {
    link: "../images/modoc1/4.avif",
    title: "Sadrai Saras",
    amount: 2333
  },
  {
    link: "../images/modoc7/5.avif",
    title: "Sadrai Saras",
    amount: 2333
  },
  {
    link: "../images/modoc8/7.avif",
    title: "Sadrai Saras",
    amount: 2333
  },
  {
    link: "../images/modoc4/1.avif",
    title: "Sadrai Saras",
    amount: 2333
  },
];

for (let index = 0; index < f.length; index++) {
  f[index].addEventListener('click', () => {
    addItem(items[index]);
  })

}

function addItem(props) {


  let a = document.createElement('div');
  a.classList.add("item-list");
  let b = document.createElement('div');
  b.classList.add("img-list");
  let c = document.createElement('img');
  c.src = props.link;
  b.appendChild(c);
  a.appendChild(b);
  let d = document.createElement('p');
  d.textContent = "Sadrai Saras"
  d.classList.add('head-list');
  a.append(d);

  let e = document.createElement('span');
  e.textContent = "delete";
  e.classList.add("material-symbols-outlined");

  a.appendChild(e);
  setItem(props);
  let o = document.querySelector(".cart-container");
  o.appendChild(a);
  e.addEventListener('click', () => {
    e.parentElement.remove();
  })

};
function setItem(product) {
  console.log(product);
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if (existingEntries == null) existingEntries = [];
  existingEntries.push(product);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
}