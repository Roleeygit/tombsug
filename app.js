/* File: app.js
* Author: Juhász Roland
* Copyright: 2022, Juhász Roland
* Group: Szoft I N 
* Date: 2022-02-28
* Github: https://github.com/Roleeygit/
* Licenc: GNU GPL
*/

var oldalIn = document.getElementById("oldal");
var alfaszogIn = document.getElementById("alfaszog");
var szamitgomb = document.getElementById("szamitgomb");
var eredmenyIn = document.getElementById("eredmeny");

szamitgomb.addEventListener("click", function() {
    let oldalStr = oldalIn.value;
    let alfaszogStr = alfaszogIn.value;
    let minta = /^[0-9]+$/;

    if (oldalStr.match(minta)) {
      console.log("ok")
    }else if(alfaszogStr.match(minta)) {
      console.log("ok")
    } else { 
      alert("Csak szám adható meg!");
      return;
    }

    let oldal = Number(oldalIn.value);
    console.log(oldal);
    let alfaszog = Number(alfaszogIn.value);
    console.log(alfaszog);
    let sugar = 1/2 * oldal * Math.sin(alfaszog * Math.PI /180);
    console.log(sugar.toLocaleString());
    eredmenyIn.value = sugar.toLocaleString();
});