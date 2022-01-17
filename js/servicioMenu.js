const $btnSerigrafia = document.querySelector(".btnSerigrafia");
const $itemSerigrafia = document.querySelectorAll(".serigrafia");

$btnSerigrafia.onclick = function () {
    console.log("vamos ok");
    console.log($itemSerigrafia);
    for (let i = 0; i < $itemSerigrafia.length; i++) {
        $itemSerigrafia[i].style.display = "none";
    }
}
