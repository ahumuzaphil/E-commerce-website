const submitEl = document.querySelectorAll(".submit_el");
const countEl = document.querySelector(".count");
const amountEl = document.querySelectorAll(".amount_el");
const countAmount = document.querySelector("#count-amount")
console.log(countAmount)
//console.log(amountEl)
for(let i = 0;i < amountEl.length;i++){
  // console.log(amountEl[i])
}
let counter = 0

let count = 0
let cartnum = 0



for(let i=0;i < submitEl.length;i++){
    submitEl[i].addEventListener('click',cart)

    function cart(){ 
    counter = counter + 1
    countEl.innerHTML = counter
    console.log(amountEl[i].innerHTML)

      /*const ulEl = document.createElement("ul");
      ulEl.classList.add("ul_el");*/

      count = count + parseFloat(amountEl[i].innerHTML)
      countAmount.innerHTML = count
      console.log(count)
      
      
      cartnum = cartnum + 1

      submitEl[i].innerHTML = "Incart"+" "+ parseInt(cartnum)

      //submitEl[i].innerHTML = "Incart"+" "+ 0
      console.log(submitEl[i].innerHTML)
    }
}
console.log(ulEl.innerHTML)
