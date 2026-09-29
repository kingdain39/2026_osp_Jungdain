let balance = 0;

const selectionEl = document.getElementById("selection");
const currentEl = document.getElementById("current");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const icecream1 = document.getElementById("icecream1");
const icecream2 = document.getElementById("icecream2");
const icecream3 = document.getElementById("icecream3");

const icecreams = [
  { element: icecream1, name: "Haagen-dazs", price: 4500 },
  { element: icecream2, name: "World Cone", price: 2000 },
  { element: icecream3, name: "Together", price: 3000 }
];

function updateUI(){

    currentEl.textContent = balance + " won";

    icecreams.forEach(item=>{
        if(balance >= item.price){
            item.element.style.color = "blue";
        }
        else{
            item.element.style.color = "red";
        }
    })
  

}

function init(){
    selectionEl.textContent = "Select an ice cream.";
    updateUI();
}


function addMoney(amount){
 balance += amount;
 alert(amount + " won is added");
 updateUI();
}

function buyingIcecream(item){
    if(balance >= item.price){
        balance -= item.price;
        selectionEl.textContent = item.name;
        alert("You bought " + item.name + " for " + item.price + " won");
        updateUI();
    }else{
        alert("Not enough money");
    }
}

btn1.addEventListener("click", () => addMoney(2000));
btn2.addEventListener("click",()=> addMoney(1000));
btn3.addEventListener("click",() => addMoney(500));

icecreams.forEach(item => {
    item.element.addEventListener("click",() => buyingIcecream(item))
});

init();