/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
// ------------------------------------------------------------------- */
const clickMe = document.getElementById("btn__element");
const counter = document.getElementById("btn__state");

let count = 0;

clickMe.addEventListener("click",()=>{
    count++;
    counter.innerHTML = count;
}) ;