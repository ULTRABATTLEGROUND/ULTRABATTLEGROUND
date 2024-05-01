let container = document.getElementsByClassName("container");
let gameInfo = document.getElementsByClassName("gameInfo");
let gameLoad = document.getElementsByClassName("gameLoading")
function openInfo() { 
        if (container.style.display !== "none") {
                container.style.display = "none";
                gameInfo.style.display = "block";
            } else {
                container.style.display = "block";
                gameInfo.style.display = "none";
            }   
}
function openCon() {
        if (container.style.display !== "none") {
                container.style.display = "none";
                gameLoad.style.display = "block";
            } else {
                container.style.display = "block";
                gameLoad.style.display = "none";
            }   
};
document.getElementById("about.button").addEventListener("click",openInfo);
document.getElementById("play.button").addEventListener("click",openCon);

        