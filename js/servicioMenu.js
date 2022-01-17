const $btnSerigrafia = document.querySelector("#Serigrafia");
const $btnImprenta = document.querySelector("#Imprenta");
const $btnAgencia_Publicidad = document.querySelector("#Agencia_Publicidad");
const $Serigrafia = document.querySelectorAll(".serigrafia");
const $Imprenta = document.querySelectorAll(".Imprenta");
const $Agencia_Publicidad = document.querySelectorAll(".Agencia_Publicidad");

$btnSerigrafia.onclick = function () {

    for (let i = 0; i < $Serigrafia.length; i++) {
        $Serigrafia[i].style.display = "flex";
    }
    for (let i = 0; i < $Imprenta.length; i++) {
        $Imprenta[i].style.display = "none";
    }
    for (let i = 0; i < $Agencia_Publicidad.length; i++) {
        $Agencia_Publicidad[i].style.display = "none";
    }

}
$btnImprenta.onclick = function () {
    console.log

    for (let i = 0; i < $Serigrafia.length; i++) {
        $Serigrafia[i].style.display = "none";
    }
    for (let i = 0; i < $Imprenta.length; i++) {
        $Imprenta[i].style.display = "flex";
    }
    for (let i = 0; i < $Agencia_Publicidad.length; i++) {
        $Agencia_Publicidad[i].style.display = "none";
    }

}
$btnAgencia_Publicidad.onclick = function () {

    for (let i = 0; i < $Serigrafia.length; i++) {
        $Serigrafia[i].style.display = "none";
    }
    for (let i = 0; i < $Imprenta.length; i++) {
        $Imprenta[i].style.display = "none";
    }
    for (let i = 0; i < $Agencia_Publicidad.length; i++) {
        $Agencia_Publicidad[i].style.display = "flex";
    }

}
