/* File: app.js
* Author: Juhász Roland
* Copyright: 2022, Juhász Roland
* Group: Szoft I N 
* Date: 2022-02-28
* Github: https://github.com/Roleeygit/
* Licenc: GNU GPL
*/

var oldalIn = document.getElementById("oldal");
var szogIn = document.getElementById("szog");
var szamitgomb = document.getElementById("szamitgomb");
var eredmenyIn = document.getElementById("eredmeny");

szamitgomb.addEventListener("click", function() {
  
    if (anygaStr.match(minta)) {
        console.log("OK")
    } else {
        console.log("Nem ok.")
        alert("Hiba! Csak szám adható meg.")
        return;
    }

    let anyag = Number(anyagIn.value);
    console.log(anyag);
    let reszecskek = anyag * 6 * Math.pow(10, 23);
    console.log(reszecskek.toLocaleString());
    eredmenyIn.value = reszecskek.toLocaleString();
});